import { Metadata } from "next";
import NewsList from "@/components/news/NewsList";
import { 
  technologyNews, 
  politicsNews, 
  healthNews, 
  entertainmentNews, 
  sportsNews 
} from "@/lib/data";

type CategoryParams = {
  params: {
    category: string;
  };
};

// 生成動態元數據
export async function generateMetadata({ params }: CategoryParams): Promise<Metadata> {
  const category = params?.category;
  
  const categoryTitles: Record<string, string> = {
    politics: "政治",
    business: "商業",
    health: "健康",
    entertainment: "娛樂",
    sports: "體育",
    tech: "科技",
    travel: "旅遊",
    style: "風格",
  };

  const title = categoryTitles[category] || category;

  return {
    title: `${title} 新聞 | BNN 新聞網`,
    description: `查看最新 ${title} 新聞、分析和觀點`,
  };
}

export default async function CategoryPage({ params }: CategoryParams) {
  const category = params?.category;
  
  // 獲取對應類別的新聞
  const getCategoryNews = () => {
    switch (category) {
      case "politics":
        return politicsNews;
      case "tech":
        return technologyNews;
      case "health":
        return healthNews;
      case "entertainment":
        return entertainmentNews;
      case "sports":
        return sportsNews;
      // 對於其他類別，可以返回空數組或一些通用數據
      default:
        // 混合所有新聞以表示通用數據
        return [...technologyNews, ...politicsNews, ...healthNews, ...entertainmentNews, ...sportsNews].slice(0, 6);
    }
  };

  const categoryTitles: Record<string, string> = {
    politics: "政治",
    business: "商業",
    health: "健康",
    entertainment: "娛樂",
    sports: "體育",
    tech: "科技",
    travel: "旅遊",
    style: "風格",
  };

  const title = categoryTitles[category] || category;
  const news = getCategoryNews();

  return (
    <div className="cnn-container py-8">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
        {title} 新聞
      </h1>

      {news.length > 0 ? (
        <NewsList news={news} columns={3} size="medium" />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            暫無相關新聞
          </p>
        </div>
      )}
    </div>
  );
} 