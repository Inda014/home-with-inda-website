import React from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { RoomCategory, Inspiration, StyleCategory, Collection, Article, ViewState } from '../types';
import { InspirationCard } from '../components/InspirationCard';

interface RoomsViewProps {
  rooms: RoomCategory[];
  activeRoomSlug?: string;
  inspirations: Inspiration[];
  styles: StyleCategory[];
  collections: Collection[];
  articles: Article[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectInspiration: (slug: string) => void;
  onSelectRoom: (roomSlug: string) => void;
  onSelectStyle: (styleSlug: string) => void;
  onNavigate: (view: ViewState) => void;
}

export const RoomsView: React.FC<RoomsViewProps> = ({
  rooms,
  activeRoomSlug,
  inspirations,
  styles,
  collections,
  articles,
  savedIds,
  onToggleSave,
  onSelectInspiration,
  onSelectRoom,
  onSelectStyle,
  onNavigate
}) => {
  const currentRoom = activeRoomSlug ? rooms.find((r) => r.slug === activeRoomSlug) : null;

  // If a specific room is selected, render the dedicated Room Landing Page
  if (currentRoom) {
    const roomInspirations = inspirations.filter(
      (i) => i.room.toLowerCase().replace(/\s+/g, '-') === currentRoom.slug || i.room.toLowerCase() === currentRoom.name.toLowerCase()
    );
    const roomCollection = collections.find((c) => c.slug === currentRoom.featuredCollectionSlug);
    const roomArticles = articles.filter(
      (a) => a.relatedRoom.toLowerCase() === currentRoom.name.toLowerCase()
    );

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
        {/* Back navigation */}
        <button
          onClick={() => onNavigate({ type: 'rooms' })}
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#7A6A58] hover:text-[#1A1816]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Rooms</span>
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[#E6DFD3]">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Room Guide</span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#1A1816] font-normal leading-tight">
              {currentRoom.name}
            </h1>
            <p className="text-base text-[#5E5041] leading-relaxed font-light">
              {currentRoom.description}
            </p>

            {/* Popular styles chips */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-[#1A1816] block mb-2 uppercase tracking-wider">
                Popular Styles for {currentRoom.name}:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentRoom.popularStyles.map((styleName) => (
                  <button
                    key={styleName}
                    onClick={() => {
                      const sSlug = styleName.toLowerCase().replace(/\s+/g, '-');
                      onSelectStyle(sSlug);
                    }}
                    className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#F3EFE6] text-xs text-[#2C2926] border border-[#E6DFD3] rounded-full transition-colors"
                  >
                    {styleName} →
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-[#E6DFD3] bg-[#F3EFE6]">
              <img
                src={currentRoom.heroImage}
                alt={currentRoom.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Decorating Principles / Rules for this room */}
        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-xl border border-[#E6DFD3] space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#998873]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Core Design Guidelines</span>
          </div>
          <h2 className="text-2xl font-serif text-[#1A1816]">
            Decorating Principles for a Timeless {currentRoom.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentRoom.decoratingPrinciples.map((principle, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg border border-[#E6DFD3] space-y-2">
                <span className="text-xs font-mono text-[#998873] font-semibold">0{idx + 1}.</span>
                <h3 className="font-serif text-base font-medium text-[#1A1816]">{principle.title}</h3>
                <p className="text-xs text-[#5E5041] leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Room Inspirations Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD3]">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#7A6A58] font-medium">Curated Spaces</span>
              <h2 className="text-2xl font-serif text-[#1A1816]">{currentRoom.name} Inspirations</h2>
            </div>
            <span className="text-xs text-[#7A6A58]">{roomInspirations.length} spaces</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomInspirations.map((item) => (
              <InspirationCard
                key={item.id}
                inspiration={item}
                isSaved={savedIds.includes(item.id)}
                onToggleSave={onToggleSave}
                onSelect={onSelectInspiration}
                onSelectStyle={(s) => onSelectStyle(s.toLowerCase().replace(/\s+/g, '-'))}
              />
            ))}
          </div>
        </div>

        {/* Related Collection or Articles */}
        {(roomCollection || roomArticles.length > 0) && (
          <div className="pt-12 border-t border-[#E6DFD3] grid grid-cols-1 md:grid-cols-2 gap-8">
            {roomCollection && (
              <div className="p-6 bg-white rounded-xl border border-[#E6DFD3] space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#7A6A58] font-medium">Related Collection</span>
                <h3 className="text-xl font-serif text-[#1A1816]">{roomCollection.title}</h3>
                <p className="text-xs text-[#5E5041]">{roomCollection.description}</p>
                <button
                  onClick={() => onNavigate({ type: 'collections', collectionSlug: roomCollection.slug })}
                  className="text-xs uppercase font-medium text-[#1A1816] hover:underline flex items-center gap-1 pt-2"
                >
                  Explore Collection →
                </button>
              </div>
            )}

            {roomArticles.length > 0 && (
              <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#E6DFD3] space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#7A6A58] font-medium">Decor Guide</span>
                <h3 className="text-xl font-serif text-[#1A1816]">{roomArticles[0].title}</h3>
                <p className="text-xs text-[#5E5041]">{roomArticles[0].excerpt}</p>
                <button
                  onClick={() => onNavigate({ type: 'ideas', articleSlug: roomArticles[0].slug })}
                  className="text-xs uppercase font-medium text-[#1A1816] hover:underline flex items-center gap-1 pt-2"
                >
                  Read Full Guide →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Otherwise, render ALL Rooms directory overview
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Title */}
      <div className="pb-6 border-b border-[#E6DFD3]">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Spatial Directory</span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1816] mt-1 font-normal">
          Browse by Living Space
        </h1>
        <p className="text-sm text-[#5E5041] mt-2 max-w-2xl font-light">
          From grounded living rooms and peaceful bedroom sanctuaries to smart compact studio layouts, discover tailored ideas for every corner of your home.
        </p>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rooms.map((room) => {
          const count = inspirations.filter(
            (i) => i.room.toLowerCase().replace(/\s+/g, '-') === room.slug || i.room.toLowerCase() === room.name.toLowerCase()
          ).length;

          return (
            <div
              key={room.id}
              onClick={() => onSelectRoom(room.slug)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-[#E6DFD3] hover:border-[#998873] shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#F3EFE6]">
                <img
                  src={room.heroImage}
                  alt={room.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono uppercase tracking-wider text-white/80">
                    {count} Featured Spaces
                  </span>
                  <h3 className="text-2xl font-serif font-medium leading-snug">{room.name}</h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#5E5041] leading-relaxed line-clamp-2">
                  {room.description}
                </p>

                <div className="pt-3 border-t border-[#E6DFD3]/60 flex items-center justify-between text-xs">
                  <span className="text-[#7A6A58]">
                    Styles: {room.popularStyles.slice(0, 3).join(', ')}
                  </span>
                  <span className="font-medium text-[#1A1816] group-hover:underline flex items-center gap-1">
                    Explore Room <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
