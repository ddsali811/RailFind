from flask import Flask, render_template, request, redirect, url_for, jsonify, flash
import json, os
from datetime import datetime

app = Flask(__name__)
app.json.ensure_ascii = False
app.secret_key = os.environ.get("SECRET_KEY", "railfind-dev-secret-2026")

# 民眾端前端讀取的 JSON 路徑（放在 data/ 資料夾）
DATA_FILE = os.environ.get(
    "RAILFIND_DATA_FILE",
    os.path.join(os.path.dirname(__file__), "data", "lost-items.json")
)

CATEGORIES = ["雨傘", "皮夾", "水壺", "包包", "耳機", "鑰匙", "衣物"]
COLORS     = ["黑色", "白色", "藍色", "灰色", "咖啡色", "米色", "銀色",
              "紅色", "透明", "黃色", "粉色", "綠色", "紫色", "金色"]
AGENCIES   = ["北捷", "台鐵", "高鐵", "桃捷"]
STATUSES   = ["待認領", "已聯繫", "已領回"]

EMOJI_MAP = {
    "雨傘": "☂️", "皮夾": "👛", "水壺": "🥤",
    "包包": "🎒", "耳機": "🎧", "鑰匙": "🔑", "衣物": "🧥"
}


# ── 資料存取 ──────────────────────────────────────────────

def load_data():
    if not os.path.exists(DATA_FILE):
        save_data([])
        return []
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def save_data(items):
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)

def next_id(items):
    """產生下一個 RF 編號，例如 RF023"""
    nums = []
    for item in items:
        try:
            nums.append(int(item["id"].replace("RF", "")))
        except Exception:
            pass
    return f"RF{(max(nums, default=0) + 1):03d}"


# ── 路由 ──────────────────────────────────────────────────

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/health")
def health():
    """供部署平台確認應用程式與資料檔可正常讀取。"""
    try:
        items = load_data()
        return jsonify({
            "ok": True,
            "service": "RailFind",
            "records": len(items)
        })
    except (OSError, json.JSONDecodeError) as error:
        return jsonify({
            "ok": False,
            "service": "RailFind",
            "error": str(error)
        }), 500


# 民眾端物品詳細資料頁
@app.route("/detail")
def detail():
    return render_template("detail.html")

def public_item(item):
    result = dict(item)

    image = result.get("image", "")
    if image:
        filename = os.path.basename(image)
        result["image"] = url_for(
            "static",
            filename=f"pic/{filename}"
        )

    return result


@app.route("/api/lost-items")
def api_lost_items():
    items = load_data()
    return jsonify([public_item(item) for item in items])


@app.route("/api/lost-items/<item_id>")
def api_lost_item(item_id):
    items = load_data()
    item = next(
        (item for item in items if item.get("id") == item_id),
        None
    )

    if item is None:
        return jsonify({
            "ok": False,
            "error": "找不到此物品"
        }), 404

    return jsonify(public_item(item))

# 遺失物列表
@app.route("/admin/items")
def lost_items():
    items = load_data()

    status_filter   = request.args.get("status", "")
    category_filter = request.args.get("category", "")
    keyword         = request.args.get("keyword", "")

    filtered = items
    if status_filter:
        filtered = [i for i in filtered if i.get("status") == status_filter]
    if category_filter:
        filtered = [i for i in filtered if i.get("category") == category_filter]
    if keyword:
        kw = keyword.lower()
        filtered = [i for i in filtered if
                    kw in i.get("name","").lower() or
                    kw in i.get("brand","").lower() or
                    kw in i.get("description","").lower() or
                    any(kw in f.lower() for f in i.get("features", []))]

    counts = {s: sum(1 for i in items if i.get("status") == s) for s in STATUSES}
    counts["total"] = len(items)

    return render_template("items.html",
        items=filtered, counts=counts,
        categories=CATEGORIES, statuses=STATUSES,
        status_filter=status_filter,
        category_filter=category_filter,
        keyword=keyword)


# 新增遺失物
@app.route("/admin/items/new", methods=["GET", "POST"])
def new_item():
    errors    = {}
    form_data = {}

    if request.method == "POST":
        form_data = request.form.to_dict()
        features_raw = form_data.get("features", "").strip()

        # 欄位檢查
        if not form_data.get("name", "").strip():
            errors["name"] = "物品名稱為必填"
        if not form_data.get("category", "").strip():
            errors["category"] = "類別為必填"
        if not form_data.get("agency", "").strip():
            errors["agency"] = "拾獲機構為必填"
        if not form_data.get("station", "").strip():
            errors["station"] = "拾獲站點為必填"
        if not form_data.get("foundDate", "").strip():
            errors["foundDate"] = "拾獲日期為必填"
        if not form_data.get("contact", "").strip():
            errors["contact"] = "聯絡電話為必填"

        if not errors:
            items    = load_data()
            category = form_data["category"]
            new = {
                "id":          next_id(items),
                "name":        form_data["name"].strip(),
                "category":    category,
                "color":       form_data.get("color", ""),
                "brand":       form_data.get("brand", "").strip() or "無品牌",
                "features":    [f.strip() for f in features_raw.split("、") if f.strip()],
                "agency":      form_data["agency"],
                "station":     form_data["station"].strip(),
                "foundDate":   form_data["foundDate"],
                "status":      "待認領",
                "contact":     form_data["contact"].strip(),
                "emoji":       EMOJI_MAP.get(category, "📦"),
                "description": form_data.get("description", "").strip(),
            }
            items.append(new)
            save_data(items)
            flash(f"✓ 已新增「{new['name']}」（{new['id']}）", "success")
            return redirect(url_for("lost_items"))

    return render_template("new_item.html",
        categories=CATEGORIES, colors=COLORS,
        agencies=AGENCIES, errors=errors, form_data=form_data)


# 修改遺失物
@app.route("/admin/items/<item_id>/edit", methods=["GET", "POST"])
def edit_item(item_id):
    items = load_data()
    item  = next((i for i in items if i["id"] == item_id), None)
    if not item:
        flash("找不到此物品", "error")
        return redirect(url_for("lost_items"))

    errors = {}

    if request.method == "POST":
        form_data    = request.form.to_dict()
        features_raw = form_data.get("features", "").strip()

        if not form_data.get("name", "").strip():
            errors["name"] = "物品名稱為必填"
        if not form_data.get("category", "").strip():
            errors["category"] = "類別為必填"
        if not form_data.get("agency", "").strip():
            errors["agency"] = "拾獲機構為必填"
        if not form_data.get("station", "").strip():
            errors["station"] = "拾獲站點為必填"
        if not form_data.get("foundDate", "").strip():
            errors["foundDate"] = "拾獲日期為必填"
        if not form_data.get("contact", "").strip():
            errors["contact"] = "聯絡電話為必填"

        if not errors:
            category      = form_data["category"]
            item["name"]        = form_data["name"].strip()
            item["category"]    = category
            item["color"]       = form_data.get("color", "")
            item["brand"]       = form_data.get("brand", "").strip() or "無品牌"
            item["features"]    = [f.strip() for f in features_raw.split("、") if f.strip()]
            item["agency"]      = form_data["agency"]
            item["station"]     = form_data["station"].strip()
            item["foundDate"]   = form_data["foundDate"]
            item["contact"]     = form_data["contact"].strip()
            item["emoji"]       = EMOJI_MAP.get(category, item.get("emoji", "📦"))
            item["description"] = form_data.get("description", "").strip()
            save_data(items)
            flash(f"✓ 已更新「{item['name']}」", "success")
            return redirect(url_for("lost_items"))

        form_data_out = request.form.to_dict()
    else:
        form_data_out = {
            **item,
            "features": "、".join(item.get("features", []))
        }

    return render_template("edit_item.html",
        item=item, categories=CATEGORIES, colors=COLORS,
        agencies=AGENCIES, statuses=STATUSES,
        errors=errors, form_data=form_data_out)


# 狀態更新（AJAX）
@app.route("/admin/items/<item_id>/status", methods=["POST"])
def update_status(item_id):
    items  = load_data()
    item   = next((i for i in items if i["id"] == item_id), None)
    if not item:
        return jsonify({"ok": False, "error": "Not found"}), 404

    new_status = request.json.get("status")
    if new_status not in STATUSES:
        return jsonify({"ok": False, "error": "Invalid status"}), 400

    item["status"] = new_status
    save_data(items)
    return jsonify({"ok": True, "status": new_status})


# 刪除
@app.route("/admin/items/<item_id>/delete", methods=["POST"])
def delete_item(item_id):
    items = load_data()
    item  = next((i for i in items if i["id"] == item_id), None)
    if item:
        save_data([i for i in items if i["id"] != item_id])
        flash(f"已刪除「{item['name']}」", "info")
    return redirect(url_for("lost_items"))


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "5050"))
    debug = os.environ.get("FLASK_DEBUG") == "1"
    app.run(host="0.0.0.0", port=port, debug=debug)
