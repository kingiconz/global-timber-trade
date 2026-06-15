import teakImg from "@/assets/product-teak.jpg";
import rosewoodImg from "@/assets/product-rosewood.jpg";
import mahoganyImg from "@/assets/product-mahogany.jpg";
import irokoImg from "@/assets/product-iroko.jpg";
import sapeleImg from "@/assets/product-sapele.jpg";
import ceibaImg from "@/assets/product-ceiba.jpg";
import wawaImg from "@/assets/product-wawa.jpg";
import afzeliaImg from "@/assets/product-afzelia.jpg";
import gmelinaImg from "@/assets/product-gmelina.jpg";
import aniegreImg from "@/assets/product-aniegre.jpg";
import limbaImg from "@/assets/product-limba.jpg";

// Charcoal product imagery (CDN assets)
import charcoalBagPremium from "@/assets/charcoal-bag-premium.png.asset.json";
import charcoalBulkPack from "@/assets/charcoal-bulk-pack.png.asset.json";
import charcoalBagOpen from "@/assets/charcoal-bag-open.png.asset.json";
import charcoalHexBriquettes from "@/assets/charcoal-hex-briquettes.jpg.asset.json";
import charcoalCubeBriquettes from "@/assets/charcoal-cube-briquettes.jpg.asset.json";
import charcoalHardwoodLump from "@/assets/charcoal-hardwood-lump.jpg.asset.json";
import charcoalCoconut from "@/assets/charcoal-coconut.jpg.asset.json";
import charcoalRestaurantGrade from "@/assets/charcoal-restaurant-grade.jpg.asset.json";

const charcoalBagPremiumImg = charcoalBagPremium.url;
const charcoalBulkPackImg = charcoalBulkPack.url;
const charcoalBagOpenImg = charcoalBagOpen.url;
const charcoalHexImg = charcoalHexBriquettes.url;
const charcoalCubeImg = charcoalCubeBriquettes.url;
const charcoalLumpImg = charcoalHardwoodLump.url;
const charcoalCoconutImg = charcoalCoconut.url;
const charcoalRestaurantImg = charcoalRestaurantGrade.url;

export type Product = {
  slug: string;
  name: string;
  scientificName?: string;
  category: "Timber" | "Charcoal";
  type: string;
  grade: "Grade A" | "Premium" | "Export Select";
  short: string;
  description: string;
  image: string;
  gallery: string[];
  density: string;
  moisture: string;
  sizes: string[];
  packaging: string;
  regions: string[];
  availability: "In Stock" | "Limited" | "On Demand";
  moq: string;
  shipping: string;
};

export const timberProducts: Product[] = [
  {
    slug: "african-teak",
    name: "African Teak",
    scientificName: "Tectona grandis",
    category: "Timber",
    type: "Teak",
    grade: "Grade A",
    short: "Premium hardwood, durable & weather-resistant.",
    description:
      "Export-grade African Teak prized for its dimensional stability, rich golden-brown grain, and natural resistance to decay. Ideal for marine applications, luxury joinery, and outdoor architecture.",
    image: teakImg,
    gallery: [teakImg, irokoImg, mahoganyImg],
    density: "640–750 kg/m³",
    moisture: "10–14%",
    sizes: ["2.4m, 3.0m, 3.6m, 4.2m lengths", "Custom milled to spec"],
    packaging: "Strapped bundles, tarpaulin wrapped, container loaded",
    regions: ["Europe", "Middle East", "Asia", "North America"],
    availability: "In Stock",
    moq: "1 x 40ft container",
    shipping: "FOB Tema / CIF major ports",
  },
  {
    slug: "rosewood-lumber",
    name: "Rosewood (Kpatro)",
    scientificName: "Pterocarpus erinaceus",
    category: "Timber",
    type: "Rosewood",
    grade: "Premium",
    short: "Rich crimson grain, prized for fine furniture.",
    description:
      "Hand-selected Rosewood lumber with deep crimson tones and exceptional finish quality. Reserved for high-end furniture makers and instrument luthiers worldwide.",
    image: rosewoodImg,
    gallery: [rosewoodImg, sapeleImg, mahoganyImg],
    density: "850–1100 kg/m³",
    moisture: "8–12%",
    sizes: ["Boules, planks, billets — bespoke dimensions"],
    packaging: "Crated, fumigated, ISPM-15 compliant",
    regions: ["EU", "USA", "Japan", "UAE"],
    availability: "Limited",
    moq: "10 m³",
    shipping: "CIF — documentation included",
  },
  {
    slug: "african-mahogany",
    name: "African Mahogany",
    scientificName: "Khaya ivorensis",
    category: "Timber",
    type: "Mahogany",
    grade: "Grade A",
    short: "Deep red-brown hardwood, premium furniture grade.",
    description:
      "Sustainably harvested African Mahogany from Ghana's certified forests. Renowned for its rich reddish-brown tones, exceptional workability, and dimensional stability — the timber of choice for cabinetry, yacht interiors, and luxury millwork.",
    image: mahoganyImg,
    gallery: [mahoganyImg, sapeleImg, rosewoodImg],
    density: "560–640 kg/m³",
    moisture: "10–12%",
    sizes: ["Squared logs, sawn boards, custom sizes"],
    packaging: "Banded bundles, ISPM-15 compliant fumigation",
    regions: ["Europe", "USA", "China", "India"],
    availability: "In Stock",
    moq: "20 m³",
    shipping: "FOB Tema / CIF — full documentation",
  },
  {
    slug: "iroko-hardwood",
    name: "Iroko Hardwood",
    scientificName: "Milicia regia",
    category: "Timber",
    type: "Iroko",
    grade: "Premium",
    short: "Teak alternative with golden grain and high durability.",
    description:
      "Often called 'African Teak' for its similar properties, Iroko offers exceptional durability, natural oil content, and a rich golden-brown patina. Ideal for outdoor decking, marine joinery, and architectural cladding.",
    image: irokoImg,
    gallery: [irokoImg, teakImg, mahoganyImg],
    density: "640–700 kg/m³",
    moisture: "10–14%",
    sizes: ["Logs, beams, boards — milled to specification"],
    packaging: "Strapped bundles, tarpaulin wrapped",
    regions: ["EU", "Middle East", "Asia"],
    availability: "In Stock",
    moq: "25 m³",
    shipping: "FOB Tema / CIF major ports",
  },
  {
    slug: "sapele-lumber",
    name: "Sapele Lumber",
    scientificName: "Entandrophragma cylindricum",
    category: "Timber",
    type: "Sapele",
    grade: "Premium",
    short: "Ribbon-figured hardwood with deep crimson tones.",
    description:
      "Premium Sapele with distinctive interlocked ribbon grain and a lustrous reddish finish. Highly sought for fine joinery, musical instruments, architectural panelling and luxury furniture.",
    image: sapeleImg,
    gallery: [sapeleImg, mahoganyImg, rosewoodImg],
    density: "640–720 kg/m³",
    moisture: "10–12%",
    sizes: ["Sawn boards, quarter-sawn flitches, beams"],
    packaging: "Crated, ISPM-15 compliant",
    regions: ["Europe", "USA", "Asia"],
    availability: "In Stock",
    moq: "15 m³",
    shipping: "FOB / CIF",
  },
  {
    slug: "ceiba-fromager",
    name: "Ceiba (Fromager)",
    scientificName: "Ceiba pentandra",
    category: "Timber",
    type: "Ceiba",
    grade: "Grade A",
    short: "Lightweight pale hardwood, ideal for plywood and joinery.",
    description:
      "Fast-growing tropical hardwood with a pale cream colour and uniform texture. Widely used for plywood cores, light construction, packaging, and interior joinery where workability and a clean finish matter.",
    image: ceibaImg,
    gallery: [ceibaImg, wawaImg, limbaImg],
    density: "230–390 kg/m³",
    moisture: "12–16%",
    sizes: ["Logs, sawn boards, plywood-core blocks"],
    packaging: "Banded bundles, fumigated, ISPM-15 compliant",
    regions: ["Asia", "Europe", "Middle East"],
    availability: "In Stock",
    moq: "30 m³",
    shipping: "FOB Tema / CIF",
  },
  {
    slug: "abachi-wawa",
    name: "Abachi (Wawa)",
    scientificName: "Triplochiton scleroxylon",
    category: "Timber",
    type: "Wawa",
    grade: "Grade A",
    short: "Pale, lightweight hardwood — sauna and joinery favourite.",
    description:
      "Also known as Obeche or African Whitewood, Wawa is a stable, easy-to-work timber prized for sauna interiors, mouldings, picture frames, and lightweight furniture. Pale straw colour with a uniform fine grain.",
    image: wawaImg,
    gallery: [wawaImg, ceibaImg, limbaImg],
    density: "320–450 kg/m³",
    moisture: "10–14%",
    sizes: ["Sawn boards, square edged lumber, custom sizes"],
    packaging: "Strapped bundles, kiln-dried option, ISPM-15",
    regions: ["EU", "Middle East", "Asia", "USA"],
    availability: "In Stock",
    moq: "25 m³",
    shipping: "FOB Tema / CIF",
  },
  {
    slug: "african-mahogany-khaya",
    name: "African Mahogany (Khaya spp.)",
    scientificName: "Khaya spp.",
    category: "Timber",
    type: "Mahogany",
    grade: "Premium",
    short: "Khaya species — multi-source mahogany for export volume.",
    description:
      "Sourced across Khaya ivorensis, K. anthotheca and K. grandifoliola, this mahogany category serves bulk export demand for cabinetry, boat building, and decorative joinery with consistent reddish-brown tones.",
    image: mahoganyImg,
    gallery: [mahoganyImg, sapeleImg, rosewoodImg],
    density: "500–650 kg/m³",
    moisture: "10–12%",
    sizes: ["Logs, squared timbers, sawn boards"],
    packaging: "Banded bundles, ISPM-15 compliant fumigation",
    regions: ["Europe", "USA", "China", "India"],
    availability: "In Stock",
    moq: "30 m³",
    shipping: "FOB Tema / CIF",
  },
  {
    slug: "afzelia-papao-doussie",
    name: "Afzelia (Papao / Doussie)",
    scientificName: "Afzelia spp.",
    category: "Timber",
    type: "Afzelia",
    grade: "Premium",
    short: "Dense reddish-brown hardwood, exceptional durability.",
    description:
      "Highly durable West African hardwood with a rich reddish-brown heartwood. Excellent rot and insect resistance makes it the choice for heavy joinery, exterior doors, decking, and structural beams.",
    image: afzeliaImg,
    gallery: [afzeliaImg, mahoganyImg, irokoImg],
    density: "780–880 kg/m³",
    moisture: "10–12%",
    sizes: ["Logs, sawn boards, squared beams"],
    packaging: "Strapped bundles, ISPM-15 compliant",
    regions: ["EU", "Middle East", "Asia", "USA"],
    availability: "In Stock",
    moq: "20 m³",
    shipping: "FOB Tema / CIF",
  },
  {
    slug: "gmelina",
    name: "Gmelina",
    scientificName: "Gmelina arborea",
    category: "Timber",
    type: "Gmelina",
    grade: "Grade A",
    short: "Plantation-grown hardwood, ideal for joinery and pulp.",
    description:
      "Sustainably plantation-grown Gmelina with a pale yellow-grey hue and even grain. Used in light construction, furniture frames, mouldings, and pulp/paper processing — a true volume hardwood.",
    image: gmelinaImg,
    gallery: [gmelinaImg, ceibaImg, wawaImg],
    density: "420–560 kg/m³",
    moisture: "12–14%",
    sizes: ["Logs, sawn boards, custom dimensions"],
    packaging: "Banded bundles, ISPM-15 compliant",
    regions: ["Asia", "EU", "Middle East"],
    availability: "In Stock",
    moq: "30 m³",
    shipping: "FOB Tema / CIF",
  },
  {
    slug: "aniegre-asanfina",
    name: "Aniegre (Asanfina)",
    scientificName: "Aningeria spp.",
    category: "Timber",
    type: "Aniegre",
    grade: "Premium",
    short: "Honey-toned hardwood with a fine satin grain.",
    description:
      "Aniegre offers a warm honey-gold colour and a smooth satin lustre, often quarter-sawn for figured veneer. Favoured for high-end cabinetry, panelling, and decorative interior work.",
    image: aniegreImg,
    gallery: [aniegreImg, sapeleImg, mahoganyImg],
    density: "480–620 kg/m³",
    moisture: "10–12%",
    sizes: ["Sawn boards, veneer flitches, custom sizes"],
    packaging: "Crated, ISPM-15 compliant",
    regions: ["Europe", "USA", "Asia"],
    availability: "Limited",
    moq: "15 m³",
    shipping: "FOB / CIF",
  },
  {
    slug: "limba-ofram",
    name: "Limba (Ofram)",
    scientificName: "Terminalia superba",
    category: "Timber",
    type: "Limba",
    grade: "Grade A",
    short: "Pale creamy hardwood with subtle dark figured streaks.",
    description:
      "Known commercially as Limba or Ofram, this versatile timber pairs a pale yellow body with occasional dark heart streaks ('Black Limba'). Used for furniture, mouldings, plywood faces, and musical instrument bodies.",
    image: limbaImg,
    gallery: [limbaImg, ceibaImg, wawaImg],
    density: "440–600 kg/m³",
    moisture: "10–14%",
    sizes: ["Logs, sawn boards, veneer logs"],
    packaging: "Strapped bundles, ISPM-15 compliant",
    regions: ["EU", "USA", "Asia"],
    availability: "In Stock",
    moq: "25 m³",
    shipping: "FOB Tema / CIF",
  },
];

export const charcoalProducts: Product[] = [
  {
    slug: "hardwood-charcoal",
    name: "Hardwood Lump Charcoal",
    scientificName: "Mixed indigenous hardwood",
    category: "Charcoal",
    type: "Lump",
    grade: "Export Select",
    short: "High-density lump charcoal, low ash content.",
    description:
      "Slow-kilned hardwood charcoal with high carbon content, long burn time, and minimal smoke. The choice of premium grill houses across the Gulf and Europe.",
    image: charcoalImg,
    gallery: [charcoalImg, briquettesImg, hexBriquettesImg],
    density: "Fixed carbon ≥ 78%",
    moisture: "≤ 6%",
    sizes: ["20–150mm lump pieces"],
    packaging: "10kg / 15kg / 20kg kraft bags, palletised",
    regions: ["Gulf States", "Europe", "South Korea"],
    availability: "In Stock",
    moq: "26 MT (1 x 40ft HC)",
    shipping: "FOB / CIF — full export documentation",
  },
  {
    slug: "coconut-briquettes",
    name: "Coconut Shell Briquettes",
    scientificName: "Cocos nucifera",
    category: "Charcoal",
    type: "Briquettes",
    grade: "Premium",
    short: "Smokeless, long-burning shisha-grade briquettes.",
    description:
      "Cube briquettes pressed from 100% coconut shell carbon. Odourless, smokeless, and engineered for the global shisha and BBQ market with consistent burn over 2.5 hours.",
    image: briquettesImg,
    gallery: [briquettesImg, hexBriquettesImg, charcoalImg],
    density: "Fixed carbon ≥ 80%",
    moisture: "≤ 5%",
    sizes: ["25x25x25mm cubes (standard)", "Hexagonal & flat options"],
    packaging: "1kg inner / 10kg master carton, branded available",
    regions: ["UAE", "Saudi Arabia", "Germany", "USA"],
    availability: "In Stock",
    moq: "20 MT",
    shipping: "FOB / CIF — private-label available",
  },
  {
    slug: "hexagonal-briquettes",
    name: "Hexagonal Hardwood Briquettes",
    scientificName: "Compressed hardwood blend",
    category: "Charcoal",
    type: "Briquettes",
    grade: "Export Select",
    short: "Hex-pressed briquettes, uniform burn for industry use.",
    description:
      "Machine-pressed hexagonal briquettes engineered for consistent 4+ hour burn. Favoured by industrial kitchens, steakhouses, and bulk catering across the Gulf and EU.",
    image: hexBriquettesImg,
    gallery: [hexBriquettesImg, briquettesImg, charcoalImg],
    density: "Fixed carbon ≥ 82%",
    moisture: "≤ 5%",
    sizes: ["50mm hex cross-section, 50–80mm lengths"],
    packaging: "10kg / 20kg cartons, palletised, branded available",
    regions: ["Gulf States", "Europe", "USA"],
    availability: "In Stock",
    moq: "22 MT",
    shipping: "FOB Tema / CIF — private label OK",
  },
  {
    slug: "restaurant-grade-charcoal",
    name: "Restaurant Grade Charcoal",
    scientificName: "Premium kiln-fired hardwood",
    category: "Charcoal",
    type: "Lump",
    grade: "Premium",
    short: "Chef-selected lump charcoal for premium grill kitchens.",
    description:
      "Chef-selected, low-spark lump charcoal kilned to deliver clean high heat with minimal ash. The standard for Michelin-recognised grill houses and steakhouses worldwide.",
    image: restaurantCharcoalImg,
    gallery: [restaurantCharcoalImg, charcoalImg, briquettesImg],
    density: "Fixed carbon ≥ 80%",
    moisture: "≤ 5%",
    sizes: ["40–120mm graded lump"],
    packaging: "5kg / 10kg branded retail bags, palletised",
    regions: ["Europe", "Gulf States", "Japan", "USA"],
    availability: "Limited",
    moq: "18 MT",
    shipping: "FOB / CIF — private-label available",
  },
];

// Backwards compatibility (timber-only on the main marketing site)
export const products: Product[] = timberProducts;

export const grades = ["All", "Grade A", "Premium", "Export Select"] as const;
export const timberTypes = ["All", "Teak", "Mahogany", "Iroko", "Sapele", "Rosewood", "Ceiba", "Wawa", "Afzelia", "Gmelina", "Aniegre", "Limba"] as const;
