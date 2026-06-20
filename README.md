# RailFind

鐵道遺失物跨站整合查詢平台（2026軟體開發專案管理期末MVP）。

RailFind提供民眾端遺失物搜尋與機構端管理後台。站務人員在後台新增或更新物品後，民眾端會透過同一份資料與Flask API取得最新結果。

## 目前完成狀態

已完成：

- 民眾端首頁、搜尋、篩選及詳細資料。
- 規則式相似度排序。
- Flask全部及單筆遺失物API。
- 後台遺失物列表、搜尋及篩選。
- 後台新增、修改及狀態更新。
- 必填欄位驗證。
- 前後台共用資料與即時同步。
- 既有資料圖片顯示與新資料圖示備援。
- API、民眾端、後台及端到端整合測試。

第二期功能：

- Google Vision API圖片辨識。
- 後台圖片上傳。
- Email主動通知。
- 使用者登入與角色權限。
- 正式串接各鐵道機構資料。
- SQLite／PostgreSQL及商用部署。

## 技術架構

| 層級 | 技術 |
|---|---|
| 後端 | Python、Flask 3.1.3 |
| 模板 | Jinja2、HTML |
| 前端 | CSS、原生JavaScript |
| 資料 | UTF-8 JSON |
| 圖片 | Flask `static/pic` |
| API | REST風格JSON API |

目前MVP使用`data/lost-items.json`作為共用資料來源，不是正式關聯式資料庫。選擇JSON是為了在期末時限內降低環境與部署風險。

## 專案結構

```text
RailFind/
├── app.py                      # Flask路由、API及後台資料操作
├── requirements.txt            # Python套件版本
├── render.yaml                 # Render部署設定
├── .gitignore                  # 排除本機環境及暫存檔
├── README.md                    # 專案說明
├── test-record.md               # 測試與驗收紀錄
├── data/
│   └── lost-items.json          # 前後台共用資料
├── templates/
│   ├── index.html               # 民眾端首頁
│   ├── detail.html              # 民眾端詳細資料
│   ├── base.html                # 後台共用模板
│   ├── items.html               # 後台列表
│   ├── new_item.html            # 後台新增
│   └── edit_item.html           # 後台修改
└── static/
    ├── css/
    │   ├── styles.css            # 民眾端樣式
    │   └── admin.css             # 後台樣式
    ├── js/
    │   └── app.js                # 搜尋、排序及詳細頁
    └── pic/
        └── RF001.png ...         # 既有物品圖片
```

專案根目錄仍保留部分整合前的舊檔案作為備份；Flask正式使用的是`templates/`與`static/`中的檔案。

## 執行需求

- Python 3.10以上（目前開發環境使用Python 3.11）
- pip
- 支援現代JavaScript的瀏覽器

不需要安裝Node.js、PostgreSQL或Live Server。

## 第一次安裝

在VS Code開啟`RailFind`資料夾並執行：

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Windows啟用虛擬環境：

```powershell
.venv\Scripts\activate
```

## 啟動系統

macOS／Linux：

```bash
cd "/Users/danajen126/Documents/軟體專案管理/RailFind"
source .venv/bin/activate
flask --app app run --debug --port 5050
```

啟動後開啟：

| 功能 | 網址 |
|---|---|
| 民眾端 | <http://127.0.0.1:5050/> |
| 機構後台 | <http://127.0.0.1:5050/admin/items> |
| 全部資料API | <http://127.0.0.1:5050/api/lost-items> |
| RF001單筆API | <http://127.0.0.1:5050/api/lost-items/RF001> |

停止伺服器：

```text
Control + C
```

退出虛擬環境：

```bash
deactivate
```

## 正式模式啟動

部署平台不使用Flask內建開發伺服器，而是使用Gunicorn：

```bash
gunicorn app:app --workers 1 --threads 4 --bind 127.0.0.1:8050 --timeout 120
```

健康檢查：

```text
http://127.0.0.1:8050/health
```

正常時會回傳：

```json
{
  "ok": true,
  "records": 21,
  "service": "RailFind"
}
```

本專案使用一個Gunicorn worker，避免多個程序同時寫入同一份JSON。這只能降低衝突，不會讓JSON變成正式多人資料庫。

## Render部署

專案已提供`render.yaml`，主要設定如下：

- Runtime：Python
- Build Command：`pip install -r requirements.txt`
- Start Command：`gunicorn app:app --workers 1 --threads 4 --timeout 120`
- Health Check Path：`/health`
- Region：Singapore
- Plan：Free
- `SECRET_KEY`：由Render自動產生

部署前需先將`RailFind`專案上傳到GitHub，接著在Render建立Blueprint或Web Service並連接該儲存庫。

### 免費部署的重要限制

RailFind目前把資料寫入`data/lost-items.json`。Render服務預設檔案系統是暫時性的，因此：

- 儲存庫內原有的21筆資料會隨部署出現。
- 在線上後台新增、修改、刪除或切換狀態，短時間內可正常顯示。
- 服務重新啟動或重新部署後，線上修改可能消失並回到儲存庫版本。

因此，期末展示建議：

1. 本機版本作為主要可寫入Demo。
2. Render版本作為公開連結與唯讀展示。
3. 若一定要讓線上修改永久保存，需改用PostgreSQL或付費Persistent Disk。

官方參考：

- [Render部署Flask](https://render.com/docs/deploy-flask)
- [Render Persistent Disks](https://render.com/docs/disks)
- [Flask使用Gunicorn](https://flask.palletsprojects.com/en/stable/deploying/gunicorn/)

## Demo建議流程

1. 開啟後台，確認遺失物列表與狀態統計。
2. 新增一件遺失物，或使用現有RF021「紫色雙肩背包」。
3. 回民眾端搜尋「紫色背包」。
4. 說明類別40分、顏色30分，因此RF021相似度為70%。
5. 回後台將RF021狀態切換為「已聯繫」。
6. 民眾端重新查詢，顯示最新狀態。
7. 點擊物品詳細資料，展示完整欄位。

## 民眾端功能

### 搜尋

可搜尋：

- 物品名稱
- 類別
- 顏色
- 品牌
- 外觀特徵
- 鐵道機構
- 拾獲站點
- 物品狀態

### 相似度規則

| 比對條件 | 分數 |
|---|---:|
| 類別符合 | 40 |
| 顏色符合 | 30 |
| 品牌符合 | 20 |
| 特徵、機構、站點或一般關鍵字相關 | 10 |

結果由高到低排序。此分數是條件符合程度，不代表AI辨識準確率。

### 無圖片備援

既有資料可顯示`static/pic/`中的圖片。後台新建資料目前未提供圖片上傳，因此民眾端會依類別顯示圖示，不影響搜尋與同步流程。

## 後台功能

- 顯示全部、待認領、已聯繫及已領回數量。
- 依關鍵字、狀態及類別篩選。
- 新增遺失物。
- 修改既有資料。
- 快速更新物品狀態。
- 驗證名稱、類別、機構、站點、日期及電話等必填欄位。

刪除路由已存在，但不屬於本次Demo主流程。

## API

### 取得全部遺失物

```http
GET /api/lost-items
```

### 取得指定遺失物

```http
GET /api/lost-items/<item_id>
```

範例：

```text
GET /api/lost-items/RF001
```

不存在時回傳HTTP 404：

```json
{
  "ok": false,
  "error": "找不到此物品"
}
```

## 資料格式

```json
{
  "id": "RF021",
  "name": "紫色雙肩背包",
  "category": "包包",
  "color": "紫色",
  "brand": "無品牌",
  "features": ["雙肩", "帆布", "白色吊飾"],
  "agency": "北捷",
  "station": "台北車站",
  "foundDate": "2026-06-21",
  "status": "已聯繫",
  "contact": "0212345678",
  "emoji": "🎒",
  "description": "紫色帆布雙肩背包，附白色兔子吊飾。"
}
```

狀態限定為：

```text
待認領
已聯繫
已領回
```

## 測試

完整測試紀錄請見：

[test-record.md](test-record.md)

目前已保存的證據包括：

- API全部、單筆及404錯誤處理。
- 民眾端首頁、搜尋排序及詳細資料。
- 後台新增、修改及必填欄位驗證。
- 前後台新增資料與狀態同步。

正式報告前請依`test-record.md`最後的回歸測試清單再執行一次。

## 已知限制

- JSON檔適合單機Demo，不適合多人同時寫入。
- Render免費服務重新啟動或重新部署後，線上JSON修改可能消失。
- 尚未實作登入及權限控制，任何能連線者都可能開啟後台。
- 正式部署已改用Gunicorn，但整體架構仍是課程MVP，不是商用環境。
- 新增資料不能上傳圖片。
- 搜尋為規則式比對，不是機器學習模型。
- 目前資料為模擬資料，尚未取得各鐵道機構正式串接授權。

## 組員成果整合

| 人員 | 主要成果 |
|---|---|
| 任羿多 | Flask環境、API、前後台整合、後台CSS補救、測試與驗收 |
| 吳紜瑜 | 民眾端搜尋、結果列表、詳細資料及相似度呈現 |
| 陳宛妤 | 後台列表、新增、修改及狀態管理模板與功能 |
| 葉姵佳 | 模擬資料、圖片及資料欄位 |
| 吳昱葶 | SA、品質與測試文件整理 |
| 王筱嵐 | 專案管理文件、工時、成本、風險、績效及簡報 |

## 重要檔案分享原則

分享給組員：

- 專案程式
- `requirements.txt`
- `README.md`
- `test-record.md`

不要分享或提交：

- `.venv/`
- `__pycache__/`
- `.DS_Store`
