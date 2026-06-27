import { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/lib/data/blogPosts";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Blog | Çilingir Rehberi — Çelik Çilingir",
  description: "Kapı açma, kilit değişimi, güvenlik sistemleri ve oto çilingir hakkında güncel rehberler, fiyat listeleri ve ipuçları.",
  alternates: {
    canonical: "https://celikcilingir.com/blog",
  },
  openGraph: {
    title: "Blog | Çilingir Rehberi — Çelik Çilingir",
    description: "Kapı açma, kilit değişimi, güvenlik sistemleri ve oto çilingir hakkında güncel rehberler.",
    url: "https://celikcilingir.com/blog",
  }
};

export default function BlogListingPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const selectedCategory = searchParams.category || "all";

  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <nav className="flex items-center justify-center gap-2 text-sm font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-primary font-semibold">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Çilingir Rehberi
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            İpuçları, güncel fiyatlar ve bölge bilgileri
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Link
            href="/blog"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
              selectedCategory === "all"
                ? "bg-primary text-black"
                : "bg-surface border border-white/10 text-slate-300 hover:text-white hover:border-primary/50"
            }`}
          >
            Tümü
          </Link>
          {blogCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog?category=${cat.slug}`}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                selectedCategory === cat.slug
                  ? "bg-primary text-black"
                  : "bg-surface border border-white/10 text-slate-300 hover:text-white hover:border-primary/50"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredPosts.map((post) => {
            const categoryName = blogCategories.find(c => c.slug === post.category)?.name || post.category;
            
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-surface rounded-2xl border border-white/5 overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                      {categoryName}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500 mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString("tr-TR", { month: "long", year: "numeric", day: "numeric" })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-primary font-bold text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Devamını Oku <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            Bu kategoride henüz yazı bulunmamaktadır.
          </div>
        )}
      </div>

      <CTASection />
    </main>
  );
}
