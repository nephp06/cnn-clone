import NewsCard, { NewsItem } from "./NewsCard";

interface NewsListProps {
  title?: string;
  news: NewsItem[];
  columns?: 1 | 2 | 3 | 4;
  size?: "small" | "medium" | "large";
}

export default function NewsList({ title, news, columns = 3, size = "medium" }: NewsListProps) {
  const getGridCols = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
      case 3:
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className="mb-8">
      {title && (
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          {title}
        </h2>
      )}
      <div className={`grid ${getGridCols()} gap-6`}>
        {news.map((item) => (
          <NewsCard key={item.id} news={item} size={size} />
        ))}
      </div>
    </div>
  );
} 