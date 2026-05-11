import teakImg from "@/assets/product-teak.jpg";
import charcoalImg from "@/assets/product-charcoal.jpg";
import rosewoodImg from "@/assets/product-rosewood.jpg";
import briquettesImg from "@/assets/product-briquettes.jpg";
import mahoganyImg from "@/assets/product-mahogany.jpg";
import irokoImg from "@/assets/product-iroko.jpg";
import sapeleImg from "@/assets/product-sapele.jpg";
import hexBriquettesImg from "@/assets/product-hex-briquettes.jpg";
import restaurantCharcoalImg from "@/assets/product-restaurant-charcoal.jpg";

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
    scientificName: "Milicia excelsa",
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
    name: "Rosewood Lumber",
    scientificName: "Dalbergia melanoxylon",
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
export const timberTypes = ["All", "Teak", "Mahogany", "Iroko", "Sapele", "Rosewood"] as const;
