export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface SourceAttribution {
  author: string;
  platform: string;
  license: string;
  link?: string;
}

export interface Inspiration {
  id: string;
  slug: string;
  title: string;
  description: string;
  room: string;
  style: string;
  imageUrl: string;
  imageAlt: string;
  aspectRatio: 'tall' | 'wide' | 'square';
  colorPalette: ColorSwatch[];
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  decorTips: string[];
  budgetLevel: '$' | '$$' | '$$$';
  sourceAttribution: SourceAttribution;
  relatedDesignIds: string[];
  relatedArticleIds: string[];
  relatedProductIds: string[];
  collectionId?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export interface RoomCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  description: string;
  popularStyles: string[];
  decoratingPrinciples: Array<{ title: string; desc: string }>;
  featuredCollectionSlug: string;
}

export interface StyleCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  definition: string;
  characteristics: string[];
  colorDirection: string;
  materials: string[];
  furnitureGuidance: string;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  curatorNote: string;
  designIds: string[];
  roomSlug: string;
  styleSlug: string;
  tags: string[];
}

export interface ArticleContentSection {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  tip?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  readTime: string;
  publishedDate: string;
  category: string;
  heroImage: string;
  excerpt: string;
  contentSections: ArticleContentSection[];
  relatedRoom: string;
  relatedStyle: string;
  featuredDesignIds: string[];
  recommendedProductIds: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  priceRange: string;
  imageUrl: string;
  curatorNote: string;
  room: string;
  style: string;
  affiliateDisclaimer: string;
  retailerNote: string;
  tags: string[];
}

export type ViewState =
  | { type: 'home' }
  | { type: 'explore'; initialRoom?: string; initialStyle?: string; initialColor?: string; searchQuery?: string }
  | { type: 'rooms'; roomSlug?: string }
  | { type: 'styles'; styleSlug?: string }
  | { type: 'ideas'; articleSlug?: string }
  | { type: 'collections'; collectionSlug?: string }
  | { type: 'shop'; category?: string }
  | { type: 'inspiration-detail'; slug: string }
  | { type: 'saved' }
  | { type: 'about' }
  | { type: 'contact' }
  | { type: 'admin' }
  | { type: 'legal'; page: 'privacy' | 'terms' | 'affiliate' | 'licensing' };
