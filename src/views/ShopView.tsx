import React, { useState, useMemo } from 'react';
import { ShoppingBag, ExternalLink, Info, Filter } from 'lucide-react';
import { ProductItem } from '../types';

interface ShopViewProps {
  products: ProductItem[];
  onSelectInspiration?: (slug: string) => void;
}

export const ShopView: React.FC<ShopViewProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRoom, setSelectedRoom] = useState<string>('all');

  const categories = ['all', 'Furniture', 'Lighting', 'Textiles', 'Decor'];
  const rooms = ['all', 'Living Room', 'Bedroom', 'Kitchen', 'Dining Room', 'Small Spaces'];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory !== 'all' && p.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
      if (selectedRoom !== 'all' && p.room.toLowerCase() !== selectedRoom.toLowerCase()) {
        return false;
      }
      return true;
    });
  }, [products, selectedCategory, selectedRoom]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header */}
      <div className="pb-6 border-b border-[#E6DFD3] space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Curated Essentials</span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1816] font-normal">
          Shop the Aesthetic
        </h1>
        <p className="text-sm text-[#5E5041] max-w-2xl font-light">
          A careful selection of furniture silhouettes, sculptural lighting, and textural linens that define our spaces. We prioritize timeless craftsmanship, authentic materials, and quiet restraint.
        </p>

        {/* Affiliate Disclosure Notice */}
        <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E6DFD3] flex items-center gap-2 text-xs text-[#7A6A58]">
          <Info className="w-4 h-4 text-[#998873] shrink-0" />
          <span>
            <strong>Editorial Transparency:</strong> Products are independently curated. When you purchase through curated partner links, Home With InDa may earn a small affiliate commission at no extra cost to you.
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#FAF7F2] p-4 rounded-xl border border-[#E6DFD3] text-xs">
        {/* Category filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <span className="font-semibold text-[#1A1816] mr-1 uppercase tracking-wider text-[11px]">Category:</span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-1.5 rounded-full capitalize transition-colors ${
                selectedCategory === c
                  ? 'bg-[#2C2926] text-white font-medium'
                  : 'bg-white text-[#5E5041] border border-[#E6DFD3] hover:border-[#998873]'
              }`}
            >
              {c === 'all' ? 'All Pieces' : c}
            </button>
          ))}
        </div>

        {/* Room filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <span className="font-semibold text-[#1A1816] mr-1 uppercase tracking-wider text-[11px]">Room:</span>
          {rooms.map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRoom(r)}
              className={`px-3 py-1.5 rounded-full capitalize transition-colors ${
                selectedRoom === r
                  ? 'bg-[#2C2926] text-white font-medium'
                  : 'bg-white text-[#5E5041] border border-[#E6DFD3] hover:border-[#998873]'
              }`}
            >
              {r === 'all' ? 'All Spaces' : r}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl border border-[#E6DFD3] overflow-hidden hover:border-[#998873] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="aspect-square overflow-hidden bg-[#F3EFE6] relative">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-[#FAF7F2]/90 backdrop-blur-sm text-[10px] uppercase font-semibold text-[#2C2926] rounded-full border border-[#E6DFD3]">
                  {product.category}
                </span>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#7A6A58]">
                  <span>{product.room}</span>
                  <span className="font-mono text-[#2C2926] font-semibold">{product.priceRange}</span>
                </div>

                <h3 className="font-serif text-base font-medium text-[#1A1816] line-clamp-2">
                  {product.title}
                </h3>

                <p className="text-xs text-[#5E5041] line-clamp-2 leading-relaxed">
                  {product.curatorNote}
                </p>
              </div>
            </div>

            <div className="p-4 pt-0">
              <div className="pt-3 border-t border-[#E6DFD3]/60 flex items-center justify-between text-xs">
                <span className="text-[#7A6A58] text-[11px] truncate max-w-[120px]">{product.retailerNote}</span>
                <a
                  href={`https://pinterest.com/search/pins/?q=${encodeURIComponent(product.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#2C2926] hover:text-white text-[#2C2926] font-medium rounded border border-[#E6DFD3] transition-colors flex items-center gap-1 text-[11px]"
                >
                  <span>Explore Design</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
