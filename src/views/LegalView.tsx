import React from 'react';
import { ShieldCheck, Info, FileText } from 'lucide-react';
import { ViewState } from '../types';

interface LegalViewProps {
  page: 'privacy' | 'terms' | 'affiliate' | 'licensing';
  onNavigate: (view: ViewState) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ page, onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      {/* Sub-nav tabs */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-[#E6DFD3] text-xs">
        <button
          onClick={() => onNavigate({ type: 'legal', page: 'affiliate' })}
          className={`px-3 py-1.5 rounded-full ${
            page === 'affiliate' ? 'bg-[#2C2926] text-white font-medium' : 'bg-[#FAF7F2] text-[#5E5041] hover:text-[#1A1816]'
          }`}
        >
          Affiliate Disclosure
        </button>
        <button
          onClick={() => onNavigate({ type: 'legal', page: 'licensing' })}
          className={`px-3 py-1.5 rounded-full ${
            page === 'licensing' ? 'bg-[#2C2926] text-white font-medium' : 'bg-[#FAF7F2] text-[#5E5041] hover:text-[#1A1816]'
          }`}
        >
          Image Attribution & Licensing
        </button>
        <button
          onClick={() => onNavigate({ type: 'legal', page: 'privacy' })}
          className={`px-3 py-1.5 rounded-full ${
            page === 'privacy' ? 'bg-[#2C2926] text-white font-medium' : 'bg-[#FAF7F2] text-[#5E5041] hover:text-[#1A1816]'
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => onNavigate({ type: 'legal', page: 'terms' })}
          className={`px-3 py-1.5 rounded-full ${
            page === 'terms' ? 'bg-[#2C2926] text-white font-medium' : 'bg-[#FAF7F2] text-[#5E5041] hover:text-[#1A1816]'
          }`}
        >
          Terms of Use
        </button>
      </div>

      {page === 'affiliate' && (
        <div className="space-y-6 text-[#3E342B] text-sm leading-relaxed">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Compliance & Standards</span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#1A1816]">
            Affiliate Disclosure & Transparency Statement
          </h1>
          <p>
            Home With InDa (@homewithinda) is an independent home-decor publication committed to visual curation, design education, and interior inspiration.
          </p>
          <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#E6DFD3] space-y-2">
            <h3 className="font-serif text-base text-[#1A1816] font-semibold">FTC Endorsement Guide Compliance</h3>
            <p className="text-xs text-[#5E5041]">
              In compliance with the Federal Trade Commission (FTC) guidelines, please assume that certain outbound links from product showcases, articles, and "Shop the Look" sections may be affiliate links.
            </p>
          </div>
          <h3 className="text-xl font-serif text-[#1A1816] pt-2">How Affiliate Links Work</h3>
          <p>
            When you click on a curated product recommendation and make an eligible purchase on a partner website, Home With InDa may receive a small referral commission at absolutely no additional cost to you. The price you pay is identical whether you use our link or navigate directly.
          </p>
          <h3 className="text-xl font-serif text-[#1A1816] pt-2">Our Editorial Independence</h3>
          <p>
            Affiliate partnerships do not influence our editorial selections. We only feature furniture, lighting, and textiles that meet our standards for craftsmanship, architectural proportion, and aesthetic warmth.
          </p>
        </div>
      )}

      {page === 'licensing' && (
        <div className="space-y-6 text-[#3E342B] text-sm leading-relaxed">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Intellectual Property</span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#1A1816]">
            Image Attribution & Copyright Policy
          </h1>
          <p>
            Home With InDa treats architectural photography and interior design intellectual property with the utmost respect.
          </p>
          <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#E6DFD3] space-y-2">
            <h3 className="font-serif text-base text-[#1A1816] font-semibold">Strict Attribution Standard</h3>
            <p className="text-xs text-[#5E5041]">
              Every inspiration photograph displayed across our website and Pinterest pins features clear attribution to the architectural photographer, studio, or licensed library (including Unsplash Editorial Licenses).
            </p>
          </div>
          <h3 className="text-xl font-serif text-[#1A1816] pt-2">Photographers and Rights Holders</h3>
          <p>
            If you are a photographer, architect, or interior designer whose work is credited here and you wish to update photo details, provide higher-resolution credits, or request removal, please contact our team directly at <strong>editorial@homewithinda.com</strong>.
          </p>
        </div>
      )}

      {page === 'privacy' && (
        <div className="space-y-6 text-[#3E342B] text-sm leading-relaxed">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Data Protection</span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#1A1816]">
            Privacy Policy
          </h1>
          <p>
            Your privacy is of foundational importance to us. This statement outlines what data Home With InDa collects and how it is used.
          </p>
          <h3 className="text-xl font-serif text-[#1A1816] pt-2">1. Local Storage for Moodboards</h3>
          <p>
            When you save an interior space to your moodboard, this data is kept locally on your web browser via localStorage. We do not transmit your personal moodboard items to third-party data brokers.
          </p>
          <h3 className="text-xl font-serif text-[#1A1816] pt-2">2. Newsletter Subscriptions</h3>
          <p>
            When you join "The Weekly Edit," your email address is used solely to deliver weekly interior inspiration digests. You may unsubscribe at any time with a single click.
          </p>
          <h3 className="text-xl font-serif text-[#1A1816] pt-2">3. Cookies and Analytics</h3>
          <p>
            We use standard web analytics to measure aggregated page views, referral traffic from Pinterest, and popular search terms to improve our editorial content.
          </p>
        </div>
      )}

      {page === 'terms' && (
        <div className="space-y-6 text-[#3E342B] text-sm leading-relaxed">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Terms</span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#1A1816]">
            Terms of Use
          </h1>
          <p>
            By accessing or browsing Home With InDa (@homewithinda), you agree to be bound by these Terms of Use and all applicable laws and regulations.
          </p>
          <h3 className="text-xl font-serif text-[#1A1816] pt-2">Permitted Use</h3>
          <p>
            You are welcome to browse, save inspirations to your moodboard, and share links or Pinterest pins of our content for non-commercial, personal home decorating purposes.
          </p>
        </div>
      )}
    </div>
  );
};
