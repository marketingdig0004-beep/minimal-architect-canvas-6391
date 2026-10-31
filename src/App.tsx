import { useState } from "react";
import { ArrowUpRight, Menu, X, Heart, Brain, Sparkles, Instagram, Mail, MapPin, Phone, ChevronDown } from "lucide-react";

const photos = {
  hero: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2000&q=85",
  portrait: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=85",
  room: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85",
  nature: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1100&q=85",
  detail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
};

const services = [
  { icon: Heart, title: "Psicoterapia individual", text: "Um espaço de escuta e acolhimento para compreender emoções, reconhecer padrões e construir novos caminhos." },
  { icon: Brain, title: "Autoconhecimento", text: "Um processo para ampliar a consciência sobre si, fortalecer escolhas e desenvolver relações mais saudáveis." },
  { icon: Sparkles, title: "Saúde emocional", text: "Cuidado atento para atravessar momentos desafiadores com mais recursos, equilíbrio e gentileza." },
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#292d29]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f7f5f1]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#inicio" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#657b69] text-white"><span className="font-serif text-xl">S</span></span>
            <span><span className="block font-serif text-xl leading-none tracking-wide">Suzana Lopes</span><span className="mt-1 block text-[9px] uppercase tracking-[.28em] text-[#788078]">Psicologia & cuidado</span></span>
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {["Início", "Sobre", "Atendimentos", "Espaço", "Contato"].map((item, i) => <a key={item} href={["#inicio", "#sobre", "#atendimentos", "#espaco", "#contato"][i]} className="text-[11px] uppercase tracking-[.17em] text-[#626a62] transition hover:text-[#657b69]">{item}</a>)}
          </nav>
          <a href="#contato" className="hidden items-center gap-2 rounded-full bg-[#657b69] px-5 py-3 text-[10px] font-semibold uppercase tracking-[.16em] text-white transition hover:bg-[#4e6553] md:flex">Agendar conversa <ArrowUpRight size={14}/></a>
          <button className="md:hidden" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
        {menuOpen && <nav className="grid gap-1 border-t border-black/5 bg-[#f7f5f1] px-6 py-5 md:hidden">{["Início", "Sobre", "Atendimentos", "Espaço", "Contato"].map((item, i) => <a key={item} onClick={closeMenu} href={["#inicio", "#sobre", "#atendimentos", "#espaco", "#contato"][i]} className="py-3 text-xs uppercase tracking-widest">{item}</a>)}</nav>}
      </header>

      <main>
        <section id="inicio" className="relative flex min-h-[760px] items-center overflow-hidden pt-20">
          <div className="absolute inset-0"><img src={photos.hero} alt="Paisagem tranquila ao amanhecer" className="h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-r from-[#1f2b24]/85 via-[#26342b]/65 to-[#26342b]/10"/></div>
          <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-10">
            <div className="max-w-2xl text-white">
              <p className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[.32em] text-white/75"><span className="h-px w-9 bg-[#c8d3bd]"/> Um espaço para você</p>
              <h1 className="font-serif text-5xl leading-[1.08] tracking-[-.025em] sm:text-6xl lg:text-7xl">Cuidar de si é um jeito de <em className="font-normal text-[#d4dfc9]">recomeçar.</em></h1>
              <p className="mt-8 max-w-lg text-base leading-8 text-white/80">A psicoterapia é um convite para se escutar com mais atenção, acolher sua história e descobrir novas possibilidades.</p>
              <div className="mt-10 flex flex-wrap items-center gap-5"><a href="#contato" className="inline-flex items-center gap-3 rounded-full bg-[#d6dfcf] px-7 py-4 text-[10px] font-bold uppercase tracking-[.18em] text-[#344438] transition hover:bg-white">Vamos conversar <ArrowUpRight size={15}/></a><a href="#sobre" className="text-xs text-white/80 underline decoration-white/40 underline-offset-8 hover:text-white">Conheça meu trabalho</a></div>
            </div>
            <div className="hidden justify-end lg:flex"><div className="max-w-[270px] border-l border-white/40 pl-7 text-white/85"><p className="font-serif text-2xl italic leading-snug">“Existe força em olhar para dentro e permitir-se florescer.”</p><p className="mt-6 text-[9px] uppercase tracking-[.25em] text-white/60">Um passo de cada vez</p></div></div>
          </div>
          <a href="#sobre" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[.25em] text-white/70 md:flex">Role para descobrir <ChevronDown size={14}/></a>
        </section>

        <section id="sobre" className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-36">
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -left-5 -top-5 h-2/3 w-2/3 border border-[#b9c5b3]"/>
            <img src={photos.portrait} alt="Ambiente acolhedor de conversa e escuta" className="relative aspect-[4/5] w-full object-cover"/>
            <div className="absolute -bottom-7 -right-4 bg-[#e5e9df] px-7 py-5"><p className="font-serif text-2xl italic text-[#536b57]">Acolher, compreender, florescer.</p></div>
          </div>
          <div className="lg:pl-10"><p className="mb-6 text-[10px] uppercase tracking-[.28em] text-[#788b78]">Prazer, sou Suzana</p><h2 className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Um encontro com sua própria história, sem julgamentos.</h2><div className="mt-8 h-px w-16 bg-[#8a9b85]"/><p className="mt-8 text-sm leading-8 text-[#697069]">Acredito que cada pessoa carrega uma história única e merece ser acolhida em sua singularidade. Meu propósito é oferecer um espaço seguro, ético e respeitoso, onde você possa falar sobre o que sente e construir, no seu tempo, novas formas de viver.</p><p className="mt-5 text-sm leading-8 text-[#697069]">A jornada terapêutica não precisa ser percorrida com pressa. Ela começa com escuta, presença e um primeiro passo possível.</p><a href="#contato" className="mt-9 inline-flex items-center gap-3 border-b border-[#657b69] pb-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#536b57]">Entre em contato <ArrowUpRight size={14}/></a></div>
        </section>

        <section id="atendimentos" className="bg-[#e9ede5] px-6 py-28 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl"><div className="mx-auto max-w-2xl text-center"><p className="text-[10px] uppercase tracking-[.28em] text-[#788b78]">Como posso ajudar</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Cuidado que respeita seu tempo e sua jornada.</h2><p className="mt-6 text-sm leading-7 text-[#697069]">Cada processo é construído de forma individual, considerando suas necessidades, vivências e objetivos.</p></div>
            <div className="mt-16 grid gap-5 md:grid-cols-3">{services.map(({icon: Icon,title,text},i)=><article key={title} className="group border border-[#d4dbd0] bg-[#f7f8f4] p-9 transition duration-500 hover:-translate-y-2 hover:shadow-xl"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#e5ebe1] text-[#657b69]"><Icon size={21}/></span><p className="mt-10 text-[9px] uppercase tracking-[.22em] text-[#9aa596]">0{i+1}</p><h3 className="mt-3 font-serif text-2xl">{title}</h3><p className="mt-5 text-sm leading-7 text-[#737a72]">{text}</p><a href="#contato" className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#657b69]">Saiba mais <ArrowUpRight size={13}/></a></article>)}</div>
          </div>
        </section>

        <section id="espaco" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-[10px] uppercase tracking-[.28em] text-[#788b78]">Um lugar de acolhimento</p><h2 className="mt-5 font-serif text-4xl sm:text-5xl">Um espaço para ser você.</h2></div><p className="max-w-sm text-sm leading-7 text-[#737a72]">Um ambiente pensado para oferecer tranquilidade, privacidade e conforto em cada encontro.</p></div>
          <div className="grid gap-4 md:grid-cols-12"><img src={photos.room} alt="Sala acolhedora com decoração natural" className="aspect-[5/4] w-full object-cover md:col-span-7"/><img src={photos.nature} alt="Natureza e tranquilidade" className="aspect-[5/4] w-full object-cover md:col-span-5"/><img src={photos.detail} alt="Ambiente de trabalho acolhedor" className="aspect-[16/7] w-full object-cover md:col-span-12"/></div>
        </section>

        <section className="bg-[#657b69] px-6 py-24 text-center text-white lg:px-10"><p className="text-[10px] uppercase tracking-[.3em] text-white/70">Você não precisa ter todas as respostas</p><h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">O primeiro passo pode ser simplesmente conversar.</h2><a href="#contato" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f2f2e9] px-8 py-4 text-[10px] font-bold uppercase tracking-[.18em] text-[#465a49] transition hover:bg-white">Agende um primeiro contato <ArrowUpRight size={15}/></a></section>

        <section id="contato" className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10 lg:py-32"><div><p className="text-[10px] uppercase tracking-[.28em] text-[#788b78]">Vamos começar?</p><h2 className="mt-5 max-w-lg font-serif text-5xl leading-tight">Estou aqui para ouvir você.</h2><p className="mt-7 max-w-md text-sm leading-8 text-[#737a72]">Se sentir que este é o momento de iniciar sua jornada de cuidado, entre em contato. Será um prazer conversar com você.</p></div><div className="border-t border-[#d9ddd6] pt-8"><div className="flex items-start gap-5 border-b border-[#d9ddd6] py-6"><Mail className="mt-1 text-[#657b69]" size={19}/><div><p className="text-[9px] uppercase tracking-[.2em] text-[#92998f]">E-mail</p><p className="mt-2 text-sm">Entre em contato para informações e agendamentos</p></div></div><div className="flex items-start gap-5 border-b border-[#d9ddd6] py-6"><Phone className="mt-1 text-[#657b69]" size={19}/><div><p className="text-[9px] uppercase tracking-[.2em] text-[#92998f]">Atendimento</p><p className="mt-2 text-sm">Consulte disponibilidade e modalidade de atendimento</p></div></div><div className="flex items-start gap-5 py-6"><MapPin className="mt-1 text-[#657b69]" size={19}/><div><p className="text-[9px] uppercase tracking-[.2em] text-[#92998f]">Localização</p><p className="mt-2 text-sm">Informações de endereço mediante contato</p></div></div><a href="mailto:contato@suzanalopes.com.br?subject=Agendamento%20de%20consulta" className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#657b69] px-7 py-4 text-[10px] font-bold uppercase tracking-[.16em] text-white hover:bg-[#4e6553]">Enviar mensagem <ArrowUpRight size={14}/></a></div></section>
      </main>
      <footer className="border-t border-[#dfe2dc] px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-center sm:flex-row sm:text-left"><p className="font-serif text-lg">Suzana Lopes <span className="font-sans text-xs text-[#92998f]">· Psicologia</span></p><p className="text-[9px] uppercase tracking-[.16em] text-[#92998f]">© {new Date().getFullYear()} · Todos os direitos reservados</p><a href="#inicio" className="text-[9px] uppercase tracking-[.16em] text-[#657b69]">Voltar ao topo ↑</a></div></footer>
    </div>
  );
};

export default App;
