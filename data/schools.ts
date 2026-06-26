export type School = {
  id: string;
  name: string;
  shortName: string;
  city: string;
  district: string;
  type: string;
  lat: number;
  lng: number;
  address: string;
  website: string;
  curriculum: string;
  features: string[];
  suitableFor: string[];
  intro: string;
};

export const schools: School[] = [
  {
    "id": "cksh",
    "name": "建國高級中學",
    "shortName": "建中",
    "city": "臺北市",
    "district": "中正區",
    "type": "普通型高中",
    "lat": 25.0319,
    "lng": 121.5121,
    "address": "臺北市中正區南海路56號",
    "website": "https://www.cksh.tp.edu.tw/",
    "curriculum": "https://www.cksh.tp.edu.tw/",
    "features": [
      "數理資優",
      "科學探究",
      "自主學習",
      "社團多元"
    ],
    "suitableFor": [
      "學科能力強",
      "自主性高",
      "能承受競爭環境"
    ],
    "intro": "建國中學是基北區具代表性的普通型高中，適合具備高度學習動機與自我管理能力的學生。"
  },
  {
    "id": "fg",
    "name": "北一女中",
    "shortName": "北一女",
    "city": "臺北市",
    "district": "中正區",
    "type": "普通型高中",
    "lat": 25.038,
    "lng": 121.5128,
    "address": "臺北市中正區重慶南路一段165號",
    "website": "https://www.fg.tp.edu.tw/",
    "curriculum": "https://www.fg.tp.edu.tw/",
    "features": [
      "語文人文",
      "數理探索",
      "國際教育",
      "學生自治"
    ],
    "suitableFor": [
      "自主學習",
      "活動參與度高",
      "重視人文與表達"
    ],
    "intro": "北一女中重視多元探索、學生自治與學術基礎，適合願意主動參與學習與校園活動的學生。"
  },
  {
    "id": "hsnu",
    "name": "師大附中",
    "shortName": "附中",
    "city": "臺北市",
    "district": "大安區",
    "type": "普通型高中",
    "lat": 25.0341,
    "lng": 121.5406,
    "address": "臺北市大安區信義路三段143號",
    "website": "https://www.hs.ntnu.edu.tw/",
    "curriculum": "https://www.hs.ntnu.edu.tw/",
    "features": [
      "自由校風",
      "跨域探索",
      "音樂美術",
      "社團活躍"
    ],
    "suitableFor": [
      "重視探索",
      "喜歡自由校風",
      "具備自主管理能力"
    ],
    "intro": "師大附中以自由、多元與跨域學習聞名，適合有探索動機與自我規劃能力的學生。"
  },
  {
    "id": "cgsh",
    "name": "成功高級中學",
    "shortName": "成功",
    "city": "臺北市",
    "district": "中正區",
    "type": "普通型高中",
    "lat": 25.0426,
    "lng": 121.523,
    "address": "臺北市中正區濟南路一段71號",
    "website": "https://www2.cksh.tp.edu.tw/",
    "curriculum": "https://www2.cksh.tp.edu.tw/",
    "features": [
      "科學探究",
      "人文素養",
      "服務學習",
      "社團多元"
    ],
    "suitableFor": [
      "穩定學習",
      "重視升學",
      "願意參與活動"
    ],
    "intro": "成功高中位於臺北市中心，學術與活動資源兼具，是基北區重要普通型高中之一。"
  },
  {
    "id": "sssh",
    "name": "松山高級中學",
    "shortName": "松高",
    "city": "臺北市",
    "district": "信義區",
    "type": "普通型高中",
    "lat": 25.0432,
    "lng": 121.5685,
    "address": "臺北市信義區基隆路一段156號",
    "website": "https://www.sssh.tp.edu.tw/",
    "curriculum": "https://www.sssh.tp.edu.tw/",
    "features": [
      "城市資源",
      "語文表達",
      "多元選修",
      "社團活動"
    ],
    "suitableFor": [
      "喜歡都會資源",
      "重視交通便利",
      "希望學術與活動平衡"
    ],
    "intro": "松山高中交通便利，校風穩定，適合希望兼顧升學與多元探索的學生。"
  },
  {
    "id": "taivs",
    "name": "大安高級工業職業學校",
    "shortName": "大安高工",
    "city": "臺北市",
    "district": "大安區",
    "type": "技術型高中",
    "lat": 25.0325,
    "lng": 121.5438,
    "address": "臺北市大安區復興南路二段52號",
    "website": "https://www.taivs.tp.edu.tw/",
    "curriculum": "https://www.taivs.tp.edu.tw/",
    "features": [
      "電機電子",
      "機械群",
      "資訊應用",
      "實作導向"
    ],
    "suitableFor": [
      "喜歡動手做",
      "對工程科技有興趣",
      "重視技職升學"
    ],
    "intro": "大安高工是基北區重要技術型高中，重視實作能力、專題製作與技職升學銜接。"
  },
  {
    "id": "pcsh",
    "name": "板橋高級中學",
    "shortName": "板中",
    "city": "新北市",
    "district": "板橋區",
    "type": "普通型高中",
    "lat": 25.011,
    "lng": 121.4626,
    "address": "新北市板橋區文化路一段25號",
    "website": "https://www.pcsh.ntpc.edu.tw/",
    "curriculum": "https://www.pcsh.ntpc.edu.tw/",
    "features": [
      "新北核心",
      "數理探索",
      "人文課程",
      "交通便利"
    ],
    "suitableFor": [
      "新北學生",
      "重視交通便利",
      "希望資源完整"
    ],
    "intro": "板橋高中位於新北市交通核心區，學習資源完整，是新北市重要普通型高中。"
  },
  {
    "id": "ntsh",
    "name": "新北高級中學",
    "shortName": "新北高中",
    "city": "新北市",
    "district": "三重區",
    "type": "普通型高中",
    "lat": 25.086,
    "lng": 121.4896,
    "address": "新北市三重區三信路1號",
    "website": "https://www.ntsh.ntpc.edu.tw/",
    "curriculum": "https://www.ntsh.ntpc.edu.tw/",
    "features": [
      "多元選修",
      "國際教育",
      "跨域探索",
      "校園空間"
    ],
    "suitableFor": [
      "希望就近入學",
      "喜歡多元課程",
      "需要穩定支持"
    ],
    "intro": "新北高中校地開闊，課程與社團多元，適合希望在新北都會區就近就讀的學生。"
  },
  {
    "id": "klsh",
    "name": "基隆高級中學",
    "shortName": "基中",
    "city": "基隆市",
    "district": "暖暖區",
    "type": "普通型高中",
    "lat": 25.0993,
    "lng": 121.74,
    "address": "基隆市暖暖區源遠路20號",
    "website": "https://www.klsh.kl.edu.tw/",
    "curriculum": "https://www.klsh.kl.edu.tw/",
    "features": [
      "區域高中",
      "升學輔導",
      "多元選修",
      "在地資源"
    ],
    "suitableFor": [
      "基隆在地學生",
      "希望穩定升學",
      "重視通勤便利"
    ],
    "intro": "基隆高中是基隆地區重要普通型高中，服務在地學生並提供完整升學與學習支持。"
  }
];
