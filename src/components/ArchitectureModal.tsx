import React from 'react';
import { X, CheckCircle2, Compass, Layers, Share2, Search, Database, ShieldCheck } from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#FDFBF7] text-[#2C2926] rounded-xl shadow-2xl border border-[#E6DFD3] my-8 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E6DFD3] bg-[#FAF7F2]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#7A6A58] font-medium">Home With InDa • System Blueprint</span>
            <h2 className="text-2xl font-serif text-[#1A1816]">Assumptions & Architecture Decisions</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7A6A58] hover:text-[#1A1816] hover:bg-[#E6DFD3]/40 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8 max-h-[78vh] overflow-y-auto text-sm text-[#4E443B] leading-relaxed">
          {/* Executive Summary */}
          <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E6DFD3]">
            <p className="font-serif text-lg text-[#1A1816] mb-1">
              "Visual Discovery Platform for Curated Home Decor"
            </p>
            <p>
              Home With InDa (@homewithinda) is engineered to transform high-velocity Pinterest traffic into sustained 10–20 minute discovery sessions through a relational content graph connecting inspirations, rooms, styles, collections, guides, and curated products.
            </p>
          </div>

          {/* 11 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1 */}
            <div className="p-4 rounded-lg border border-[#E6DFD3] bg-white space-y-2">
              <div className="flex items-center gap-2 font-serif text-base text-[#1A1816] font-semibold">
                <Compass className="w-4 h-4 text-[#998873]" />
                1. Overall Website Architecture
              </div>
              <p>
                Single Page Application with deep client-side URL routing and direct Pinterest link capability. Hash and state routing allow deep-linking directly to specific designs, rooms, collections, and articles with zero server round-trips.
              </p>
            </div>

            {/* 2 & 3 */}
            <div className="p-4 rounded-lg border border-[#E6DFD3] bg-white space-y-2">
              <div className="flex items-center gap-2 font-serif text-base text-[#1A1816] font-semibold">
                <Layers className="w-4 h-4 text-[#998873]" />
                2 & 3. Content Architecture & Types
              </div>
              <p>
                Strict relational schema: <strong>Inspiration</strong> (spatial context, palette, decor tips, source attribution), <strong>Rooms</strong> (8 categories), <strong>Styles</strong> (7 distinct aesthetics), <strong>Collections</strong> (thematic edits), <strong>Articles</strong> (in-depth guides), and <strong>Products</strong>.
              </p>
            </div>

            {/* 4 */}
            <div className="p-4 rounded-lg border border-[#E6DFD3] bg-white space-y-2">
              <div className="flex items-center gap-2 font-serif text-base text-[#1A1816] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#998873]" />
                4. Relational Graph & Internal Linking
              </div>
              <p>
                Zero dead ends: Every design links to its Room, Style, Collection, and 3 Related Designs, plus matching Decor Guides and Curated Products. Visitors always have a compelling next action.
              </p>
            </div>

            {/* 5 */}
            <div className="p-4 rounded-lg border border-[#E6DFD3] bg-white space-y-2">
              <div className="flex items-center gap-2 font-serif text-base text-[#1A1816] font-semibold">
                <Share2 className="w-4 h-4 text-[#998873]" />
                5 & 6. Pinterest-First Discovery Loop
              </div>
              <p>
                Direct Pinterest share/save mechanics on every visual card. Dedicated landing views with rich context beyond just an image: color swatch breakdown, 3 decorating rules, and matching product suggestions.
              </p>
            </div>

            {/* 7 */}
            <div className="p-4 rounded-lg border border-[#E6DFD3] bg-white space-y-2">
              <div className="flex items-center gap-2 font-serif text-base text-[#1A1816] font-semibold">
                <Search className="w-4 h-4 text-[#998873]" />
                7. SEO Foundation
              </div>
              <p>
                Dynamic document titles, meta descriptions, OpenGraph social sharing tags, Pinterest verification support, semantic headings (H1/H2/H3), descriptive alt attributes, and breadcrumb structures.
              </p>
            </div>

            {/* 8 & 9 */}
            <div className="p-4 rounded-lg border border-[#E6DFD3] bg-white space-y-2">
              <div className="flex items-center gap-2 font-serif text-base text-[#1A1816] font-semibold">
                <Database className="w-4 h-4 text-[#998873]" />
                8 & 9. Technology Stack & CMS
              </div>
              <p>
                React 19 + TypeScript + Tailwind CSS v4. Built-in <strong>Owner Content Studio</strong> with LocalStorage persistence and JSON export/import so non-technical owners can add inspirations, publish articles, and edit collections without touching code.
              </p>
            </div>
          </div>

          {/* MVP vs Future & Assumptions */}
          <div className="p-4 rounded-lg border border-[#E6DFD3] bg-[#FAF7F2] space-y-3">
            <div className="flex items-center gap-2 font-serif text-base text-[#1A1816] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#998873]" />
              10 & 11. MVP Phasing & Labelled Assumptions
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li><strong>MVP Implemented:</strong> Full visual discovery engine, multi-criteria filters (Room, Style, Palette, Budget), Room & Style directories, Inspiration detail modal, Collections, Articles, Product recommendation layer, Saved moodboard, Newsletter CTA, Owner Content Studio, Legal disclosures.</li>
              <li><strong>Future Phases:</strong> Direct headless CMS cloud API sync (Sanity/Strapi), direct Pinterest auto-pinning API, e-commerce checkout.</li>
              <li><strong>Assumptions:</strong> Editorial photography sourced with transparent photographer licensing from Unsplash architectural archives (Spacejoy, Hutomo Abrianto). Real brand handles: @homewithinda.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#E6DFD3] bg-[#FAF7F2] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#2C2926] text-[#FDFBF7] hover:bg-[#1A1816] text-xs font-medium uppercase tracking-wider rounded transition-colors"
          >
            Enter Experience
          </button>
        </div>
      </div>
    </div>
  );
};
