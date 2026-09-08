import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Home, Sparkles, BookOpen, Layers } from 'lucide-react';
import { Inspiration, RoomCategory, StyleCategory, Article, Collection } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  inspirations: Inspiration[];
  rooms: RoomCategory[];
  styles: StyleCategory[];
  articles: Article[];
  collections: Collection[];
  onSelectInspiration: (slug: string) => void;
  onSelectRoom: (slug: string) => void;
  onSelectStyle: (slug: string) => void;
  onSelectArticle: (slug: string) => void;
  onSelectCollection: (slug: string) => void;
  onExploreQuery: (query: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  inspirations,
  rooms,
  styles,
  articles,
  collections,
  onSelectInspiration,
  onSelectRoom,
  onSelectStyle,
  onSelectArticle,
  onSelectCollection,
  onExploreQuery
}) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { inspirations: [], rooms: [], styles: [], articles: [], collections: [] };

    return {
      inspirations: inspirations.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.room.toLowerCase().includes(q) ||
          i.style.toLowerCase().includes(q) ||
          i.tags.some((t) => t.toLowerCase().includes(q))
      ).slice(0, 4),
      rooms: rooms.filter((r) => r.name.toLowerCase().includes(q) || r.tagline.toLowerCase().includes(q)).slice(0, 3),
      styles: styles.filter((s) => s.name.toLowerCase().includes(q) || s.definition.toLowerCase().includes(q)).slice(0, 3),
      articles: articles.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)).slice(0, 3),
      collections: collections.filter((c) => c.title.toLowerCase().includes(q)).slice(0, 3)
    };
  }, [query, inspirations, rooms, styles, articles, collections]);

  if (!isOpen) return null;

  const popularSearches = ['small bedroom', 'Japandi living room', 'modern kitchen', 'neutral palette', 'linen bedding', 'travertine'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 md:pt-24 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] text-[#2C2926] rounded-xl shadow-2xl border border-[#E6DFD3] overflow-hidden">
        {/* Search input header */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E6DFD3] bg-white">
          <Search className="w-5 h-5 text-[#998873] mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search rooms, styles, designs (e.g. 'small bedroom', 'Japandi')..."
            className="w-full bg-transparent text-base text-[#1A1816] placeholder-[#998873] focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#998873] hover:text-[#1A1816] mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-medium text-[#7A6A58] hover:text-[#1A1816] px-2 py-1"
          >
            Esc
          </button>
        </div>

        {/* Quick popular tags */}
        {!query && (
          <div className="p-6 space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#7A6A58] font-medium">Popular Searches</span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                    onExploreQuery(term);
                    onClose();
                  }}
                  className="px-3 py-1.5 text-xs bg-[#FAF7F2] hover:bg-[#F3EFE6] text-[#4E443B] border border-[#E6DFD3] rounded-full transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E6DFD3] text-xs text-[#7A6A58]">
              Tip: Search for specific rooms, design styles, or materials like "travertine" or "oak".
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
            {/* Full explore search trigger */}
            <button
              onClick={() => {
                onExploreQuery(query);
                onClose();
              }}
              className="w-full flex items-center justify-between p-3 rounded-lg bg-[#FAF7F2] hover:bg-[#F3EFE6] text-[#1A1816] text-sm font-medium border border-[#E6DFD3] transition-colors"
            >
              <span>Explore all visual results for "<strong>{query}</strong>"</span>
              <ArrowRight className="w-4 h-4 text-[#7A6A58]" />
            </button>

            {/* Inspirations */}
            {filtered.inspirations.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#7A6A58] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Inspirations ({filtered.inspirations.length})
                </div>
                <div className="space-y-1.5">
                  {filtered.inspirations.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onSelectInspiration(item.slug);
                        onClose();
                      }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FAF7F2] cursor-pointer transition-colors"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-serif font-medium text-[#1A1816] truncate">{item.title}</div>
                        <div className="text-xs text-[#7A6A58]">{item.room} • {item.style}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rooms */}
            {filtered.rooms.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-[#E6DFD3]">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#7A6A58] font-semibold">
                  <Home className="w-3.5 h-3.5" />
                  Rooms
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {filtered.rooms.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => {
                        onSelectRoom(room.slug);
                        onClose();
                      }}
                      className="text-left p-2.5 rounded-lg bg-white hover:bg-[#FAF7F2] border border-[#E6DFD3] transition-colors"
                    >
                      <div className="text-sm font-serif font-medium text-[#1A1816]">{room.name}</div>
                      <div className="text-xs text-[#7A6A58] truncate">{room.tagline}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Articles */}
            {filtered.articles.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-[#E6DFD3]">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#7A6A58] font-semibold">
                  <BookOpen className="w-3.5 h-3.5" />
                  Decor Guides
                </div>
                <div className="space-y-1.5">
                  {filtered.articles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => {
                        onSelectArticle(art.slug);
                        onClose();
                      }}
                      className="p-2.5 rounded-lg hover:bg-[#FAF7F2] cursor-pointer transition-colors"
                    >
                      <div className="text-sm font-serif font-medium text-[#1A1816]">{art.title}</div>
                      <div className="text-xs text-[#7A6A58]">{art.readTime} • {art.category}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Collections */}
            {filtered.collections.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-[#E6DFD3]">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#7A6A58] font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  Collections
                </div>
                <div className="space-y-1.5">
                  {filtered.collections.map((col) => (
                    <div
                      key={col.id}
                      onClick={() => {
                        onSelectCollection(col.slug);
                        onClose();
                      }}
                      className="p-2.5 rounded-lg hover:bg-[#FAF7F2] cursor-pointer transition-colors"
                    >
                      <div className="text-sm font-serif font-medium text-[#1A1816]">{col.title}</div>
                      <div className="text-xs text-[#7A6A58]">{col.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filtered.inspirations.length === 0 &&
              filtered.rooms.length === 0 &&
              filtered.styles.length === 0 &&
              filtered.articles.length === 0 &&
              filtered.collections.length === 0 && (
                <div className="text-center py-8 text-[#7A6A58] text-sm">
                  No direct matches for "{query}". Try browsing by room or style!
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
};
