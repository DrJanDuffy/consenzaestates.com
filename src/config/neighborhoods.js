/**
 * Las Vegas neighborhood names for static page generation.
 * Slugs are URL-safe (lowercase, spaces to hyphens). "None" excluded.
 */

const NAMES = [
  'Aliante',
  'Alta Mira',
  'Anthem',
  'Anthem Country Club',
  'Anthem Highlands',
  'Ardiente',
  'Arlington Ranch',
  'Artesia',
  'Ascaya',
  'Black Mountain Vistas',
  'Burson Ranch',
  'Cadence',
  'Calico Ridge',
  'Canyon Estates',
  'Canyon Gate',
  'Centennial Hills',
  'Champion Village',
  'Comstock Park',
  'Coronado Ranch',
  'Cottonwoods',
  'Desert Greens',
  'Desert Inn Country Club',
  'Desert Shores',
  'Desert Trails',
  'Eldorado',
  'Elkhorn Ranch',
  'Elkhorn Springs',
  'Foothills at Mac Donald Ranch',
  'Green Valley',
  'Green Valley Ranch',
  'Green Valley South',
  'Highlands Ranch',
  'Hillsboro',
  'Inspirada',
  'Iron Mountain Ranch',
  'Lake Las Vegas',
  'Las Casitas',
  'Las Vegas Country Club',
  'Legacy',
  'Lone Mountain',
  'Lone Mountain West',
  'Los Prados',
  'Lynbrook',
  'MacDonald Highlands',
  'MacDonald Ranch',
  'Madeira Canyon',
  'McNeill',
  'Mesa Verde',
  'Mira Villa',
  'Mission Hills',
  'Monaco',
  'Montecito',
  'Mountain Falls',
  'Mountains Edge',
  'Mt. Charleston Golf Estates',
  'Nevada Trails',
  'North Shores',
  'Painted Desert',
  'Paradise Hills',
  'Park Highlands',
  'Peccole Ranch',
  'Pleasant Valley',
  'Providence',
  'Queensridge',
  'Rancho Circle',
  'Rancho Las Palmas',
  'Red Rock Country Club',
  'Rhodes Ranch',
  'Riverstone',
  'Roma Hills',
  'Scotch 80s',
  'Seven Hills',
  'Shadow Hills',
  'Siena',
  'Silver Springs',
  'Silverado Ranch',
  'Silverstone Ranch',
  'Skye Canyon',
  'Solera',
  'South Shore',
  'South Valley Ranch',
  'Southern Highlands',
  'Southern Terrace',
  'Southfork',
  'Southwest Ranch',
  'Spanish Hill',
  'Spanish Oaks',
  'Spanish Trail',
  'Spring Mountain Ranch',
  'Spring Valley',
  'Stallion Mountain',
  'Summerlin',
  'Summerlin Hills',
  'Summerlin North',
  'Summerlin South',
  'Summerlin West',
  'Sun City Aliante',
  'Sun City Anthem',
  'Sun City MacDonald Ranch',
  'Sun City Summerlin',
  'Sunridge at Mac Donald Ranch',
  'The Bluffs',
  'The Cliffs',
  'The Lakes',
  'The Mesa',
  'The Pueblo',
  'The Ridges',
  'The Vineyards',
  'The Vistas',
  'The Willows',
  'Tierra De Las Palmas',
  'Town Center',
  'Tuscany',
  'Valley Vista',
  'Whitney Ranch',
  'Winery',
  'Woodcrest',
];

/**
 * Derive URL slug from neighborhood name: lowercase, spaces to hyphens, remove apostrophes and periods.
 * @param {string} name
 * @returns {string}
 */
export function nameToSlug(name) {
  return name
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/\./g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * All neighborhoods with name and slug.
 */
export const neighborhoods = NAMES.map((name) => ({
  name,
  slug: nameToSlug(name),
}));

/**
 * Get neighborhood by slug.
 * @param {string} slug
 * @returns {{ name: string, slug: string } | undefined}
 */
export function getNeighborhoodBySlug(slug) {
  return neighborhoods.find((n) => n.slug === slug);
}

export default neighborhoods;
