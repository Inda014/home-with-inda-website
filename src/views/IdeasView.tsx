import React from 'react';
import { ArrowLeft, BookOpen, Clock, Calendar, Share2, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { Article, Inspiration, ProductItem, ViewState } from '../types';
import { InspirationCard } from '../components/InspirationCard';
import { generatePinterestShareUrl } from '../utils/seo';

interface IdeasViewProps {
  articles: Article[];
  activeArticleSlug?: string;
  inspirations: Inspiration[];
  products: ProductItem[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectInspiration: (slug: string) => void;
  onSelectArticle: (articleSlug: string) => void;
  onNavigate: (view: ViewState) => void;
}

export const IdeasView: React.FC<IdeasViewProps> = ({
  articles,
  activeArticleSlug,
  inspirations,
  products,
  savedIds,
  onToggleSave,
  onSelectInspiration,
  onSelectArticle,
  onNavigate
}) => {
  const currentArticle = activeArticleSlug
    ? articles.find((a) => a.slug === activeArticleSlug)
    : null;

  // Single article view
  if (currentArticle) {
    const featuredDesigns = inspirations.filter((i) =>
      currentArticle.featuredDesignIds.includes(i.id)
    );
    const recommendedProducts = products.filter((p) =>
      currentArticle.recommendedProductIds.includes(p.id)
    );
    const otherArticles = articles.filter((a) => a.id !== currentArticle.id).slice(0, 2);

    const handlePin = () => {
      const pinUrl = generatePinterestShareUrl(
        window.location.href,
        currentArticle.heroImage,
        currentArticle.title
      );
      window.open(pinUrl, '_blank', 'noopener,noreferrer');
    };

    return (
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* Top navigation */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E6DFD3]">
          <button
            onClick={() => onNavigate({ type: 'ideas' })}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#7A6A58] hover:text-[#1A1816]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Decor Guides</span>
          </button>

          <button
            onClick={handlePin}
            className="px-3 py-1.5 bg-[#E60023] hover:bg-[#C9001F] text-white text-xs rounded font-medium flex items-center gap-1.5 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Pin This Guide</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="space-y-6 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-xs text-[#7A6A58]">
            <span className="uppercase tracking-widest font-semibold text-[#1A1816] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E6DFD3]">
              {currentArticle.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {currentArticle.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1816] font-normal leading-[1.15]">
            {currentArticle.title}
          </h1>

          <p className="text-base sm:text-lg text-[#5E5041] leading-relaxed font-light">
            {currentArticle.subtitle}
          </p>

          {/* Author meta */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <img
              src={currentArticle.author.avatar}
              alt={currentArticle.author.name}
              className="w-10 h-10 rounded-full object-cover border border-[#E6DFD3]"
            />
            <div className="text-left text-xs">
              <div className="font-medium text-[#1A1816]">{currentArticle.author.name}</div>
              <div className="text-[#7A6A58]">{currentArticle.author.role} • {currentArticle.publishedDate}</div>
            </div>
          </div>
        </header>

        {/* Hero image */}
        <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-md border border-[#E6DFD3] bg-[#F3EFE6]">
          <img
            src={currentArticle.heroImage}
            alt={currentArticle.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Excerpt callout */}
        <div className="p-6 bg-[#FAF7F2] rounded-xl border-l-4 border-[#998873] border-y border-r border-[#E6DFD3] text-sm text-[#4E443B] leading-relaxed font-serif italic text-lg">
          "{currentArticle.excerpt}"
        </div>

        {/* Article Sections */}
        <div className="space-y-10 text-[#3E342B] leading-relaxed text-base">
          {currentArticle.contentSections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-serif text-[#1A1816] font-medium pt-4">
                {section.heading}
              </h2>
              <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-[#4E443B]">
                {section.body}
              </div>

              {section.tip && (
                <div className="p-4 rounded-lg bg-[#F3EFE6] border border-[#E6DFD3] flex items-start gap-3 text-xs text-[#2C2926]">
                  <Sparkles className="w-4 h-4 text-[#998873] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-0.5">Interior Designer Tip:</strong>
                    <span>{section.tip}</span>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Featured Inspiration Spaces in this guide */}
        {featuredDesigns.length > 0 && (
          <div className="pt-12 border-t border-[#E6DFD3] space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7A6A58] font-medium">As Seen In This Guide</span>
              <h3 className="text-2xl font-serif text-[#1A1816]">Featured Interior Spaces</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredDesigns.map((item) => (
                <InspirationCard
                  key={item.id}
                  inspiration={item}
                  isSaved={savedIds.includes(item.id)}
                  onToggleSave={onToggleSave}
                  onSelect={onSelectInspiration}
                />
              ))}
            </div>
          </div>
        )}

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <div className="pt-12 border-t border-[#E6DFD3] space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7A6A58] font-medium">Shop the Story</span>
                <h3 className="text-2xl font-serif text-[#1A1816]">Curated Decor Elements</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommendedProducts.map((prod) => (
                <div key={prod.id} className="p-4 bg-[#FAF7F2] rounded-lg border border-[#E6DFD3] flex gap-4">
                  <img src={prod.imageUrl} alt={prod.title} className="w-20 h-20 object-cover rounded shrink-0 bg-white" />
                  <div className="flex-1 min-w-0 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#7A6A58]">{prod.category}</span>
                    <h4 className="text-sm font-serif font-medium text-[#1A1816] truncate">{prod.title}</h4>
                    <p className="text-xs text-[#5E5041] line-clamp-1">{prod.curatorNote}</p>
                    <span className="text-xs font-mono text-[#1A1816] block">{prod.priceRange}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Guides */}
        <div className="pt-12 border-t border-[#E6DFD3] space-y-6">
          <h3 className="text-2xl font-serif text-[#1A1816]">More Decor Guides to Read</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => onSelectArticle(art.slug)}
                className="group cursor-pointer p-4 rounded-xl bg-white border border-[#E6DFD3] hover:border-[#998873] space-y-3 transition-all"
              >
                <div className="aspect-[16/10] rounded-lg overflow-hidden bg-[#F3EFE6]">
                  <img src={art.heroImage} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-semibold text-[#7A6A58]">{art.category} • {art.readTime}</span>
                  <h4 className="text-base font-serif font-medium text-[#1A1816] group-hover:text-[#4A3F35]">{art.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    );
  }

  // Articles Hub Directory
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <div className="pb-6 border-b border-[#E6DFD3]">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">The Editorial Journal</span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1816] mt-1 font-normal">
          Decorating Ideas & Design Tips
        </h1>
        <p className="text-sm text-[#5E5041] mt-2 max-w-2xl font-light">
          Deep-dive guides on color theory, textile layering, lighting temperatures, and spatial planning written for thoughtful homes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <article
            key={article.id}
            onClick={() => onSelectArticle(article.slug)}
            className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-[#E6DFD3] hover:border-[#998873] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-[#F3EFE6]">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#7A6A58]">
                  <span className="uppercase tracking-wider font-semibold text-[#1A1816]">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-2xl font-serif text-[#1A1816] font-medium leading-snug group-hover:text-[#4A3F35]">
                  {article.title}
                </h2>
                <p className="text-xs text-[#5E5041] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="pt-4 border-t border-[#E6DFD3]/60 flex items-center justify-between text-xs text-[#7A6A58]">
                <span>By {article.author.name}</span>
                <span className="font-medium text-[#1A1816] group-hover:underline flex items-center gap-1">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
