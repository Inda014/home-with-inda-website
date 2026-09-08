import React, { useState } from 'react';
import { X, Check, Mail, Sparkles } from 'lucide-react';
import { addNewsletterSubscriber } from '../data/store';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      addNewsletterSubscriber(email);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        onClose();
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#FDFBF7] text-[#2C2926] rounded-xl shadow-2xl border border-[#E6DFD3] p-6 md:p-8 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#7A6A58] hover:text-[#1A1816] rounded-full"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4 text-center">
          <div className="w-12 h-12 mx-auto bg-[#F3EFE6] text-[#7A6A58] rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-[#7A6A58] font-medium">The Weekly Edit</span>
            <h3 className="text-2xl md:text-3xl font-serif text-[#1A1816] mt-1">
              Beautiful ideas for creating a home you love.
            </h3>
          </div>

          <p className="text-sm text-[#5E5041] max-w-md mx-auto leading-relaxed">
            Every Sunday morning: 3 curated room breakdowns, 1 actionable styling rule, our top Pinterest-saved designs, and honest material sources. Zero spam, ever.
          </p>

          {submitted ? (
            <div className="p-4 rounded-lg bg-[#EFECE6] text-[#2C2926] flex items-center justify-center gap-2 text-sm font-medium">
              <Check className="w-4 h-4 text-emerald-700" />
              <span>Welcome to the Home With InDa community. You're on the list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-3 bg-white text-sm text-[#1A1816] placeholder-[#998873] border border-[#E6DFD3] rounded focus:outline-none focus:border-[#7A6A58]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#2C2926] hover:bg-[#1A1816] text-[#FDFBF7] text-xs font-medium uppercase tracking-wider rounded transition-colors whitespace-nowrap"
                >
                  Join The Edit
                </button>
              </div>
              <p className="text-[11px] text-[#7A6A58]">
                By subscribing, you agree to receive our weekly editorial inspiration. Unsubscribe anytime.
              </p>
            </form>
          )}

          <div className="pt-3 border-t border-[#E6DFD3] flex items-center justify-center gap-2 text-xs text-[#7A6A58]">
            <Sparkles className="w-3.5 h-3.5 text-[#998873]" />
            <span>Over 45,000+ monthly Pinterest pinners follow @homewithinda</span>
          </div>
        </div>
      </div>
    </div>
  );
};
