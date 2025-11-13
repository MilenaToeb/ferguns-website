'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type MenuItem = {
  title: string;
  path: string;
};

type FooterProps = {
  menu: MenuItem[];
};

export default function Footer({ menu }: FooterProps) {
  const pathname = usePathname();

  return (
    <footer className="bg-white dark:bg-black py-6 px-6 shadow-inner mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Menu Links */}
        <nav>
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-black dark:text-white font-medium items-center justify-center">
            {menu.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className={`hover:underline hover:text-zinc-600 dark:hover:text-zinc-300 ${
                    pathname === item.path
                      ? 'underline text-black dark:text-neutral-300'
                      : ''
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Optional copyright */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Ferguns. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
