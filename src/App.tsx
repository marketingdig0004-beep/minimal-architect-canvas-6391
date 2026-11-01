import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowUp, Menu, X, Heart, Brain, Sparkles, Mail, MapPin, Phone, Flower2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loadSiteContent, fetchSiteContent } from "@/lib/site-content";
import trees from "@/assets/trees-garden.jpg";
import portrait from "@/assets/suzana-portrait.jpg.asset.json";
import child from "@/assets/child-play.jpg.asset.json";
import writing from "@/assets/writing-care.jpg.asset.json";
import drawing from "@/assets/drawing-care.jpg.asset.json";
import puzzle from "@/assets/puzzle-care.jpg.asset.json";
import detail from "@/assets/care-detail.jpg.asset.json";
import play from "@/assets/play-care.jpg.asset.json";
import room from "@/assets/waiting-room.jpg.asset.json";
import office from "@/assets/consulting-room.jpg.asset.json";

const nav = [["Início", "#inicio"], ["Sobre mim", "#sobre"], ["Atendimentos", "#atendimentos"], ["Meu espaço", "#espaco"], ["Contato", "#contato"]];
const services = [
  { icon: Brain, title: "Análise do Comportamento Aplicada (ABA)", text: "Atuação com especialização em ABA, com foco no acompanhamento de pessoas autistas e no respeito às necessidades individuais." },
  { icon: Heart, title: "Psicoterapia para todas as idades", text: "Atendimento psicológico para crianças, adolescentes e adultos, com escuta acolhedora e cuidado individualizado." },
  { icon: Sparkles, title: "Acompanhamento infantil", text: "Experiência no acompanhamento de crianças autistas, com TDAH e com síndrome de Down, considerando a singularidade de cada criança." },
  { icon: Brain, title: "Avaliação neuropsicológica", text: "Processo de avaliação das funções cognitivas e aspectos do desenvolvimento, conforme a necessidade de cada pessoa." },
  { icon: Heart, title: "Reabilitação para pessoas com TDAH", text: "Acompanhamento voltado ao desenvolvimento de estratégias e habilidades para lidar com desafios do dia a dia relacionados ao TDAH." },
];
const activities = [
  { asset: child, alt: "Criança em atividade lúdica com óculos coloridos" },
  { asset: writing, alt: "Atividade de escrita acompanhada" },
  { asset: drawing, alt: "Atividade de desenho e pintura" },
  { asset: puzzle, alt: "Atividade com quebra-cabeça" },
  { asset: detail, alt: "Materiais utilizados no acompanhamento" },
  { asset: play, alt: "Brincadeira com carrinhos durante uma atividade" },
];

function ContactButton({ children = "Vamos conversar", light = false }: { children?: React.ReactNode; light?: boolean }) {
  return <Button asChild size="lg" variant={light ? "secondary" : "default"} className="h-12 rounded-full px-6 text-xs"><a href="https://wa.me/5591984149662?text=Ol%C3%A1%2C%20Suzana!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20atendimentos." target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [content, setContent] = useState(loadSiteContent);\n  useEffect(() => { let active = true; fetchSiteContent().then(value => { if (active) setContent(value); }); const refresh = () => fetchSiteContent().then(value => { if (active) setContent(value); }); window.addEventListener("suzana-content-updated", refresh); return () => { active = false; window.removeEventListener("suzana-content-updated", refresh); }; }, []);
  const closeMenu = () => setMenuOpen(false);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
      <div className="site-container flex h-20 items-center justify-between gap-5">
        <a href="#inicio" onClick={closeMenu} className="flex shrink-0 items-center gap-3" aria-label="Suzana Lopes — início">
          <Flower2 className="h-9 w-9 text-primary" strokeWidth={1.2} />
          <span><span className="block font-serif text-2xl leading-none">Suzana Lopes</span><span className="mt-1.5 block text-[9px] uppercase tracking-[.18em] text-muted-foreground">Psicologia & cuidado</span></span>
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">{nav.map(([label, href]) => <a key={href} href={href} className="text-xs text-muted-foreground transition-colors hover:text-primary">{label}</a>)}</nav>
        <div className="hidden lg:block"><ContactButton>Agendar conversa</ContactButton></div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav id="mobile-menu" aria-label="Navegação móvel" className="grid gap-1 border-t border-border bg-background px-6 py-4 lg:hidden">{nav.map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="py-3 text-sm">{label}</a>)}</nav>}
    </header>
    <main>
      <section id="inicio" className="nature-hero relative isolate flex items-center overflow-hidden text-primary-foreground">
        <img src={content.heroImage || trees} alt="Imagem de destaque do site" width={1920} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="nature-overlay absolute inset-0 -z-10" />
        <div className="site-container w-full py-16 motion-safe:animate-fade-in-up">
          <p className="eyebrow mb-6 text-primary-foreground/80">Escuta. Presença. Acolhimento.</p>
          <h1 className="font-serif text-5xl leading-[1.1] sm:text-6xl lg:text-7xl">{content.heroTitle}</h1>
          <p className="mt-4 font-serif text-3xl italic leading-snug sm:text-4xl">{content.heroSubtitle}</p>
          <p className="mt-6 max-w-lg text-sm leading-7 text-primary-foreground/85 sm:text-base">{content.heroDescription}</p>
          <div className="mt-8"><ContactButton light /></div>
          <a href="#sobre" className="mt-12 inline-flex items-center gap-3 text-xs text-primary-foreground/80"><ArrowDown size={16} />Conheça meu trabalho</a>
        </div>
      </section>

      <section id="sobre" className="section-space">
        <div className="site-container grid items-center gap-12 md:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <figure className="portrait-frame mx-auto w-full max-w-sm"><img src={content.portraitImage || portrait.url} alt="Suzana Lopes em seu retrato profissional" loading="lazy" className="aspect-[2/3] w-full rounded-t-[160px] object-cover" /><figcaption className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground"><span>Suzana Lopes</span><span>Psicologia & cuidado</span></figcaption></figure>
          <div><p className="eyebrow text-primary">Prazer, sou Suzana</p><h2 className="section-title mt-5">{content.aboutHeading}</h2><div className="my-7 h-px w-14 bg-primary/40" /><p className="body-copy">{content.aboutText}</p><p className="body-copy mt-4">Também realizo avaliação neuropsicológica e reabilitação com pessoas com TDAH. Cada acompanhamento é conduzido com escuta, presença e respeito às necessidades e ao tempo de cada pessoa e de sua família.</p><p className="my-7 font-serif text-2xl italic text-primary">Acolher, compreender, florescer.</p><ContactButton /></div>
        </div>
      </section>

      <section id="atendimentos" className="section-space bg-secondary/60">
        <div className="site-container"><div className="max-w-2xl"><p className="eyebrow text-primary">Como posso ajudar</p><h2 className="section-title mt-5">Cuidado que respeita seu tempo e sua jornada.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, text }, i) => <article key={title} className="flex flex-col rounded-lg border border-border bg-card p-7 lg:p-8"><div className="flex items-center justify-between"><Icon size={26} strokeWidth={1.4} className="text-primary" /><span className="text-xs text-muted-foreground">0{i + 1}</span></div><h3 className="mt-8 font-serif text-2xl leading-tight">{title}</h3><p className="body-copy mb-6 mt-4">{text}</p><Button asChild variant="link" className="mt-auto h-auto justify-start p-0 text-xs"><a href="#contato">Saiba mais<ArrowUpRight /></a></Button></article>)}</div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container"><div className="grid gap-6 md:grid-cols-2 md:items-end"><div><p className="eyebrow text-primary">Cuidado também na infância</p><h2 className="section-title mt-5">Brincar, aprender e crescer.</h2></div><div><p className="body-copy">Atividades lúdicas, desenhos, jogos e brincadeiras podem ajudar a criança a expressar sentimentos e experiências.</p><p className="body-copy mt-3">Um olhar atento à individualidade de cada criança, em parceria com sua família.</p></div></div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{activities.map(({ asset, alt }) => <figure key={asset.asset_id} className="overflow-hidden rounded-md bg-muted"><img src={asset.url} alt={alt} loading="lazy" className="aspect-[1/2] w-full object-cover transition-transform duration-500 motion-safe:hover:scale-105" /></figure>)}</div>
          <div className="mt-9"><ContactButton>Fale comigo</ContactButton></div>
        </div>
      </section>

      <section id="espaco" className="section-space bg-secondary/60">
        <div className="site-container"><div className="mb-10 grid gap-6 md:grid-cols-[1.3fr_.7fr] md:items-end"><div><p className="eyebrow text-primary">Meu espaço</p><h2 className="section-title mt-5">Um ambiente para se sentir bem.</h2></div><p className="body-copy">Um espaço preparado para oferecer tranquilidade, privacidade e conforto em cada encontro.</p></div>
          <div className="grid gap-5 md:grid-cols-2"><figure><img src={office.url} alt="Sala de atendimento com mesa e poltronas" loading="lazy" className="aspect-[3/2] w-full rounded-md object-cover" /><figcaption className="mt-4 font-serif text-xl">Um lugar para acolher.</figcaption></figure><figure><img src={room.url} alt="Sala de espera do consultório" loading="lazy" className="aspect-[3/2] w-full rounded-md object-cover" /><figcaption className="mt-4 font-serif text-xl">Conforto em cada encontro.</figcaption></figure></div>
        </div>
      </section>

      <section className="bg-primary px-6 py-16 text-center text-primary-foreground sm:py-20"><Flower2 className="mx-auto mb-5" size={32} strokeWidth={1.2} /><p className="eyebrow text-primary-foreground/75">Você não precisa ter todas as respostas</p><h2 className="mx-auto mb-8 mt-5 max-w-2xl font-serif text-3xl leading-tight sm:text-5xl">O primeiro passo pode ser simplesmente conversar.</h2><ContactButton light>Agendar um primeiro contato</ContactButton></section>

      <section id="contato" className="section-space"><div className="site-container grid gap-12 md:grid-cols-2 lg:gap-20"><div><p className="eyebrow text-primary">Vamos começar?</p><h2 className="section-title mt-5">Estou aqui para ouvir você.</h2><p className="body-copy mt-6 max-w-md">Se sentir que este é o momento de iniciar sua jornada de cuidado, entre em contato. Será um prazer conversar com você.</p></div><div className="border-t border-border">{[{ icon: Mail, label: "E-mail", text: "Entre em contato para informações e agendamentos" }, { icon: Phone, label: "Atendimento", text: "Consulte disponibilidade e modalidade de atendimento" }, { icon: MapPin, label: "Localização", text: "Informações de endereço mediante contato" }].map(({ icon: Icon, label, text }) => <div key={label} className="flex gap-4 border-b border-border py-5"><Icon size={20} className="mt-1 shrink-0 text-primary" strokeWidth={1.5} /><div><p className="eyebrow text-muted-foreground">{label}</p><p className="mt-2 text-sm leading-6">{text}</p></div></div>)}<Button asChild size="lg" className="mt-7 rounded-full text-xs"><a href="https://wa.me/5591984149662?text=Ol%C3%A1%2C%20Suzana!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento." target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp<ArrowUpRight /></a></Button></div></div></section>
    </main>
    <a href="https://wa.me/5591984149662?text=Ol%C3%A1%2C%20Suzana!%20Encontrei%20seu%20site%20e%20gostaria%20de%20conversar." target="_blank" rel="noopener noreferrer" aria-label="Conversar com Suzana pelo WhatsApp" title="Conversar pelo WhatsApp" className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-200 hover:scale-110 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"><MessageCircle size={30} strokeWidth={2.2} /></a>
    <footer className="border-t border-border bg-secondary/50"><div className="site-container flex flex-col justify-between gap-8 py-10 sm:flex-row sm:items-center"><div className="flex items-center gap-3"><Flower2 size={30} strokeWidth={1.2} className="text-primary" /><div><p className="font-serif text-2xl">Suzana Lopes</p><p className="mt-1 text-xs text-muted-foreground">Acolher, compreender, florescer.</p></div></div><nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-5">{nav.slice(1).map(([label, href]) => <a key={href} href={href} className="text-xs text-muted-foreground hover:text-primary">{label}</a>)}</nav><Button asChild variant="outline" size="icon" className="rounded-full"><a href="#inicio" aria-label="Voltar ao topo" title="Voltar ao topo"><ArrowUp /></a></Button></div><div className="site-container border-t border-border py-5 text-[11px] text-muted-foreground">© {new Date().getFullYear()} Suzana Lopes · Todos os direitos reservados</div></footer>
  </div>;
}
