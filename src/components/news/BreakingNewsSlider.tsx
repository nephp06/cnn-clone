"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NewsItem } from "./NewsCard";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

interface BreakingNewsSliderProps {
  news: NewsItem[];
}

export default function BreakingNewsSlider({ news }: BreakingNewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === news.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? news.length - 1 : prev - 1));
  };

  // 自動滾動
  useEffect(() => {
    if (news.length <= 1) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [news.length]);

  if (!news.length) return null;

  return (
    <div className="relative bg-[rgb(var(--primary-color))] text-white px-4 py-2 mb-4 overflow-hidden">
      <div className="flex items-center">
        <div className="font-bold mr-4 whitespace-nowrap">突發新聞</div>
        <div className="overflow-hidden relative flex-1">
          <div
            className="transition-all duration-500 ease-in-out flex whitespace-nowrap"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {news.map((item) => (
              <div
                key={item.id}
                className="w-full inline-block"
              >
                <Link href={item.url} className="hover:underline">
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center ml-4">
          <button
            onClick={prevSlide}
            className="p-1 rounded-full hover:bg-red-800 focus:outline-none"
            aria-label="Previous news"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="p-1 rounded-full hover:bg-red-800 focus:outline-none ml-1"
            aria-label="Next news"
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
} 