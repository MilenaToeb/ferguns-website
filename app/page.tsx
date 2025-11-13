'use client';
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  const menu = [
    { title: 'Home', path: '/' },
    { title: 'Catalog', path: '/catalog' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];
  return (
    
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Reusable Header */}
      <Header menu={menu} />
      {/* Main content */}
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome!
          </h1>
          <h2 className="max-w-md text-2xl font-medium leading-7 text-zinc-700 dark:text-zinc-300">
            This is a starter template for a Next.js website with Tailwind CSS and Dark Mode support.
          </h2>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Testing this
          </p>

        </div>
        
      </main>
      <Footer menu={menu} />
    </div>
  );
}
