'use client';

import Image from 'next/image';
import Link from 'next/link';

export type MenuItem = {
  title: string;
  path: string;
};

type HeaderProps = {
  menu: MenuItem[];
};

export default function Header({ menu }: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row items-center sm:justify-between px-6 py-4 bg-white dark:bg-black shadow-md w-full">
      {/* Logo */}
      <Link href="/"
      className="flex items-center mb-4 sm:mb-0"
      >
        <Image
          className="dark:invert"
          src="/images/Logo/logoF.png"
          alt="Ferguns Logo"
          width={200}
          height={50}
          priority
        />
      </Link>

      {/* Menu Titles */}
      <nav className="w-full sm:w-auto">
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-black dark:text-white font-medium items-center justify-center">
          {menu.map((item) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className="hover:underline hover:text-zinc-600 dark:hover:text-zinc-300"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
