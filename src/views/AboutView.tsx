import React from 'react';
import { ExternalLink, Sparkles, Heart, Compass, ShieldCheck } from 'lucide-react';
import { ViewState } from '../types';

interface AboutViewProps {
  onNavigate: (view: ViewState) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Brand Philosophy</span>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#1A1816] font-normal leading-tight">
          Home With InDa
        </h1>
        <p className="text-base sm:text-lg text-[#5E5041] leading-relaxed font-light">
          A dedicated visual publication curated for those who believe a home should feel grounded, warm, and deeply personal.
        </p>
      </div>

      {/* Editorial Mission Statement */}
      <div className="p-8 sm:p-12 rounded-2xl bg-[#FAF7F2] border border-[#E6DFD3] space-y-6">
        <span className="text-xs uppercase tracking-widest text-[#7A6A58] font-medium">Our Manifesto</span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1816] leading-snug">
          "Interior design is not about acquiring perfection. It is about orchestrating light, natural materials, and quiet pauses."
        </h2>
        <div className="space-y-4 text-sm text-[#4E443B] leading-relaxed">
          <p>
            Home With InDa (@homewithinda) was founded around a simple observation: modern interior inspiration has become noisy, fleeting, and detached from practical living. We seek out the calm in the noise.
          </p>
          <p>
            Through our digital publication and vibrant Pinterest community, we curate architecture-led spaces that balance Japanese minimalism with Scandinavian coziness, organic textures, and timeless earthy warmth.
          </p>
        </div>
      </div>

      {/* Three Pillars of Home With InDa */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl border border-[#E6DFD3] space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E6DFD3] flex items-center justify-center text-[#7A6A58]">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-medium text-[#1A1816]">1. Thoughtful Restraint</h3>
          <p className="text-xs text-[#5E5041] leading-relaxed">
            Spaces breathe when we remove excess. We celebrate negative space, neutral tonal layering, and unadorned architectural lines.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-[#E6DFD3] space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E6DFD3] flex items-center justify-center text-[#7A6A58]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-medium text-[#1A1816]">2. Organic Materiality</h3>
          <p className="text-xs text-[#5E5041] leading-relaxed">
            Authentic travertine, white oak, Belgian linen, and matte lime plaster bring sensory depth that synthetic materials can never duplicate.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-[#E6DFD3] space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E6DFD3] flex items-center justify-center text-[#7A6A58]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-medium text-[#1A1816]">3. Practical Realism</h3>
          <p className="text-xs text-[#5E5041] leading-relaxed">
            Every inspiring room must work for real morning routines, apartment footprints, and everyday living. Inspiration that never sacrifices comfort.
          </p>
        </div>
      </div>

      {/* Community Callout */}
      <div className="p-8 rounded-xl bg-white border border-[#E6DFD3] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="font-serif text-xl text-[#1A1816]">Follow @homewithinda on Pinterest</h4>
          <p className="text-xs text-[#5E5041]">Join over 45,000 monthly visual explorers pinning our room moodboards.</p>
        </div>
        <a
          href="https://pinterest.com/homewithinda"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#E60023] hover:bg-[#C9001F] text-white text-xs font-medium uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 whitespace-nowrap"
        >
          <span>Visit Pinterest Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
