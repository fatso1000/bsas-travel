import Picture1 from "../assets/pexels-micca-ar-308726700-23021526.jpg";
import Picture2 from "../assets/pexels-micca-ar-308726700-23021657.jpg";
import Picture3 from "../assets/pexels-rickson-derik-1225713006-22605358.jpg";
import Picture4 from "../assets/pexels-sofia-linares-corsano-306415279-13447376.jpg";

/**
 * Pexels CDN URL. Gallery IDs were chosen from themed searches on pexels.com:
 * Puerto Madero — "Puerto Madero"; Japanese Garden — "Japanese garden" / Buenos Aires;
 * Plaza de Mayo — "Plaza de Mayo Buenos Aires"; Ateneo — "bookstore theater interior";
 * El Caminito — "La Boca Buenos Aires"; Recoleta — Buenos Aires / cemetery mood;
 * Teatro Colón — "opera house interior" (incl. Teatro Colón–style shots).
 */
export function pexelsPhotoUrl(
  id: number,
  ext: "jpeg" | "png" = "jpeg",
  width = 1200
) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&w=${width}`;
}

export type Attraction = {
  slug: string;
  title: string;
  heroImage: string;
  tagline: string;
  description: string[];
  highlights: string[];
  area: string;
  gettingThere: string;
  tips: string;
  /** Google Maps search query for embed (place name + city). */
  mapQuery: string;
  /** Three gallery images (Pexels), chosen to match each attraction’s theme. */
  galleryImages: readonly [string, string, string];
};

export const attractions: Attraction[] = [
  {
    slug: "puerto-madero",
    title: "Puerto Madero",
    heroImage: Picture1,
    tagline:
      "Red-brick docks, sleek towers, and one of Buenos Aires’ favorite sunset walks.",
    description: [
      "Puerto Madero turned a forgotten port into a lively waterfront district. Wide promenades, restored warehouses, and modern high-rises sit side by side, with the Río de la Plata glinting at the edge of the frame.",
      "By day it is calm enough for a long stroll or a coffee overlooking the water; after dark, restaurants and bars fill the brick-lined streets. The district feels intentionally international yet unmistakably porteño.",
      "The area is also a benchmark for urban renewal in Latin America: what was once disused docks is now parks, offices, and some of the city’s most photographed architecture.",
    ],
    highlights: [
      "Puente de la Mujer — Santiago Calatrava’s iconic pivoting footbridge.",
      "Reserva Ecológica Costanera Sur — wetlands and trails steps from the towers.",
      "Dining along the docks — from casual parrillas to upscale waterfront tables.",
    ],
    area: "East of the city center, between San Telmo and the Costanera.",
    gettingThere:
      "Subte Line C to Retiro or a short taxi from Microcentro; many visitors walk in from San Telmo or Puerto Madero’s own avenues.",
    tips: "Golden hour along the water is hard to beat. Wear comfortable shoes if you plan to loop toward the ecological reserve.",
    mapQuery: "Puerto Madero, Buenos Aires, Argentina",
    galleryImages: [
      pexelsPhotoUrl(28235677),
      pexelsPhotoUrl(11111505),
      pexelsPhotoUrl(32784075),
    ],
  },
  {
    slug: "jardin-japones",
    title: "Japanese Garden",
    heroImage: Picture2,
    tagline:
      "A pocket of calm in Palermo — bridges, koi ponds, and careful symmetry.",
    description: [
      "The Jardín Japonés is one of the largest Japanese gardens outside Japan. Designed as a cultural gift, it layers stone lanterns, curved bridges, and manicured plantings around central ponds where koi drift beneath maples and cherry trees in season.",
      "Unlike the bustle of nearby Palermo parks, the garden asks for a slower pace. Paths are narrow, views are framed like paintings, and small structures recall tea culture and traditional carpentry.",
      "It is an easy half-day pause: enough to feel transported, compact enough to pair with Bosques de Palermo or a café on a nearby street.",
    ],
    highlights: [
      "Cultural center and exhibits tied to Japanese-Argentine friendship.",
      "Tea house and seasonal festivals when dates align.",
      "Photography-friendly corners without crowding the main paths.",
    ],
    area: "Parque Tres de Febrero, Palermo.",
    gettingThere:
      "Subte Line D to Plaza Italia or buses along Avenida Sarmiento; the garden sits inside the larger park belt.",
    tips: "Check opening hours before you go; weekends can be busier. Respect quiet zones so everyone can enjoy the atmosphere.",
    mapQuery: "Jardín Japonés, Palermo, Buenos Aires, Argentina",
    galleryImages: [
      pexelsPhotoUrl(32104071),
      pexelsPhotoUrl(30977507),
      pexelsPhotoUrl(31111807),
    ],
  },
  {
    slug: "casa-mayo",
    title: "Plaza de Mayo",
    heroImage: Picture3,
    tagline:
      "The civic heart of Argentina — Casa Rosada, Cabildo, and the story of 25 de Mayo.",
    description: [
      "Plaza de Mayo is where Buenos Aires argues with itself and celebrates itself. Surrounded by the Casa Rosada, the historic Cabildo, the Metropolitan Cathedral, and the Mayo pyramid, the square has hosted demonstrations, concerts, and national milestones for centuries.",
      "Visitors come for the architecture and the weight of history: independence-era debates, Evita’s balcony, and the rhythm of daily political life still play out along these façades.",
      "Free walking angles from the plaza lead into Microcentro’s domes and arcades, making it a natural anchor for a day focused on the city’s institutional core.",
    ],
    highlights: [
      "Casa Rosada — executive palace and balcony overlooking the square.",
      "Cabildo — colonial seat turned museum of the May Revolution.",
      "Catedral Metropolitana — including the tomb of General San Martín.",
    ],
    area: "Microcentro, city center.",
    gettingThere:
      "Subte Lines A, D, and E serve nearby stations (e.g. Plaza de Mayo, Catedral); many bus lines cross the surrounding avenues.",
    tips: "Visit on a weekday morning for lighter crowds around the monuments; large gatherings can temporarily reshape access—stay aware and flexible.",
    mapQuery: "Plaza de Mayo, Buenos Aires, Argentina",
    galleryImages: [
      pexelsPhotoUrl(16355446),
      pexelsPhotoUrl(33126437),
      pexelsPhotoUrl(34736096),
    ],
  },
  {
    slug: "ateneo",
    title: "Ateneo Grand Splendid",
    heroImage: Picture4,
    tagline:
      "A lavish theater reborn as what many call the world’s most beautiful bookstore.",
    description: [
      "El Ateneo Grand Splendid occupies a former performance hall on Avenida Santa Fe. The stage became a café, the boxes became reading nooks, and the painted ceiling still soars above shelves of new titles.",
      "Browsing here is half literature, half architecture: velvet, plaster ornament, and warm light make even a quick visit memorable. Locals treat it as a living room as much as a shop.",
      "It sits on a busy shopping corridor, so you can contrast the hush inside with the pace of Recoleta-adjacent retail just beyond the doors.",
    ],
    highlights: [
      "Restored frescoes and the original theater balconies.",
      "Café on the former stage — arrive early for a table with a view.",
      "Strong Spanish- and English-language sections alongside Argentine writers.",
    ],
    area: "Avenida Santa Fe, Barrio Norte (near Recoleta).",
    gettingThere:
      "Subte Line D to Callao or Pueyrredón, then a short walk along Santa Fe.",
    tips: "Tripods and flash can be restricted; phone photos are usually fine. Combine with Recoleta Cemetery or the nearby art museums for a full cultural afternoon.",
    mapQuery: "El Ateneo Grand Splendid, Avenida Santa Fe, Buenos Aires, Argentina",
    galleryImages: [
      pexelsPhotoUrl(8940632, "png"),
      pexelsPhotoUrl(21954351),
      pexelsPhotoUrl(17580584),
    ],
  },
  {
    slug: "el-caminito",
    title: "El Caminito",
    heroImage:
      "https://images.pexels.com/photos/34761867/pexels-photo-34761867.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "Colorful houses, tango dancers, and vibrant street art in La Boca.",
    description: [
      "El Caminito is a famous street museum and a traditional alley in La Boca, a neighborhood of Buenos Aires. It's renowned for its brightly painted houses, which reflect the neighborhood's early immigrant history and its strong ties to art and tango.",
      "Walking through El Caminito feels like stepping into a living painting. You'll find local artists selling their works, tango dancers performing in the street, and numerous shops offering souvenirs and local crafts.",
      "The area buzzes with energy and color, making it a must-visit for anyone looking to experience the authentic vibrant culture of Buenos Aires.",
    ],
    highlights: [
      "Iconic colorful houses and murals.",
      "Live tango performances in the street.",
      "Art galleries and artisan shops.",
    ],
    area: "La Boca, southeast of the city center.",
    gettingThere: "Buses are the best option; taxis are also readily available. It's often combined with a visit to La Bombonera stadium.",
    tips: "Visit during the day for the best atmosphere and safety. Be mindful of your belongings in crowded areas.",
    mapQuery: "El Caminito, La Boca, Buenos Aires, Argentina",
    galleryImages: [
      pexelsPhotoUrl(34761867),
      pexelsPhotoUrl(33534660),
      pexelsPhotoUrl(16150834),
    ],
  },
  {
    slug: "recoleta-cemetery",
    title: "Recoleta Cemetery",
    heroImage:
      "https://images.pexels.com/photos/17662710/pexels-photo-17662710.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "An architectural marvel and final resting place of Argentina's elite, including Eva Perón.",
    description: [
      "Recoleta Cemetery is unlike any other. It's a city within a city, with elaborate mausoleums and statues that form a stunning display of funerary architecture. Many of Argentina's most prominent figures, including presidents, military heroes, and the legendary Eva Perón, are interred here.",
      "The tree-lined paths invite visitors to wander and discover the history etched into the stone. Each mausoleum tells a story, making it a captivating experience for history buffs and architecture enthusiasts alike.",
      "It's a place of serene beauty and profound history, offering a unique glimpse into Argentina's past and its enduring culture of remembrance.",
    ],
    highlights: [
      "Eva Perón's mausoleum (Familia Duarte).",
      "Stunning marble statues and elaborate crypts.",
      "Guided tours available for historical insights.",
    ],
    area: "Recoleta, a high-end residential neighborhood.",
    gettingThere: "Accessible by Subte Line D (Facultad de Derecho station) or numerous bus lines. It's a short walk from the Recoleta cultural center.",
    tips: "Wear comfortable shoes, as you'll be doing a lot of walking. Consider a guided tour to learn about the cemetery's famous residents and their stories.",
    mapQuery: "Recoleta Cemetery, Buenos Aires, Argentina",
    galleryImages: [
      pexelsPhotoUrl(17662710),
      pexelsPhotoUrl(29045432),
      pexelsPhotoUrl(35119662),
    ],
  },
  {
    slug: "teatro-colon",
    title: "Teatro Colón",
    heroImage:
      "https://images.pexels.com/photos/34995890/pexels-photo-34995890.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "One of the world's top opera houses, celebrated for its acoustics and opulent architecture.",
    description: [
      "Teatro Colón is a majestic opera house that stands as a symbol of Buenos Aires' cultural richness. It's internationally recognized for its exceptional acoustics and breathtaking architecture, blending Italian Renaissance, French, and Greek Revival styles.",
      "The interior is a spectacle of its own, with lavish decorations, gilded details, and a magnificent main hall. Attending a performance here is a truly unforgettable experience, but even a guided tour offers a profound appreciation of its grandeur.",
      "It has hosted some of the greatest artists in opera and ballet, cementing its reputation as one of the finest theaters in the world.",
    ],
    highlights: [
      "World-class acoustics and stunning interior.",
      "Guided tours showcasing its architecture and history.",
      "Diverse program of opera, ballet, and classical music.",
    ],
    area: "San Nicolás, near the Obelisco.",
    gettingThere: "Numerous bus lines and Subte lines (B, C, D to Diagonal Norte, Lavalle, or Tribunales stations) serve the area. It's easily walkable from many downtown hotels.",
    tips: "Book tickets for performances or tours in advance, especially during peak season. Dress code for evening performances is often formal.",
    mapQuery: "Teatro Colón, Buenos Aires, Argentina",
    galleryImages: [
      pexelsPhotoUrl(34995890),
      pexelsPhotoUrl(36123945),
      pexelsPhotoUrl(13132908),
    ],
  },
];

const bySlug = new Map(attractions.map((a) => [a.slug, a]));

export function getAttractionBySlug(slug: string | undefined): Attraction | undefined {
  if (!slug) return undefined;
  return bySlug.get(slug);
}
