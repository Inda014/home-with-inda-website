import React, { useState } from 'react';
import { Mail, Check, Send, Sparkles } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Editorial Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Get in Touch</span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#1A1816] font-normal">
          Contact & Collaborations
        </h1>
        <p className="text-sm text-[#5E5041] font-light leading-relaxed">
          We welcome architectural feature submissions, designer spotlights, and thoughtful brand partnership inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left info */}
        <div className="md:col-span-5 space-y-6 bg-[#FAF7F2] p-6 sm:p-8 rounded-xl border border-[#E6DFD3] text-xs text-[#5E5041]">
          <div className="space-y-2">
            <span className="font-serif text-base text-[#1A1816] font-semibold block">Editorial Submissions</span>
            <p className="leading-relaxed">
              Are you an interior designer, architect, or photographer with a residential project that aligns with our aesthetic? Submit high-resolution photography and design statements.
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-[#E6DFD3]">
            <span className="font-serif text-base text-[#1A1816] font-semibold block">Brand Partnerships</span>
            <p className="leading-relaxed">
              We partner with home decor brands, sustainable lighting ateliers, and artisanal textile studios for curated features, editorial guides, and Pinterest moodboard campaigns.
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-[#E6DFD3]">
            <span className="font-serif text-base text-[#1A1816] font-semibold block">Email Inquiries</span>
            <div className="font-mono text-[#1A1816] text-xs">editorial@homewithinda.com</div>
            <div className="text-[11px] text-[#7A6A58]">Response window: 24–48 business hours</div>
          </div>
        </div>

        {/* Right form */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#E6DFD3]">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F2] text-emerald-700 flex items-center justify-center mx-auto border border-[#E6DFD3]">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#1A1816]">Message Received</h3>
              <p className="text-xs text-[#5E5041] max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out to Home With InDa. Our editorial team will review your inquiry and be in touch promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#7A6A58] underline underline-offset-4 hover:text-[#1A1816]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#1A1816] font-medium mb-1 uppercase tracking-wider text-[11px]">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="E.g. Elena Rossi"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E6DFD3] rounded text-[#1A1816] focus:outline-none focus:border-[#7A6A58]"
                />
              </div>

              <div>
                <label className="block text-[#1A1816] font-medium mb-1 uppercase tracking-wider text-[11px]">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="elena@example.com"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E6DFD3] rounded text-[#1A1816] focus:outline-none focus:border-[#7A6A58]"
                />
              </div>

              <div>
                <label className="block text-[#1A1816] font-medium mb-1 uppercase tracking-wider text-[11px]">
                  Topic
                </label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E6DFD3] rounded text-[#1A1816] focus:outline-none focus:border-[#7A6A58]"
                >
                  <option value="Editorial Inquiry">Editorial Project Submission</option>
                  <option value="Brand Partnership">Brand Partnership & Sponsored Editorial</option>
                  <option value="Licensing Question">Photography Licensing & Credit Inquiry</option>
                  <option value="General Question">General Reader Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[#1A1816] font-medium mb-1 uppercase tracking-wider text-[11px]">
                  Message / Project Details
                </label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share links to project portfolios, photography credits, or collaboration details..."
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E6DFD3] rounded text-[#1A1816] focus:outline-none focus:border-[#7A6A58]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#2C2926] hover:bg-[#1A1816] text-white font-medium uppercase tracking-widest text-xs rounded transition-colors flex items-center justify-center gap-2"
              >
                <span>Submit Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
