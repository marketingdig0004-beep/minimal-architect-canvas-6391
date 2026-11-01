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
const KEY = "suzana-site-content-v1";
export function loadSiteContent(): SiteContent {
  if (typeof window === "undefined") return defaultSiteContent;
  try { return { ...defaultSiteContent, ...JSON.parse(localStorage.getItem(KEY) || "{}") }; }
  catch { return defaultSiteContent; }
}
export function saveSiteContent(value: SiteContent) {
  localStorage.setItem(KEY, JSON.stringify(value));
  window.dispatchEvent(new Event("suzana-content-updated"));
}
