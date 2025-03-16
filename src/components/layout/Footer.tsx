"use client";

import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
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

const companyLinks = [
  { name: "關於我們", href: "/about" },
  { name: "聯繫我們", href: "/contact" },
  { name: "隱私政策", href: "/privacy" },
  { name: "使用條款", href: "/terms" },
  { name: "廣告資訊", href: "/advertising" },
  { name: "工作機會", href: "/careers" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="cnn-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and social links */}
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              最新新聞、突發新聞、視頻和評論
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--primary-color))]"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--primary-color))]"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--primary-color))]"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--primary-color))]"
                aria-label="YouTube"
              >
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              新聞分類
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--primary-color))]"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              公司
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[rgb(var(--primary-color))]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} BNN 新聞網。此網站僅作為演示目的。
          </p>
        </div>
      </div>
    </footer>
  );
} 