import React, { useState, useMemo } from 'react';
import { Search, Filter, X, SlidersHorizontal, Sparkles, RefreshCw, Palette } from 'lucide-react';
import { Inspiration, RoomCategory, StyleCategory } from '../types';
import { InspirationCard } from '../components/InspirationCard';

interface ExploreViewProps {
  inspirations: Inspiration[];
  rooms: RoomCategory[];
  styles: StyleCategory[];
  savedIds: string[];
  initialRoom?: string;
  initialStyle?: string;
  initialColor?: string;
  searchQuery?: string;
  onToggleSave: (id: string) => void;
  onSelectInspiration: (slug: string) => void;
  onSelectRoom: (roomSlug: string) => void;
  onSelectStyle: (styleSlug: string) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  inspirations,
  rooms,
  styles,
  savedIds,
  initialRoom,
  initialStyle,
  initialColor,
  searchQuery = '',
  onToggleSave,
  onSelectInspiration,
  onSelectRoom,
  onSelectStyle
}) => {
  const [search, setSearch] = useState(searchQuery);
  const [selectedRoom, setSelectedRoom] = useState<string>(initialRoom || 'all');
  const [selectedStyle, setSelectedStyle] = useState<string>(initialStyle || 'all');
  const [selectedColor, setSelectedColor] = useState<string>(initialColor || 'all');
  const [selectedBudget, setSelectedBudget] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'trending' | 'featured' | 'az'>('trending');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Extract all distinct color swatch names
  const availableColors = useMemo(() => {
    const colorSet = new Set<string>();
    inspirations.forEach((i) => {
      i.colorPalette?.forEach((c) => colorSet.add(c.name));
    });
    return Array.from(colorSet);
  }, [inspirations]);

  // Filtered and sorted results
  const filteredInspirations = useMemo(() => {
    return inspirations
      .filter((item) => {
        // Search
        if (search.trim()) {
          const q = search.toLowerCase();
          const matchTitle = item.title.toLowerCase().includes(q);
          const matchDesc = item.description.toLowerCase().includes(q);
          const matchRoom = item.room.toLowerCase().includes(q);
          const matchStyle = item.style.toLowerCase().includes(q);
          const matchTag = item.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchTitle && !matchDesc && !matchRoom && !matchStyle && !matchTag) {
            return false;
          }
        }

        // Room
        if (selectedRoom !== 'all') {
          const rSlug = item.room.toLowerCase().replace(/\s+/g, '-');
          if (rSlug !== selectedRoom.toLowerCase().replace(/\s+/g, '-') && item.room.toLowerCase() !== selectedRoom.toLowerCase()) {
            return false;
          }
        }

        // Style
        if (selectedStyle !== 'all') {
          const sSlug = item.style.toLowerCase().replace(/\s+/g, '-');
          if (sSlug !== selectedStyle.toLowerCase().replace(/\s+/g, '-') && item.style.toLowerCase() !== selectedStyle.toLowerCase()) {
            return false;
          }
        }

        // Color
        if (selectedColor !== 'all') {
          const hasColor = item.colorPalette?.some(
            (c) => c.name.toLowerCase() === selectedColor.toLowerCase()
          );
          if (!hasColor) return false;
        }

        // Budget
        if (selectedBudget !== 'all') {
          if (item.budgetLevel !== selectedBudget) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'trending') return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
        if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        return a.title.localeCompare(b.title);
      });
  }, [inspirations, search, selectedRoom, selectedStyle, selectedColor, selectedBudget, sortBy]);

  const hasActiveFilters =
    search || selectedRoom !== 'all' || selectedStyle !== 'all' || selectedColor !== 'all' || selectedBudget !== 'all';

  const clearAllFilters = () => {
    setSearch('');
    setSelectedRoom('all');
    setSelectedStyle('all');
    setSelectedColor('all');
    setSelectedBudget('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#E6DFD3] gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Visual Discovery</span>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1816] mt-1 font-normal">
            Explore All Inspirations
          </h1>
          <p className="text-sm text-[#5E5041] mt-2 max-w-xl">
            Filter through our complete catalog of interior spaces by living area, architectural style, color mood, or budget.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="md:hidden px-4 py-2 bg-[#FAF7F2] border border-[#E6DFD3] rounded text-xs font-medium uppercase tracking-wider flex items-center gap-1.5"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs text-[#7A6A58]">
            <span className="hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-[#E6DFD3] rounded px-3 py-2 text-xs text-[#1A1816] focus:outline-none focus:border-[#7A6A58]"
            >
              <option value="trending">Trending First</option>
              <option value="featured">Featured Picks</option>
              <option value="az">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Primary Search and Quick Filter Bar */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-[#998873] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search keywords, e.g. 'linen bedding', 'travertine', 'round table', 'warm minimalist'..."
            className="w-full pl-12 pr-10 py-3.5 bg-white text-sm text-[#1A1816] placeholder-[#998873] border border-[#E6DFD3] rounded-lg shadow-sm focus:outline-none focus:border-[#7A6A58]"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#998873] hover:text-[#1A1816]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Desktop Filter Tabs */}
        <div className="hidden md:block space-y-3 bg-[#FAF7F2] p-4 rounded-xl border border-[#E6DFD3]">
          {/* Room quick pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="font-semibold text-[#1A1816] shrink-0 mr-1 uppercase tracking-wider text-[11px]">Room:</span>
            <button
              onClick={() => setSelectedRoom('all')}
              className={`px-3 py-1.5 rounded-full transition-colors shrink-0 ${
                selectedRoom === 'all'
                  ? 'bg-[#2C2926] text-white font-medium'
                  : 'bg-white text-[#5E5041] border border-[#E6DFD3] hover:border-[#998873]'
              }`}
            >
              All Rooms
            </button>
            {rooms.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRoom(r.slug)}
                className={`px-3 py-1.5 rounded-full transition-colors shrink-0 ${
                  selectedRoom === r.slug
                    ? 'bg-[#2C2926] text-white font-medium'
                    : 'bg-white text-[#5E5041] border border-[#E6DFD3] hover:border-[#998873]'
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>

          {/* Style quick pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="font-semibold text-[#1A1816] shrink-0 mr-1 uppercase tracking-wider text-[11px]">Style:</span>
            <button
              onClick={() => setSelectedStyle('all')}
              className={`px-3 py-1.5 rounded-full transition-colors shrink-0 ${
                selectedStyle === 'all'
                  ? 'bg-[#2C2926] text-white font-medium'
                  : 'bg-white text-[#5E5041] border border-[#E6DFD3] hover:border-[#998873]'
              }`}
            >
              All Styles
            </button>
            {styles.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedStyle(s.slug)}
                className={`px-3 py-1.5 rounded-full transition-colors shrink-0 ${
                  selectedStyle === s.slug
                    ? 'bg-[#2C2926] text-white font-medium'
                    : 'bg-white text-[#5E5041] border border-[#E6DFD3] hover:border-[#998873]'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Color & Budget filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#E6DFD3]/80 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-[#998873]" />
                <span className="font-medium text-[#1A1816]">Color Palette:</span>
              </div>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="bg-white border border-[#E6DFD3] rounded px-3 py-1 text-xs text-[#1A1816] focus:outline-none"
              >
                <option value="all">All Colors</option>
                {availableColors.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <div className="flex items-center gap-2 ml-4">
                <span className="font-medium text-[#1A1816]">Budget:</span>
                {(['all', '$', '$$', '$$$'] as const).map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`px-2.5 py-0.5 rounded text-xs ${
                      selectedBudget === b
                        ? 'bg-[#2C2926] text-white'
                        : 'bg-white border border-[#E6DFD3] text-[#5E5041]'
                    }`}
                  >
                    {b === 'all' ? 'Any' : b}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-[#7A6A58] hover:text-[#1A1816] underline underline-offset-4 flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                Reset all filters
              </button>
            )}
          </div>
        </div>

        {/* Mobile Filter Sheet */}
        {mobileFilterOpen && (
          <div className="md:hidden bg-[#FAF7F2] p-5 rounded-xl border border-[#E6DFD3] space-y-4 text-xs">
            <div>
              <span className="font-semibold block mb-2">Room</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedRoom('all')}
                  className={`px-3 py-1 rounded-full ${selectedRoom === 'all' ? 'bg-[#2C2926] text-white' : 'bg-white border border-[#E6DFD3]'}`}
                >
                  All
                </button>
                {rooms.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRoom(r.slug)}
                    className={`px-3 py-1 rounded-full ${selectedRoom === r.slug ? 'bg-[#2C2926] text-white' : 'bg-white border border-[#E6DFD3]'}`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="font-semibold block mb-2">Style</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedStyle('all')}
                  className={`px-3 py-1 rounded-full ${selectedStyle === 'all' ? 'bg-[#2C2926] text-white' : 'bg-white border border-[#E6DFD3]'}`}
                >
                  All
                </button>
                {styles.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedStyle(s.slug)}
                    className={`px-3 py-1 rounded-full ${selectedStyle === s.slug ? 'bg-[#2C2926] text-white' : 'bg-white border border-[#E6DFD3]'}`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="w-full py-2 bg-white text-center border border-[#E6DFD3] rounded font-medium text-[#1A1816]"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Active Filter Indicators */}
      <div className="flex items-center justify-between text-xs text-[#7A6A58] pt-2">
        <div>
          Showing <strong>{filteredInspirations.length}</strong> {filteredInspirations.length === 1 ? 'inspiration' : 'inspirations'}
        </div>
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-1.5">
            {selectedRoom !== 'all' && (
              <span className="px-2 py-0.5 bg-[#FAF7F2] border border-[#E6DFD3] rounded text-[11px] flex items-center gap-1">
                Room: {selectedRoom}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedRoom('all')} />
              </span>
            )}
            {selectedStyle !== 'all' && (
              <span className="px-2 py-0.5 bg-[#FAF7F2] border border-[#E6DFD3] rounded text-[11px] flex items-center gap-1">
                Style: {selectedStyle}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedStyle('all')} />
              </span>
            )}
            {selectedColor !== 'all' && (
              <span className="px-2 py-0.5 bg-[#FAF7F2] border border-[#E6DFD3] rounded text-[11px] flex items-center gap-1">
                Color: {selectedColor}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedColor('all')} />
              </span>
            )}
          </div>
        )}
      </div>

      {/* Inspirations Grid */}
      {filteredInspirations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInspirations.map((item) => (
            <InspirationCard
              key={item.id}
              inspiration={item}
              isSaved={savedIds.includes(item.id)}
              onToggleSave={onToggleSave}
              onSelect={onSelectInspiration}
              onSelectRoom={(roomName) => {
                const rSlug = roomName.toLowerCase().replace(/\s+/g, '-');
                setSelectedRoom(rSlug);
              }}
              onSelectStyle={(styleName) => {
                const sSlug = styleName.toLowerCase().replace(/\s+/g, '-');
                setSelectedStyle(sSlug);
              }}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#FAF7F2] rounded-xl border border-[#E6DFD3] p-8 space-y-4">
          <Sparkles className="w-8 h-8 text-[#998873] mx-auto" />
          <h3 className="text-2xl font-serif text-[#1A1816]">No matching spaces found</h3>
          <p className="text-sm text-[#5E5041] max-w-md mx-auto">
            Try adjusting your search terms or clearing active filters to browse all our curated designs.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-2.5 bg-[#2C2926] text-white text-xs font-medium uppercase tracking-wider rounded"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
