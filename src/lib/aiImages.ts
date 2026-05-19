import { supabase } from "@/integrations/supabase/client";

interface ImagePrompt {
  id: string;
  text: string;
}

interface GeneratedImage {
  id: string;
  url: string | null;
  error?: string;
}

interface ProductInfo {
  name: string;
  description: string;
}

const STOP_WORDS = new Set([
  "generate", "image", "photograph", "photo", "ultra", "realistic", "cinematic", "lighting", "premium",
  "website", "banner", "section", "show", "with", "about", "for", "the", "and", "this", "that", "item",
  "no", "text", "words", "letters", "logos", "watermarks", "quality", "background", "hero", "studio",
]);

function extractTopicFromPrompt(promptText: string): string {
  const quoted = promptText.match(/"([^"]{3,})"/g)?.map((q) => q.replace(/"/g, "")) ?? [];
  if (quoted.length > 0) {
    return quoted[0].trim();
  }

  const words = promptText
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));

  const unique = Array.from(new Set(words)).slice(0, 4);
  return unique.join(" ") || "business lifestyle";
}

const FALLBACK_PHOTOS: Record<string, string[]> = {
  coffee: ["1495474472287-4d71bcdd2085","1501339847302-ac426a4a7cbb","1509042239860-f550ce710b93"],
  restaurant: ["1517248135467-4c7edcad34c4","1414235077428-338989a2e8c0","1504674900247-0877df9cc836"],
  fashion: ["1558618666-fcd25c85f82e","1445205170230-053b83016050","1490481651871-ab68de25d43d"],
  tech: ["1518770660439-4636190af475","1488590528505-98d2b5aba04b","1461749280684-dccba630e2f6"],
  fitness: ["1534438327276-14e5300c3a48","1571019614242-c5c5dee9f50b","1517836357463-d25dfeac3438"],
  beauty: ["1624819318229-f006595a4993","1629380106682-6736d2c327ed","1644641815757-37b5d1520bd7"],
  travel: ["1488646953014-85cb44e25828","1469854523086-cc02fe5d8800","1507525428034-b723cf961d3e"],
  nature: ["1470071459604-3b5ec3a7fe05","1441974231531-c6227db76b6e","1472214103451-9374bd1c798e"],
  perfume: ["1541643600914-78b084683601","1588405748880-12d015d93dfe","1563170351-be82bc888aa4"],
  jewelry: ["1515562141207-7a88fb7ce338","1573408301185-9146fe634ad0","1602751584552-8ba73aad3c93"],
  food: ["1504674900247-0877df9cc836","1555396273-367ea4eb4db5","1565299624946-b28f40a0ae38"],
  car: ["1494976388531-d1058494cdd8","1503376780353-7e6692767b70","1492144534655-ae79c964c9d7"],
  wedding: ["1519741497674-611481863552","1465495976277-4387d4b0b4c6","1511285560929-80b456fea0bc"],
  music: ["1511379938547-c1f69419868d","1493225457124-a3eb161ffa5f","1514320291840-2e0a9bf2a9ae"],
  education: ["1503676260728-1c00da094a0b","1523050854058-8df90110c9f1","1509062522246-3755977927d7"],
  pet: ["1548199973-03cce0bbc87b","1587300003388-59208cc962cb","1530281700549-e82e7bf110d6"],
  default: ["1441986300917-64674bd600d8","1497366216548-37526070297c","1497366811353-6870744d04b2"],
};

function getFallbackCategory(text: string): string {
  const lower = text.toLowerCase();
  const map: Record<string, string[]> = {
    coffee: ["coffee","cafe","brew","espresso","latte"],
    restaurant: ["restaurant","dining","chef","cuisine","bistro","food","pizza","sushi","kitchen"],
    fashion: ["fashion","clothing","style","boutique","apparel","dress","saree","outfit"],
    tech: ["tech","software","startup","digital","app","code","ai","computer"],
    fitness: ["fitness","gym","workout","yoga","sport","training"],
    beauty: ["beauty","salon","spa","skincare","cosmetic","makeup"],
    travel: ["travel","tour","adventure","vacation","hotel","resort"],
    nature: ["nature","outdoor","landscape","mountain","forest","garden","plant","flower"],
    perfume: ["perfume","cologne","fragrance","scent"],
    jewelry: ["jewelry","jewel","ring","necklace","bracelet","diamond","watch"],
    food: ["food","snack","meal","cook","recipe","bakery","cake","chocolate"],
    car: ["car","auto","vehicle","motor","drive"],
    wedding: ["wedding","bride","marriage","bridal"],
    music: ["music","concert","band","instrument","dj","audio"],
    education: ["education","school","university","learning","academy","course"],
    pet: ["pet","dog","cat","animal","puppy"],
  };
  for (const [cat, kws] of Object.entries(map)) {
    if (kws.some(kw => lower.includes(kw))) return cat;
  }
  return "default";
}

export function buildFallbackImageUrl(promptText: string, seed = `${Date.now()}`): string {
  const cat = getFallbackCategory(promptText);
  const photos = FALLBACK_PHOTOS[cat] || FALLBACK_PHOTOS.default;
  const idx = Math.abs(hashCode(seed)) % photos.length;
  return `https://images.unsplash.com/photo-${photos[idx]}?w=1600&h=900&fit=crop&auto=format&q=80`;
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

/**
 * Build a SMALL set of AI image prompts (max 8-10) to avoid rate limits.
 * Each prompt is highly specific to the user's topic.
 */
export function buildImagePrompts(
  topic: string,
  businessType: string,
  products?: ProductInfo[],
  services?: ProductInfo[]
): ImagePrompt[] {
  const t = topic.trim();
  const style = `Ultra-realistic 8K commercial photography of "${t}". Cinematic lighting, rich shadows, razor-sharp focus. ABSOLUTE RULE: zero text, zero words, zero letters, zero logos, zero watermarks anywhere in the image.`;
  const focus = `Every element must directly relate to "${t}". The viewer must immediately recognize this is about "${t}".`;

  const prompts: ImagePrompt[] = [
    {
      id: "hero",
      text: `Generate a wide hero banner photograph about "${t}". Show ${t} prominently in a premium setting. ${style} 16:9 composition. ${focus}`,
    },
    {
      id: "about",
      text: `Generate a warm lifestyle photograph of "${t}" being actively used or displayed in a real-world scenario. ${style} ${focus}`,
    },
    {
      id: "bg-section-1",
      text: `Generate a dark moody photograph of "${t}" with soft bokeh and dramatic shadows. ${style} ${focus}`,
    },
    {
      id: "bg-section-2",
      text: `Generate an artistic close-up of "${t}" showing fine details and textures. Beautiful bokeh, warm tones. ${style} ${focus}`,
    },
    {
      id: "gallery-0",
      text: `Generate an editorial lifestyle photograph of "${t}" in action. Magazine quality. ${style} ${focus}`,
    },
    {
      id: "gallery-1",
      text: `Generate an artistic showcase photograph of "${t}" from an overhead angle. ${style} ${focus}`,
    },
  ];

  if (businessType === "ecommerce") {
    const prods = products || [];
    for (let i = 0; i < Math.min(4, prods.length || 4); i++) {
      const p = prods[i];
      prompts.push({
        id: `product-${i}`,
        text: p
          ? `Generate a product photograph of "${p.name}": ${p.description}. Show this ${t} item on a clean minimal background with studio lighting. ${style} ${focus}`
          : `Generate a product photograph of a ${t} item on a clean studio background. Item #${i + 1}. ${style} ${focus}`,
      });
    }
  } else {
    const svcs = services || [];
    for (let i = 0; i < Math.min(2, svcs.length || 2); i++) {
      const s = svcs[i];
      prompts.push({
        id: `service-${i}`,
        text: s
          ? `Generate a photograph of the "${s.name}" service (${s.description}) for a ${businessType} about ${t}. ${style} ${focus}`
          : `Generate a photograph showing a ${t} service being performed. ${style} ${focus}`,
      });
    }
  }

  return prompts;
}

/**
 * Regenerate a single AI image by prompt text.
 */
export async function regenerateSingleImage(promptText: string): Promise<string | null> {
  const fallback = buildFallbackImageUrl(promptText, `retry-${Date.now()}`);

  try {
    const { data, error } = await supabase.functions.invoke("generate-images", {
      body: { prompts: [{ id: "retry", text: promptText }] },
    });

    if (error) {
      console.error("Retry edge function error:", error);
      return fallback;
    }

    const images = data?.images as GeneratedImage[] | undefined;
    const first = images?.[0];
    if (first?.url) return first.url;

    if (first?.error) {
      console.warn("Retry used fallback image due to:", first.error);
    }

    return fallback;
  } catch (err) {
    console.error("Failed to regenerate image:", err);
    return fallback;
  }
}

/**
 * Generate AI images ONE AT A TIME sequentially with delays.
 * This avoids rate limiting entirely.
 */
export async function generateAIImages(
  prompts: ImagePrompt[],
  onProgress?: (done: number, total: number) => void
): Promise<Map<string, string>> {
  const imageMap = new Map<string, string>();
  const total = prompts.length;

  for (let i = 0; i < prompts.length; i++) {
    const prompt = prompts[i];

    try {
      const { data, error } = await supabase.functions.invoke("generate-images", {
        body: { prompts: [prompt] },
      });

      if (!error && data?.images) {
        const images = data.images as GeneratedImage[];
        if (images[0]?.url) {
          imageMap.set(images[0].id, images[0].url);
        } else {
          imageMap.set(prompt.id, buildFallbackImageUrl(prompt.text, `${prompt.id}-${Date.now()}`));
        }
      } else {
        imageMap.set(prompt.id, buildFallbackImageUrl(prompt.text, `${prompt.id}-${Date.now()}`));
      }
    } catch (err) {
      console.error(`Failed image ${prompt.id}:`, err);
      imageMap.set(prompt.id, buildFallbackImageUrl(prompt.text, `${prompt.id}-${Date.now()}`));
    }

    onProgress?.(i + 1, total);

    if (i < prompts.length - 1) {
      await new Promise((r) => setTimeout(r, 1500));
    }
  }

  return imageMap;
}
