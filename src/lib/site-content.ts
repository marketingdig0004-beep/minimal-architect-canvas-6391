import { supabase } from "@/integrations/supabase/client";

export type SiteContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  aboutHeading: string;
  aboutText: string;
  heroImage: string;
  portraitImage: string;
};

export const defaultSiteContent: SiteContent = {
  heroTitle: "Suzana Lopes",
  heroSubtitle: "Cuidar de si é um jeito de florescer.",
  heroDescription: "Atendimento psicológico para crianças, adolescentes e adultos, com atuação em ABA, acompanhamento de pessoas autistas e com TDAH, avaliação neuropsicológica e reabilitação para pessoas com TDAH.",
  aboutHeading: "Cada história merece ser ouvida com carinho.",
  aboutText: "Sou psicóloga, com especialização em Análise do Comportamento Aplicada (ABA) ao autismo. Tenho experiência com crianças autistas, com TDAH e com síndrome de Down, e realizo psicoterapia para crianças, adolescentes e adultos.",
  heroImage: "",
  portraitImage: "",
};

export function loadSiteContent(): SiteContent {
  return defaultSiteContent;
}

export async function fetchSiteContent(): Promise<SiteContent> {
  const { data, error } = await supabase.from("site_content").select("content").eq("id", "main").maybeSingle();
  if (error || !data?.content) return defaultSiteContent;
  return { ...defaultSiteContent, ...(data.content as Partial<SiteContent>) };
}

export async function saveSiteContent(value: SiteContent): Promise<void> {
  const { error } = await supabase.from("site_content").upsert({ id: "main", content: value, updated_at: new Date().toISOString() });
  if (error) throw error;
  window.dispatchEvent(new Event("suzana-content-updated"));
}

export async function uploadSiteImage(file: File): Promise<string> {
  if (!file.type.startsWith("image/")) throw new Error("Selecione um arquivo de imagem.");
  if (file.size > 5 * 1024 * 1024) throw new Error("A imagem deve ter no máximo 5 MB.");
  const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `${Date.now()}-${crypto.randomUUID()}.${extension}`;
  const { error } = await supabase.storage.from("site-images").upload(path, file, { upsert: false, contentType: file.type });
  if (error) throw error;
  const { data } = supabase.storage.from("site-images").getPublicUrl(path);
  return data.publicUrl;
}
