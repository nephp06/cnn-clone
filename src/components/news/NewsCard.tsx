import Link from "next/link";
import Image from "next/image";

export interface NewsItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  url: string;
  date: string;
}

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
  size?: "small" | "medium" | "large";
}

export default function NewsCard({ news, featured = false, size = "medium" }: NewsCardProps) {
  const { title, description, imageUrl, category, url, date } = news;

  // 調整尺寸相關的樣式
  const getImageSize = () => {
    switch (size) {
      case "small":
        return "h-32";
      case "large":
        return "h-64 md:h-80";
      case "medium":
      default:
        return "h-48";
    }
  };

  const getTitleSize = () => {
    if (featured) return "text-xl md:text-2xl lg:text-3xl font-bold";
    switch (size) {
      case "small":
        return "text-base font-semibold";
      case "large":
        return "text-xl md:text-2xl font-bold";
      case "medium":
      default:
        return "text-lg font-semibold";
    }
  };

  return (
    <div className={`overflow-hidden rounded-md shadow-sm border border-gray-200 dark:border-gray-800 ${featured ? "bg-gray-50 dark:bg-gray-900" : "bg-white dark:bg-gray-800"}`}>
      <Link href={url} className="block">
        <div className={`relative ${getImageSize()} overflow-hidden`}>
          <Image
            src={imageUrl}
            alt={title}
            className="object-cover transition-transform duration-300 hover:scale-105"
            fill
          />
          {category && (
            <span className="absolute top-2 left-2 bg-[rgb(var(--primary-color))] text-white text-xs px-2 py-1 rounded">
              {category}
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className={getTitleSize()}>
            {title}
          </h3>
          {(description && (featured || size === "large")) && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description.length > 120 ? `${description.substring(0, 120)}...` : description}
            </p>
          )}
          <div className="mt-2 flex justify-between items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(date).toLocaleDateString("zh-TW", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {featured && (
              <span className="text-xs text-[rgb(var(--primary-color))]">
                閱讀更多 →
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
} 