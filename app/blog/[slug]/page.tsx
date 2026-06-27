import { notFound } from "next/navigation";
import { blogPosts, blogCategories } from "@/lib/data/blogPosts";
import { PHONE_URL, WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/utils/metadata";
import Link from "next/link";
import { Calendar, Clock, Phone, ChevronRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Çelik Çilingir`,
    description: post.excerpt,
    alternates: {
      canonical: `https://celikcilingir.com/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://celikcilingir.com/blog/${post.slug}`,
      publishedTime: post.date,
    }
  };
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.855L.057 23.882a.5.5 0 00.614.596l6.228-1.633A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.878 9.878 0 01-5.031-1.374l-.36-.214-3.733.979.997-3.645-.235-.374A9.861 9.861 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1c5.466 0 9.9 4.433 9.9 9.9 0 5.466-4.434 9.9-9.9 9.9z"/>
  </svg>
);

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const categoryName = blogCategories.find((c) => c.slug === post.category)?.name || post.category;

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.district === post.district))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": "https://celikcilingir.com/logo.png",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Çelik Çilingir",
      "url": "https://celikcilingir.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Çelik Çilingir",
      "logo": {
        "@type": "ImageObject",
        "url": "https://celikcilingir.com/logo.png"
      }
    },
    "description": post.excerpt
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-500">{post.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* ARTICLE CONTENT */}
            <article className="flex-1 w-full lg:max-w-[760px]">
              <header className="mb-10 pb-10 border-b border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <Link href={`/blog?category=${post.category}`} className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full hover:bg-primary hover:text-black transition-colors">
                    {categoryName}
                  </Link>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString("tr-TR", { month: "long", year: "numeric", day: "numeric" })}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                  {post.title}
                </h1>

                <p className="text-xl text-slate-300 leading-relaxed font-medium">
                  {post.excerpt}
                </p>
              </header>

              <div 
                className="prose prose-invert prose-lg max-w-none 
                prose-h2:text-amber-500 prose-h2:font-black prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-slate-200 prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-slate-300 prose-ul:mb-8 prose-li:mb-2
                prose-ol:text-slate-300 prose-ol:mb-8 prose-li:mb-2
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* SIDEBAR (Sticky) */}
            <aside className="w-full lg:w-[320px] shrink-0 sticky top-32">
              <div className="glass rounded-2xl p-6 border border-white/10 shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-black text-white text-center mb-2">Acil Çilingir Lazım Mı?</h3>
                <p className="text-slate-400 text-sm text-center mb-6">
                  7/24 kesintisiz hizmet veren mobil ekiplerimizle ortalama 15 dakikada adresinizdeyiz.
                </p>

                <div className="flex flex-col gap-3">
                  <a href={PHONE_URL} className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-transform hover:-translate-y-1">
                    <Phone size={20} className="animate-pulse" />
                    {PHONE_DISPLAY}
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold rounded-xl transition-transform hover:-translate-y-1">
                    <WhatsAppIcon />
                    WhatsApp&apos;tan Yaz
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-surface border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-black text-white mb-10">İlgili Yazılar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => {
                const catName = blogCategories.find(c => c.slug === rPost.category)?.name || rPost.category;
                return (
                  <Link
                    key={rPost.slug}
                    href={`/blog/${rPost.slug}`}
                    className="group flex flex-col bg-background rounded-2xl border border-white/5 overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
                  >
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                          {catName}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {rPost.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                        {rPost.excerpt}
                      </p>
                      <div className="flex items-center gap-1 text-primary font-bold text-sm mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        Devamını Oku <ChevronRight size={16} />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      <CTASection />
    </>
  );
}
