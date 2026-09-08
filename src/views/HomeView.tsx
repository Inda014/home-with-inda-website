import React, { useState } from 'react';
import { ArrowRight, Sparkles, Heart, Share2, ExternalLink, Check } from 'lucide-react';
import { Inspiration, RoomCategory, StyleCategory, Collection, Article, ProductItem, ViewState } from '../types';
import { InspirationCard } from '../components/InspirationCard';
import { addNewsletterSubscriber } from '../data/store';

interface HomeViewProps {
  rooms: RoomCategory[];
  styles: StyleCategory[];
  inspirations: Inspiration[];
  collections: Collection[];
  articles: Article[];
  products: ProductItem[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectInspiration: (slug: string) => void;
  onNavigate: (view: ViewState) => void;
  onOpenNewsletter: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  rooms,
  styles,
  inspirations,
  collections,
  articles,
  products,
  savedIds,
  onToggleSave,
  onSelectInspiration,
  onNavigate,
  onOpenNewsletter
}) => {
  const trendingInspirations = inspirations.filter((i) => i.trending || i.featured).slice(0, 6);
  const featuredCollection = collections[0]; // Dream Bedrooms
  const featuredArticles = articles.slice(0, 3);
  const heroInspiration = inspirations[0] || {
    slug: 'serene-japandi-bedroom-neutral-linen',
    title: 'The Quiet Elegance of Minimalist Living.',
    description: 'Discover how Japandi aesthetics and neutral palettes transform modern apartments into sanctuaries of calm.',
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200'
  };

  const [sidebarEmail, setSidebarEmail] = useState('');
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);

  const handleSidebarSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sidebarEmail || !sidebarEmail.includes('@')) return;
    addNewsletterSubscriber(sidebarEmail);
    setSidebarSubscribed(true);
  };

  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] font-sans">
      {/* 1. EDITORIAL HERO & ASIDE SPLIT GRID (Inspired directly by the Editorial Aesthetic theme) */}
      <section className="border-b border-black/5 bg-[#FAF9F6]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[640px] lg:min-h-[720px]">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 border-r border-black/5 flex flex-col relative min-h-[480px] lg:min-h-[720px] group overflow-hidden">
            {/* Background Editorial Image with subtle zoom */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: `url('${heroInspiration.imageUrl || "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200"}')`
              }}
            />
            {/* Elegant light fade from left to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 lg:via-transparent lg:bg-gradient-to-r lg:from-[#FAF9F6] lg:from-20% lg:via-[#FAF9F6]/60 lg:to-transparent" />

            {/* Hero Copy Overlay */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-xl my-auto">
              <span className="bg-black text-white text-[10px] px-2.5 py-1 uppercase tracking-widest font-bold mb-6 inline-block">
                Editor's Choice
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6 text-[#1A1A1A] font-normal tracking-tight">
                {heroInspiration.title || 'The Quiet Elegance of Minimalist Living.'}
              </h1>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-8 font-light max-w-md">
                {heroInspiration.description || 'Discover how Japandi aesthetics and neutral palettes transform modern apartments into sanctuaries of calm.'}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate({ type: 'explore' })}
                  className="bg-black text-white px-8 py-3.5 text-[11px] uppercase tracking-widest font-bold hover:bg-black/80 transition-colors"
                >
                  Explore Designs
                </button>
                <button
                  onClick={() => onSelectInspiration(heroInspiration.slug)}
                  className="border border-black/20 bg-white/60 backdrop-blur-xs px-8 py-3.5 text-[11px] uppercase tracking-widest font-bold hover:border-black transition-colors"
                >
                  View Space Details
                </button>
              </div>
            </div>
          </div>

          {/* Aside Column (Popular Rooms & Latest Trends) */}
          <aside className="lg:col-span-4 flex flex-col bg-white/40">
            {/* Popular Rooms 2x2 Grid */}
            <div className="p-8 sm:p-10 border-b border-black/5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/40">
                  Popular Rooms
                </h2>
                <button
                  onClick={() => onNavigate({ type: 'rooms' })}
                  className="text-[10px] uppercase tracking-widest font-semibold text-black/60 hover:text-black underline underline-offset-4"
                >
                  View All
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                {rooms.slice(0, 4).map((room) => (
                  <div
                    key={room.id}
                    onClick={() => onNavigate({ type: 'rooms', roomSlug: room.slug })}
                    className="relative h-32 bg-gray-100 group cursor-pointer overflow-hidden border border-black/5"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('${room.heroImage}')` }}
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors flex items-end p-3">
                      <span className="text-white text-[10px] uppercase font-bold tracking-widest">
                        {room.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Trends & Weekly Newsletter */}
            <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/40">
                  Latest Journal Trends
                </h2>

                <div className="space-y-4">
                  {articles.slice(0, 2).map((art) => (
                    <div
                      key={art.id}
                      onClick={() => onNavigate({ type: 'ideas', articleSlug: art.slug })}
                      className="flex items-start gap-4 cursor-pointer group"
                    >
                      <div className="w-16 h-16 bg-gray-200 shrink-0 overflow-hidden border border-black/5">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url('${art.heroImage}')` }}
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-serif group-hover:underline text-[#1A1A1A] line-clamp-1 font-medium">
                          {art.title}
                        </h3>
                        <p className="text-[10px] text-black/50 mt-1 uppercase tracking-wider">
                          {art.category} • {art.readTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Newsletter Input */}
              <div className="pt-6 border-t border-black/5">
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-2 text-[#1A1A1A]">
                  Newsletter
                </h4>
                <p className="text-[11px] text-black/60 mb-4 italic font-serif">
                  Curated inspiration, delivered weekly.
                </p>

                {sidebarSubscribed ? (
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 py-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>You're on the list! Welcome.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSidebarSubscribe} className="flex border-b border-black/20 pb-2">
                    <input
                      type="email"
                      required
                      value={sidebarEmail}
                      onChange={(e) => setSidebarEmail(e.target.value)}
                      placeholder="email@address.com"
                      className="bg-transparent text-[11px] outline-none flex-1 placeholder:text-black/30 font-sans"
                    />
                    <button
                      type="submit"
                      className="text-[10px] font-bold uppercase tracking-widest hover:opacity-60 transition-opacity ml-2"
                    >
                      Join
                    </button>
                  </form>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 2. CURATED VISUAL DISCOVERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-16 sm:py-24 border-b border-black/5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-black/5 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/40">
              Curated Visuals
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] mt-1 font-normal">
              Trending Interior Inspirations
            </h2>
          </div>
          <button
            onClick={() => onNavigate({ type: 'explore' })}
            className="text-[11px] uppercase tracking-widest font-bold text-black hover:opacity-60 flex items-center gap-1 self-start sm:self-auto transition-opacity"
          >
            <span>Explore Discovery Grid</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingInspirations.map((item) => (
            <InspirationCard
              key={item.id}
              inspiration={item}
              isSaved={savedIds.includes(item.id)}
              onToggleSave={onToggleSave}
              onSelect={onSelectInspiration}
              onSelectRoom={(roomName) => {
                const rSlug = roomName.toLowerCase().replace(/\s+/g, '-');
                onNavigate({ type: 'rooms', roomSlug: rSlug });
              }}
              onSelectStyle={(styleName) => {
                const sSlug = styleName.toLowerCase().replace(/\s+/g, '-');
                onNavigate({ type: 'styles', styleSlug: sSlug });
              }}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate({ type: 'explore' })}
            className="text-[11px] uppercase tracking-widest font-bold px-8 py-3.5 border border-black/15 hover:border-black transition-all bg-transparent"
          >
            Browse All Spaces in Discovery Grid →
          </button>
        </div>
      </section>

      {/* 3. FEATURED EDITORIAL COLLECTION SPOTLIGHT */}
      {featuredCollection && (
        <section className="border-b border-black/5 bg-white/50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/40">
                  Featured Collection
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1A1A] leading-[1.1] font-normal">
                  {featuredCollection.title}
                </h2>
                <p className="text-sm text-black/70 leading-relaxed font-light">
                  {featuredCollection.description}
                </p>

                <div className="p-6 bg-[#FAF9F6] border border-black/5 space-y-1.5 text-xs">
                  <span className="font-serif italic text-[#1A1A1A] text-sm block">Curator’s Note:</span>
                  <p className="text-black/70 italic">"{featuredCollection.curatorNote}"</p>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => onNavigate({ type: 'collections', collectionSlug: featuredCollection.slug })}
                    className="bg-black text-white px-8 py-3.5 text-[11px] uppercase tracking-widest font-bold hover:bg-black/80 transition-colors"
                  >
                    View Full Collection ({featuredCollection.designIds.length} Spaces)
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div
                  onClick={() => onNavigate({ type: 'collections', collectionSlug: featuredCollection.slug })}
                  className="group cursor-pointer overflow-hidden border border-black/5 bg-white relative"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={featuredCollection.heroImage}
                      alt={featuredCollection.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 border-t border-black/5 bg-white flex items-center justify-between text-[11px] text-black/60">
                    <span className="uppercase tracking-wider">
                      {featuredCollection.roomSlug.replace('-', ' ')} • {featuredCollection.styleSlug}
                    </span>
                    <span className="font-bold text-black group-hover:underline">Explore Collection →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. DESIGN STYLES EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-16 sm:py-24 border-b border-black/5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-black/5 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/40">
              Aesthetic Philosophies
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] mt-1 font-normal">
              Find Your Design Style
            </h2>
          </div>
          <button
            onClick={() => onNavigate({ type: 'styles' })}
            className="text-[11px] uppercase tracking-widest font-bold text-black hover:opacity-60 flex items-center gap-1 self-start sm:self-auto transition-opacity"
          >
            <span>All 7 Styles</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {styles.slice(0, 3).map((st) => (
            <div
              key={st.id}
              onClick={() => onNavigate({ type: 'styles', styleSlug: st.slug })}
              className="group cursor-pointer p-6 bg-white border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={st.heroImage}
                    alt={st.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-serif text-[#1A1A1A] font-medium">
                  {st.name}
                </h3>
                <p className="text-xs text-black/70 line-clamp-3 leading-relaxed font-light">
                  {st.definition}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 space-y-2">
                <div className="text-[11px] text-black/50 uppercase tracking-wide">
                  <strong className="text-black font-semibold">Materials:</strong> {st.materials.slice(0, 3).join(', ')}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-black group-hover:underline">
                  Explore {st.name} Guide →
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EDITORIAL ARTICLES / DECOR GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-16 sm:py-24 border-b border-black/5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-black/5 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/40">
              The Editorial Journal
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] mt-1 font-normal">
              Decorating Ideas & Practical Rules
            </h2>
          </div>
          <button
            onClick={() => onNavigate({ type: 'ideas' })}
            className="text-[11px] uppercase tracking-widest font-bold text-black hover:opacity-60 flex items-center gap-1 self-start sm:self-auto transition-opacity"
          >
            <span>All Articles</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => onNavigate({ type: 'ideas', articleSlug: art.slug })}
              className="group cursor-pointer bg-white border border-black/5 hover:border-black/20 transition-all flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={art.heroImage}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-black/50 uppercase tracking-widest font-semibold">
                    <span>{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#1A1A1A] leading-snug group-hover:underline">
                    {art.title}
                  </h3>
                  <p className="text-xs text-black/70 line-clamp-2 leading-relaxed font-light">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-[11px] text-black/60">
                  <span>By {art.author.name}</span>
                  <span className="font-bold uppercase tracking-wider text-black group-hover:underline">Read Article →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. PINTEREST DISCOVERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-16 sm:py-24">
        <div className="border border-black/5 bg-white p-8 sm:p-14 text-center space-y-6">
          <div className="w-8 h-8 mx-auto text-[#1A1A1A]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.14 9.41 7.62 11.17-.07-.94-.13-2.37.03-3.39.14-.92.93-3.95.93-3.95s-.24-.48-.24-1.18c0-1.11.64-1.94 1.44-1.94.68 0 1.01.51 1.01 1.12 0 .68-.43 1.71-.66 2.65-.19.8.4 1.45 1.19 1.45 1.43 0 2.53-1.51 2.53-3.68 0-1.92-1.38-3.27-3.35-3.27-2.28 0-3.62 1.71-3.62 3.48 0 .69.26 1.43.59 1.83.07.08.08.14.05.23l-.22.9c-.04.14-.12.17-.28.1-.99-.46-1.61-1.91-1.61-3.07 0-2.51 1.82-4.81 5.25-4.81 2.76 0 4.9 1.96 4.9 4.58 0 2.74-1.73 4.96-4.13 4.96-.81 0-1.57-.42-1.83-.92l-.5 1.9c-.18.69-.67 1.55-.99 2.08C10.39 23.82 11.18 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
            </svg>
          </div>

          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/40">
              Join Our Community
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] font-normal">
              Pin Along with @homewithinda
            </h2>
            <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-light">
              Pinterest is our primary visual canvas. Daily organic modern spaces, Japandi neutral sanctuaries, and architectural living tips. Save your favorite designs to your boards with one click.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://pinterest.com/homewithinda"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-black text-white text-[11px] font-bold uppercase tracking-widest hover:bg-black/80 transition-colors inline-flex items-center gap-2"
            >
              <span>Follow @homewithinda</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => onNavigate({ type: 'explore' })}
              className="px-8 py-3.5 border border-black/15 bg-transparent text-[11px] font-bold uppercase tracking-widest hover:border-black transition-colors"
            >
              Explore Discovery Grid
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
