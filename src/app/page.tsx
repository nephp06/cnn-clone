import Image from "next/image";
import BreakingNewsSlider from "@/components/news/BreakingNewsSlider";
import HeroSection from "@/components/news/HeroSection";
import NewsList from "@/components/news/NewsList";
import {
  breakingNews,
  mainNews,
  sideNews,
  technologyNews,
  politicsNews,
  healthNews,
  entertainmentNews,
  sportsNews,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="cnn-container py-4">
      {/* 突發新聞輪播 */}
      <BreakingNewsSlider news={breakingNews} />

      {/* 英雄區 */}
      <HeroSection mainNews={mainNews} sideNews={sideNews} />

      {/* 主要內容區 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左側內容 - 佔據2/3寬度 */}
        <div className="lg:col-span-2">
          <NewsList title="科技" news={technologyNews} columns={1} size="large" />
          <NewsList title="政治" news={politicsNews} columns={1} size="large" />
        </div>

        {/* 右側邊欄 - 佔據1/3寬度 */}
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

      {/* 底部新聞版塊 */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          更多新聞
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <NewsList title="健康" news={healthNews} columns={1} size="medium" />
          <NewsList title="娛樂" news={entertainmentNews} columns={1} size="medium" />
        </div>
        <NewsList title="體育" news={sportsNews} columns={3} size="medium" />
      </div>
    </div>
  );
}
