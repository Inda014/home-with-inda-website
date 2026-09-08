import React, { useState } from 'react';
import { Search, Heart, Menu, X, SlidersHorizontal, Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  savedCount: number;
  onOpenSearch: () => void;
  onOpenArchitecture: () => void;
  onOpenNewsletter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  savedCount,
  onOpenSearch,
  onOpenArchitecture,
  onOpenNewsletter
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', view: { type: 'home' } as ViewState },
    { label: 'Explore', view: { type: 'explore' } as ViewState },
    { label: 'Rooms', view: { type: 'rooms' } as ViewState },
    { label: 'Styles', view: { type: 'styles' } as ViewState },
    { label: 'Decor Ideas', view: { type: 'ideas' } as ViewState },
    { label: 'Collections', view: { type: 'collections' } as ViewState },
    { label: 'Shop', view: { type: 'shop' } as ViewState },
    { label: 'About', view: { type: 'about' } as ViewState }
  ];

  const isActive = (itemType: string) => {
    return currentView.type === itemType;
  };

  const handleNavClick = (view: ViewState) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-black/5 transition-all">
      {/* Top utility notification bar */}
      <div className="bg-[#FAF9F6] border-b border-black/5 px-4 sm:px-8 py-1.5 text-[11px] text-black/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-black/40" />
            <span className="uppercase tracking-widest text-[9px] font-bold text-black/50">Pinterest:</span>
            <a
              href="https://pinterest.com/homewithinda"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#1A1A1A] hover:underline flex items-center gap-1"
            >
              @homewithinda
              <ExternalLink className="w-2.5 h-2.5 text-black/40" />
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-[10px] uppercase tracking-widest font-medium">
            <button
              onClick={onOpenArchitecture}
              className="text-black/60 hover:text-black flex items-center gap-1 transition-colors"
            >
              <Sparkles className="w-3 h-3 text-black/40" />
              <span>Assumptions & Architecture</span>
              <span className="text-[9px] bg-black/5 text-[#1A1A1A] px-1.5 py-0.5 font-mono">11/11</span>
            </button>

            <button
              onClick={onOpenNewsletter}
              className="hidden sm:inline-block text-black/60 hover:text-black transition-colors"
            >
              The Weekly Edit
            </button>

            <button
              onClick={() => onNavigate({ type: 'admin' })}
              className="text-black/60 hover:text-black transition-colors flex items-center gap-1"
              title="Content Studio (CMS)"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span className="hidden md:inline">Content Studio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick({ type: 'home' })}
            className="cursor-pointer group select-none flex items-center gap-3"
          >
            <span className="text-2xl sm:text-3xl font-serif tracking-tight font-semibold italic text-[#1A1A1A] group-hover:opacity-80 transition-opacity">
              Home With InDa
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest font-medium text-black/60">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`py-2 transition-colors relative hover:text-black ${
                  isActive(item.view.type)
                    ? 'text-[#1A1A1A] font-bold'
                    : 'text-black/60'
                }`}
              >
                {item.label}
                {isActive(item.view.type) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-black" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4">
            {/* Pinterest Direct Link */}
            <a
              href="https://pinterest.com/homewithinda"
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity hidden sm:block text-[#1A1A1A]"
              title="Follow @homewithinda on Pinterest"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.14 9.41 7.62 11.17-.07-.94-.13-2.37.03-3.39.14-.92.93-3.95.93-3.95s-.24-.48-.24-1.18c0-1.11.64-1.94 1.44-1.94.68 0 1.01.51 1.01 1.12 0 .68-.43 1.71-.66 2.65-.19.8.4 1.45 1.19 1.45 1.43 0 2.53-1.51 2.53-3.68 0-1.92-1.38-3.27-3.35-3.27-2.28 0-3.62 1.71-3.62 3.48 0 .69.26 1.43.59 1.83.07.08.08.14.05.23l-.22.9c-.04.14-.12.17-.28.1-.99-.46-1.61-1.91-1.61-3.07 0-2.51 1.82-4.81 5.25-4.81 2.76 0 4.9 1.96 4.9 4.58 0 2.74-1.73 4.96-4.13 4.96-.81 0-1.57-.42-1.83-.92l-.5 1.9c-.18.69-.67 1.55-.99 2.08C10.39 23.82 11.18 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
              </svg>
            </a>

            {/* Search Trigger in Theme Style */}
            <button
              onClick={onOpenSearch}
              className="text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 border border-black/10 hover:border-black transition-all flex items-center gap-2 bg-transparent text-[#1A1A1A]"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search Inspiration</span>
            </button>

            {/* Saved Moodboard */}
            <button
              onClick={() => onNavigate({ type: 'saved' })}
              className={`px-3 py-2 border transition-all flex items-center gap-1.5 ${
                currentView.type === 'saved'
                  ? 'border-black bg-black text-white'
                  : 'border-black/10 hover:border-black text-[#1A1A1A] bg-transparent'
              }`}
              title="View your saved inspirations"
              aria-label="Saved Pins"
            >
              <Heart className={`w-3.5 h-3.5 ${savedCount > 0 ? (currentView.type === 'saved' ? 'fill-white' : 'fill-black text-black') : ''}`} />
              {savedCount > 0 && (
                <span className="text-[10px] font-mono font-bold">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-black/60 hover:text-black"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-black/5 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`text-left text-[11px] font-bold uppercase tracking-widest py-2 border-b border-black/5 ${
                  isActive(item.view.type) ? 'text-black' : 'text-black/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-2.5 text-[10px] uppercase tracking-widest text-black/60 font-medium">
            <button
              onClick={() => {
                onOpenArchitecture();
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 font-bold text-black flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-black/40" />
              Assumptions & Architecture (11 Points)
            </button>
            <button
              onClick={() => {
                onOpenNewsletter();
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-black/60"
            >
              Subscribe to Weekly Edit
            </button>
            <button
              onClick={() => {
                onNavigate({ type: 'admin' });
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-black/60 flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Content Studio (CMS)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
