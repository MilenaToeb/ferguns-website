'use client';
import Header from '../components/header';
import Footer from '../components/footer';

export default function CatalogPage() {
  const menu = [
    { title: 'Home', path: '/' },
    { title: 'Catalog', path: '/catalog' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Header menu={menu} />

      <main className="flex flex-1 flex-col items-center justify-center py-32 px-16">
        <h1 className="text-3xl font-bold text-black dark:text-white">Catalog Page</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-4">
          Here you can display your products.
        </p>
      </main>

      <Footer menu={menu} />
    </div>
  );
}
