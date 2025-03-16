"use client";

import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "./NewsCard";
import NewsCard from "./NewsCard";

interface HeroSectionProps {
  mainNews: NewsItem;
  sideNews: NewsItem[];
}

export default function HeroSection({ mainNews, sideNews }: HeroSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* 主要新聞 */}
      <div className="lg:col-span-2">
        <div className="relative rounded-md overflow-hidden h-64 md:h-96">
          <Image
            src={mainNews.imageUrl}
            alt={mainNews.title}
            className="object-cover transition-transform duration-300 hover:scale-105"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 p-6 flex flex-col justify-end">
            <div>
              <span className="inline-block bg-[rgb(var(--primary-color))] text-white text-xs px-2 py-1 rounded mb-2">
                {mainNews.category}
              </span>
              <Link href={mainNews.url}>
                <h1 className="text-xl md:text-3xl font-bold text-white hover:underline">
                  {mainNews.title}
                </h1>
              </Link>
              <p className="mt-2 text-sm md:text-base text-gray-200 line-clamp-2">
                {mainNews.description}
              </p>
              <div className="mt-2">
                <span className="text-xs text-gray-300">
                  {new Date(mainNews.date).toLocaleDateString("zh-TW", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 側邊新聞 */}
      <div className="space-y-4">
        {sideNews.map((news) => (
          <NewsCard key={news.id} news={news} size="small" />
        ))}
      </div>
    </div>
  );
} 