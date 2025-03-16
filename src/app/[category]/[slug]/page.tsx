import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  technologyNews, 
  politicsNews, 
  healthNews, 
  entertainmentNews, 
  sportsNews,
  breakingNews,
  sideNews,
  mainNews
} from "@/lib/data";
import { NewsItem } from "@/components/news/NewsCard";
import NewsCard from "@/components/news/NewsCard";
import { FiClock, FiShare2, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

type NewsDetailParams = {
  params: {
    category: string;
    slug: string;
  };
};

// 生成動態元數據
export async function generateMetadata({ params }: NewsDetailParams): Promise<Metadata> {
  const category = params?.category;
  const slug = params?.slug;
  
  // 從所有新聞中找到對應的新聞
  const allNews = [
    ...technologyNews, 
    ...politicsNews, 
    ...healthNews, 
    ...entertainmentNews,
    ...sportsNews,
    ...breakingNews,
    ...sideNews,
    mainNews
  ];
  
  const newsUrl = `/${category}/${slug}`;
  const newsItem = allNews.find((item) => item.url === newsUrl || item.url.endsWith(slug));
  
  if (!newsItem) {
    return {
      title: "新聞 | BNN 新聞網",
      description: "BNN 新聞網的新聞詳情頁面",
    };
  }
  
  return {
    title: `${newsItem.title} | BNN 新聞網`,
    description: newsItem.description || `閱讀關於 ${newsItem.title} 的最新報導`,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailParams) {
  const category = params?.category;
  const slug = params?.slug;
  
  // 從所有新聞中找到對應的新聞
  const allNews = [
    ...technologyNews, 
    ...politicsNews, 
    ...healthNews, 
    ...entertainmentNews,
    ...sportsNews,
    ...breakingNews,
    ...sideNews,
    mainNews
  ];
  
  const newsUrl = `/${category}/${slug}`;
  const newsItem = allNews.find((item) => item.url === newsUrl || item.url.endsWith(slug));
  
  if (!newsItem) {
    return (
      <div className="cnn-container py-8">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4">未找到新聞</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            抱歉，我們找不到您請求的新聞。
          </p>
          <Link 
            href="/"
            className="bg-[rgb(var(--primary-color))] text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            返回首頁
          </Link>
        </div>
      </div>
    );
  }
  
  // 獲取相關新聞
  const relatedNews = allNews
    .filter((item) => 
      item.id !== newsItem.id && 
      (item.category === newsItem.category || 
      Math.random() > 0.5) // 隨機包含其他類別的文章
    )
    .slice(0, 3);
  
  // 生成一個較長的假新聞內容
  const generateContent = (item: NewsItem) => {
    const paragraphs = [
      `${item.description}`,
      "近年來，該領域的專家們一直在尋找新的方法來解決這個問題。多項研究表明，創新方法可能會帶來突破性的進展。",
      "據知情人士透露，這一發展可能對整個行業產生深遠影響。分析師預測，未來幾個月內可能會有更多相關公告。",
      "「這是一個令人興奮的時刻，」一位資深專家說。「我們正在見證歷史性的變革，這將改變我們對這個問題的理解。」",
      "然而，也有人對此持謹慎態度。批評者指出，還需要更多研究來驗證這些發現的有效性和長期影響。",
      "政府機構和私營部門都在密切關注這一發展。預計將會有更多的投資和合作計劃來推動這一領域的進步。",
      "專家建議公眾關注後續發展，但要保持理性判斷。「重要的是要基於事實而非猜測做出決定，」一位知名學者表示。",
      "隨著更多數據和研究的出現，我們將能更全面地了解這一現象及其潛在影響。",
    ];
    
    return paragraphs;
  };
  
  const content = generateContent(newsItem);
  const publishDate = new Date(newsItem.date).toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  const readTime = Math.floor(Math.random() * 7) + 3; // 3-9分鐘隨機閱讀時間
  
  return (
    <div className="cnn-container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 主要內容 */}
        <div className="lg:col-span-2">
          <div className="mb-2">
            <span className="inline-block bg-[rgb(var(--primary-color))] text-white text-xs px-2 py-1 rounded">
              {newsItem.category}
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {newsItem.title}
          </h1>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center mr-4">
              <FiClock className="mr-1" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center">
              <FiClock className="mr-1" />
              <span>{readTime} 分鐘閱讀</span>
            </div>
          </div>
          
          {/* 社交分享 */}
          <div className="flex items-center mb-6">
            <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
              <FiShare2 className="inline mr-1" /> 分享:
            </span>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Share on Facebook">
                <FiFacebook />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Share on Twitter">
                <FiTwitter />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Share on LinkedIn">
                <FiLinkedin />
              </button>
            </div>
          </div>
          
          {/* 主要圖片 */}
          <div className="relative h-64 md:h-80 mb-6">
            <Image
              src={newsItem.imageUrl}
              alt={newsItem.title}
              className="object-cover rounded-md"
              fill
              priority
            />
          </div>
          
          {/* 文章內容 */}
          <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
            {content.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* 標籤 */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold mb-2">標籤:</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                {newsItem.category}
              </span>
              <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                新聞
              </span>
              <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                最新報導
              </span>
            </div>
          </div>
          
          {/* 相關新聞 */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
            <h2 className="text-xl font-bold mb-4">相關新聞</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedNews.map((item) => (
                <NewsCard key={item.id} news={item} size="small" />
              ))}
            </div>
          </div>
        </div>
        
        {/* 側邊欄 */}
        <div>
          <div className="sticky top-20">
            <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
              <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                熱門新聞
              </h3>
              <div className="space-y-3">
                {breakingNews.map((item, index) => (
                  <div key={item.id} className="flex space-x-2">
                    <span className="text-[rgb(var(--primary-color))] font-bold">
                      {index + 1}
                    </span>
                    <a
                      href={item.url}
                      className="text-sm hover:text-[rgb(var(--primary-color))]"
                    >
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
              <h3 className="text-lg font-bold mb-4">訂閱電子報</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                獲取最新新聞和獨家報導，直接發送到您的郵箱
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="您的電子郵件地址"
                  className="w-full p-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary-color))] dark:bg-gray-700"
                />
                <button
                  type="submit"
                  className="w-full p-2 text-sm bg-[rgb(var(--primary-color))] text-white rounded-md hover:bg-red-700"
                >
                  訂閱
                </button>
              </form>
            </div>

            <div className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-md">
              <div className="aspect-w-16 aspect-h-9 mb-2">
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=300&h=200&auto=format&fit=crop"
                  alt="廣告"
                  width={300}
                  height={200}
                  className="rounded-md w-full h-auto"
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                廣告
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 