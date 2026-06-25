import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("estonia")!).render(
  <div className="min-h-screen bg-gray-50">
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">エストニア情報</h1>
      </div>
    </header>

    <main className="container mx-auto p-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">エストニア情報</h2>
        <p className="text-gray-700 leading-relaxed">
          ここはエストニアに関する情報を提供するページです。エストニアの文化、歴史、観光、ビジネスなど、様々な情報をお届けします。
        </p>
      </div>
    </main>

    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; 2024 エストニア情報</p>
    </footer>
  </div>
);
