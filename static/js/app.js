const fallbackItems = [
  {
    "id": "RF001",
    "name": "黑色折疊雨傘",
    "category": "雨傘",
    "color": "黑色",
    "brand": "無品牌",
    "features": [
      "折疊",
      "銀色手把",
      "附傘套"
    ],
    "agency": "北捷",
    "station": "信義安和站",
    "foundDate": "2026-06-18",
    "status": "待認領",
    "contact": "02-0000-1001",
    "image": "pic/RF001.png",
    "description": "黑色折疊雨傘，傘套邊緣有些微磨損，於月台座椅旁拾獲。"
  },
  {
    "id": "RF002",
    "name": "深灰長柄雨傘",
    "category": "雨傘",
    "color": "灰色",
    "brand": "無品牌",
    "features": [
      "長柄",
      "木質握把",
      "透明掛繩"
    ],
    "agency": "台鐵",
    "station": "台中站",
    "foundDate": "2026-06-17",
    "status": "待認領",
    "contact": "04-0000-2202",
    "image": "pic/RF002.png",
    "description": "深灰色長柄雨傘，木質握把，於候車區拾獲。"
  },
  {
    "id": "RF003",
    "name": "藍色短夾",
    "category": "皮夾",
    "color": "藍色",
    "brand": "無品牌",
    "features": [
      "短夾",
      "尼龍材質",
      "魔鬼氈"
    ],
    "agency": "高鐵",
    "station": "左營站",
    "foundDate": "2026-06-16",
    "status": "待認領",
    "contact": "07-0000-3303",
    "image": "pic/RF003.png",
    "description": "藍色尼龍短夾，內有少量零錢，無證件。"
  },
  {
    "id": "RF004",
    "name": "白色保溫水壺",
    "category": "水壺",
    "color": "白色",
    "brand": "Thermos",
    "features": [
      "保溫瓶",
      "500ml",
      "有刮痕"
    ],
    "agency": "北捷",
    "station": "台北車站",
    "foundDate": "2026-06-15",
    "status": "已聯繫",
    "contact": "02-0000-1004",
    "image": "pic/RF004.png",
    "description": "白色膳魔師保溫瓶，瓶身底部有輕微摔傷刮痕。"
  },
  {
    "id": "RF005",
    "name": "黑色皮革長夾",
    "category": "皮夾",
    "color": "黑色",
    "brand": "COACH",
    "features": [
      "長夾",
      "拉鍊",
      "金色標誌"
    ],
    "agency": "台鐵",
    "station": "板橋站",
    "foundDate": "2026-06-15",
    "status": "待認領",
    "contact": "02-0000-2205",
    "image": "pic/RF005.png",
    "description": "黑色皮革長夾，拉鍊完好，內含多張發票與信用卡。"
  },
  {
    "id": "RF006",
    "name": "白色無線耳機",
    "category": "3C電子",
    "color": "白色",
    "brand": "Apple",
    "features": [
      "AirPods",
      "保護套",
      "貓咪吊飾"
    ],
    "agency": "北捷",
    "station": "市政府站",
    "foundDate": "2026-06-14",
    "status": "待認領",
    "contact": "02-0000-1006",
    "image": "pic/RF006.png",
    "description": "白色無線耳機附貓咪造型軟膠保護套，右耳機有些許髒污。"
  },
  {
    "id": "RF007",
    "name": "紅色飲料提袋",
    "category": "袋子",
    "color": "紅色",
    "brand": "無品牌",
    "features": [
      "帆布",
      "柴犬刺繡",
      "雙杯袋"
    ],
    "agency": "中捷",
    "station": "文心森林公園站",
    "foundDate": "2026-06-14",
    "status": "已領回",
    "contact": "04-0000-4407",
    "image": "pic/RF007.png",
    "description": "紅色帆布材質飲料袋，正面有醒目的柴犬刺繡圖樣。"
  },
  {
    "id": "RF008",
    "name": "銀色鑰匙一串",
    "category": "鑰匙",
    "color": "銀色",
    "brand": "無品牌",
    "features": [
      "三支鑰匙",
      "感應扣",
      "動漫吊飾"
    ],
    "agency": "台鐵",
    "station": "新竹站",
    "foundDate": "2026-06-13",
    "status": "待認領",
    "contact": "03-0000-2208",
    "image": "pic/RF008.png",
    "description": "共有三支傳統鑰匙、一個藍色門禁感應扣與一個動漫壓克力吊飾。"
  },
  {
    "id": "RF009",
    "name": "透明外殼悠遊卡",
    "category": "證件",
    "color": "透明",
    "brand": "悠遊卡",
    "features": [
      "學生卡",
      "卡套",
      "伸縮繩"
    ],
    "agency": "北捷",
    "station": "公館站",
    "foundDate": "2026-06-13",
    "status": "待認領",
    "contact": "02-0000-1009",
    "image": "pic/RF009.png",
    "description": "晶片悠遊卡學生卡，裝在透明硬殼卡套內，附帶黑色伸縮長繩。"
  },
  {
    "id": "RF010",
    "name": "灰色連帽外套",
    "category": "衣物",
    "color": "灰色",
    "brand": "UNIQLO",
    "features": [
      "L號",
      "拉鍊款式",
      "棉質"
    ],
    "agency": "高鐵",
    "station": "桃園站",
    "foundDate": "2026-06-12",
    "status": "待認領",
    "contact": "03-0000-3310",
    "image": "pic/RF010.png",
    "description": "灰色素面連帽外套，L號，左側口袋內有一張當日乘車票根。"
  },
  {
    "id": "RF011",
    "name": "藍色雙肩背包",
    "category": "包包",
    "color": "藍色",
    "brand": "Nike",
    "features": [
      "運動型",
      "大容量",
      "雙側網袋"
    ],
    "agency": "台鐵",
    "station": "高雄站",
    "foundDate": "2026-06-12",
    "status": "待認領",
    "contact": "07-0000-2211",
    "image": "pic/RF011.png",
    "description": "深藍色雙肩運動背包，內裝有換洗衣物與一本筆記本。"
  },
  {
    "id": "RF012",
    "name": "金屬細框眼鏡",
    "category": "眼鏡",
    "color": "金色",
    "brand": "OWNDAYS",
    "features": [
      "圓框",
      "黑盒",
      "附眼鏡布"
    ],
    "agency": "北捷",
    "station": "中山站",
    "foundDate": "2026-06-11",
    "status": "待認領",
    "contact": "02-0000-1012",
    "image": "pic/RF012.png",
    "description": "金色金屬細圓框眼鏡，放置在原廠黑色硬殼眼鏡盒中。"
  },
  {
    "id": "RF013",
    "name": "黑色行動電源",
    "category": "3C電子",
    "color": "黑色",
    "brand": "ASUS",
    "features": [
      "10000mAh",
      "自帶線",
      "表面磨損"
    ],
    "agency": "桃捷",
    "station": "高鐵桃園站",
    "foundDate": "2026-06-11",
    "status": "待認領",
    "contact": "03-0000-5513",
    "image": "pic/RF013.png",
    "description": "黑色方形行動電源，表面有明顯使用留下的細微刮痕。"
  },
  {
    "id": "RF014",
    "name": "粉紅色防刮短夾",
    "category": "皮夾",
    "color": "粉紅色",
    "brand": "Kate Spade",
    "features": [
      "防刮牛皮",
      "鈕扣式",
      "多卡槽"
    ],
    "agency": "北捷",
    "station": "西門站",
    "foundDate": "2026-06-10",
    "status": "已聯繫",
    "contact": "02-0000-1014",
    "image": "pic/RF014.png",
    "description": "粉紅色鈕扣式短夾，內有身分證，已依資料聯繫失主。"
  },
  {
    "id": "RF015",
    "name": "綠色不鏽鋼水壺",
    "category": "水壺",
    "color": "綠色",
    "brand": "Elephant Cuppa",
    "features": [
      "大容量",
      "提把蓋",
      "附吸管"
    ],
    "agency": "中捷",
    "station": "高鐵台中站",
    "foundDate": "2026-06-10",
    "status": "待認領",
    "contact": "04-0000-4415",
    "image": "pic/RF015.png",
    "description": "大象杯綠色款，杯身有些許茶垢痕跡，於詢問處旁座位拾獲。"
  },
  {
    "id": "RF016",
    "name": "藍色抗UV折疊傘",
    "category": "雨傘",
    "color": "藍色",
    "brand": "無品牌",
    "features": [
      "自動傘",
      "內層黑膠",
      "木頭握把"
    ],
    "agency": "台鐵",
    "station": "花蓮站",
    "foundDate": "2026-06-09",
    "status": "待認領",
    "contact": "03-0000-2216",
    "image": "pic/RF016.png",
    "description": "深藍色自動折疊傘，木頭材質握把有些微擦傷。"
  },
  {
    "id": "RF017",
    "name": "透明藍色筆袋",
    "category": "文具",
    "color": "藍色",
    "brand": "無品牌",
    "features": [
      "網格",
      "塑膠拉鍊",
      "含原子筆"
    ],
    "agency": "北捷",
    "station": "忠孝復興站",
    "foundDate": "2026-06-08",
    "status": "已領回",
    "contact": "02-0000-1017",
    "image": "pic/RF017.png",
    "description": "透明藍色網格筆袋，內有原子筆三支與立可帶一個。"
  },
  {
    "id": "RF018",
    "name": "黑色棒球帽",
    "category": "衣物",
    "color": "黑色",
    "brand": "Adidas",
    "features": [
      "可調式",
      "白色電繡",
      "鴨舌帽"
    ],
    "agency": "北捷",
    "station": "劍潭站",
    "foundDate": "2026-06-08",
    "status": "待認領",
    "contact": "02-0000-1020",
    "image": "pic/RF018.png",
    "description": "黑色棒球帽，正面有白色經典品牌標誌，後方扣帶可調整。"
  },
  {
    "id": "RF019",
    "name": "白色帆布鞋袋",
    "category": "包包",
    "color": "白色",
    "brand": "Nike",
    "features": [
      "束口袋",
      "鞋袋",
      "黑色標誌"
    ],
    "agency": "台鐵",
    "station": "松山站",
    "foundDate": "2026-06-07",
    "status": "待認領",
    "contact": "02-0000-2219",
    "image": "pic/RF019.png",
    "description": "白色束口鞋袋，外側有黑色品牌標誌。"
  },
  {
    "id": "RF020",
    "name": "棕色真皮短夾",
    "category": "皮夾",
    "color": "棕色",
    "brand": "無品牌",
    "features": [
      "真皮",
      "復古造型",
      "邊緣脫線"
    ],
    "agency": "高鐵",
    "station": "台中站",
    "foundDate": "2026-06-07",
    "status": "待認領",
    "contact": "04-0000-3320",
    "image": "pic/RF020.png",
    "description": "復古深棕色真皮男用短夾，邊角處有些微磨損與輕微脫線。"
  }
];

const synonymMap = {
  umbrella: "雨傘", 傘: "雨傘", 雨傘: "雨傘", 折疊傘: "雨傘",
  皮夾: "皮夾", 錢包: "皮夾", 短夾: "皮夾", 長夾: "皮夾",
  水壺: "水壺", 保溫瓶: "水壺", 杯: "水壺",
  "3c": "3C電子", 手機: "3C電子", 耳機: "3C電子", airpods: "3C電子", 行動電源: "3C電子",
  袋子: "袋子", 飲料袋: "袋子", 提袋: "袋子",
  包包: "包包", 背包: "包包", 鞋袋: "包包",
  鑰匙: "鑰匙", 悠遊卡: "證件", 證件: "證件",
  衣服: "衣物", 衣物: "衣物", 外套: "衣物", 帽子: "衣物",
  眼鏡: "眼鏡", 文具: "文具", 筆袋: "文具"
};

const colors = ["黑色", "白色", "藍色", "灰色", "棕色", "咖啡色", "紅色", "粉紅色", "粉色", "透明", "綠色", "銀色", "金色", "黃色", "紫色"];

function normalize(text = "") {
  return String(text).trim().toLowerCase();
}

function splitQuery(query) {
  return normalize(query).split(/[\s,，、]+/).filter(Boolean);
}

function containsAny(source, words) {
  const normalizedSource = normalize(source);
  return words.some((word) => normalizedSource.includes(normalize(word)));
}

function detectCategory(query) {
  const normalizedQuery = normalize(query);
  const matched = Object.entries(synonymMap).find(([word]) => normalizedQuery.includes(normalize(word)));
  return matched ? matched[1] : "";
}

function detectColor(query) {
  return colors.find((color) => query.includes(color)) || "";
}

function getEmojiByCategory(category) {
  const map = {
    "雨傘": "☂️", "皮夾": "👛", "水壺": "🥤", "3C電子": "📱",
    "袋子": "👜", "包包": "🎒", "鑰匙": "🔑", "證件": "💳",
    "衣物": "🧥", "眼鏡": "👓", "文具": "✏️"
  };
  return map[category] || "📦";
}

function normalizeItem(item) {
  return {
    ...item,
    features: Array.isArray(item.features) ? item.features : String(item.features || "").split(/[，,、]/).filter(Boolean),
    emoji: item.emoji || getEmojiByCategory(item.category),
    image: item.image || ""
  };
}

function getSearchText(item) {
  return [item.id, item.name, item.category, item.color, item.brand, item.agency, item.station, item.status, item.description, ...item.features].join(" ");
}

function calculateScore(item, query) {
  const tokens = splitQuery(query);
  const targetCategory = detectCategory(query);
  const targetColor = detectColor(query);
  const searchText = getSearchText(item);
  let score = 0;
  const reasons = [];

  if (targetCategory && item.category === targetCategory) {
    score += 40;
    reasons.push("類別符合 +40");
  } else if (!targetCategory && tokens.length && containsAny(item.name + item.category, tokens)) {
    score += 30;
    reasons.push("名稱相關 +30");
  }

  if (targetColor && item.color === targetColor) {
    score += 30;
    reasons.push("顏色符合 +30");
  } else if (!targetColor && tokens.length && containsAny(item.color, tokens)) {
    score += 20;
    reasons.push("顏色相關 +20");
  }

  if (tokens.length && item.brand !== "無品牌" && containsAny(item.brand, tokens)) {
    score += 20;
    reasons.push("品牌符合 +20");
  }

  const featureMatched = tokens.length && item.features.some((feature) => containsAny(feature, tokens));
  const stationMatched = tokens.length && containsAny(item.station + item.agency, tokens);
  const generalMatched = tokens.length && containsAny(searchText, tokens);

  if (featureMatched || stationMatched || generalMatched) {
    score += 10;
    reasons.push("特徵或站點相關 +10");
  }

  if (score === 0 && generalMatched) {
    score = 10;
    reasons.push("關鍵字相關 +10");
  }

  return { score: Math.min(score, 100), reasons };
}

async function loadItems() {
  try {
    const response = await fetch("/api/lost-items", { cache: "no-store" });
    if (!response.ok) throw new Error("資料檔案載入失敗");
    const data = await response.json();
    return data.map(normalizeItem);
  } catch (error) {
    return fallbackItems.map(normalizeItem);
  }
}

function statusClass(status) {
  if (status === "已聯繫") return "contact";
  if (status === "已領回") return "done";
  return "";
}

function itemImageHtml(item, className = "item-img") {
  if (item.image) {
    return `<img class="${className}" src="${item.image}" alt="${item.name}" onerror="this.outerHTML='<span class=&quot;image-fallback&quot;>${item.emoji || "📦"}</span>'">`;
  }
  return `<span class="image-fallback">${item.emoji || "📦"}</span>`;
}

function populateFilters(items) {
  const categoryFilter = document.querySelector("#categoryFilter");
  const agencyFilter = document.querySelector("#agencyFilter");
  if (!categoryFilter || !agencyFilter) return;

  const categories = [...new Set(items.map((item) => item.category).filter(Boolean))].sort();
  const agencies = [...new Set(items.map((item) => item.agency).filter(Boolean))].sort();

  categoryFilter.innerHTML = `<option value="">全部類別</option>` + categories.map((category) => `<option value="${category}">${category}</option>`).join("");
  agencyFilter.innerHTML = `<option value="">全部站點</option>` + agencies.map((agency) => `<option value="${agency}">${agency}</option>`).join("");
}

function buildActiveFilters({ query, category, status, agency }) {
  const chips = [];
  if (query) chips.push(`關鍵字：${query}`);
  if (category) chips.push(`類別：${category}`);
  if (status) chips.push(`狀態：${status}`);
  if (agency) chips.push(`機構：${agency}`);
  return chips;
}

function renderFilterChips(chips) {
  const container = document.querySelector("#activeFilters");
  if (!container) return;
  if (!chips.length) {
    container.innerHTML = "";
    container.classList.add("hidden");
    return;
  }
  container.innerHTML = chips.map((chip) => `<span>${chip}</span>`).join("");
  container.classList.remove("hidden");
}

function renderResults(items, criteria = {}) {
  const resultsList = document.querySelector("#resultsList");
  const resultSummary = document.querySelector("#resultSummary");
  const emptyState = document.querySelector("#emptyState");
  if (!resultsList || !resultSummary || !emptyState) return;

  resultsList.innerHTML = "";
  renderFilterChips(buildActiveFilters(criteria));

  const hasCondition = !!(criteria.query || criteria.category || criteria.status || criteria.agency);
  if (!hasCondition) {
    emptyState.classList.add("hidden");
    resultSummary.textContent = "請輸入關鍵字或選擇篩選條件開始查詢。";
    return;
  }

  if (items.length === 0) {
    emptyState.classList.remove("hidden");
    resultSummary.textContent = "目前沒有符合條件的遺失物資料。";
    return;
  }

  emptyState.classList.add("hidden");
  resultSummary.textContent = `共找到 ${items.length} 筆符合條件的資料。`;

  resultsList.innerHTML = items.map(({ item, score, reasons }) => {
    const tags = [item.category, item.color, item.brand, ...item.features.slice(0, 2)]
      .filter((tag) => tag && tag !== "無品牌")
      .map((tag) => `<span>${tag}</span>`)
      .join("");

    const scoreText = criteria.query ? `${score}%` : "符合";
    const scoreLineWidth = criteria.query ? score : 100;
    const reasonText = criteria.query ? (reasons.join("、") || "關鍵字相關") : `目前狀態：${item.status}`;

    return `
      <article class="result-card">
        <div class="item-visual" aria-hidden="true">${itemImageHtml(item)}</div>
        <div class="result-body">
          <div class="result-title-row">
            <div>
              <h3>${item.name}</h3>
              <span class="status-badge ${statusClass(item.status)}">${item.status}</span>
            </div>
            <span class="score-badge ${criteria.query ? "" : "plain"}">${scoreText}</span>
          </div>
          <div class="score-line" title="${criteria.query ? `相似度 ${score}%` : "符合篩選條件"}"><span style="width:${scoreLineWidth}%"></span></div>
          <p class="item-meta">
            ${item.agency}｜${item.station}<br>
            拾獲日期：${item.foundDate}<br>
            ${reasonText}
          </p>
          <div class="tags">${tags}</div>
          <div class="card-actions">
            <a href="/detail?id=${encodeURIComponent(item.id)}">查看詳細資料 →</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function filterItems(items, { category, status, agency }) {
  return items.filter((item) => {
    const categoryOk = !category || item.category === category;
    const statusOk = !status || item.status === status;
    const agencyOk = !agency || item.agency === agency;
    return categoryOk && statusOk && agencyOk;
  });
}

function setupSearchPage(items) {
  const form = document.querySelector("#searchForm");
  if (!form) return;

  populateFilters(items);

  const keywordInput = document.querySelector("#keyword");
  const categoryFilter = document.querySelector("#categoryFilter");
  const statusFilter = document.querySelector("#statusFilter");
  const agencyFilter = document.querySelector("#agencyFilter");
  const formMessage = document.querySelector("#formMessage");
  const quickButtons = document.querySelectorAll(".quick-searches button");

  function search(triggeredBySubmit = false) {
    const query = keywordInput.value.trim();
    const criteria = {
      query,
      category: categoryFilter.value,
      status: statusFilter.value,
      agency: agencyFilter.value
    };

    formMessage.textContent = "";
    formMessage.classList.remove("error");

    const hasCondition = !!(criteria.query || criteria.category || criteria.status || criteria.agency);
    if (!hasCondition) {
      if (triggeredBySubmit) {
        formMessage.textContent = "請輸入關鍵字，或先選擇至少一個篩選條件。";
        formMessage.classList.add("error");
      }
      renderResults([], criteria);
      return;
    }

    const filtered = filterItems(items, criteria);

    const preparedResults = query
      ? filtered.map((item) => ({ item, ...calculateScore(item, query) }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score || b.item.foundDate.localeCompare(a.item.foundDate))
      : filtered.map((item) => ({ item, score: 100, reasons: [] }))
        .sort((a, b) => b.item.foundDate.localeCompare(a.item.foundDate));

    renderResults(preparedResults, criteria);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    search(true);
  });

  [categoryFilter, statusFilter, agencyFilter].forEach((select) => {
    select.addEventListener("change", () => search(false));
  });

  quickButtons.forEach((button) => {
    button.addEventListener("click", () => {
      keywordInput.value = button.dataset.query;
      categoryFilter.value = "";
      statusFilter.value = "";
      agencyFilter.value = "";
      search(false);
    });
  });
}

function renderDetail(items) {
  const container = document.querySelector("#detailContainer");
  if (!container) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const item = items.find((entry) => entry.id === id);

  if (!item) {
    container.innerHTML = `
      <div class="state error">
        <strong>找不到這筆物品資料</strong>
        <p>可能是網址錯誤，或資料已被更新。請返回查詢頁重新查詢。</p>
      </div>
    `;
    return;
  }

  const tags = [item.category, item.color, item.brand, ...item.features]
    .filter((tag) => tag && tag !== "無品牌")
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  container.innerHTML = `
    <article class="detail-card">
      <div class="detail-visual" aria-hidden="true">${itemImageHtml(item, "detail-img")}</div>
      <div class="detail-content">
        <p class="eyebrow">物品編號 ${item.id}</p>
        <h1>${item.name}</h1>
        <span class="status-badge ${statusClass(item.status)}">${item.status}</span>
        <div class="detail-meta">
          <div class="meta-box"><strong>拾獲機構</strong>${item.agency}</div>
          <div class="meta-box"><strong>拾獲站點</strong>${item.station}</div>
          <div class="meta-box"><strong>拾獲日期</strong>${item.foundDate}</div>
          <div class="meta-box"><strong>聯絡電話</strong>${item.contact}</div>
          <div class="meta-box"><strong>類別</strong>${item.category}</div>
          <div class="meta-box"><strong>顏色</strong>${item.color}</div>
        </div>
        <div class="tags">${tags}</div>
        <div class="description-box">
          <strong>物品描述</strong>
          <p>${item.description}</p>
        </div>
        <div class="detail-actions">
          <a class="btn primary" href="tel:${item.contact}">聯絡保管站點</a>
          <a class="btn ghost" href="/">返回繼續查詢</a>
        </div>
      </div>
    </article>
  `;
}

async function init() {
  const loadingState = document.querySelector("#loadingState");
  if (loadingState) loadingState.classList.remove("hidden");

  try {
    const items = await loadItems();
    setupSearchPage(items);
    renderDetail(items);
  } catch (error) {
    const errorState = document.querySelector("#errorState");
    if (errorState) errorState.classList.remove("hidden");
  } finally {
    if (loadingState) loadingState.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", init);
