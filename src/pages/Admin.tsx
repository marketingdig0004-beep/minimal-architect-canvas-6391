import { useEffect, useState } from "react";
import { ArrowLeft, ImagePlus, Save, LogIn, LogOut, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { defaultSiteContent, fetchSiteContent, saveSiteContent, uploadSiteImage, type SiteContent } from "@/lib/site-content";

const ADMIN_EMAIL = "julioalvaro2006@gmail.com";

function ImageField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const choose = async (file?: File) => {
    if (!file) return;
    setUploading(true);
    try { onChange(await uploadSiteImage(file)); }
    catch (error) { alert(error instanceof Error ? error.message : "Não foi possível enviar a imagem."); }
    finally { setUploading(false); }
  };
  return <div className="space-y-3">
    <label className="text-sm font-medium">{label}</label>
    {value && <img src={value} alt={label} className="h-40 w-full rounded-lg border object-cover" />}
    <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed p-4 text-sm text-muted-foreground hover:bg-muted">
      {uploading ? <Loader2 size={18} className="animate-spin" /> : <ImagePlus size={18} />}
      {uploading ? "Enviando imagem..." : "Escolher imagem do dispositivo"}
      <input className="sr-only" type="file" accept="image/jpeg,image/png,image/webp" disabled={uploading} onChange={e => { void choose(e.target.files?.[0]); e.currentTarget.value = ""; }} />
    </label>
    {value && <Button type="button" variant="outline" size="sm" onClick={() => onChange("")}>Remover imagem</Button>}
  </div>;
}

export default function Admin() {
  const [session, setSession] = useState<any>(null);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, next) => setSession(next));
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session?.user?.email?.toLowerCase() === ADMIN_EMAIL) {
      fetchSiteContent().then(setContent);
    }
  }, [session]);

  const signIn = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true); setNotice("");
    try {
      if (email.trim().toLowerCase() !== ADMIN_EMAIL) throw new Error("Este e-mail não tem permissão para acessar o painel.");
      const { error } = await supabase.auth.signInWithPassword({ email: ADMIN_EMAIL, password });
      if (error) throw error;
    } catch (error) { setNotice(error instanceof Error ? error.message : "Não foi possível entrar."); }
    finally { setBusy(false); }
  };

  const createAccess = async () => {
    setBusy(true); setNotice("");
    try {
      if (email.trim().toLowerCase() !== ADMIN_EMAIL) throw new Error("Use o e-mail administrativo autorizado.");
      if (password.length < 8) throw new Error("A senha precisa ter pelo menos 8 caracteres.");
      const { data, error } = await supabase.auth.signUp({ email: ADMIN_EMAIL, password });
      if (error) throw error;
      if (!data.session) setNotice("Cadastro recebido. Verifique o e-mail para confirmar o acesso e depois entre no painel.");
      else setNotice("Acesso administrativo criado.");
    } catch (error) { setNotice(error instanceof Error ? error.message : "Não foi possível criar o acesso."); }
    finally { setBusy(false); }
  };

  const field = (label: string, key: keyof SiteContent, multiline = false) => <div className="space-y-2"><label className="text-sm font-medium">{label}</label>{multiline ? <textarea rows={4} value={content[key]} onChange={e => setContent(old => ({ ...old, [key]: e.target.value }))} className="w-full rounded-lg border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary" /> : <input value={content[key]} onChange={e => setContent(old => ({ ...old, [key]: e.target.value }))} className="w-full rounded-lg border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary" />}</div>;

  if (checking) return <main className="grid min-h-screen place-items-center"><Loader2 className="animate-spin" /></main>;

  if (!session || session.user.email?.toLowerCase() !== ADMIN_EMAIL) return <main className="grid min-h-screen place-items-center bg-secondary/40 px-5 py-10 text-foreground">
    <form onSubmit={signIn} className="w-full max-w-md space-y-5 rounded-2xl border bg-background p-8 shadow-sm">
      <div><p className="font-serif text-3xl">Suzana Lopes</p><p className="mt-1 text-sm text-muted-foreground">Acesso administrativo</p></div>
      <div className="space-y-2"><label className="text-sm font-medium">E-mail</label><input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-lg border bg-background p-3 text-sm" /></div>
      <div className="space-y-2"><label className="text-sm font-medium">Senha</label><input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-lg border bg-background p-3 text-sm" /></div>
      {notice && <p role="status" className="rounded-lg bg-secondary p-3 text-sm">{notice}</p>}
      <Button type="submit" disabled={busy} className="w-full">{busy ? <Loader2 className="animate-spin" /> : <LogIn size={16} />} Entrar</Button>
      <Button type="button" variant="outline" disabled={busy} className="w-full" onClick={() => void createAccess()}>Criar primeiro acesso administrativo</Button>
      <p className="text-xs leading-5 text-muted-foreground">O primeiro acesso é criado pelo serviço de autenticação do Lovable Cloud. Somente o e-mail administrativo autorizado pode entrar.</p>
      <Button asChild variant="ghost" className="w-full"><a href="/"><ArrowLeft size={16} /> Voltar ao site</a></Button>
    </form>
  </main>;

  return <main className="min-h-screen bg-background text-foreground">
    <header className="border-b"><div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5"><div><p className="font-serif text-2xl">Suzana Lopes</p><p className="text-xs text-muted-foreground">Painel administrativo · {session.user.email}</p></div><div className="flex gap-2"><Button asChild variant="outline"><a href="/"><ArrowLeft size={16} /> Ver site</a></Button><Button variant="ghost" onClick={() => void supabase.auth.signOut()}><LogOut size={16} /> Sair</Button></div></div></header>
    <div className="mx-auto max-w-5xl space-y-8 px-5 py-8">
      <div><h1 className="font-serif text-3xl">Editar conteúdo do site</h1><p className="mt-2 text-sm text-muted-foreground">As alterações são salvas no Lovable Cloud e ficam disponíveis para todos os visitantes.</p></div>
      <section className="grid gap-6 rounded-xl border p-6 md:grid-cols-2"><h2 className="font-serif text-xl md:col-span-2">Página inicial</h2>{field("Nome / título principal", "heroTitle")}{field("Frase de destaque", "heroSubtitle")}{field("Descrição principal", "heroDescription", true)}<ImageField label="Imagem de fundo da página inicial" value={content.heroImage} onChange={v => setContent(old => ({ ...old, heroImage: v }))} /></section>
      <section className="grid gap-6 rounded-xl border p-6 md:grid-cols-2"><h2 className="font-serif text-xl md:col-span-2">Sobre a psicóloga</h2>{field("Título da seção", "aboutHeading")}{field("Texto de apresentação", "aboutText", true)}<ImageField label="Foto de Suzana" value={content.portraitImage} onChange={v => setContent(old => ({ ...old, portraitImage: v }))} /></section>
      <div className="flex flex-wrap items-center gap-3"><Button disabled={busy} onClick={async () => { setBusy(true); setNotice(""); try { await saveSiteContent(content); setNotice("Alterações salvas e publicadas no banco do site."); } catch (error) { setNotice(error instanceof Error ? error.message : "Falha ao salvar."); } finally { setBusy(false); } }}><Save size={16} /> Salvar alterações</Button>{notice && <span role="status" className="text-sm text-muted-foreground">{notice}</span>}</div>
    </div>
  </main>;
}
