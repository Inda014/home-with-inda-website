import React from 'react';
import { ArrowLeft, Layers, Sparkles, Share2, ArrowRight } from 'lucide-react';
import { Collection, Inspiration, RoomCategory, StyleCategory, ViewState } from '../types';
import { InspirationCard } from '../components/InspirationCard';
import { generatePinterestShareUrl } from '../utils/seo';

interface CollectionsViewProps {
  collections: Collection[];
  activeCollectionSlug?: string;
  inspirations: Inspiration[];
  rooms: RoomCategory[];
  styles: StyleCategory[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectInspiration: (slug: string) => void;
  onSelectCollection: (slug: string) => void;
  onNavigate: (view: ViewState) => void;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  collections,
  activeCollectionSlug,
  inspirations,
  rooms,
  styles,
  savedIds,
  onToggleSave,
  onSelectInspiration,
  onSelectCollection,
  onNavigate
}) => {
  const currentCollection = activeCollectionSlug
    ? collections.find((c) => c.slug === activeCollectionSlug)
    : null;

  // Single Collection View
  if (currentCollection) {
    const collectionDesigns = inspirations.filter((i) =>
      currentCollection.designIds.includes(i.id)
    );

    const handlePin = () => {
      const pinUrl = generatePinterestShareUrl(
        window.location.href,
        currentCollection.heroImage,
        currentCollection.title
      );
      window.open(pinUrl, '_blank', 'noopener,noreferrer');
    };

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
        <div className="flex items-center justify-between pb-4 border-b border-[#E6DFD3]">
          <button
            onClick={() => onNavigate({ type: 'collections' })}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#7A6A58] hover:text-[#1A1816]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Collections</span>
          </button>

          <button
            onClick={handlePin}
            className="px-3 py-1.5 bg-[#E60023] hover:bg-[#C9001F] text-white text-xs rounded font-medium flex items-center gap-1.5 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Pin Collection</span>
          </button>
        </div>

        {/* Collection Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[#E6DFD3]">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Curated Edit</span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#1A1816] font-normal leading-tight">
              {currentCollection.title}
            </h1>
            <p className="text-base text-[#5E5041] leading-relaxed font-light">
              {currentCollection.description}
            </p>

            <div className="p-4 bg-[#FAF7F2] rounded-lg border border-[#E6DFD3] space-y-1 text-xs">
              <strong className="font-serif text-sm text-[#1A1816] block">Curator’s Perspective:</strong>
              <p className="text-[#5E5041] italic">"{currentCollection.curatorNote}"</p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {currentCollection.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 text-[11px] bg-white border border-[#E6DFD3] rounded text-[#5E5041]">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-[#E6DFD3] bg-[#F3EFE6]">
              <img
                src={currentCollection.heroImage}
                alt={currentCollection.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Curated designs in this collection */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD3]">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#7A6A58] font-medium">Visual Gallery</span>
              <h2 className="text-2xl font-serif text-[#1A1816]">Designs in this Curated Moodboard</h2>
            </div>
            <span className="text-xs text-[#7A6A58]">{collectionDesigns.length} spaces</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectionDesigns.map((item) => (
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
      </div>
    );
  }

  // Collections Directory
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <div className="pb-6 border-b border-[#E6DFD3]">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Thematic Edits</span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1816] mt-1 font-normal">
          Curated Collections
        </h1>
        <p className="text-sm text-[#5E5041] mt-2 max-w-2xl font-light">
          Thoughtfully arranged moodboards grouping tactile furniture, lighting, and palette harmonies around specific spatial moods.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((col) => (
          <div
            key={col.id}
            onClick={() => onSelectCollection(col.slug)}
            className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-[#E6DFD3] hover:border-[#998873] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-[#F3EFE6]">
                <img
                  src={col.heroImage}
                  alt={col.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#7A6A58]">
                  {col.designIds.length} Curated Spaces
                </span>
                <h3 className="text-2xl font-serif text-[#1A1816] font-medium group-hover:text-[#4A3F35] leading-snug">
                  {col.title}
                </h3>
                <p className="text-xs text-[#5E5041] line-clamp-2 leading-relaxed">
                  {col.subtitle}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-[#E6DFD3]/60 flex items-center justify-between text-xs">
                <span className="text-[#7A6A58]">
                  #{col.tags[0]}
                </span>
                <span className="font-medium text-[#1A1816] group-hover:underline flex items-center gap-1">
                  View Edit <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
