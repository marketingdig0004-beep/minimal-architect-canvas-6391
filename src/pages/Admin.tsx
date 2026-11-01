import { useEffect, useState } from "react";
import { ArrowLeft, ImagePlus, Save, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { defaultSiteContent, loadSiteContent, saveSiteContent, type SiteContent } from "@/lib/site-content";

function ImageField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return <div className="space-y-3">
    <label className="text-sm font-medium">{label}</label>
    {value && <img src={value} alt={label} className="h-40 w-full rounded-lg border object-cover" />}
    <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed p-4 text-sm text-muted-foreground hover:bg-muted">
      <ImagePlus size={18} /> Escolher imagem do dispositivo
      <input className="sr-only" type="file" accept="image/*" onChange={e => {
        const file = e.target.files?.[0]; if (!file) return;
        if (file.size > 1_500_000) { alert("Escolha uma imagem de até 1,5 MB."); return; }
        const reader = new FileReader(); reader.onload = () => onChange(String(reader.result)); reader.readAsDataURL(file);
      }} />
    </label>
    {value && <Button type="button" variant="outline" size="sm" onClick={() => onChange("")}>Remover imagem</Button>}
  </div>;
}
export default function Admin() {
  const [content, setContent] = useState<SiteContent>(() => loadSiteContent());
  const [saved, setSaved] = useState(false);
  useEffect(() => { const update = () => setContent(loadSiteContent()); window.addEventListener("suzana-content-updated", update); return () => window.removeEventListener("suzana-content-updated", update); }, []);
  const set = (key: keyof SiteContent, value: string) => { setContent(old => ({ ...old, [key]: value })); setSaved(false); };
  const field = (label: string, key: keyof SiteContent, multiline = false) => <div className="space-y-2"><label className="text-sm font-medium">{label}</label>{multiline ? <textarea rows={4} value={content[key]} onChange={e => set(key, e.target.value)} className="w-full rounded-lg border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary" /> : <input value={content[key]} onChange={e => set(key, e.target.value)} className="w-full rounded-lg border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary" />}</div>;
  return <main className="min-h-screen bg-background text-foreground"><header className="border-b"><div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5"><div><p className="font-serif text-2xl">Suzana Lopes</p><p className="text-xs text-muted-foreground">Painel de edição</p></div><Button asChild variant="outline"><a href="/"><ArrowLeft size={16} /> Voltar ao site</a></Button></div></header>
    <div className="mx-auto max-w-5xl space-y-8 px-5 py-8"><div><h1 className="font-serif text-3xl">Editar conteúdo do site</h1><p className="mt-2 text-sm text-muted-foreground">Edite os textos e selecione imagens para visualizar as alterações neste navegador.</p></div>
      <div className="flex gap-3 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm"><AlertTriangle className="mt-0.5 shrink-0 text-amber-600" size={20} /><p><strong>Armazenamento local temporário:</strong> o Lovable Cloud ainda não está conectado a este projeto. Por isso, estas alterações ficam somente neste navegador e não são publicadas para os visitantes. Não use este painel como sistema administrativo definitivo.</p></div>
      <section className="grid gap-6 rounded-xl border p-6 md:grid-cols-2"><h2 className="font-serif text-xl md:col-span-2">Página inicial</h2>{field("Nome / título principal", "heroTitle")}{field("Frase de destaque", "heroSubtitle")}{field("Descrição principal", "heroDescription", true)}<ImageField label="Imagem de fundo da página inicial" value={content.heroImage} onChange={v => set("heroImage", v)} /></section>
      <section className="grid gap-6 rounded-xl border p-6 md:grid-cols-2"><h2 className="font-serif text-xl md:col-span-2">Sobre a psicóloga</h2>{field("Título da seção", "aboutHeading")}{field("Texto de apresentação", "aboutText", true)}<ImageField label="Foto de Suzana" value={content.portraitImage} onChange={v => set("portraitImage", v)} /></section>
      <div className="flex flex-wrap gap-3"><Button onClick={() => { saveSiteContent(content); setSaved(true); }}><Save size={16} /> Salvar neste navegador</Button><Button variant="outline" onClick={() => { setContent(defaultSiteContent); setSaved(false); }}>Restaurar textos originais</Button>{saved && <span className="self-center text-sm text-green-600">Alterações salvas neste navegador.</span>}</div>
    </div></main>;
}
