/**
 * SEO & Pinterest Helper
 * Manages dynamic document title, meta tags, and structured JSON-LD data
 */

export function updateSEO(
  title: string,
  description: string = 'Beautiful ideas for creating a home you love. Explore warm, tactile, and architecture-forward interior spaces.',
  image?: string
) {
  document.title = `${title} | Home With InDa`;

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description);
  }

  // Update OpenGraph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  if (image) {
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', image);
  }
}

export function generatePinterestShareUrl(url: string, media: string, description: string): string {
  const params = new URLSearchParams({
    url,
    media,
    description: `${description} — via @homewithinda`
  });
  return `https://pinterest.com/pin/create/button/?${params.toString()}`;
}
