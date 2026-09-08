import React from 'react';
import { Heart, Share2, Sparkles, ExternalLink } from 'lucide-react';
import { Inspiration } from '../types';
import { generatePinterestShareUrl } from '../utils/seo';

interface InspirationCardProps {
  inspiration: Inspiration;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onSelect: (slug: string) => void;
  onSelectRoom?: (room: string) => void;
  onSelectStyle?: (style: string) => void;
}

export const InspirationCard: React.FC<InspirationCardProps> = ({
  inspiration,
  isSaved,
  onToggleSave,
  onSelect,
  onSelectRoom,
  onSelectStyle
}) => {
  const handlePin = (e: React.MouseEvent) => {
    e.stopPropagation();
    const pinUrl = generatePinterestShareUrl(
      window.location.href,
      inspiration.imageUrl,
      inspiration.title
    );
    window.open(pinUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleSave(inspiration.id);
  };

  const aspectRatioClass =
    inspiration.aspectRatio === 'tall'
      ? 'aspect-[3/4]'
      : inspiration.aspectRatio === 'wide'
      ? 'aspect-[4/3]'
      : 'aspect-square';

  return (
    <article
      onClick={() => onSelect(inspiration.slug)}
      className="group relative cursor-pointer bg-white overflow-hidden border border-black/5 hover:border-black/25 transition-all duration-300 flex flex-col"
    >
      {/* Image container */}
      <div className={`relative w-full ${aspectRatioClass} overflow-hidden bg-[#FAF9F6]`}>
        <img
          src={inspiration.imageUrl}
          alt={inspiration.imageAlt || inspiration.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Floating gradient top & bottom on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top Badges: Room / Trending */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span
            onClick={(e) => {
              e.stopPropagation();
              onSelectRoom?.(inspiration.room);
            }}
            className="px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-white/95 text-black border border-black/10 hover:bg-black hover:text-white transition-colors"
          >
            {inspiration.room}
          </span>
          {inspiration.trending && (
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[9px] uppercase font-bold tracking-wider bg-black text-white">
              <Sparkles className="w-2.5 h-2.5" />
              Trending
            </span>
          )}
        </div>

        {/* Top Right Action Buttons (Save & Pin) */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          {/* Quick Pin to Pinterest */}
          <button
            onClick={handlePin}
            title="Save to Pinterest"
            aria-label="Save to Pinterest"
            className="p-2 bg-white/95 hover:bg-[#E60023] hover:text-white text-black border border-black/10 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>

          {/* Save to Moodboard */}
          <button
            onClick={handleSave}
            title={isSaved ? 'Remove from saved' : 'Save to your moodboard'}
            aria-label="Save design"
            className={`p-2 border border-black/10 transition-colors ${
              isSaved
                ? 'bg-black text-white'
                : 'bg-white/95 hover:bg-black hover:text-white text-black'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Bottom preview pill on hover (Color palette swatches) */}
        <div className="absolute bottom-3 left-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1.5 bg-black/80 px-2.5 py-1">
            {inspiration.colorPalette.slice(0, 4).map((swatch) => (
              <span
                key={swatch.name}
                className="w-2.5 h-2.5 border border-white/40"
                style={{ backgroundColor: swatch.hex }}
                title={swatch.name}
              />
            ))}
            <span className="text-[9px] text-white/90 pl-1 font-mono uppercase tracking-wider">Palette</span>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest bg-white text-black px-2.5 py-1">
            View Space →
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between gap-2 text-[10px] uppercase tracking-widest text-black/50 mb-1">
            <span
              onClick={(e) => {
                e.stopPropagation();
                onSelectStyle?.(inspiration.style);
              }}
              className="hover:underline font-bold text-black/70"
            >
              {inspiration.style}
            </span>
            <span className="font-mono">{inspiration.budgetLevel}</span>
          </div>
          <h3 className="font-serif text-lg text-[#1A1A1A] font-normal leading-snug group-hover:underline line-clamp-2">
            {inspiration.title}
          </h3>
        </div>

        {/* Tags */}
        <div className="pt-2.5 border-t border-black/5 flex flex-wrap gap-1">
          {inspiration.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-black/60 bg-black/5 px-2 py-0.5"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
