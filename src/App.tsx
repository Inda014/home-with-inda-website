import React, { useState, useEffect } from 'react';
import { ViewState, Inspiration } from './types';
import {
  initialRooms,
  initialStyles,
  initialCollections,
  initialArticles,
  initialProducts
} from './data/initialData';
import {
  getStoredInspirations,
  getSavedDesignIds,
  toggleSavedDesign,
  saveInspirations
} from './data/store';
import { updateSEO } from './utils/seo';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { NewsletterModal } from './components/NewsletterModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { InspirationDetailModal } from './components/InspirationDetailModal';

// Views
import { HomeView } from './views/HomeView';
import { ExploreView } from './views/ExploreView';
import { RoomsView } from './views/RoomsView';
import { StylesView } from './views/StylesView';
import { IdeasView } from './views/IdeasView';
import { CollectionsView } from './views/CollectionsView';
import { ShopView } from './views/ShopView';
import { SavedView } from './views/SavedView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';
import { AdminView } from './views/AdminView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>({ type: 'home' });
  const [inspirations, setInspirations] = useState<Inspiration[]>([]);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [selectedInspirationSlug, setSelectedInspirationSlug] = useState<string | null>(null);

  // Modals
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);
  const [architectureModalOpen, setArchitectureModalOpen] = useState(false);

  // Filter pass-through state for Explore view
  const [exploreFilterState, setExploreFilterState] = useState<{
    room?: string;
    style?: string;
    color?: string;
    query?: string;
  }>({});

  // Initialize data from store on mount
  useEffect(() => {
    setInspirations(getStoredInspirations());
    setSavedIds(getSavedDesignIds());
  }, []);

  // Update SEO and scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (currentView.type) {
      case 'home':
        updateSEO(
          'Home With InDa — Beautiful Ideas for Creating a Home You Love',
          'Explore warm, tactile, and architecture-forward interior spaces. Discover room ideas, master design styles, and learn practical decorating rules.'
        );
        break;
      case 'explore':
        updateSEO(
          'Visual Discovery — Explore Interior Inspirations | Home With InDa',
          'Browse our complete library of room designs, aesthetic styles, and color palettes.'
        );
        break;
      case 'rooms':
        if (currentView.roomSlug) {
          const roomObj = initialRooms.find((r) => r.slug === currentView.roomSlug);
          updateSEO(
            `${roomObj ? roomObj.name : 'Room'} Design Ideas & Decorating Rules | Home With InDa`,
            roomObj?.description || 'Explore curated room designs and architectural decorating principles.'
          );
        } else {
          updateSEO(
            'Room Decor Ideas — Living Rooms, Bedrooms, Kitchens | Home With InDa',
            'Discover room layouts and decorating principles for every living space in your home.'
          );
        }
        break;
      case 'styles':
        if (currentView.styleSlug) {
          const styleObj = initialStyles.find((s) => s.slug === currentView.styleSlug);
          updateSEO(
            `${styleObj ? styleObj.name : 'Interior Style'} Guide & Signature Elements | Home With InDa`,
            styleObj?.definition || 'Learn how to master this aesthetic in your home.'
          );
        } else {
          updateSEO(
            'Interior Design Styles Guide — Japandi, Scandinavian, Organic Modern | Home With InDa',
            'Explore defining characteristics, signature materials, and color directions for modern design styles.'
          );
        }
        break;
      case 'ideas':
        if (currentView.articleSlug) {
          const artObj = initialArticles.find((a) => a.slug === currentView.articleSlug);
          updateSEO(
            `${artObj?.title || 'Decor Guide'} | Home With InDa`,
            artObj?.excerpt || 'Practical interior decorating principles and expert tips.'
          );
        } else {
          updateSEO(
            'The Editorial Journal — Decorating Ideas & Styling Tips | Home With InDa',
            'In-depth guides on color theory, textile layering, lighting rules, and spatial planning.'
          );
        }
        break;
      case 'collections':
        if (currentView.collectionSlug) {
          const colObj = initialCollections.find((c) => c.slug === currentView.collectionSlug);
          updateSEO(
            `${colObj?.title || 'Curated Edit'} | Home With InDa`,
            colObj?.description || 'Curated moodboards and thematic decor edits.'
          );
        } else {
          updateSEO(
            'Curated Moodboards & Collections | Home With InDa',
            'Thematic interior edits grouping furniture, lighting, and palette harmonies.'
          );
        }
        break;
      case 'shop':
        updateSEO(
          'Shop the Aesthetic — Curated Furniture & Lighting | Home With InDa',
          'Explore handpicked furniture silhouettes, textural linens, and architectural decor.'
        );
        break;
      case 'saved':
        updateSEO('Your Saved Spaces Moodboard | Home With InDa');
        break;
      case 'about':
        updateSEO('About Home With InDa — Our Story & Aesthetic Philosophy');
        break;
      case 'contact':
        updateSEO('Editorial Inquiries & Brand Partnerships | Home With InDa');
        break;
      case 'legal':
        updateSEO('Disclosures & Policies | Home With InDa');
        break;
      case 'admin':
        updateSEO('Content Studio & CMS | Home With InDa');
        break;
    }
  }, [currentView]);

  // Handle saving/unsaving designs
  const handleToggleSave = (id: string) => {
    const updated = toggleSavedDesign(id);
    setSavedIds(updated);
  };

  // Handle direct navigation
  const handleNavigate = (view: ViewState) => {
    setSelectedInspirationSlug(null);
    setCurrentView(view);
  };

  // Color filter shortcut from details or cards
  const handleSelectColorFilter = (colorName: string) => {
    setSelectedInspirationSlug(null);
    setExploreFilterState({ color: colorName });
    setCurrentView({ type: 'explore' });
  };

  // Active modal inspiration object
  const activeInspiration = selectedInspirationSlug
    ? inspirations.find((i) => i.slug === selectedInspirationSlug) || null
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      {/* Top Main Navigation Bar */}
      <Navbar
        currentView={currentView}
        savedCount={savedIds.length}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenNewsletter={() => setNewsletterModalOpen(true)}
        onOpenArchitecture={() => setArchitectureModalOpen(true)}
      />

      {/* Main Viewport Content */}
      <main className="flex-1">
        {currentView.type === 'home' && (
          <HomeView
            rooms={initialRooms}
            styles={initialStyles}
            inspirations={inspirations}
            collections={initialCollections}
            articles={initialArticles}
            products={initialProducts}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            onSelectInspiration={(slug) => setSelectedInspirationSlug(slug)}
            onNavigate={handleNavigate}
            onOpenNewsletter={() => setNewsletterModalOpen(true)}
          />
        )}

        {currentView.type === 'explore' && (
          <ExploreView
            inspirations={inspirations}
            rooms={initialRooms}
            styles={initialStyles}
            savedIds={savedIds}
            initialRoom={exploreFilterState.room}
            initialStyle={exploreFilterState.style}
            initialColor={exploreFilterState.color}
            searchQuery={exploreFilterState.query}
            onToggleSave={handleToggleSave}
            onSelectInspiration={(slug) => setSelectedInspirationSlug(slug)}
            onSelectRoom={(rSlug) => handleNavigate({ type: 'rooms', roomSlug: rSlug })}
            onSelectStyle={(sSlug) => handleNavigate({ type: 'styles', styleSlug: sSlug })}
          />
        )}

        {currentView.type === 'rooms' && (
          <RoomsView
            rooms={initialRooms}
            activeRoomSlug={currentView.roomSlug}
            inspirations={inspirations}
            styles={initialStyles}
            collections={initialCollections}
            articles={initialArticles}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            onSelectInspiration={(slug) => setSelectedInspirationSlug(slug)}
            onSelectRoom={(rSlug) => handleNavigate({ type: 'rooms', roomSlug: rSlug })}
            onSelectStyle={(sSlug) => handleNavigate({ type: 'styles', styleSlug: sSlug })}
            onNavigate={handleNavigate}
          />
        )}

        {currentView.type === 'styles' && (
          <StylesView
            styles={initialStyles}
            activeStyleSlug={currentView.styleSlug}
            inspirations={inspirations}
            rooms={initialRooms}
            collections={initialCollections}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            onSelectInspiration={(slug) => setSelectedInspirationSlug(slug)}
            onSelectStyle={(sSlug) => handleNavigate({ type: 'styles', styleSlug: sSlug })}
            onSelectRoom={(rSlug) => handleNavigate({ type: 'rooms', roomSlug: rSlug })}
            onNavigate={handleNavigate}
          />
        )}

        {currentView.type === 'ideas' && (
          <IdeasView
            articles={initialArticles}
            activeArticleSlug={currentView.articleSlug}
            inspirations={inspirations}
            products={initialProducts}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            onSelectInspiration={(slug) => setSelectedInspirationSlug(slug)}
            onSelectArticle={(aSlug) => handleNavigate({ type: 'ideas', articleSlug: aSlug })}
            onNavigate={handleNavigate}
          />
        )}

        {currentView.type === 'collections' && (
          <CollectionsView
            collections={initialCollections}
            activeCollectionSlug={currentView.collectionSlug}
            inspirations={inspirations}
            rooms={initialRooms}
            styles={initialStyles}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            onSelectInspiration={(slug) => setSelectedInspirationSlug(slug)}
            onSelectCollection={(cSlug) => handleNavigate({ type: 'collections', collectionSlug: cSlug })}
            onNavigate={handleNavigate}
          />
        )}

        {currentView.type === 'shop' && (
          <ShopView
            products={initialProducts}
            onSelectInspiration={(slug) => setSelectedInspirationSlug(slug)}
          />
        )}

        {currentView.type === 'saved' && (
          <SavedView
            inspirations={inspirations}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            onSelectInspiration={(slug) => setSelectedInspirationSlug(slug)}
            onNavigate={handleNavigate}
          />
        )}

        {currentView.type === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentView.type === 'contact' && (
          <ContactView />
        )}

        {currentView.type === 'legal' && (
          <LegalView
            page={currentView.page || 'affiliate'}
            onNavigate={handleNavigate}
          />
        )}

        {currentView.type === 'admin' && (
          <AdminView
            inspirations={inspirations}
            rooms={initialRooms}
            styles={initialStyles}
            onUpdateInspirations={(updated) => setInspirations(updated)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenArchitecture={() => setArchitectureModalOpen(true)}
      />

      {/* 1. Inspiration Detail Modal (Deep Discovery Space Page) */}
      <InspirationDetailModal
        inspiration={activeInspiration}
        allInspirations={inspirations}
        allProducts={initialProducts}
        allArticles={initialArticles}
        allCollections={initialCollections}
        isSaved={activeInspiration ? savedIds.includes(activeInspiration.id) : false}
        onToggleSave={handleToggleSave}
        onClose={() => setSelectedInspirationSlug(null)}
        onSelectInspiration={(slug) => setSelectedInspirationSlug(slug)}
        onSelectRoom={(rSlug) => {
          setSelectedInspirationSlug(null);
          handleNavigate({ type: 'rooms', roomSlug: rSlug });
        }}
        onSelectStyle={(sSlug) => {
          setSelectedInspirationSlug(null);
          handleNavigate({ type: 'styles', styleSlug: sSlug });
        }}
        onSelectCollection={(cSlug) => {
          setSelectedInspirationSlug(null);
          handleNavigate({ type: 'collections', collectionSlug: cSlug });
        }}
        onSelectArticle={(aSlug) => {
          setSelectedInspirationSlug(null);
          handleNavigate({ type: 'ideas', articleSlug: aSlug });
        }}
        onSelectColor={handleSelectColorFilter}
      />

      {/* 2. Global Predictive Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        inspirations={inspirations}
        rooms={initialRooms}
        styles={initialStyles}
        articles={initialArticles}
        onSelectInspiration={(slug) => setSelectedInspirationSlug(slug)}
        onSelectRoom={(rSlug) => handleNavigate({ type: 'rooms', roomSlug: rSlug })}
        onSelectStyle={(sSlug) => handleNavigate({ type: 'styles', styleSlug: sSlug })}
        onSelectArticle={(aSlug) => handleNavigate({ type: 'ideas', articleSlug: aSlug })}
      />

      {/* 3. Newsletter Subscription Modal ("The Weekly Edit") */}
      <NewsletterModal
        isOpen={newsletterModalOpen}
        onClose={() => setNewsletterModalOpen(false)}
      />

      {/* 4. Strategic Architecture & Assumptions Modal */}
      <ArchitectureModal
        isOpen={architectureModalOpen}
        onClose={() => setArchitectureModalOpen(false)}
      />
    </div>
  );
}
