import teakImg from "@/assets/product-teak.jpg";
import charcoalImg from "@/assets/product-charcoal.jpg";
import rosewoodImg from "@/assets/product-rosewood.jpg";
import briquettesImg from "@/assets/product-briquettes.jpg";

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

export const products: Product[] = [
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
    gallery: [teakImg, rosewoodImg],
    density: "640–750 kg/m³",
    moisture: "10–14%",
    sizes: ["2.4m, 3.0m, 3.6m, 4.2m lengths", "Custom milled to spec"],
    packaging: "Strapped bundles, tarpaulin wrapped, container loaded",
    regions: ["Europe", "Middle East", "Asia", "North America"],
    availability: "In Stock",
    moq: "1 x 40ft container",
    shipping: "FOB Mombasa / CIF major ports",
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
    gallery: [rosewoodImg, teakImg],
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
    gallery: [charcoalImg, briquettesImg],
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
    gallery: [briquettesImg, charcoalImg],
    density: "Fixed carbon ≥ 80%",
    moisture: "≤ 5%",
    sizes: ["25x25x25mm cubes (standard)", "Hexagonal & flat options"],
    packaging: "1kg inner / 10kg master carton, branded available",
    regions: ["UAE", "Saudi Arabia", "Germany", "USA"],
    availability: "In Stock",
    moq: "20 MT",
    shipping: "FOB / CIF — private-label available",
  },
];

export const categories = ["All", "Timber", "Charcoal"] as const;
export const grades = ["All", "Grade A", "Premium", "Export Select"] as const;
