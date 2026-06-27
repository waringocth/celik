import Link from "next/link";
import { blogPosts, blogCategories } from "@/lib/data/blogPosts";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export default function BlogPreviewSection() {
  // Show latest 3 posts
  const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Çilingir Rehberi
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Kapı açma, kilit değişimi ve güvenlik hakkında bilmeniz gerekenler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post) => {
            const categoryName = blogCategories.find(c => c.slug === post.category)?.name || post.category;
            
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-background rounded-2xl border border-white/5 overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1 shadow-lg"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                      {categoryName}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
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

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/5 border-2 border-white/10 hover:border-primary/50 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 group"
          >
            Tüm Yazıları Gör
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
