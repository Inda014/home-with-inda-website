import React from 'react';
import { ArrowLeft, Check, Sparkles, ArrowRight, Layers, Palette } from 'lucide-react';
import { StyleCategory, Inspiration, RoomCategory, Collection, ViewState } from '../types';
import { InspirationCard } from '../components/InspirationCard';

interface StylesViewProps {
  styles: StyleCategory[];
  activeStyleSlug?: string;
  inspirations: Inspiration[];
  rooms: RoomCategory[];
  collections: Collection[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectInspiration: (slug: string) => void;
  onSelectStyle: (styleSlug: string) => void;
  onSelectRoom: (roomSlug: string) => void;
  onNavigate: (view: ViewState) => void;
}

export const StylesView: React.FC<StylesViewProps> = ({
  styles,
  activeStyleSlug,
  inspirations,
  rooms,
  collections,
  savedIds,
  onToggleSave,
  onSelectInspiration,
  onSelectStyle,
  onSelectRoom,
  onNavigate
}) => {
  const currentStyle = activeStyleSlug ? styles.find((s) => s.slug === activeStyleSlug) : null;

  // Single dedicated style guide
  if (currentStyle) {
    const styleInspirations = inspirations.filter(
      (i) => i.style.toLowerCase().replace(/\s+/g, '-') === currentStyle.slug || i.style.toLowerCase() === currentStyle.name.toLowerCase()
    );

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
        <button
          onClick={() => onNavigate({ type: 'styles' })}
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#7A6A58] hover:text-[#1A1816]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Styles</span>
        </button>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[#E6DFD3]">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Style Guide</span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#1A1816] font-normal leading-tight">
              {currentStyle.name}
            </h1>
            <p className="text-base text-[#5E5041] leading-relaxed font-light">
              {currentStyle.definition}
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-[#E6DFD3] bg-[#F3EFE6]">
              <img
                src={currentStyle.heroImage}
                alt={currentStyle.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Style Anatomy Grid (Characteristics, Color, Materials, Furniture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Key Characteristics */}
          <div className="p-5 bg-white rounded-xl border border-[#E6DFD3] space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#1A1816] block">
              Defining Characteristics
            </span>
            <ul className="space-y-2 text-xs text-[#5E5041]">
              {currentStyle.characteristics.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#998873] shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Color Palette Direction */}
          <div className="p-5 bg-[#FAF7F2] rounded-xl border border-[#E6DFD3] space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#1A1816] block">
              Color Direction
            </span>
            <p className="text-xs text-[#5E5041] leading-relaxed">
              {currentStyle.colorDirection}
            </p>
          </div>

          {/* Signature Materials */}
          <div className="p-5 bg-white rounded-xl border border-[#E6DFD3] space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#1A1816] block">
              Signature Materials
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentStyle.materials.map((m) => (
                <span
                  key={m}
                  className="px-2.5 py-1 bg-[#FAF7F2] text-[11px] text-[#4E443B] border border-[#E6DFD3] rounded"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Furniture Guidance */}
          <div className="p-5 bg-[#FAF7F2] rounded-xl border border-[#E6DFD3] space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#1A1816] block">
              Furniture Silhouettes
            </span>
            <p className="text-xs text-[#5E5041] leading-relaxed">
              {currentStyle.furnitureGuidance}
            </p>
          </div>
        </div>

        {/* Inspirations in this style */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD3]">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#7A6A58] font-medium">Curated Spaces</span>
              <h2 className="text-2xl font-serif text-[#1A1816]">{currentStyle.name} Inspirations</h2>
            </div>
            <span className="text-xs text-[#7A6A58]">{styleInspirations.length} spaces</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {styleInspirations.map((item) => (
              <InspirationCard
                key={item.id}
                inspiration={item}
                isSaved={savedIds.includes(item.id)}
                onToggleSave={onToggleSave}
                onSelect={onSelectInspiration}
                onSelectRoom={(r) => onSelectRoom(r.toLowerCase().replace(/\s+/g, '-'))}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Directory Overview of all 7 styles
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <div className="pb-6 border-b border-[#E6DFD3]">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Design Philosophies</span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1816] mt-1 font-normal">
          Interior Design Styles
        </h1>
        <p className="text-sm text-[#5E5041] mt-2 max-w-2xl font-light">
          Explore the defining characteristics, signature materials, and color palettes behind modern interior design movements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {styles.map((style) => (
          <div
            key={style.id}
            onClick={() => onSelectStyle(style.slug)}
            className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-[#E6DFD3] hover:border-[#998873] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden bg-[#F3EFE6]">
                <img
                  src={style.heroImage}
                  alt={style.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-2xl font-serif text-[#1A1816] font-medium group-hover:text-[#4A3F35]">
                  {style.name}
                </h3>
                <p className="text-xs text-[#5E5041] line-clamp-3 leading-relaxed">
                  {style.definition}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-[#E6DFD3]/60 flex items-center justify-between text-xs">
                <span className="text-[#7A6A58] truncate mr-2">
                  Materials: {style.materials.slice(0, 2).join(', ')}
                </span>
                <span className="font-medium text-[#1A1816] group-hover:underline flex items-center gap-1 shrink-0">
                  Read Guide →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
