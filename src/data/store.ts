import { Inspiration, RoomCategory, StyleCategory, Collection, Article, ProductItem } from '../types';
import {
  INITIAL_INSPIRATIONS,
  INITIAL_ROOMS,
  INITIAL_STYLES,
  INITIAL_COLLECTIONS,
  INITIAL_ARTICLES,
  INITIAL_PRODUCTS
} from './initialData';

const STORAGE_KEY_INSPIRATIONS = 'homewithinda_inspirations_v1';
const STORAGE_KEY_COLLECTIONS = 'homewithinda_collections_v1';
const STORAGE_KEY_ARTICLES = 'homewithinda_articles_v1';
const STORAGE_KEY_PRODUCTS = 'homewithinda_products_v1';
const STORAGE_KEY_SAVED = 'homewithinda_saved_ids_v1';
const STORAGE_KEY_NEWSLETTER = 'homewithinda_newsletter_v1';

export function getStoredInspirations(): Inspiration[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY_INSPIRATIONS);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Failed reading inspirations from storage', e);
  }
  return INITIAL_INSPIRATIONS;
}

export function saveStoredInspirations(items: Inspiration[]) {
  try {
    localStorage.setItem(STORAGE_KEY_INSPIRATIONS, JSON.stringify(items));
  } catch (e) {
    console.error('Failed saving inspirations', e);
  }
}

export function getStoredCollections(): Collection[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY_COLLECTIONS);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Failed reading collections', e);
  }
  return INITIAL_COLLECTIONS;
}

export function saveStoredCollections(items: Collection[]) {
  try {
    localStorage.setItem(STORAGE_KEY_COLLECTIONS, JSON.stringify(items));
  } catch (e) {
    console.error('Failed saving collections', e);
  }
}

export function getStoredArticles(): Article[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY_ARTICLES);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Failed reading articles', e);
  }
  return INITIAL_ARTICLES;
}

export function saveStoredArticles(items: Article[]) {
  try {
    localStorage.setItem(STORAGE_KEY_ARTICLES, JSON.stringify(items));
  } catch (e) {
    console.error('Failed saving articles', e);
  }
}

export function getStoredProducts(): ProductItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY_PRODUCTS);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Failed reading products', e);
  }
  return INITIAL_PRODUCTS;
}

export function saveStoredProducts(items: ProductItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(items));
  } catch (e) {
    console.error('Failed saving products', e);
  }
}

export function getSavedInspirationIds(): string[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY_SAVED);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Failed reading saved ids', e);
  }
  return ['insp-1', 'insp-2'];
}

export function toggleSavedInspiration(id: string): string[] {
  const current = getSavedInspirationIds();
  const exists = current.includes(id);
  const updated = exists ? current.filter((x) => x !== id) : [...current, id];
  try {
    localStorage.setItem(STORAGE_KEY_SAVED, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed saving favorite', e);
  }
  return updated;
}

export function getNewsletterSubscribers(): string[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY_NEWSLETTER);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Failed reading newsletter', e);
  }
  return [];
}

export function addNewsletterSubscriber(email: string): boolean {
  try {
    const current = getNewsletterSubscribers();
    if (!current.includes(email)) {
      localStorage.setItem(STORAGE_KEY_NEWSLETTER, JSON.stringify([...current, email]));
      return true;
    }
  } catch (e) {
    console.error('Failed adding subscriber', e);
  }
  return false;
}

export function resetAllToDefaults() {
  localStorage.removeItem(STORAGE_KEY_INSPIRATIONS);
  localStorage.removeItem(STORAGE_KEY_COLLECTIONS);
  localStorage.removeItem(STORAGE_KEY_ARTICLES);
  localStorage.removeItem(STORAGE_KEY_PRODUCTS);
  localStorage.removeItem(STORAGE_KEY_SAVED);
}

// Aliases for convenience
export const saveInspirations = saveStoredInspirations;
export const getSavedDesignIds = getSavedInspirationIds;
export const toggleSavedDesign = toggleSavedInspiration;
export const resetToDefaults = resetAllToDefaults;
