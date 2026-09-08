import React, { useState } from 'react';
import { ExternalLink, Heart, Sparkles, Check, ArrowUp } from 'lucide-react';
import { ViewState } from '../types';
import { addNewsletterSubscriber } from '../data/store';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
  onOpenArchitecture: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenArchitecture }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      addNewsletterSubscriber(email);
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-[#1A1A1A] border-t border-black/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 space-y-16">
        {/* Top Newsletter & Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-black/5">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">Visual Discovery Destination</span>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight font-normal">
              Home With InDa
            </h3>
            <p className="text-xs sm:text-sm text-black/70 max-w-lg leading-relaxed font-light">
              Beautiful ideas for creating a home you love. We curate tactile, architectural, and warm spaces across rooms and styles, designed to spark creative momentum for your living spaces.
            </p>
            <div className="pt-2 flex items-center gap-4 text-[11px] uppercase tracking-wider font-bold">
              <a
                href="https://pinterest.com/homewithinda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white hover:bg-black/80 transition-colors"
              >
                <span>Follow @homewithinda</span>
                <ExternalLink className="w-3 h-3 text-white/60" />
              </a>
              <button
                onClick={onOpenArchitecture}
                className="text-black/60 hover:text-black underline underline-offset-4"
              >
                System Architecture
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FAF9F6] p-8 border border-black/5 space-y-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold">The Weekly Edit</span>
              <h4 className="text-2xl font-serif text-[#1A1A1A] mt-1 font-normal">Sunday Interior Inspiration</h4>
              <p className="text-xs text-black/60 mt-1 font-light">
                Receive 3 curated room breakdowns, 1 practical decorating tip, and our top Pinterest pins every weekend.
              </p>
            </div>

            {subscribed ? (
              <div className="p-3 bg-white text-xs font-medium text-black flex items-center gap-2 border border-black/10">
                <Check className="w-4 h-4 text-emerald-700" />
                <span>You're subscribed to The Weekly Edit. Thank you!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border-b border-black/20 pb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="email@address.com"
                  className="flex-1 bg-transparent text-xs text-[#1A1A1A] placeholder:text-black/30 outline-none"
                />
                <button
                  type="submit"
                  className="text-[10px] font-bold uppercase tracking-widest hover:opacity-60 transition-opacity ml-3"
                >
                  Join
                </button>
              </form>
            )}
            <span className="block text-[10px] text-black/40 uppercase tracking-wide">
              Free curated email. No promotional spam. Unsubscribe anytime.
            </span>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs">
          {/* Rooms */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 block">
              Rooms
            </span>
            <ul className="space-y-2 text-black/70">
              <li>
                <button onClick={() => onNavigate({ type: 'rooms', roomSlug: 'living-room' })} className="hover:text-black hover:underline">
                  Living Room
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'rooms', roomSlug: 'bedroom' })} className="hover:text-black hover:underline">
                  Bedroom
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'rooms', roomSlug: 'kitchen' })} className="hover:text-black hover:underline">
                  Kitchen
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'rooms', roomSlug: 'bathroom' })} className="hover:text-black hover:underline">
                  Bathroom
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'rooms', roomSlug: 'dining-room' })} className="hover:text-black hover:underline">
                  Dining Room
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'rooms', roomSlug: 'small-spaces' })} className="hover:text-black hover:underline">
                  Small Spaces
                </button>
              </li>
            </ul>
          </div>

          {/* Styles */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 block">
              Design Styles
            </span>
            <ul className="space-y-2 text-black/70">
              <li>
                <button onClick={() => onNavigate({ type: 'styles', styleSlug: 'japandi' })} className="hover:text-black hover:underline">
                  Japandi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'styles', styleSlug: 'scandinavian' })} className="hover:text-black hover:underline">
                  Scandinavian
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'styles', styleSlug: 'organic-modern' })} className="hover:text-black hover:underline">
                  Organic Modern
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'styles', styleSlug: 'modern-minimalist' })} className="hover:text-black hover:underline">
                  Modern Minimalist
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'styles', styleSlug: 'contemporary-warmth' })} className="hover:text-black hover:underline">
                  Contemporary Warmth
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'styles', styleSlug: 'earthy-rustic' })} className="hover:text-black hover:underline">
                  Earthy Rustic
                </button>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 block">
              Curated Edits
            </span>
            <ul className="space-y-2 text-black/70">
              <li>
                <button onClick={() => onNavigate({ type: 'collections', collectionSlug: 'dream-bedrooms' })} className="hover:text-black hover:underline">
                  Dream Bedrooms
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'collections', collectionSlug: 'modern-earthy-living' })} className="hover:text-black hover:underline">
                  Modern Earthy Living
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'collections', collectionSlug: 'compact-living-spaces' })} className="hover:text-black hover:underline">
                  Apartment Ideas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'collections', collectionSlug: 'quiet-luxury-kitchens' })} className="hover:text-black hover:underline">
                  Quiet Luxury Kitchens
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'collections', collectionSlug: 'serene-workspaces' })} className="hover:text-black hover:underline">
                  Serene Workspaces
                </button>
              </li>
            </ul>
          </div>

          {/* Editorial Guides */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 block">
              Decor Guides
            </span>
            <ul className="space-y-2 text-black/70">
              <li>
                <button onClick={() => onNavigate({ type: 'ideas', articleSlug: 'how-to-layer-neutrals-like-an-interior-designer' })} className="hover:text-black hover:underline">
                  The 5-Texture Formula
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'ideas', articleSlug: '7-lighting-rules-interior-designers-swear-by' })} className="hover:text-black hover:underline">
                  7 Lighting Rules
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'ideas', articleSlug: 'the-art-of-the-serene-bedroom-sanctuary' })} className="hover:text-black hover:underline">
                  Bedroom Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'ideas', articleSlug: 'small-space-styling-maximum-impact-apartment-living' })} className="hover:text-black hover:underline">
                  Small Space Styling
                </button>
              </li>
            </ul>
          </div>

          {/* Publication & Trust */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 block">
              Trust & Legal
            </span>
            <ul className="space-y-2 text-black/70">
              <li>
                <button onClick={() => onNavigate({ type: 'about' })} className="hover:text-black hover:underline">
                  About the Brand
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'contact' })} className="hover:text-black hover:underline">
                  Editorial & Partnerships
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'legal', page: 'affiliate' })} className="hover:text-black hover:underline">
                  Affiliate Disclosure
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'legal', page: 'licensing' })} className="hover:text-black hover:underline">
                  Image Attribution & Licensing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'legal', page: 'privacy' })} className="hover:text-black hover:underline">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'legal', page: 'terms' })} className="hover:text-black hover:underline">
                  Terms of Use
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and disclaimer matching theme */}
        <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] uppercase tracking-[0.25em] font-medium text-black/40">
          <div>
            © {new Date().getFullYear()} Home With InDa — @homewithinda
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate({ type: 'legal', page: 'privacy' })} className="hover:text-black transition-colors">
              Privacy
            </button>
            <button onClick={() => onNavigate({ type: 'legal', page: 'terms' })} className="hover:text-black transition-colors">
              Terms
            </button>
            <button onClick={() => onNavigate({ type: 'legal', page: 'affiliate' })} className="hover:text-black transition-colors">
              Affiliate Disclosure
            </button>
            <button
              onClick={scrollToTop}
              className="p-1 hover:text-black transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
