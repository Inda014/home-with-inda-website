import { Inspiration, RoomCategory, StyleCategory, Collection, Article, ProductItem } from '../types';

export const INITIAL_ROOMS: RoomCategory[] = [
  {
    id: 'room-living',
    slug: 'living-room',
    name: 'Living Room',
    tagline: 'The heart of gatherings, quiet afternoons, and layered comfort',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    description: 'A well-designed living room balances visual serenity with practical ease. Explore grounded seating arrangements, architectural lighting, tactile textiles, and curated coffee table vignettes designed to welcome you home.',
    popularStyles: ['Japandi', 'Organic Modern', 'Contemporary Warmth', 'Scandinavian'],
    decoratingPrinciples: [
      { title: 'Ground with Proportionate Rugs', desc: 'Ensure the front legs of all primary seating rest securely on the rug to visually anchor the gathering zone.' },
      { title: 'Three-Tier Lighting Scheme', desc: 'Combine ambient ceiling glow, task reading lamps, and low-level accent lamps for warm evening depth.' },
      { title: 'Curated Negative Space', desc: 'Allow sculptural credenzas and walls room to breathe rather than filling every corner.' }
    ],
    featuredCollectionSlug: 'modern-earthy-living'
  },
  {
    id: 'room-bedroom',
    slug: 'bedroom',
    name: 'Bedroom',
    tagline: 'Quiet sanctuaries designed for restorative rest and tactile warmth',
    heroImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80',
    description: 'Creating a restful bedroom is an exercise in sensory reduction. Discover softened neutral linen palettes, low-profile bedframes, sculptural sconces, and uncluttered bedside vignettes.',
    popularStyles: ['Japandi', 'Modern Minimalist', 'Scandinavian', 'Organic Modern'],
    decoratingPrinciples: [
      { title: 'Textile Layering', desc: 'Pair crisp washed Belgian linen duvet covers with a heavy waffle throw and textured wool accents.' },
      { title: 'Visual Quietude at Eye Level', desc: 'Keep horizontal headboard sightlines low to promote mental calm before sleep.' },
      { title: 'Diffused Soft Illuminance', desc: 'Opt for 2400K-2700K warm frosted globes or linen drum shades for restful evening transitions.' }
    ],
    featuredCollectionSlug: 'dream-bedrooms'
  },
  {
    id: 'room-kitchen',
    slug: 'kitchen',
    name: 'Kitchen',
    tagline: 'Culinary warmth where tactile materiality meets effortless daily function',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
    description: 'Modern kitchens transcend clinical utility. We celebrate fluted white oak cabinetry, honed travertine countertops, sculptural ceramic vessels, and open shelving that turns everyday essentials into art.',
    popularStyles: ['Contemporary Warmth', 'Japandi', 'Scandinavian'],
    decoratingPrinciples: [
      { title: 'Honed Stone over High Gloss', desc: 'Matte honed quartzite, limestone, and travertine patina gracefully and resist harsh glare.' },
      { title: 'Integrated Architectural Storage', desc: 'Conceal small appliances behind pocket doors to preserve uncluttered counter prep space.' },
      { title: 'Artful Everyday Ceramics', desc: 'Display handmade ceramic bowls and wooden boards as functional countertop sculpture.' }
    ],
    featuredCollectionSlug: 'quiet-luxury-kitchens'
  },
  {
    id: 'room-bathroom',
    slug: 'bathroom',
    name: 'Bathroom',
    tagline: 'Spa-inspired calm grounded in natural stone and ambient ritual',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
    description: 'Elevate daily rituals with micro-cement finishes, frameless fluted glass, freestanding soaking tubs, and understated brushed gunmetal or brass fixtures.',
    popularStyles: ['Modern Minimalist', 'Japandi', 'Organic Modern'],
    decoratingPrinciples: [
      { title: 'Continuous Material Surfaces', desc: 'Running floor tiles or micro-cement seamlessly up wet walls visually expands compact bathrooms.' },
      { title: 'Recessed Niche Warmth', desc: 'Soft LED backlighting inside shower niches offers spa-grade ambient glow without overhead glare.' },
      { title: 'Waffle Linens & Botanical Accents', desc: 'Eucalyptus branches and high-absorbency textured waffle towels bring organic tactile luxury.' }
    ],
    featuredCollectionSlug: 'neutral-sanctuaries'
  },
  {
    id: 'room-dining',
    slug: 'dining-room',
    name: 'Dining Room',
    tagline: 'Intentional spaces for lingering conversations and shared rituals',
    heroImage: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80',
    description: 'A dining space should encourage guests to linger. Discover solid timber tables, sculptural pendant lighting placed at intimate heights, and comfortable upholstered chairs.',
    popularStyles: ['Scandinavian', 'Contemporary Warmth', 'Organic Modern'],
    decoratingPrinciples: [
      { title: 'Pendant Hanging Height', desc: 'Suspend statement pendants 30–36 inches above the tabletop to illuminate dinner without obstructing eye contact.' },
      { title: 'Tactile Table Linens', desc: 'Raw linen runners and stoneware ceramics soften hard wooden and stone surfaces.' },
      { title: 'Curved Seating Flow', desc: 'Rounded chair backs and oval tabletops ease perimeter circulation in narrow rooms.' }
    ],
    featuredCollectionSlug: 'modern-earthy-living'
  },
  {
    id: 'room-office',
    slug: 'home-office',
    name: 'Home Office',
    tagline: 'Clutter-free environments designed for deep focus and quiet creative momentum',
    heroImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1600&q=80',
    description: 'Transform work hours with ergonomic desk setups that harmonize with residential aesthetics. Natural light positioning, concealed cord channels, and linen pinboards foster steady focus.',
    popularStyles: ['Scandinavian', 'Modern Minimalist', 'Japandi'],
    decoratingPrinciples: [
      { title: 'Perpendicular Natural Light', desc: 'Position desks perpendicular to windows to capture soft daylight while avoiding screen glare.' },
      { title: 'Concealed Tech Channels', desc: 'Incorporate undermount cable trays to eliminate visual cable chaos.' },
      { title: 'Tactile Inspiration Board', desc: 'Frame acoustic linen bulletin boards to pin physical swatches and notes artfully.' }
    ],
    featuredCollectionSlug: 'serene-workspaces'
  },
  {
    id: 'room-entryway',
    slug: 'entryway',
    name: 'Entryway',
    tagline: 'The welcoming threshold that sets the design tone for your entire home',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    description: 'A thoughtfully composed entry establishes instant serenity upon crossing the threshold. Discover slim console tables, oversized arched mirrors, brass catch-alls, and woven basket storage.',
    popularStyles: ['Contemporary Warmth', 'Japandi', 'Scandinavian'],
    decoratingPrinciples: [
      { title: 'The Reflection Anchor', desc: 'Hang an oversized round or arched mirror opposite natural light to instantly double the spatial volume.' },
      { title: 'Designated Drop Zone', desc: 'Pair a shallow console with handcrafted stone trays for keys, mail, and daily pocket items.' },
      { title: 'Durable Textured Runners', desc: 'Jute, sisal, or flat-woven wool runners withstand foot traffic while introducing warm texture.' }
    ],
    featuredCollectionSlug: 'compact-living-spaces'
  },
  {
    id: 'room-small-spaces',
    slug: 'small-spaces',
    name: 'Small Spaces',
    tagline: 'Ingenious apartment layouts where smart proportion unlocks expansive living',
    heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
    description: 'Small square footage invites brilliant architectural discipline. Learn how to zone open floorplans with rugs, elevate furniture on legs, and use continuous neutral tone-on-tone color palettes.',
    popularStyles: ['Scandinavian', 'Modern Minimalist', 'Japandi'],
    decoratingPrinciples: [
      { title: 'Legged Silhouettes', desc: 'Sofas and credenzas raised on slender legs reveal flooring underneath, fooling the eye into seeing more area.' },
      { title: 'Monochromatic Cohesion', desc: 'Limiting wall, curtain, and base furniture contrast prevents jarring visual breaks.' },
      { title: 'Dual-Purpose Storage', desc: 'Incorporate storage ottomans and custom banquettes with hidden under-seat drawers.' }
    ],
    featuredCollectionSlug: 'compact-living-spaces'
  }
];

export const INITIAL_STYLES: StyleCategory[] = [
  {
    id: 'style-japandi',
    slug: 'japandi',
    name: 'Japandi',
    tagline: 'The timeless intersection of Scandinavian functionalism and Japanese wabi-sabi aesthetics',
    heroImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80',
    definition: 'Japandi merges the hygge warmth of Nordic simplicity with the Japanese philosophy of wabi-sabi—finding profound elegance in natural imperfection, handcrafted honesty, and uncluttered calm.',
    characteristics: [
      'Low-profile furniture with clean, architectural lines',
      'Emphasis on natural craftsmanship and honest joints',
      'Minimalist restraint without feeling sterile or cold',
      'Muted earthy palette with black or smoked oak accents',
      'Organic pottery, unbleached linen, and paper lanterns'
    ],
    colorDirection: 'Off-white chalk, oatmeal, warm beige, raw timber, and accents of charcoal and muted moss.',
    materials: ['White Oak', 'Paper Cord', 'Matte Travertine', 'Unbleached Linen', 'Handmade Ceramics', 'Bamboo'],
    furnitureGuidance: 'Look for low platform beds, paper-shaded Akari-style lighting, slatted oak dividers, and unadorned dining tables showing real wood grain.'
  },
  {
    id: 'style-scandi',
    slug: 'scandinavian',
    name: 'Scandinavian',
    tagline: 'Light-filled, honest, and functional interiors celebrating warmth and craftsmanship',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    definition: 'Born in the Nordic climates where natural light is precious, Scandinavian design maximizes airiness through bright neutral palettes, light birch and blonde woods, soft textured sheepskins, and ergonomic silhouettes.',
    characteristics: [
      'Maximum preservation and reflection of natural daylight',
      'Tactile cozy layers (chunky wool knits, shearling, bouclé)',
      'Practical ergonomics paired with timeless sculptural forms',
      'Indoor greenery providing fresh organic vitality'
    ],
    colorDirection: 'Pure soft white, pale dove gray, soft wheat, sage green, and light blonde woods.',
    materials: ['Blonde Ash', 'Birch', 'Wool Bouclé', 'Cotton Canvas', 'Mouth-blown Glass', 'Light Leather'],
    furnitureGuidance: 'Choose iconic curved wishbone chairs, modular floating shelves, gently curved sofas, and clean floor lamps.'
  },
  {
    id: 'style-minimalist',
    slug: 'modern-minimalist',
    name: 'Modern Minimalist',
    tagline: 'Quiet luxury achieved through purposeful subtraction, proportion, and rich tactile materials',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    definition: 'Modern minimalism is not emptiness; it is the deliberate celebration of what remains. By stripping away visual clutter, every architectural curve, material texture, and light reflection takes center stage.',
    characteristics: [
      'Clean unadorned surfaces and seamless transitions',
      'Focus on textural depth rather than decorative knick-knacks',
      'Monolithic focal elements (stone kitchen islands, plaster fireplace hoods)',
      'Generous negative space that calms the senses'
    ],
    colorDirection: 'Monochromatic variations of alabaster, stone gray, bone, and subtle architectural bronze.',
    materials: ['Honed Quartzite', 'Polished Concrete', 'Brushed Aluminum', 'Limewash Plaster', 'Smooth Leather'],
    furnitureGuidance: 'Opt for sculptural silhouettes, concealed push-latch storage, low modular sectionals, and floating vanities.'
  },
  {
    id: 'style-organic-modern',
    slug: 'organic-modern',
    name: 'Organic Modern',
    tagline: 'Contemporary architectural discipline softened by raw organic textures and earth tones',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    definition: 'Organic modern bridges the gap between sleek modern architectural planes and the untamed beauty of nature. It softens crisp drywall with raw wood stumps, live-edge consoles, porous travertine, and earthy earthenware.',
    characteristics: [
      'Juxtaposition of crisp geometry with organic irregularities',
      'Earthy grounding tones pulled directly from limestone canyons and dry desert brush',
      'Abundant natural plants and branches in weathered stone vessels',
      'Warm indirect ambient lighting'
    ],
    colorDirection: 'Warm desert sand, terracotta, olive green, toasted pecan, and warm white.',
    materials: ['Porous Travertine', 'Reclaimed Elm', 'Earthen Clay', 'Nubby Jute', 'Linen', 'Wrought Iron'],
    furnitureGuidance: 'Mix sharp-edged modern sofas with circular travertine plinths, hand-carved stools, and woven rope lounge chairs.'
  },
  {
    id: 'style-contemporary-warmth',
    slug: 'contemporary-warmth',
    name: 'Contemporary Warmth',
    tagline: 'Polished contemporary luxury infused with layered textiles and inviting comfort',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    definition: 'A contemporary space that rejects chilliness. It uses rich walnut timbers, custom millwork, plush wool carpets, and tactile wall coverings to create an atmosphere of refined residential comfort.',
    characteristics: [
      'Tailored upholstery with subtle piping and channel tufting',
      'Rich medium-to-dark wood species like American Walnut',
      'Layered architectural cove lighting and dimmable picture lights',
      'Curated contemporary abstract art in slim oak frames'
    ],
    colorDirection: 'Warm taupe, toasted hazelnut, deep espresso, brushed champagne brass, and cream.',
    materials: ['American Walnut', 'Brushed Brass', 'Fluted Glass', 'Cashmere Wool', 'Rich Velvets'],
    furnitureGuidance: 'Curved cloud-like sectionals, brass-accented credenzas, smoked glass cocktail tables, and tailored armchairs.'
  },
  {
    id: 'style-earthy-rustic',
    slug: 'earthy-rustic',
    name: 'Earthy Rustic',
    tagline: 'Timeworn authenticity, exposed ceiling beams, and soulful vintage warmth',
    heroImage: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1600&q=80',
    definition: 'Earthy Rustic celebrates patina and storied character. Natural stone walls, hand-hewn timbers, and vintage ceramic vessels are paired with modern comforts to produce a grounded countryside aesthetic.',
    characteristics: [
      'Exposed architectural timbers and heritage masonry',
      'Natural imperfections and gentle surface wear',
      'Handwoven vintage rugs with weathered motifs',
      'Forged iron hardware and antique lighting'
    ],
    colorDirection: 'Mushroom, deep forest moss, aged copper, tobacco brown, and weathered plaster.',
    materials: ['Hand-hewn Oak', 'Fieldstone', 'Forged Iron', 'Antiqued Brass', 'Tumbled Limestone'],
    furnitureGuidance: 'Sturdy trestle dining tables, vintage butcher blocks, slipcovered linen armchairs, and hammered metal accessories.'
  },
  {
    id: 'style-french-eclectic',
    slug: 'french-eclectic',
    name: 'French Eclectic',
    tagline: 'Haussmannian ceiling moldings paired boldly with modern art and vintage treasures',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    definition: 'The quintessential Parisian apartment aesthetic: ornate boiserie wall paneling, herringbone parquet floors, and antique gilded mirrors juxtaposed effortlessly against modernist Italian furniture.',
    characteristics: [
      'High ceilings with classical plaster cornices and chevron parquet',
      'Tension between antique gold leaf and sleek mid-century forms',
      'Casual, lived-in curation rather than stiff museum formality',
      'Oversized statement fireplace mantels crowned with mirrors'
    ],
    colorDirection: 'Antique ivory, burnished gold, dove gray, ink black, and muted blush.',
    materials: ['Chevron Parquet', 'Carrara Marble', 'Gilded Wood', 'Velvet', 'Cast Iron'],
    furnitureGuidance: 'Pair an ornate Louis-style gold mirror with a minimalist Bellini Camaleonda sofa and a simple brass floor lamp.'
  }
];

export const INITIAL_COLLECTIONS: Collection[] = [
  {
    id: 'col-1',
    slug: 'dream-bedrooms',
    title: 'Dream Bedrooms for Restful Nights',
    subtitle: 'A curated edit of 12 quiet, tactile sanctuaries designed for restorative sleep',
    heroImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80',
    description: 'When the world outside is noisy, the bedroom must be an acoustic and visual sanctuary. This collection highlights low-profile timber beds, layered Belgian linen duvets, warm 2700K ambient sconces, and minimal bedside styling.',
    curatorNote: 'Notice how each bedroom prioritizes tactile textures over bright colors. By keeping the palette within warm oatmeal and ivory, the mind settles immediately.',
    designIds: ['insp-1', 'insp-3', 'insp-8', 'insp-14'],
    roomSlug: 'bedroom',
    styleSlug: 'japandi',
    tags: ['Quiet Luxury', 'Linen Bedding', 'Neutral Palette', 'Restorative Spaces']
  },
  {
    id: 'col-2',
    slug: 'modern-earthy-living',
    title: 'Modern Earthy Living Spaces',
    subtitle: 'Grounded gathering zones pairing natural stone with sculptural seating',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    description: 'Explore living rooms that strike the balance between architectural clarity and tactile hospitality. Featuring travertine coffee tables, bouclé armchairs, and warm limewash walls.',
    curatorNote: 'The key to making neutral rooms feel inviting rather than stark is mixing at least 4 distinct textures: rough stone, smooth timber, nubby bouclé, and soft woven wool.',
    designIds: ['insp-2', 'insp-4', 'insp-9', 'insp-15'],
    roomSlug: 'living-room',
    styleSlug: 'organic-modern',
    tags: ['Travertine', 'Curved Sofas', 'Limewash Walls', 'Earth Tones']
  },
  {
    id: 'col-3',
    slug: 'compact-living-spaces',
    title: 'Smart Spaces: Apartment Living Redefined',
    subtitle: 'Ingenious layouts and proportion tricks for studios and smaller floorplans',
    heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
    description: 'Small square footage does not mean sacrificing high style. Discover floating consoles, slim round dining tables, elevated sofa silhouettes, and unified tone-on-tone walls.',
    curatorNote: 'In compact homes, every furniture piece must earn its footprint. Look for raised legs that let light pass beneath.',
    designIds: ['insp-5', 'insp-11', 'insp-17', 'insp-7'],
    roomSlug: 'small-spaces',
    styleSlug: 'scandinavian',
    tags: ['Studio Living', 'Apartment Decor', 'Small Living Room', 'Smart Storage']
  },
  {
    id: 'col-4',
    slug: 'quiet-luxury-kitchens',
    title: 'Quiet Luxury Kitchens & Pantries',
    subtitle: 'Warm architectural millwork, honed stone islands, and ceramic details',
    heroImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
    description: 'Step inside kitchens that feel like living rooms. With integrated paneling, fluted timber islands, and curated open shelves holding artisan stoneware.',
    curatorNote: 'Replacing glossy subway tile with honed travertine or micro-cement instantly softens the acoustic bounce in a kitchen.',
    designIds: ['insp-6', 'insp-12', 'insp-18'],
    roomSlug: 'kitchen',
    styleSlug: 'contemporary-warmth',
    tags: ['Honed Stone', 'White Oak Cabinets', 'Pantry Goals', 'Ceramic Vessels']
  },
  {
    id: 'col-5',
    slug: 'neutral-sanctuaries',
    title: 'Neutral Bathrooms with Spa Ambience',
    subtitle: 'Micro-cement, fluted glass, and diffused warm light for everyday renewal',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
    description: 'Bathrooms designed around serenity: freestanding stone soaking tubs, seamless curbless shower walk-ins, and recessed LED accent lighting.',
    curatorNote: 'Warm wall sconces positioned at cheek level illuminate faces far more flatteringly than harsh ceiling spotlights.',
    designIds: ['insp-7', 'insp-13'],
    roomSlug: 'bathroom',
    styleSlug: 'modern-minimalist',
    tags: ['Spa Bathroom', 'Soaking Tubs', 'Microcement', 'Warm Sconces']
  },
  {
    id: 'col-6',
    slug: 'serene-workspaces',
    title: 'Serene Home Offices for Deep Focus',
    subtitle: 'Calm, ergonomic, and aesthetic workspaces that inspire creative momentum',
    heroImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1600&q=80',
    description: 'Work from home in spaces that support posture and mental clarity. Solid timber desks, hidden wire management, and natural light placement.',
    curatorNote: 'Keep desktop decor to just 2 meaningful items: an architectural task lamp and a handmade ceramic pen cup.',
    designIds: ['insp-10', 'insp-16'],
    roomSlug: 'home-office',
    styleSlug: 'scandinavian',
    tags: ['Desk Setup', 'Home Office', 'Ergonomic', 'Minimal Desk']
  }
];

export const INITIAL_INSPIRATIONS: Inspiration[] = [
  {
    id: 'insp-1',
    slug: 'serene-japandi-bedroom-with-linen-layers',
    title: 'Serene Japandi Bedroom with Layered Washed Linen',
    description: 'A low-profile white oak platform bed framed by textured limewash walls, bedside ceramic pendants, and unbleached flax linens that create an atmosphere of quiet morning calm.',
    room: 'Bedroom',
    style: 'Japandi',
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Low white oak bed with neutral linen duvet and textured limewash wall in Japandi bedroom',
    aspectRatio: 'tall',
    colorPalette: [
      { name: 'Oatmeal Chalk', hex: '#EDE8DF' },
      { name: 'Warm Sand', hex: '#D8CEBF' },
      { name: 'Smoked Oak', hex: '#584C42' },
      { name: 'Unbleached Flax', hex: '#FAF6EE' }
    ],
    tags: ['Japandi', 'Platform Bed', 'Linen Bedding', 'Limewash', 'Neutral Sanctuary'],
    featured: true,
    trending: true,
    decorTips: [
      'Choose a bed platform with an integrated low-profile ledge for books and morning tea without needing bulky nightstands.',
      'Hang low-wattage frosted glass or paper pendants 18 inches above bedside tables for glare-free reading light.',
      'Wash natural linen at least twice before styling to achieve that effortless, rumpled soft drape.'
    ],
    budgetLevel: '$$',
    sourceAttribution: {
      author: 'Spacejoy Editorial Team',
      platform: 'Unsplash Architectural Collection',
      license: 'Unsplash Free Commercial License',
      link: 'https://unsplash.com/@spacejoy'
    },
    relatedDesignIds: ['insp-3', 'insp-8', 'insp-14'],
    relatedArticleIds: ['art-1', 'art-3'],
    relatedProductIds: ['prod-1', 'prod-4', 'prod-7'],
    collectionId: 'col-1',
    seo: {
      metaTitle: 'Serene Japandi Bedroom with Layered Linen | Home With InDa',
      metaDescription: 'Discover how to recreate this peaceful Japandi bedroom with white oak platform bed, limewash walls, and natural linen.'
    }
  },
  {
    id: 'insp-2',
    slug: 'sun-drenched-organic-modern-living-room',
    title: 'Sun-Drenched Organic Modern Living Room with Travertine',
    description: 'Generous curved bouclé sectional sofa centered around a monolithic honed travertine coffee table and an oversized neutral woven wool rug, flanked by sheer Belgian linen drapes.',
    room: 'Living Room',
    style: 'Organic Modern',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sunlit living room with curved bouclé sofa, travertine coffee table, and large window',
    aspectRatio: 'wide',
    colorPalette: [
      { name: 'Warm Bone', hex: '#F5F2EB' },
      { name: 'Honed Travertine', hex: '#E4DDD0' },
      { name: 'Pecan Wood', hex: '#876D58' },
      { name: 'Soft Charcoal', hex: '#3C3835' }
    ],
    tags: ['Bouclé Sofa', 'Travertine', 'Living Room', 'Organic Modern', 'Curved Furniture'],
    featured: true,
    trending: true,
    decorTips: [
      'Position floor-to-ceiling sheer drapery right at the ceiling line to create the illusion of grand 10-foot ceilings.',
      'A low, heavy stone coffee table grounds conversational seating and acts as an anchor for sculptural books.',
      'Introduce a single olive or ficus tree in a weathered terracotta urn to breathe organic energy into neutral spaces.'
    ],
    budgetLevel: '$$$',
    sourceAttribution: {
      author: 'Spacejoy Studio',
      platform: 'Unsplash Editorial',
      license: 'Unsplash Free Commercial License'
    },
    relatedDesignIds: ['insp-4', 'insp-9', 'insp-15'],
    relatedArticleIds: ['art-1', 'art-2'],
    relatedProductIds: ['prod-2', 'prod-5'],
    collectionId: 'col-2',
    seo: {
      metaTitle: 'Organic Modern Living Room with Travertine | Home With InDa',
      metaDescription: 'Explore this sunlit organic modern living room featuring curved bouclé seating, honed travertine, and warm neutrals.'
    }
  },
  {
    id: 'insp-3',
    slug: 'warm-minimalist-master-bedroom-with-wooden-slats',
    title: 'Warm Minimalist Bedroom with Slatted Oak Accent Wall',
    description: 'A soothing master suite showcasing vertical white oak acoustic slats behind a floating upholstered headboard, paired with sleek matte black reading sconces.',
    room: 'Bedroom',
    style: 'Modern Minimalist',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern minimalist bedroom with wood slatted accent wall and floating nightstands',
    aspectRatio: 'square',
    colorPalette: [
      { name: 'Natural Oak', hex: '#CEB99C' },
      { name: 'Crisp Alabaster', hex: '#FAF8F5' },
      { name: 'Warm Taupe', hex: '#9A8E81' },
      { name: 'Matte Onyx', hex: '#21201E' }
    ],
    tags: ['Wood Slats', 'Minimalist', 'Master Bedroom', 'Floating Nightstand'],
    featured: false,
    trending: true,
    decorTips: [
      'Vertical acoustic timber slats absorb ambient echoes, immediately giving the bedroom a hotel-suite acoustic hush.',
      'Mount floating bedside drawer units 12 inches above baseboards to maintain visible unbroken flooring.',
      'Keep bedding monochrome white with contrasting dark slate or charcoal lumbar pillows.'
    ],
    budgetLevel: '$$',
    sourceAttribution: {
      author: 'Spacejoy Living',
      platform: 'Unsplash Editorial',
      license: 'Unsplash Free Commercial License'
    },
    relatedDesignIds: ['insp-1', 'insp-8'],
    relatedArticleIds: ['art-3'],
    relatedProductIds: ['prod-1', 'prod-4'],
    collectionId: 'col-1',
    seo: {
      metaTitle: 'Minimalist Bedroom with Oak Slatted Wall | Home With InDa',
      metaDescription: 'Get inspired by vertical wood slats, floating bedside tables, and calm minimalist bedroom styling.'
    }
  },
  {
    id: 'insp-4',
    slug: 'contemporary-warm-living-room-with-built-in-bookcase',
    title: 'Contemporary Warm Living Room with Curated Millwork',
    description: 'Custom white oak floor-to-ceiling bookcase framing a low fireplace hearth, styled with ceramic vases, art monographs, and warm concealed LED strip lighting.',
    room: 'Living Room',
    style: 'Contemporary Warmth',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Contemporary living room with built-in bookshelves and warm ambient lighting',
    aspectRatio: 'tall',
    colorPalette: [
      { name: 'Hazelnut Wood', hex: '#91785D' },
      { name: 'Parchment', hex: '#F6F3EE' },
      { name: 'Bronze Brass', hex: '#7E6B56' },
      { name: 'Graphite', hex: '#2B2826' }
    ],
    tags: ['Built-in Shelves', 'Bookcase Styling', 'Fireplace', 'Contemporary Warmth'],
    featured: true,
    trending: false,
    decorTips: [
      'Style bookshelves using the rule of thirds: 1/3 books stacked vertically and horizontally, 1/3 sculptural pottery, 1/3 open negative space.',
      'Incorporate 2700K warm LED ribbons routed underneath shelves to illuminate art pieces without harsh spotlighting.'
    ],
    budgetLevel: '$$$',
    sourceAttribution: {
      author: 'Spacejoy Editorial',
      platform: 'Unsplash Curated',
      license: 'Unsplash Free Commercial License'
    },
    relatedDesignIds: ['insp-2', 'insp-9'],
    relatedArticleIds: ['art-2'],
    relatedProductIds: ['prod-2', 'prod-6'],
    collectionId: 'col-2',
    seo: {
      metaTitle: 'Contemporary Living Room with Built-In Bookcase | Home With InDa',
      metaDescription: 'Learn how to style built-in bookshelves with ceramics, ambient lighting, and warm wood millwork.'
    }
  },
  {
    id: 'insp-5',
    slug: 'scandi-inspired-small-apartment-living-dining',
    title: 'Scandinavian Studio Living with Round Oak Table',
    description: 'Clever 550-sqft open plan living space zoned by a plush wool rug, featuring an airy two-seater sofa, a round dining table that seats four, and slender wishbone chairs.',
    room: 'Small Spaces',
    style: 'Scandinavian',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Small apartment living area with round wooden table and wishbone chairs',
    aspectRatio: 'wide',
    colorPalette: [
      { name: 'Chalk White', hex: '#F9F8F5' },
      { name: 'Blonde Ash', hex: '#E2D5C3' },
      { name: 'Light Slate', hex: '#9EA3A5' },
      { name: 'Muted Moss', hex: '#737C68' }
    ],
    tags: ['Small Space', 'Apartment', 'Studio Apartment', 'Round Table', 'Scandinavian'],
    featured: true,
    trending: true,
    decorTips: [
      'Round dining tables eliminate harsh corners, optimizing foot traffic pathways in compact studio apartments.',
      'Stick to light blonde woods like ash and birch to bounce daylight deeper into narrow floor plans.',
      'Use open-backed chairs (like wishbone or spindled chairs) to maintain open visual sightlines.'
    ],
    budgetLevel: '$',
    sourceAttribution: {
      author: 'Hutomo Abrianto',
      platform: 'Unsplash Architecture',
      license: 'Unsplash Free Commercial License'
    },
    relatedDesignIds: ['insp-11', 'insp-17'],
    relatedArticleIds: ['art-4'],
    relatedProductIds: ['prod-3', 'prod-8'],
    collectionId: 'col-3',
    seo: {
      metaTitle: 'Small Apartment Living & Dining Layout | Home With InDa',
      metaDescription: 'Practical tips for arranging small apartment living and dining with round tables and Scandinavian warmth.'
    }
  },
  {
    id: 'insp-6',
    slug: 'fluted-white-oak-and-travertine-kitchen-island',
    title: 'Architectural Kitchen with Fluted Oak & Honed Travertine',
    description: 'Monolithic kitchen island wrapped in vertical fluted white oak cabinetry and crowned by a honed ivory travertine countertop, illuminated by minimalist linear brass suspension pendants.',
    room: 'Kitchen',
    style: 'Contemporary Warmth',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fluted white oak kitchen island with travertine countertops and brass pendant',
    aspectRatio: 'tall',
    colorPalette: [
      { name: 'Honed Travertine', hex: '#EBE4D8' },
      { name: 'White Oak', hex: '#CDBCA6' },
      { name: 'Warm Cream', hex: '#F8F6F0' },
      { name: 'Brushed Brass', hex: '#B89B66' }
    ],
    tags: ['Kitchen Island', 'Travertine', 'Fluted Wood', 'Modern Kitchen', 'Warm Oak'],
    featured: true,
    trending: true,
    decorTips: [
      'Pairing matte honed stone with micro-grooved wood gives a tactile luxury look without showing fingerprints.',
      'Keep counter surfaces free of visible appliances by tucking toasters and kettles into a matching oak appliance garage.',
      'Use counter stools with low backrests that slide completely beneath the island overhang when not in use.'
    ],
    budgetLevel: '$$$',
    sourceAttribution: {
      author: 'Spacejoy Kitchens',
      platform: 'Unsplash Editorial',
      license: 'Unsplash Free Commercial License'
    },
    relatedDesignIds: ['insp-12', 'insp-18'],
    relatedArticleIds: ['art-2'],
    relatedProductIds: ['prod-5', 'prod-9'],
    collectionId: 'col-4',
    seo: {
      metaTitle: 'Fluted White Oak & Travertine Kitchen Island | Home With InDa',
      metaDescription: 'Explore this architectural kitchen featuring fluted oak cabinetry, honed travertine counters, and minimalist lighting.'
    }
  },
  {
    id: 'insp-7',
    slug: 'spa-minimalist-bathroom-with-freestanding-tub',
    title: 'Spa-Inspired Bathroom with Freestanding Oval Soaking Tub',
    description: 'Smooth micro-cement walls create a continuous, grout-free envelope around a matte white resin soaking tub and brushed gunmetal floor-mounted tapware.',
    room: 'Bathroom',
    style: 'Modern Minimalist',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Minimalist bathroom with microcement walls and freestanding tub',
    aspectRatio: 'square',
    colorPalette: [
      { name: 'Warm Cement Gray', hex: '#DCD7CE' },
      { name: 'Matte White Resin', hex: '#FAF9F6' },
      { name: 'Gunmetal Slate', hex: '#424140' },
      { name: 'Cedar Accent', hex: '#A37953' }
    ],
    tags: ['Soaking Tub', 'Bathroom Spa', 'Microcement', 'Gunmetal Fixtures'],
    featured: false,
    trending: false,
    decorTips: [
      'Micro-cement eliminates grout lines, creating a velvety tactile surface that repels water and makes small bathrooms feel vast.',
      'Place a small cedar stool beside the tub to hold bath salts, natural sponges, and a single candle.'
    ],
    budgetLevel: '$$$',
    sourceAttribution: {
      author: 'Spacejoy Bath',
      platform: 'Unsplash Editorial',
      license: 'Unsplash Free Commercial License'
    },
    relatedDesignIds: ['insp-13'],
    relatedArticleIds: ['art-3'],
    relatedProductIds: ['prod-10'],
    collectionId: 'col-5',
    seo: {
      metaTitle: 'Spa Minimalist Bathroom with Soaking Tub | Home With InDa',
      metaDescription: 'Achieve spa-like serenity with continuous microcement finishes and a freestanding bathtub.'
    }
  },
  {
    id: 'insp-8',
    slug: 'scandi-neutral-guest-bedroom-with-linen-canopy',
    title: 'Light-Filled Scandi Bedroom with Warm Textures',
    description: 'Crisp morning daylight floods through sheer white curtains, accentuating a soft curved bouclé bench, waffle throw blankets, and minimal oak picture frames.',
    room: 'Bedroom',
    style: 'Scandinavian',
    imageUrl: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Bright airy Scandinavian bedroom with white bedding and light wood furniture',
    aspectRatio: 'wide',
    colorPalette: [
      { name: 'Soft Alabaster', hex: '#FAF8F5' },
      { name: 'Warm Wheat', hex: '#DFD5C4' },
      { name: 'Dove Gray', hex: '#BDB7AD' },
      { name: 'Light Birch', hex: '#EDE4D6' }
    ],
    tags: ['Scandinavian', 'Guest Bedroom', 'Neutral Decor', 'Bouclé Bench'],
    featured: false,
    trending: true,
    decorTips: [
      'Layer a washed waffle cotton blanket over a smooth percale duvet for tactile contrast that feels luxurious to touch.',
      'Add a slim upholstered bench at the foot of the bed for laying out morning garments.'
    ],
    budgetLevel: '$$',
    sourceAttribution: {
      author: 'Spacejoy Scandi',
      platform: 'Unsplash Editorial',
      license: 'Unsplash Free Commercial License'
    },
    relatedDesignIds: ['insp-1', 'insp-3'],
    relatedArticleIds: ['art-1'],
    relatedProductIds: ['prod-4', 'prod-7'],
    collectionId: 'col-1',
    seo: {
      metaTitle: 'Scandinavian Neutral Bedroom Inspiration | Home With InDa',
      metaDescription: 'Create a bright and cozy guest bedroom using layered textiles, light birch, and Scandinavian simplicity.'
    }
  },
  {
    id: 'insp-9',
    slug: 'rustic-earthy-living-room-with-exposed-beams',
    title: 'Earthy Rustic Living Room with Reclaimed Timber Beams',
    description: 'Heritage hand-hewn ceiling beams meet smooth warm limewash walls, a deep linen slipcovered sofa, and a vintage Turkish kilim rug in weathered terracotta hues.',
    room: 'Living Room',
    style: 'Earthy Rustic',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Living room with wooden ceiling beams, linen sofa, and vintage rug',
    aspectRatio: 'tall',
    colorPalette: [
      { name: 'Weathered Oak', hex: '#695543' },
      { name: 'Aged Terracotta', hex: '#A86C54' },
      { name: 'Limewash Plaster', hex: '#ECE7DD' },
      { name: 'Forest Olive', hex: '#585C49' }
    ],
    tags: ['Rustic Living Room', 'Ceiling Beams', 'Slipcovered Sofa', 'Vintage Rug', 'Earthy'],
    featured: true,
    trending: false,
    decorTips: [
      'Exposed ceiling beams draw the eye upward, giving open living rooms architectural weight and warmth.',
      'Slipcovered sofas in pre-washed natural linen can be removed and laundered, making rustic spaces deeply practical for family life.'
    ],
    budgetLevel: '$$$',
    sourceAttribution: {
      author: 'Spacejoy Rustic',
      platform: 'Unsplash Architecture',
      license: 'Unsplash Free Commercial License'
    },
    relatedDesignIds: ['insp-2', 'insp-4'],
    relatedArticleIds: ['art-2'],
    relatedProductIds: ['prod-2', 'prod-5'],
    collectionId: 'col-2',
    seo: {
      metaTitle: 'Earthy Rustic Living Room with Exposed Beams | Home With InDa',
      metaDescription: 'Discover the charm of reclaimed ceiling beams, linen slipcovers, and vintage kilims in modern rustic living rooms.'
    }
  },
  {
    id: 'insp-10',
    slug: 'minimalist-home-office-with-oak-floating-desk',
    title: 'Minimalist Home Office with Wall-Mounted Floating Desk',
    description: 'Designed for deep uninterrupted focus: a floating white oak desk spanning window alcoves, integrated recessed LED light strip, and an ergonomic leather task chair.',
    room: 'Home Office',
    style: 'Modern Minimalist',
    imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Minimalist home office with floating oak desk and natural daylight',
    aspectRatio: 'wide',
    colorPalette: [
      { name: 'White Oak', hex: '#D2C1AC' },
      { name: 'Chalk White', hex: '#FAF8F5' },
      { name: 'Warm Cognac', hex: '#9E6738' },
      { name: 'Slate Bronze', hex: '#3B3733' }
    ],
    tags: ['Home Office', 'Desk Setup', 'Floating Desk', 'Minimalist Office', 'Work from Home'],
    featured: false,
    trending: true,
    decorTips: [
      'Mounting a desktop to wall studs without floor legs makes small study rooms feel significantly larger and easier to clean.',
      'Incorporate a subtle wireless charging pad routed underneath the desk veneer for invisible device powering.'
    ],
    budgetLevel: '$$',
    sourceAttribution: {
      author: 'Spacejoy Workspace',
      platform: 'Unsplash Editorial',
      license: 'Unsplash Free Commercial License'
    },
    relatedDesignIds: ['insp-16', 'insp-5'],
    relatedArticleIds: ['art-4'],
    relatedProductIds: ['prod-6'],
    collectionId: 'col-6',
    seo: {
      metaTitle: 'Minimalist Home Office with Floating Desk | Home With InDa',
      metaDescription: 'How to design a clutter-free home office that sparks deep focus and creative flow.'
    }
  },
  {
    id: 'insp-11',
    slug: 'warm-modern-entryway-with-arched-brass-mirror',
    title: 'Warm Modern Entryway with Arched Mirror & Floating Console',
    description: 'An inviting first impression: an oversized arched brass mirror reflecting daylight across a floating travertine shelf, catch-all stone bowl, and dried wild botanical stems.',
    room: 'Entryway',
    style: 'Contemporary Warmth',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Entryway with arched mirror, floating shelf, and neutral decor accents',
    aspectRatio: 'tall',
    colorPalette: [
      { name: 'Antiqued Brass', hex: '#B89B66' },
      { name: 'Ivory Travertine', hex: '#EBE5D9' },
      { name: 'Warm Taupe', hex: '#8F8173' },
      { name: 'Cream Wall', hex: '#FDFBF7' }
    ],
    tags: ['Entryway', 'Arched Mirror', 'Console Styling', 'Foyer Ideas', 'Warm Modern'],
    featured: true,
    trending: false,
    decorTips: [
      'Hang an arched mirror directly across from the front doorway or window to capture and double incoming natural light.',
      'A floating travertine ledge preserves floor clearance for a woven basket to hide everyday shoes.'
    ],
    budgetLevel: '$$',
    sourceAttribution: {
      author: 'Spacejoy Entryway',
      platform: 'Unsplash Editorial',
      license: 'Unsplash Free Commercial License'
    },
    relatedDesignIds: ['insp-5', 'insp-17'],
    relatedArticleIds: ['art-4', 'art-2'],
    relatedProductIds: ['prod-8'],
    collectionId: 'col-3',
    seo: {
      metaTitle: 'Warm Modern Entryway with Arched Mirror | Home With InDa',
      metaDescription: 'Create an unforgettable welcoming threshold with arched brass mirrors and floating stone consoles.'
    }
  },
  {
    id: 'insp-12',
    slug: 'scandinavian-dining-room-with-pendant-and-wishbone-chairs',
    title: 'Scandinavian Dining Room with Paper Pendant & Timber Table',
    description: 'Natural oak trestle dining table centered beneath an oversized Japanese paper Akari pendant, surrounded by natural cord wishbone chairs and a minimalist wall credenza.',
    room: 'Dining Room',
    style: 'Scandinavian',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Scandinavian dining room with wooden table and paper lantern light',
    aspectRatio: 'square',
    colorPalette: [
      { name: 'Solid Oak', hex: '#CFBFA9' },
      { name: 'Rice Paper White', hex: '#F8F5EE' },
      { name: 'Cord Tan', hex: '#D5C4AC' },
      { name: 'Muted Earth', hex: '#63594D' }
    ],
    tags: ['Dining Table', 'Wishbone Chairs', 'Paper Lantern', 'Scandinavian Dining'],
    featured: false,
    trending: true,
    decorTips: [
      'Oversized paper pendants diffuse light evenly across dining guests without casting harsh glare into anyone’s eyes.',
      'Leave at least 36 inches between dining chairs and the perimeter wall for effortless sliding and movement.'
    ],
    budgetLevel: '$$',
    sourceAttribution: {
      author: 'Spacejoy Dining',
      platform: 'Unsplash Editorial',
      license: 'Unsplash Free Commercial License'
    },
    relatedDesignIds: ['insp-5', 'insp-6'],
    relatedArticleIds: ['art-2'],
    relatedProductIds: ['prod-3', 'prod-9'],
    collectionId: 'col-4',
    seo: {
      metaTitle: 'Scandinavian Dining Room with Paper Pendant | Home With InDa',
      metaDescription: 'Discover how to balance natural wood, woven cord chairs, and soft paper lighting in the dining room.'
    }
  }
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'how-to-layer-neutrals-like-an-interior-designer',
    title: 'How to Layer Neutrals Like an Interior Designer: The 5-Texture Rule',
    subtitle: 'Why flat beige rooms feel uninspired, and how tactile contrast transforms calm spaces into rich sanctuaries.',
    readTime: '6 min read',
    publishedDate: 'October 14, 2025',
    category: 'Decorating Guides',
    heroImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=80',
    excerpt: 'The secret to an all-neutral home that feels warm and soulful—rather than sterile or flat—comes down to material tension. Learn the foolproof 5-texture formula interior architects use in every project.',
    contentSections: [
      {
        heading: '1. The Problem with Monochromatic Flatness',
        body: 'When decorators try to create a calm room using only beige or off-white, they often make the mistake of using materials with similar finishes: smooth painted drywall, flat cotton upholstery, and lacquered wood. The eye quickly loses interest because there is no textural dialogue between shadow and light.',
        tip: 'Squint at your room: if all surfaces absorb light in the exact same uniform way, you need more rough and matte textures.'
      },
      {
        heading: '2. The 5-Texture Formula',
        body: 'To create depth without relying on loud color, ensure every primary zone features at least five contrasting material tactile families:\n\n1. Stone or Mineral (Travertine, honed marble, micro-cement, or matte ceramics)\n2. Warm Timber (White oak, walnut, or reclaimed elm with open grain)\n3. Coarse Weave (Heavy Belgian washed linen, raw silk, or slub cotton)\n4. Tactile Softness (Bouclé, brushed wool, or shearling)\n5. Metal Patina (Antiqued bronze, hand-forged iron, or unlacquered brass)'
      },
      {
        heading: '3. Layering Lighting for Natural Shadow Play',
        body: 'Texture is only visible when light washes across it at an angle. Overhead recessed ceiling pots flatten textures. Instead, position low table lamps with linen shades next to textured plaster walls, or install floor lamps that graze a stone coffee table from the side.'
      }
    ],
    relatedRoom: 'Living Room',
    relatedStyle: 'Japandi',
    featuredDesignIds: ['insp-1', 'insp-2', 'insp-8'],
    recommendedProductIds: ['prod-1', 'prod-4', 'prod-7'],
    author: {
      name: 'Elena Vance',
      role: 'Head of Editorial & Spatial Curation',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'art-2',
    slug: '7-lighting-rules-interior-designers-swear-by',
    title: '7 Lighting Rules Interior Designers Swear By (And Why Overhead Lights Ruin Moods)',
    subtitle: 'The definitive guide to warm color temperatures, lamp placement, and creating evening sanctuary glow.',
    readTime: '8 min read',
    publishedDate: 'November 2, 2025',
    category: 'Design Tips',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    excerpt: 'Overhead recessed ceiling lights are designed for cleaning and emergency surgery, not unwinding after dusk. Discover how three tiers of low warm illumination can alter your psychological state.',
    contentSections: [
      {
        heading: 'Rule 1: Never Go Higher Than 2700 Kelvin in Living Zones',
        body: 'Bulbs labeled "Daylight" (5000K) or "Cool White" (4000K) emit blue-heavy frequencies that signal daylight cortisol production to your circadian rhythm. For bedrooms and living areas, insist on 2400K to 2700K warm white LED globes with a high Color Rendering Index (CRI 90+).'
      },
      {
        heading: 'Rule 2: The Magic Three Lamp Heights',
        body: 'Every gathering room requires light sources placed at three distinct optical heights:\n• High ambient (paper pendants hung low, or upward wall torchieres)\n• Mid task (table lamps on consoles and end tables at seated eye level)\n• Low accent (small cordless accent lamps on floor plinths or bookshelves)'
      },
      {
        heading: 'Rule 3: Frosted and Paper Shades are Your Best Friends',
        body: 'Exposed bare bulbs—even decorative Edison bulbs—create pinpoint glare that causes eye fatigue. Always shield filaments behind pleated fabric, textured linen, frosted opal glass, or washi paper.'
      }
    ],
    relatedRoom: 'Living Room',
    relatedStyle: 'Contemporary Warmth',
    featuredDesignIds: ['insp-2', 'insp-4', 'insp-12'],
    recommendedProductIds: ['prod-3', 'prod-6'],
    author: {
      name: 'Julian Rowe',
      role: 'Senior Architectural Lighting Consultant',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'art-3',
    slug: 'the-art-of-the-serene-bedroom-sanctuary',
    title: 'The Art of the Bedroom Sanctuary: Design for Deeper Sleep',
    subtitle: 'Sightlines, acoustic calming, mattress heights, and tactile reduction for restorative nights.',
    readTime: '7 min read',
    publishedDate: 'November 19, 2025',
    category: 'Decorating Guides',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
    excerpt: 'Your bedroom is the first thing you see when you open your eyes and the last thing you see before closing them. Here is how spatial decluttering and low-profile design foster restorative peace.',
    contentSections: [
      {
        heading: 'Lowering the Bed Horizon',
        body: 'Low-profile platform beds (where the mattress sits 14–18 inches off the ground) dramatically increase the perceived ceiling height in a room. This airy upward expansion creates an immediate psychological sense of roominess.'
      },
      {
        heading: 'Acoustic Calming Through Textiles',
        body: 'Echoes in a bedroom make it feel institutional. Introduce high-pile wool rugs under the lower two-thirds of the bed, heavy floor-to-ceiling linen draperies with blackout lining, and fabric headboards to absorb sound waves.'
      }
    ],
    relatedRoom: 'Bedroom',
    relatedStyle: 'Modern Minimalist',
    featuredDesignIds: ['insp-1', 'insp-3', 'insp-8'],
    recommendedProductIds: ['prod-1', 'prod-4'],
    author: {
      name: 'Elena Vance',
      role: 'Head of Editorial & Spatial Curation',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'art-4',
    slug: 'small-space-styling-maximum-impact-apartment-living',
    title: 'Small Space Styling: Unlocking Expansive Apartment Living',
    subtitle: 'Clever furniture proportions, floating storage, and monochromatic continuity for compact rooms.',
    readTime: '5 min read',
    publishedDate: 'December 5, 2025',
    category: 'Organisation & Trends',
    heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
    excerpt: 'Living in a compact urban apartment does not mean cramming dollhouse furniture into corners. In fact, fewer oversized pieces often make a small room feel grander than dozens of small items.',
    contentSections: [
      {
        heading: 'The Paradox of Scale: Go Big in Small Rooms',
        body: 'Many homeowners fill small living rooms with petite loveseats, tiny coffee tables, and miniature rugs. This creates visual clutter that screams "this room is tiny." Instead, anchor the room with one full-sized sofa and a large rug that extends under furniture edges.'
      },
      {
        heading: 'Elevating Furniture Off the Floor',
        body: 'When your eye can see the floor extend all the way under a credenza or sofa on slender legs, your brain perceives the room as substantially wider. Avoid bulky skirted sofas or boxy floor-sitting storage cabinets in tight quarters.'
      }
    ],
    relatedRoom: 'Small Spaces',
    relatedStyle: 'Scandinavian',
    featuredDesignIds: ['insp-5', 'insp-11', 'insp-10'],
    recommendedProductIds: ['prod-8', 'prod-3'],
    author: {
      name: 'Julian Rowe',
      role: 'Senior Architectural Lighting Consultant',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  }
];

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    title: 'Washed Belgian Linen Duvet Cover Set in Oatmeal',
    category: 'Bedding & Textiles',
    priceRange: '$180 – $240',
    imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    curatorNote: 'Pre-washed with pumice stones for immediate softness. Breathable flax regulates body temperature year-round.',
    room: 'Bedroom',
    style: 'Japandi',
    affiliateDisclaimer: 'Curated editorial recommendation. Partner affiliate links help support our visual publication.',
    retailerNote: 'Selected from certified European Flax mill partners',
    tags: ['Linen', 'Duvet', 'Oatmeal', 'Bedding']
  },
  {
    id: 'prod-2',
    title: 'Monolithic Honed Ivory Travertine Plinth Coffee Table',
    category: 'Furniture',
    priceRange: '$480 – $750',
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
    curatorNote: 'Carved from natural sedimentary travertine stone with matte honed finish. Each piece shows unique organic mineral veins.',
    room: 'Living Room',
    style: 'Organic Modern',
    affiliateDisclaimer: 'Curated editorial recommendation. Partner affiliate links help support our visual publication.',
    retailerNote: 'Ships in custom reinforced wooden crate',
    tags: ['Travertine', 'Coffee Table', 'Natural Stone']
  },
  {
    id: 'prod-3',
    title: 'Handcrafted Rice Paper Sculptural Pendant Lantern',
    category: 'Lighting',
    priceRange: '$120 – $190',
    imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
    curatorNote: 'Inspired by classic Japanese lantern craftsmanship with subtle bamboo ribbing. Disperses ambient light with zero glare.',
    room: 'Dining Room',
    style: 'Japandi',
    affiliateDisclaimer: 'Curated editorial recommendation. Partner affiliate links help support our visual publication.',
    retailerNote: 'Compatible with standard E26 dimmable warm bulbs',
    tags: ['Pendant', 'Paper Lamp', 'Dining Light']
  },
  {
    id: 'prod-4',
    title: 'Ribbed Ceramic Bedside Table Lamp with Linen Shade',
    category: 'Lighting',
    priceRange: '$95 – $140',
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    curatorNote: 'Matte terracotta base with subtle ribbed ridges. The textured oatmeal linen drum shade emits an inviting 2700K ambient glow.',
    room: 'Bedroom',
    style: 'Scandinavian',
    affiliateDisclaimer: 'Curated editorial recommendation. Partner affiliate links help support our visual publication.',
    retailerNote: 'Includes integrated brass dimmer switch',
    tags: ['Table Lamp', 'Ceramic', 'Bedside']
  },
  {
    id: 'prod-5',
    title: 'Handmade Stoneware Ceramic Decorative Vessel in Sand',
    category: 'Decorative Objects',
    priceRange: '$65 – $95',
    imageUrl: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80',
    curatorNote: 'Wheel-thrown stoneware with an unglazed sandy exterior. Ideal for displaying dried eucalyptus, olive branches, or standing alone as tabletop sculpture.',
    room: 'Living Room',
    style: 'Organic Modern',
    affiliateDisclaimer: 'Curated editorial recommendation. Partner affiliate links help support our visual publication.',
    retailerNote: 'Handmade by independent ceramic ateliers',
    tags: ['Ceramic', 'Vase', 'Stoneware', 'Decor']
  },
  {
    id: 'prod-6',
    title: 'Cast Bronze Sculptural Bookends (Set of 2)',
    category: 'Decorative Objects',
    priceRange: '$85 – $130',
    imageUrl: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=800&q=80',
    curatorNote: 'Heavy cast brass with an aged hand-rubbed patina. Keeps art monographs securely displayed on open credenzas or bookshelves.',
    room: 'Home Office',
    style: 'Contemporary Warmth',
    affiliateDisclaimer: 'Curated editorial recommendation. Partner affiliate links help support our visual publication.',
    retailerNote: 'Felt padded base prevents wood scratches',
    tags: ['Bookends', 'Brass', 'Office Decor']
  },
  {
    id: 'prod-7',
    title: 'Textured Bouclé & Down Lumbar Accent Pillow',
    category: 'Bedding & Textiles',
    priceRange: '$55 – $80',
    imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    curatorNote: 'Nubby wool bouclé woven with durable flax warp. Stuffed with certified duck feather fill for easy karate-chop styling.',
    room: 'Bedroom',
    style: 'Modern Minimalist',
    affiliateDisclaimer: 'Curated editorial recommendation. Partner affiliate links help support our visual publication.',
    retailerNote: 'Concealed YKK metal zipper closure',
    tags: ['Bouclé', 'Pillow', 'Textile']
  },
  {
    id: 'prod-8',
    title: 'Arched Solid Brass Thin-Frame Vanity Mirror',
    category: 'Mirrors & Art',
    priceRange: '$190 – $310',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    curatorNote: 'Clean arched silhouette with a recessed slender brass frame. Shatterproof glass reflects true colors with zero distortion.',
    room: 'Entryway',
    style: 'Contemporary Warmth',
    affiliateDisclaimer: 'Curated editorial recommendation. Partner affiliate links help support our visual publication.',
    retailerNote: 'Heavy duty French cleat mounting hardware included',
    tags: ['Mirror', 'Arched', 'Brass', 'Entryway']
  }
];

export const initialRooms = INITIAL_ROOMS;
export const initialStyles = INITIAL_STYLES;
export const initialCollections = INITIAL_COLLECTIONS;
export const initialArticles = INITIAL_ARTICLES;
export const initialProducts = INITIAL_PRODUCTS;
export const initialInspirations = INITIAL_INSPIRATIONS;
