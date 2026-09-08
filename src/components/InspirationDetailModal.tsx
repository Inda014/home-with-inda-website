import React, { useEffect } from 'react';
import {
  X,
  Heart,
  Share2,
  ExternalLink,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  BookmarkCheck,
  Palette,
  Check,
  Layers,
  ArrowRight,
  Info
} from 'lucide-react';
import { Inspiration, ProductItem, Article, Collection } from '../types';
import { generatePinterestShareUrl, updateSEO } from '../utils/seo';

interface InspirationDetailModalProps {
  inspiration: Inspiration | null;
  allInspirations: Inspiration[];
  allProducts: ProductItem[];
  allArticles: Article[];
  allCollections: Collection[];
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onClose: () => void;
  onSelectInspiration: (slug: string) => void;
  onSelectRoom: (roomSlug: string) => void;
  onSelectStyle: (styleSlug: string) => void;
  onSelectCollection: (collectionSlug: string) => void;
  onSelectArticle: (articleSlug: string) => void;
  onSelectColor: (colorName: string) => void;
}

export const InspirationDetailModal: React.FC<InspirationDetailModalProps> = ({
  inspiration,
  allInspirations,
  allProducts,
  allArticles,
  allCollections,
  isSaved,
  onToggleSave,
  onClose,
  onSelectInspiration,
  onSelectRoom,
  onSelectStyle,
  onSelectCollection,
  onSelectArticle,
  onSelectColor
}) => {
  useEffect(() => {
    if (inspiration) {
      updateSEO(
        inspiration.title,
        inspiration.description,
        inspiration.imageUrl
      );
      // lock background body scroll
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [inspiration]);

  if (!inspiration) return null;

  // Next / Previous navigation
  const currentIndex = allInspirations.findIndex((x) => x.id === inspiration.id);
  const prevInspiration = currentIndex > 0 ? allInspirations[currentIndex - 1] : allInspirations[allInspirations.length - 1];
  const nextInspiration = currentIndex < allInspirations.length - 1 ? allInspirations[currentIndex + 1] : allInspirations[0];

  // Related data
  const relatedDesigns = allInspirations.filter(
    (item) => inspiration.relatedDesignIds.includes(item.id) || (item.room === inspiration.room && item.id !== inspiration.id)
  ).slice(0, 3);

  const matchedProducts = allProducts.filter(
    (p) => inspiration.relatedProductIds?.includes(p.id) || p.room === inspiration.room
  ).slice(0, 3);

  const matchedArticles = allArticles.filter(
    (a) => inspiration.relatedArticleIds?.includes(a.id) || a.relatedRoom === inspiration.room
  ).slice(0, 2);

  const matchedCollection = allCollections.find((c) => c.id === inspiration.collectionId);

  const handlePinterestShare = () => {
    const url = generatePinterestShareUrl(
      window.location.href,
      inspiration.imageUrl,
      inspiration.title
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    alert('Link to this space copied to clipboard!');
  };

  // Convert room to slug
  const roomSlug = inspiration.room.toLowerCase().replace(/\s+/g, '-');
  const styleSlug = inspiration.style.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm overflow-y-auto p-2 sm:p-4 md:p-6">
      <div className="relative w-full max-w-5xl bg-[#FDFBF7] text-[#2C2926] rounded-xl shadow-2xl border border-[#E6DFD3] my-4 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#E6DFD3] bg-[#FAF7F2] shrink-0">
          {/* Breadcrumb links */}
          <div className="flex items-center gap-1.5 text-xs text-[#7A6A58] truncate">
            <button
              onClick={() => onSelectRoom(roomSlug)}
              className="hover:text-[#1A1816] hover:underline font-medium"
            >
              {inspiration.room}
            </button>
            <span>/</span>
            <button
              onClick={() => onSelectStyle(styleSlug)}
              className="hover:text-[#1A1816] hover:underline font-medium"
            >
              {inspiration.style}
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {/* Prev / Next */}
            <div className="hidden sm:flex items-center gap-1 mr-2 border-r border-[#E6DFD3] pr-2">
              <button
                onClick={() => onSelectInspiration(prevInspiration.slug)}
                className="p-1.5 hover:bg-[#E6DFD3] rounded text-[#5E5041] hover:text-[#1A1816] transition-colors"
                title="Previous Space"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectInspiration(nextInspiration.slug)}
                className="p-1.5 hover:bg-[#E6DFD3] rounded text-[#5E5041] hover:text-[#1A1816] transition-colors"
                title="Next Space"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Save to Pinterest */}
            <button
              onClick={handlePinterestShare}
              className="px-3 py-1.5 text-xs bg-[#E60023] hover:bg-[#C9001F] text-white rounded flex items-center gap-1.5 font-medium transition-colors"
            >
              <Share2 className="w-3 h-3" />
              <span>Save Pin</span>
            </button>

            {/* Save to Moodboard */}
            <button
              onClick={() => onToggleSave(inspiration.id)}
              className={`p-2 rounded-full border transition-colors ${
                isSaved
                  ? 'bg-[#2C2926] text-white border-[#2C2926]'
                  : 'bg-white hover:bg-[#FAF7F2] text-[#2C2926] border-[#E6DFD3]'
              }`}
              title="Save to your moodboard"
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 text-[#7A6A58] hover:text-[#1A1816] hover:bg-[#E6DFD3]/50 rounded-full transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-10">
          {/* Main Hero Showcase: Image & Primary Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Large Editorial Image */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-lg overflow-hidden bg-[#F3EFE6] border border-[#E6DFD3]">
                <img
                  src={inspiration.imageUrl}
                  alt={inspiration.imageAlt || inspiration.title}
                  className="w-full h-auto max-h-[650px] object-cover"
                />
              </div>

              {/* Image Attribution */}
              <div className="flex items-center justify-between text-[11px] text-[#7A6A58] px-1">
                <span>
                  Photo source: <strong>{inspiration.sourceAttribution.author}</strong> ({inspiration.sourceAttribution.platform})
                </span>
                <span className="font-mono">{inspiration.sourceAttribution.license}</span>
              </div>
            </div>

            {/* Right: Narrative, Color Swatches, Room Breakdown */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-0.5 bg-[#FAF7F2] text-[#7A6A58] border border-[#E6DFD3] rounded-full">
                    {inspiration.room}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-0.5 bg-[#FAF7F2] text-[#7A6A58] border border-[#E6DFD3] rounded-full">
                    {inspiration.style}
                  </span>
                  <span className="text-[11px] text-[#7A6A58] font-mono ml-auto">
                    Est. Budget {inspiration.budgetLevel}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-serif text-[#1A1816] font-normal leading-tight">
                  {inspiration.title}
                </h1>
              </div>

              <p className="text-sm text-[#4E443B] leading-relaxed">
                {inspiration.description}
              </p>

              {/* Color Palette Extraction */}
              <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E6DFD3] space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A6A58]">
                  <Palette className="w-3.5 h-3.5 text-[#998873]" />
                  <span>Color Direction & Swatches</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {inspiration.colorPalette.map((swatch) => (
                    <button
                      key={swatch.name}
                      onClick={() => onSelectColor(swatch.name)}
                      className="flex items-center gap-2.5 p-2 rounded bg-white border border-[#E6DFD3] hover:border-[#998873] text-left transition-colors group"
                      title={`Filter designs featuring ${swatch.name}`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-black/10 shrink-0 shadow-inner"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-medium text-[#1A1816] truncate group-hover:text-[#4A3F35]">
                          {swatch.name}
                        </div>
                        <div className="text-[10px] font-mono text-[#7A6A58] uppercase">
                          {swatch.hex}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <span className="block text-[11px] text-[#7A6A58] italic">
                  Tip: Click any swatch above to discover all spaces using this exact color tone.
                </span>
              </div>

              {/* Decorating Breakdown: 3 Practical Rules */}
              {inspiration.decorTips && inspiration.decorTips.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A6A58]">
                    <Sparkles className="w-3.5 h-3.5 text-[#998873]" />
                    <span>How to Recreate This Space</span>
                  </div>
                  <ul className="space-y-2.5">
                    {inspiration.decorTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#4E443B] leading-relaxed">
                        <span className="w-4 h-4 rounded-full bg-[#E6DFD3] text-[#1A1816] font-mono text-[10px] font-medium flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Featured in Collection */}
              {matchedCollection && (
                <div className="p-4 rounded-lg bg-white border border-[#E6DFD3] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#7A6A58] font-medium">Curated Collection</span>
                    <div className="font-serif text-sm font-semibold text-[#1A1816]">{matchedCollection.title}</div>
                  </div>
                  <button
                    onClick={() => onSelectCollection(matchedCollection.slug)}
                    className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#F3EFE6] text-xs font-medium text-[#1A1816] border border-[#E6DFD3] rounded transition-colors whitespace-nowrap"
                  >
                    View Edit →
                  </button>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {inspiration.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] bg-white border border-[#E6DFD3] text-[#5E5041] rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Shop the Look / Coordinated Elements */}
          {matchedProducts.length > 0 && (
            <div className="pt-8 border-t border-[#E6DFD3] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#7A6A58] font-medium">Curated Recommendation</span>
                  <h3 className="text-xl font-serif text-[#1A1816]">Shop Similar Elements for this Room</h3>
                </div>
                <span className="text-[11px] text-[#7A6A58] hidden sm:inline">
                  Affiliate recommendation framework
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {matchedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-3 bg-white rounded-lg border border-[#E6DFD3] flex flex-col justify-between space-y-2"
                  >
                    <div className="aspect-[4/3] rounded overflow-hidden bg-[#F3EFE6] mb-1">
                      <img
                        src={prod.imageUrl}
                        alt={prod.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#7A6A58]">{prod.category}</div>
                      <h4 className="text-xs font-serif font-medium text-[#1A1816] line-clamp-2">{prod.title}</h4>
                      <div className="text-xs font-mono text-[#5E5041] mt-1">{prod.priceRange}</div>
                    </div>
                    <p className="text-[11px] text-[#7A6A58] line-clamp-2">{prod.curatorNote}</p>
                    <div className="pt-2 border-t border-[#E6DFD3]/60 flex items-center justify-between text-[11px]">
                      <span className="text-[#7A6A58]">{prod.retailerNote}</span>
                      <a
                        href={`https://pinterest.com/search/pins/?q=${encodeURIComponent(prod.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#1A1816] hover:underline flex items-center gap-1"
                      >
                        Explore <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Decor Guides (Articles) */}
          {matchedArticles.length > 0 && (
            <div className="pt-8 border-t border-[#E6DFD3] space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7A6A58] font-medium">Editorial Reading</span>
                <h3 className="text-xl font-serif text-[#1A1816]">Learn the Design Principles</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchedArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => onSelectArticle(art.slug)}
                    className="flex gap-4 p-4 rounded-lg bg-[#FAF7F2] hover:bg-[#F3EFE6] border border-[#E6DFD3] cursor-pointer transition-colors"
                  >
                    <img
                      src={art.heroImage}
                      alt={art.title}
                      className="w-24 h-24 object-cover rounded shrink-0"
                    />
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-semibold text-[#7A6A58]">{art.category} • {art.readTime}</div>
                        <h4 className="text-sm font-serif font-medium text-[#1A1816] line-clamp-2 mt-0.5">{art.title}</h4>
                      </div>
                      <span className="text-xs text-[#1A1816] font-medium flex items-center gap-1">
                        Read Guide <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* More in this Room & Style */}
          {relatedDesigns.length > 0 && (
            <div className="pt-8 border-t border-[#E6DFD3] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#7A6A58] font-medium">Continue Exploring</span>
                  <h3 className="text-xl font-serif text-[#1A1816]">More {inspiration.room} Inspiration</h3>
                </div>
                <button
                  onClick={() => onSelectRoom(roomSlug)}
                  className="text-xs uppercase tracking-wider font-medium text-[#1A1816] hover:underline"
                >
                  View All {inspiration.room} →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedDesigns.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectInspiration(rel.slug)}
                    className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-[#E6DFD3] hover:border-[#998873] transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-[#F3EFE6]">
                      <img
                        src={rel.imageUrl}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <div className="text-[10px] text-[#7A6A58] uppercase font-medium">{rel.style}</div>
                      <div className="text-xs font-serif font-medium text-[#1A1816] truncate mt-0.5">{rel.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer in Modal */}
        <div className="px-6 py-3.5 border-t border-[#E6DFD3] bg-[#FAF7F2] flex items-center justify-between text-xs text-[#5E5041] shrink-0">
          <div className="flex items-center gap-2">
            <span>Pinterest inspiration from @homewithinda</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="text-[#7A6A58] hover:text-[#1A1816] underline underline-offset-4"
            >
              Copy Link
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#2C2926] text-[#FDFBF7] hover:bg-[#1A1816] text-xs font-medium uppercase tracking-wider rounded transition-colors"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
