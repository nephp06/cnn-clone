"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";
import Logo from "./Logo";

const categories = [
  { name: "最新", href: "/" },
  { name: "政治", href: "/politics" },
  { name: "商業", href: "/business" },
  { name: "健康", href: "/health" },
  { name: "娛樂", href: "/entertainment" },
  { name: "體育", href: "/sports" },
  { name: "技術", href: "/tech" },
  { name: "旅遊", href: "/travel" },
  { name: "風格", href: "/style" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="cnn-container">
        {/* Top bar with logo and controls */}
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation (hidden on mobile) */}
          <nav className="hidden md:flex items-center space-x-4">
            {categories.slice(0, 5).map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm font-medium text-gray-700 hover:text-[rgb(var(--primary-color))] dark:text-gray-300 dark:hover:text-white px-2 py-1"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search and user */}
          <div className="flex items-center space-x-2">
            <button
              className="p-2 text-gray-600 dark:text-gray-300"
              aria-label="Search"
            >
              <FiSearch size={20} />
            </button>
            <button
              className="p-2 text-gray-600 dark:text-gray-300"
              aria-label="User account"
            >
              <FiUser size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-2 py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="grid grid-cols-2 gap-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-sm font-medium text-gray-700 hover:text-[rgb(var(--primary-color))] dark:text-gray-300 dark:hover:text-white px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
        
        {/* Secondary Navigation */}
        <div className="hidden md:block border-t border-gray-200 dark:border-gray-800">
          <nav className="flex overflow-x-auto py-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm font-medium text-gray-700 hover:text-[rgb(var(--primary-color))] dark:text-gray-300 dark:hover:text-white px-4 py-1"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
} 