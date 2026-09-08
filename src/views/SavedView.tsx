import React from 'react';
import { Heart, Share2, ArrowRight, Trash2 } from 'lucide-react';
import { Inspiration, ViewState } from '../types';
import { InspirationCard } from '../components/InspirationCard';

interface SavedViewProps {
  inspirations: Inspiration[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectInspiration: (slug: string) => void;
  onNavigate: (view: ViewState) => void;
}

export const SavedView: React.FC<SavedViewProps> = ({
  inspirations,
  savedIds,
  onToggleSave,
  onSelectInspiration,
  onNavigate
}) => {
  const savedInspirations = inspirations.filter((item) => savedIds.includes(item.id));

  const handleShareMoodboard = () => {
    navigator.clipboard?.writeText(window.location.href);
    alert('Moodboard link copied! You can share your curated selections.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#E6DFD3] gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Personal Collection</span>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1816] font-normal mt-1">
            Your Saved Spaces ({savedInspirations.length})
          </h1>
          <p className="text-sm text-[#5E5041] mt-2 max-w-xl font-light">
            Your personal moodboard. Saved designs are stored securely on this device so you can return to reference layouts, color codes, and decorating notes.
          </p>
        </div>

        {savedInspirations.length > 0 && (
          <button
            onClick={handleShareMoodboard}
            className="px-4 py-2 bg-[#FAF7F2] hover:bg-[#F3EFE6] text-[#2C2926] text-xs font-medium uppercase tracking-wider rounded border border-[#E6DFD3] flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Moodboard</span>
          </button>
        )}
      </div>

      {savedInspirations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedInspirations.map((item) => (
            <InspirationCard
              key={item.id}
              inspiration={item}
              isSaved={true}
              onToggleSave={onToggleSave}
              onSelect={onSelectInspiration}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-[#FAF7F2] rounded-xl border border-[#E6DFD3] p-8 space-y-4 max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-white border border-[#E6DFD3] flex items-center justify-center mx-auto text-[#998873]">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-serif text-[#1A1816]">Your moodboard is currently empty</h3>
          <p className="text-sm text-[#5E5041] leading-relaxed">
            As you browse through our rooms, styles, and collections, tap the heart icon on any design to save it here for reference.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate({ type: 'explore' })}
              className="px-6 py-3 bg-[#2C2926] hover:bg-[#1A1816] text-[#FDFBF7] text-xs font-medium uppercase tracking-wider rounded inline-flex items-center gap-2 transition-colors"
            >
              <span>Explore Visual Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
