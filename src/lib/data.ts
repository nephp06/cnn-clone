import { NewsItem } from '@/components/news/NewsCard';

export const breakingNews: NewsItem[] = [
  {
    id: 'breaking-1',
    title: '特大風暴襲擊美國東部沿海地區，導致數十萬人失去電力供應',
    imageUrl:
      'https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?q=80&w=1200&h=800&auto=format&fit=crop',
    category: '天氣',
    url: '/weather/storm-power-outage',
    date: '2023-08-15',
    description:
      '一場特大風暴正在襲擊美國東部沿海地區，導致數十萬人失去電力供應。氣象部門表示，這可能是近十年來最強的一次風暴。',
  },
  {
    id: 'breaking-2',
    title: '國際貨幣基金組織警告全球經濟衰退風險增加',
    imageUrl:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&h=800&auto=format&fit=crop',
    category: '經濟',
    url: '/business/imf-recession-warning',
    date: '2023-08-15',
    description:
      '國際貨幣基金組織在最新報告中警告全球經濟衰退風險正在增加，呼籲各國政府採取更多措施來穩定經濟。',
  },
  {
    id: 'breaking-3',
    title: 'NASA宣布下一次月球任務的發射日期',
    imageUrl:
      'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=1200&h=800&auto=format&fit=crop',
    category: '科技',
    url: '/tech/nasa-moon-mission',
    date: '2023-08-15',
    description:
      '美國宇航局NASA今天宣布了下一次月球任務的發射日期，這將是人類在50年後首次重返月球。',
  },
];

export const mainNews: NewsItem = {
  id: 'main-1',
  title: '政府宣布重大經濟刺激計劃，投入數萬億資金以復甦經濟',
  imageUrl:
    'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&h=800&auto=format&fit=crop',
  category: '政治',
  url: '/politics/government-economic-stimulus',
  date: '2023-08-15',
  description:
    '政府今天宣布了一項重大的經濟刺激計劃，將投入數萬億資金以幫助經濟復甦。這是自全球金融危機以來規模最大的一次經濟干預。專家表示，這項計劃可能會對未來幾年的經濟產生重大影響。',
};

export const sideNews: NewsItem[] = [
  {
    id: 'side-1',
    title: '科學家發現可能與癌症治療相關的重大突破',
    imageUrl:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&h=400&auto=format&fit=crop',
    category: '健康',
    url: '/health/cancer-treatment-breakthrough',
    date: '2023-08-14',
    description:
      '一組國際科學家宣布，他們在癌症治療研究中取得了重大突破，這可能改變未來癌症治療的方式。',
  },
  {
    id: 'side-2',
    title: '全球最大科技公司股價創歷史新高',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&auto=format&fit=crop',
    category: '商業',
    url: '/business/tech-stock-record',
    date: '2023-08-14',
    description:
      '全球最大的科技公司股票今天創下歷史新高，帶動了整個科技板塊的上漲。',
  },
  {
    id: 'side-3',
    title: '國家隊在國際比賽中贏得金牌',
    imageUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&h=400&auto=format&fit=crop',
    category: '體育',
    url: '/sports/national-team-gold',
    date: '2023-08-13',
    description:
      '國家隊在今天的國際比賽中表現出色，贏得了金牌，這是該隊近十年來的最佳表現。',
  },
];

export const technologyNews: NewsItem[] = [
  {
    id: 'tech-1',
    title: '新型人工智能技術可以預測地震',
    imageUrl:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&h=600&auto=format&fit=crop',
    category: '技術',
    url: '/tech/ai-earthquake-prediction',
    date: '2023-08-12',
    description:
      '科學家開發出一種新型人工智能技術，可以預測地震的發生時間和地點，這將有助於減少地震造成的損失。',
  },
  {
    id: 'tech-2',
    title: '蘋果公司宣布下一代iPhone發布日期',
    imageUrl:
      'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=800&h=600&auto=format&fit=crop',
    category: '技術',
    url: '/tech/apple-iphone-launch',
    date: '2023-08-11',
    description:
      '蘋果公司今天宣布了下一代iPhone的發布日期，並透露了一些新功能的信息。',
  },
  {
    id: 'tech-3',
    title: '電動汽車銷量首次超過傳統汽車',
    imageUrl:
      'https://images.unsplash.com/photo-1554744512-d6c603f27c54?q=80&w=800&h=600&auto=format&fit=crop',
    category: '技術',
    url: '/tech/electric-car-sales',
    date: '2023-08-10',
    description:
      '根據最新數據，電動汽車的銷量首次超過了傳統汽車，這標誌著汽車行業的重大轉變。',
  },
];

export const politicsNews: NewsItem[] = [
  {
    id: 'politics-1',
    title: '國際峰會討論氣候變化應對措施',
    imageUrl:
      'https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=800&h=600&auto=format&fit=crop',
    category: '政治',
    url: '/politics/climate-summit',
    date: '2023-08-09',
    description:
      '國際峰會今天召開，各國領導人討論了應對氣候變化的措施，並簽署了一系列協議。',
  },
  {
    id: 'politics-2',
    title: '新貿易協議將促進地區經濟一體化',
    imageUrl:
      'https://images.unsplash.com/photo-1444664597500-035db93e2323?q=80&w=800&h=600&auto=format&fit=crop',
    category: '政治',
    url: '/politics/trade-agreement',
    date: '2023-08-08',
    description:
      '一項新的貿易協議今天簽署，這將促進地區經濟一體化，並為參與國帶來更多機會。',
  },
  {
    id: 'politics-3',
    title: '國防部宣布軍事現代化計劃',
    imageUrl:
      'https://images.unsplash.com/photo-1581922814484-0b48460b7010?q=80&w=800&h=600&auto=format&fit=crop',
    category: '政治',
    url: '/politics/military-modernization',
    date: '2023-08-07',
    description:
      '國防部今天宣布了一項軍事現代化計劃，旨在提升國家防禦能力和軍隊技術水平。',
  },
];

export const healthNews: NewsItem[] = [
  {
    id: 'health-1',
    title: '新研究表明每天步行可以顯著降低心臟病風險',
    imageUrl:
      'https://images.unsplash.com/photo-1538333702852-c1b7a2a93001?q=80&w=800&h=600&auto=format&fit=crop',
    category: '健康',
    url: '/health/walking-heart-disease',
    date: '2023-08-06',
    description:
      '一項新的研究表明，每天步行30分鐘可以顯著降低心臟病的風險，這是最簡單的預防方法之一。',
  },
  {
    id: 'health-2',
    title: '專家提出改善睡眠質量的新方法',
    imageUrl:
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&h=600&auto=format&fit=crop',
    category: '健康',
    url: '/health/sleep-quality',
    date: '2023-08-05',
    description:
      '睡眠專家提出了一些改善睡眠質量的新方法，這些方法簡單易行，可以幫助人們獲得更好的休息。',
  },
  {
    id: 'health-3',
    title: '新型健康監測設備可以實時追踪健康指標',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&h=600&auto=format&fit=crop',
    category: '健康',
    url: '/health/monitoring-device',
    date: '2023-08-04',
    description:
      '一種新型健康監測設備問世，可以實時追踪多種健康指標，幫助人們更好地管理自己的健康。',
  },
];

export const entertainmentNews: NewsItem[] = [
  {
    id: 'entertainment-1',
    title: '年度大片票房破記錄',
    imageUrl:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&h=600&auto=format&fit=crop',
    category: '娛樂',
    url: '/entertainment/movie-box-office',
    date: '2023-08-03',
    description:
      '今年的年度大片票房已經破了記錄，成為電影史上最賣座的電影之一。',
  },
  {
    id: 'entertainment-2',
    title: '知名音樂人宣布世界巡演計劃',
    imageUrl:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&h=600&auto=format&fit=crop',
    category: '娛樂',
    url: '/entertainment/music-tour',
    date: '2023-08-02',
    description:
      '知名音樂人今天宣布了世界巡演計劃，將在多個國家和地區舉行演唱會。',
  },
  {
    id: 'entertainment-3',
    title: '年度電視獎項提名名單公布',
    imageUrl:
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800&h=600&auto=format&fit=crop',
    category: '娛樂',
    url: '/entertainment/tv-awards',
    date: '2023-08-01',
    description: '年度電視獎項的提名名單今天公布，多部熱門劇集獲得了多項提名。',
  },
];

export const sportsNews: NewsItem[] = [
  {
    id: 'sports-1',
    title: '國家足球隊在世界盃預選賽中取得勝利',
    imageUrl:
      'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=800&h=600&auto=format&fit=crop',
    category: '體育',
    url: '/sports/football-world-cup',
    date: '2023-07-31',
    description:
      '國家足球隊在世界盃預選賽中取得了重要勝利，大大提高了晉級下一輪的機會。',
  },
  {
    id: 'sports-2',
    title: '網球明星在大滿貫賽事中奪冠',
    imageUrl:
      'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=800&h=600&auto=format&fit=crop',
    category: '體育',
    url: '/sports/tennis-grandslam',
    date: '2023-07-30',
    description:
      '知名網球明星在今年的大滿貫賽事中奪冠，這是他職業生涯的第一個大滿貫冠軍。',
  },
  {
    id: 'sports-3',
    title: '奧運會倒計時一年，主辦城市準備工作進展順利',
    imageUrl:
      'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=800&h=600&auto=format&fit=crop',
    category: '體育',
    url: '/sports/olympics-countdown',
    date: '2023-07-29',
    description:
      '距離下一屆奧運會還有一年時間，主辦城市的準備工作正在順利進行中。',
  },
];
