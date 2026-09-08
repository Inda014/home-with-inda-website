import React, { useState } from 'react';
import { Plus, Trash2, Edit, Check, Download, RotateCcw, Sparkles, Layers, Image as ImageIcon } from 'lucide-react';
import { Inspiration, RoomCategory, StyleCategory } from '../types';
import { saveInspirations, getNewsletterSubscribers, resetToDefaults } from '../data/store';

interface AdminViewProps {
  inspirations: Inspiration[];
  rooms: RoomCategory[];
  styles: StyleCategory[];
  onUpdateInspirations: (items: Inspiration[]) => void;
}

export const AdminView: React.FC<AdminViewProps> = ({
  inspirations,
  rooms,
  styles,
  onUpdateInspirations
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'subscribers'>('content');
  const [subscribers, setSubscribers] = useState<string[]>(getNewsletterSubscribers());
  const [showAddForm, setShowAddForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Form state for new inspiration
  const [newDesign, setNewDesign] = useState({
    title: '',
    room: rooms[0]?.name || 'Living Room',
    style: styles[0]?.name || 'Japandi',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description: '',
    budgetLevel: '$$' as '$' | '$$' | '$$$',
    tags: 'living room, warm minimalist, neutral',
    author: 'Architectural Photographer',
    paletteName1: 'Warm Taupe',
    paletteHex1: '#D6C8B4',
    paletteName2: 'Sandstone',
    paletteHex2: '#EFE7DA',
    decorTip1: 'Introduce organic linen drapes to soften the window architecture.',
    decorTip2: 'Anchor the seating zone with an oversized wool area rug.'
  });

  const handleCreateInspiration = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = newDesign.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const id = `insp-${Date.now()}`;

    const created: Inspiration = {
      id,
      slug: slug || `space-${Date.now()}`,
      title: newDesign.title,
      room: newDesign.room,
      style: newDesign.style,
      imageUrl: newDesign.imageUrl,
      imageAlt: `${newDesign.title} interior design in ${newDesign.room}`,
      aspectRatio: 'tall',
      description: newDesign.description || 'A thoughtfully layered interior space showcasing natural light, organic materials, and intentional styling.',
      colorPalette: [
        { name: newDesign.paletteName1, hex: newDesign.paletteHex1 },
        { name: newDesign.paletteName2, hex: newDesign.paletteHex2 }
      ],
      budgetLevel: newDesign.budgetLevel,
      tags: newDesign.tags.split(',').map((t) => t.trim().toLowerCase()),
      featured: true,
      trending: true,
      decorTips: [newDesign.decorTip1, newDesign.decorTip2].filter(Boolean),
      sourceAttribution: {
        author: newDesign.author,
        platform: 'Unsplash Editorial License',
        license: 'Free Commercial & Editorial Use'
      },
      relatedDesignIds: [],
      relatedArticleIds: [],
      relatedProductIds: [],
      seo: {
        metaTitle: `${newDesign.title} | Home With InDa`,
        metaDescription: newDesign.description || 'A thoughtfully layered interior space showcasing natural light, organic materials, and intentional styling.'
      }
    };

    const updated = [created, ...inspirations];
    onUpdateInspirations(updated);
    saveInspirations(updated);
    setShowAddForm(false);
    setSuccessMsg('New interior space successfully published to catalog!');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this space from the catalog?')) {
      const updated = inspirations.filter((i) => i.id !== id);
      onUpdateInspirations(updated);
      saveInspirations(updated);
    }
  };

  const handleToggleFeatured = (id: string) => {
    const updated = inspirations.map((item) =>
      item.id === id ? { ...item, featured: !item.featured } : item
    );
    onUpdateInspirations(updated);
    saveInspirations(updated);
  };

  const handleToggleTrending = (id: string) => {
    const updated = inspirations.map((item) =>
      item.id === id ? { ...item, trending: !item.trending } : item
    );
    onUpdateInspirations(updated);
    saveInspirations(updated);
  };

  const handleExportSubscribers = () => {
    const csvContent = 'data:text/csv;charset=utf-8,' + ['Email Address', ...subscribers].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'homewithinda-subscribers.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    if (confirm('Reset catalog back to initial curated database? Custom additions will be replaced.')) {
      resetToDefaults();
      window.location.reload();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#E6DFD3] gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A6A58] font-medium">Content Management</span>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#1A1816]">
            Editorial Studio & CMS
          </h1>
          <p className="text-sm text-[#5E5041] mt-1 font-light">
            Manage your visual inspirations, toggle featured items on the homepage, and view newsletter subscribers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3.5 py-2 bg-[#FAF7F2] hover:bg-[#F3EFE6] text-xs text-[#7A6A58] hover:text-[#1A1816] rounded border border-[#E6DFD3] flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo DB</span>
          </button>
        </div>
      </div>

      {successMsg && (
        <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded border border-emerald-200 flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 border-b border-[#E6DFD3] pb-2 text-xs">
        <button
          onClick={() => setActiveTab('content')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'content'
              ? 'bg-[#2C2926] text-white'
              : 'bg-[#FAF7F2] text-[#5E5041] hover:text-[#1A1816]'
          }`}
        >
          Catalog Inspirations ({inspirations.length})
        </button>
        <button
          onClick={() => {
            setActiveTab('subscribers');
            setSubscribers(getNewsletterSubscribers());
          }}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'subscribers'
              ? 'bg-[#2C2926] text-white'
              : 'bg-[#FAF7F2] text-[#5E5041] hover:text-[#1A1816]'
          }`}
        >
          The Weekly Edit Subscribers ({subscribers.length})
        </button>
      </div>

      {activeTab === 'content' && (
        <div className="space-y-6">
          {/* Top action bar */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#7A6A58]">
              Showing {inspirations.length} interior designs in active repository
            </span>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 bg-[#2C2926] hover:bg-[#1A1816] text-[#FDFBF7] text-xs font-medium uppercase tracking-wider rounded flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>{showAddForm ? 'Cancel Form' : 'Add New Inspiration'}</span>
            </button>
          </div>

          {/* Add New Space Form */}
          {showAddForm && (
            <form
              onSubmit={handleCreateInspiration}
              className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E6DFD3] space-y-4 text-xs"
            >
              <div className="border-b border-[#E6DFD3] pb-2">
                <h3 className="font-serif text-lg text-[#1A1816]">Add New Space to Catalog</h3>
                <span className="text-[11px] text-[#7A6A58]">Fill in editorial photography and spatial styling details</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1A1816] font-medium mb-1">Title of Space</label>
                  <input
                    type="text"
                    required
                    value={newDesign.title}
                    onChange={(e) => setNewDesign({ ...newDesign, title: e.target.value })}
                    placeholder="E.g., Earthy Travertine Living Room with Bouclé"
                    className="w-full px-3 py-2 bg-white border border-[#E6DFD3] rounded text-[#1A1816] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#1A1816] font-medium mb-1">Image URL (High-Res)</label>
                  <input
                    type="url"
                    required
                    value={newDesign.imageUrl}
                    onChange={(e) => setNewDesign({ ...newDesign, imageUrl: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3 py-2 bg-white border border-[#E6DFD3] rounded text-[#1A1816] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#1A1816] font-medium mb-1">Room Category</label>
                  <select
                    value={newDesign.room}
                    onChange={(e) => setNewDesign({ ...newDesign, room: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#E6DFD3] rounded text-[#1A1816] focus:outline-none"
                  >
                    {rooms.map((r) => (
                      <option key={r.id} value={r.name}>{r.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#1A1816] font-medium mb-1">Style Category</label>
                  <select
                    value={newDesign.style}
                    onChange={(e) => setNewDesign({ ...newDesign, style: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#E6DFD3] rounded text-[#1A1816] focus:outline-none"
                  >
                    {styles.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[#1A1816] font-medium mb-1">Narrative Description</label>
                  <textarea
                    rows={3}
                    value={newDesign.description}
                    onChange={(e) => setNewDesign({ ...newDesign, description: e.target.value })}
                    placeholder="Describe spatial materials, light qualities, and decor touches..."
                    className="w-full px-3 py-2 bg-white border border-[#E6DFD3] rounded text-[#1A1816] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#1A1816] font-medium mb-1">Primary Color Swatch</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newDesign.paletteName1}
                      onChange={(e) => setNewDesign({ ...newDesign, paletteName1: e.target.value })}
                      placeholder="Color Name (e.g. Oatmeal)"
                      className="flex-1 px-3 py-2 bg-white border border-[#E6DFD3] rounded text-[#1A1816]"
                    />
                    <input
                      type="color"
                      value={newDesign.paletteHex1}
                      onChange={(e) => setNewDesign({ ...newDesign, paletteHex1: e.target.value })}
                      className="w-10 h-9 p-0.5 rounded border border-[#E6DFD3] bg-white cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1A1816] font-medium mb-1">Secondary Color Swatch</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newDesign.paletteName2}
                      onChange={(e) => setNewDesign({ ...newDesign, paletteName2: e.target.value })}
                      placeholder="Color Name (e.g. Sandstone)"
                      className="flex-1 px-3 py-2 bg-white border border-[#E6DFD3] rounded text-[#1A1816]"
                    />
                    <input
                      type="color"
                      value={newDesign.paletteHex2}
                      onChange={(e) => setNewDesign({ ...newDesign, paletteHex2: e.target.value })}
                      className="w-10 h-9 p-0.5 rounded border border-[#E6DFD3] bg-white cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1A1816] font-medium mb-1">Styling Tip #1</label>
                  <input
                    type="text"
                    value={newDesign.decorTip1}
                    onChange={(e) => setNewDesign({ ...newDesign, decorTip1: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#E6DFD3] rounded text-[#1A1816]"
                  />
                </div>

                <div>
                  <label className="block text-[#1A1816] font-medium mb-1">Photographer Credit</label>
                  <input
                    type="text"
                    value={newDesign.author}
                    onChange={(e) => setNewDesign({ ...newDesign, author: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#E6DFD3] rounded text-[#1A1816]"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 bg-white border border-[#E6DFD3] rounded text-[#5E5041]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#2C2926] text-white rounded font-medium"
                >
                  Publish Space
                </button>
              </div>
            </form>
          )}

          {/* Table of inspirations */}
          <div className="bg-white rounded-xl border border-[#E6DFD3] overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF7F2] border-b border-[#E6DFD3] text-[#7A6A58] uppercase font-semibold">
                <tr>
                  <th className="p-3.5">Preview</th>
                  <th className="p-3.5">Title</th>
                  <th className="p-3.5">Room</th>
                  <th className="p-3.5">Style</th>
                  <th className="p-3.5">Featured</th>
                  <th className="p-3.5">Trending</th>
                  <th className="p-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6DFD3]/60">
                {inspirations.map((item) => (
                  <tr key={item.id} className="hover:bg-[#FAF7F2]/50 transition-colors">
                    <td className="p-3.5">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded bg-[#F3EFE6]"
                      />
                    </td>
                    <td className="p-3.5 font-medium text-[#1A1816] max-w-[200px] truncate">
                      {item.title}
                    </td>
                    <td className="p-3.5 text-[#5E5041]">{item.room}</td>
                    <td className="p-3.5 text-[#5E5041]">{item.style}</td>
                    <td className="p-3.5">
                      <button
                        onClick={() => handleToggleFeatured(item.id)}
                        className={`px-2 py-1 rounded text-[11px] font-medium ${
                          item.featured ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {item.featured ? 'Yes' : 'No'}
                      </button>
                    </td>
                    <td className="p-3.5">
                      <button
                        onClick={() => handleToggleTrending(item.id)}
                        className={`px-2 py-1 rounded text-[11px] font-medium ${
                          item.trending ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {item.trending ? 'Yes' : 'No'}
                      </button>
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 hover:bg-rose-50 text-rose-600 rounded transition-colors"
                        title="Delete space"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'subscribers' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#7A6A58]">
              {subscribers.length} total readers subscribed to Sunday issue
            </span>
            <button
              onClick={handleExportSubscribers}
              className="px-4 py-2 bg-[#FAF7F2] hover:bg-[#F3EFE6] text-[#2C2926] text-xs font-medium rounded border border-[#E6DFD3] flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>

          <div className="bg-white rounded-xl border border-[#E6DFD3] overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF7F2] border-b border-[#E6DFD3] text-[#7A6A58] uppercase font-semibold">
                <tr>
                  <th className="p-3.5">#</th>
                  <th className="p-3.5">Subscriber Email</th>
                  <th className="p-3.5">Subscription Source</th>
                  <th className="p-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6DFD3]/60">
                {subscribers.map((email, idx) => (
                  <tr key={email} className="hover:bg-[#FAF7F2]/50">
                    <td className="p-3.5 font-mono text-[#7A6A58]">{idx + 1}</td>
                    <td className="p-3.5 font-medium text-[#1A1816]">{email}</td>
                    <td className="p-3.5 text-[#5E5041]">The Weekly Edit Modal</td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[11px]">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
