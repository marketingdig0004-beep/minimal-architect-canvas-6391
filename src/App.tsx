import { useState } from "react";
import { ArrowUpRight, Menu, X, Heart, Brain, Sparkles, Instagram, Mail, MapPin, Phone, ChevronDown, Flower2 } from "lucide-react";

const photos = {
  suzana: "/images/portrait-suzana.webp",
  child: "/images/child.webp",
  activity: "/images/activity.webp",
  puzzle: "/images/puzzle.webp",
  office: "/images/office-main.webp",
  room: "/images/office-room.webp",
  tan: "/images/portrait-tan.webp",
  black: "/images/portrait-black.webp",
};

const services = [
  { icon: Heart, title: "Psicoterapia individual", text: "Um espaço de escuta e acolhimento para compreender emoções, reconhecer padrões e construir novos caminhos." },
  { icon: Brain, title: "Acompanhamento infantil", text: "Cuidado atento ao universo da criança, respeitando seu tempo, sua expressão e suas necessidades." },
  { icon: Sparkles, title: "Orientação às famílias", text: "Um olhar acolhedor para apoiar famílias e fortalecer vínculos durante o desenvolvimento." },
];

const nav = [["Início","#inicio"],["Sobre mim","#sobre"],["Atendimentos","#atendimentos"],["Meu espaço","#espaco"],["Contato","#contato"]];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <div className="min-h-screen bg-[#faf9f5] text-[#303b32]">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e8e9e1] bg-[#faf9f5]/95 backdrop-blur-lg">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" onClick={closeMenu} className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#54785b] text-white"><Flower2 size={23}/></span>
          <span><span className="block font-serif text-xl leading-none">Suzana Lopes</span><span className="mt-1 block text-[9px] uppercase tracking-[.25em] text-[#7b897b]">Psicologia & cuidado</span></span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">{nav.map(([label,href])=><a key={href} href={href} className="text-[11px] uppercase tracking-[.15em] text-[#657267] transition hover:text-[#54785b]">{label}</a>)}</nav>
        <a href="#contato" className="hidden items-center gap-2 rounded-full bg-[#54785b] px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-white transition hover:bg-[#3f6147] md:flex">Agendar conversa <ArrowUpRight size={14}/></a>
        <button className="md:hidden" aria-label="Abrir menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
      </div>
      {menuOpen&&<nav className="grid gap-1 border-t border-[#e8e9e1] bg-[#faf9f5] px-6 py-4 md:hidden">{nav.map(([label,href])=><a key={href} href={href} onClick={closeMenu} className="py-3 text-xs uppercase tracking-widest">{label}</a>)}</nav>}
    </header>

    <main>
      <section id="inicio" className="scroll-mt-20 px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.28em] text-[#718873]"><span className="h-px w-9 bg-[#9aaf98]"/> Um espaço de escuta e acolhimento</p>
            <h1 className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-[68px]">Cuidar de si é um jeito de <em className="font-normal text-[#638269]">florescer.</em></h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#70796f]">Um espaço seguro para acolher sua história, compreender emoções e descobrir novas possibilidades, no seu tempo e com gentileza.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5"><a href="#contato" className="inline-flex items-center gap-3 rounded-full bg-[#54785b] px-7 py-4 text-[10px] font-bold uppercase tracking-[.16em] text-white transition hover:bg-[#3f6147]">Vamos conversar <ArrowUpRight size={15}/></a><a href="#sobre" className="text-xs text-[#647365] underline decoration-[#b8c7b5] underline-offset-8">Conheça meu trabalho</a></div>
            <div className="mt-12 flex items-center gap-4 border-t border-[#e3e6de] pt-6"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#e8eee5] text-[#638269]"><Heart size={18}/></span><p className="font-serif text-lg italic text-[#697b6b]">Acolher, compreender, florescer.</p></div>
          </div>
          <div className="relative mx-auto w-full max-w-[490px] lg:ml-auto">
            <div className="absolute -right-4 -top-4 h-2/3 w-2/3 rounded-[48%_48%_8px_8px] border border-[#b9cbb7]"/>
            <img src={photos.suzana} alt="Retrato profissional de Suzana Lopes" className="relative aspect-[4/5] w-full rounded-[48%_48%_8px_8px] object-cover object-top shadow-xl"/>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-6 py-4 shadow-lg"><p className="font-serif text-xl text-[#54785b]">Suzana Lopes</p><p className="mt-1 text-[9px] uppercase tracking-[.18em] text-[#899487]">Psicologia e cuidado</p></div>
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-20 bg-[#eef1e9] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative mx-auto w-full max-w-[500px]"><div className="absolute -left-5 -top-5 h-2/3 w-2/3 border border-[#a9bda7]"/><img src={photos.office} alt="Consultório de Suzana Lopes" className="relative aspect-[5/4] w-full object-cover shadow-md"/><div className="absolute -bottom-6 -right-4 bg-white px-6 py-4 shadow-lg"><p className="font-serif text-xl italic text-[#58745d]">Um lugar para acolher.</p></div></div>
          <div className="lg:pl-8"><p className="text-[10px] uppercase tracking-[.28em] text-[#718873]">Prazer, sou Suzana</p><h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Cada história merece ser ouvida com carinho.</h2><div className="mt-7 h-px w-16 bg-[#8ba38b]"/><p className="mt-7 text-sm leading-8 text-[#69756a]">Acredito que cada pessoa carrega uma história única e merece ser acolhida em sua singularidade. Meu propósito é oferecer um espaço seguro, ético e respeitoso, onde seja possível falar sobre sentimentos, desafios e conquistas.</p><p className="mt-4 text-sm leading-8 text-[#69756a]">A jornada de cuidado acontece passo a passo, com escuta, presença e respeito ao tempo de cada pessoa e de cada família.</p><a href="#contato" className="mt-8 inline-flex items-center gap-2 border-b border-[#6c896f] pb-2 text-[10px] font-bold uppercase tracking-widest text-[#54785b]">Vamos conversar <ArrowUpRight size={14}/></a></div>
        </div>
      </section>

      <section id="atendimentos" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl"><div className="mx-auto max-w-2xl text-center"><p className="text-[10px] uppercase tracking-[.28em] text-[#718873]">Como posso ajudar</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Cuidado que respeita seu tempo e sua jornada.</h2><p className="mt-6 text-sm leading-7 text-[#70796f]">Cada acompanhamento é construído com atenção às necessidades, vivências e objetivos de cada pessoa.</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">{services.map(({icon:Icon,title,text},i)=><article key={title} className="group border border-[#e0e5dc] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#edf2e9] text-[#638269]"><Icon size={21}/></span><p className="mt-9 text-[9px] tracking-[.2em] text-[#9aa596]">0{i+1}</p><h3 className="mt-3 font-serif text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-[#737d72]">{text}</p><a href="#contato" className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#638269]">Saiba mais <ArrowUpRight size={13}/></a></article>)}</div>
        </div>
      </section>

      <section className="bg-[#f3f1e9] px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div><p className="text-[10px] uppercase tracking-[.28em] text-[#718873]">Cuidado também na infância</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Brincar, aprender e crescer com acolhimento.</h2><p className="mt-6 text-sm leading-8 text-[#70796f]">O universo infantil tem muitas formas de comunicação. Atividades lúdicas, desenhos, jogos e brincadeiras podem ajudar a criança a expressar sentimentos e experiências.</p><p className="mt-4 text-sm leading-8 text-[#70796f]">O acompanhamento considera a individualidade de cada criança e a parceria com sua família.</p><a href="#contato" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#54785b] px-7 py-4 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-[#3f6147]">Fale comigo <ArrowUpRight size={14}/></a></div>
          <div className="grid grid-cols-2 gap-4"><img src={photos.child} alt="Criança em atividade lúdica com óculos coloridos" className="col-span-2 aspect-[16/9] w-full object-cover object-center shadow-md"/><img src={photos.activity} alt="Atividade de escrita acompanhada" className="aspect-[4/5] w-full object-cover"/><img src={photos.puzzle} alt="Atividade infantil com peças de montar" className="aspect-[4/5] w-full object-cover"/></div>
        </div>
      </section>

      <section id="espaco" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-[10px] uppercase tracking-[.28em] text-[#718873]">Meu espaço</p><h2 className="mt-5 font-serif text-4xl sm:text-5xl">Um ambiente para se sentir bem.</h2></div><p className="max-w-sm text-sm leading-7 text-[#70796f]">Um espaço preparado para oferecer tranquilidade, privacidade e conforto em cada encontro.</p></div>
          <div className="grid gap-4 md:grid-cols-12"><img src={photos.room} alt="Sala de espera do consultório" className="aspect-[5/4] w-full object-cover md:col-span-5"/><img src={photos.office} alt="Sala de atendimento" className="aspect-[5/4] w-full object-cover md:col-span-7"/><div className="grid gap-4 md:col-span-12 md:grid-cols-2"><img src={photos.tan} alt="Retrato profissional de Suzana Lopes" className="aspect-[16/9] w-full object-cover object-top"/><img src={photos.black} alt="Retrato profissional de Suzana Lopes" className="aspect-[16/9] w-full object-cover object-top"/></div></div>
        </div>
      </section>

      <section className="bg-[#54785b] px-5 py-20 text-center text-white sm:px-8"><p className="text-[10px] uppercase tracking-[.3em] text-white/75">Você não precisa ter todas as respostas</p><h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">O primeiro passo pode ser simplesmente conversar.</h2><a href="#contato" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f7f7ef] px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-[#465e49] hover:bg-white">Agendar um primeiro contato <ArrowUpRight size={15}/></a></section>

      <section id="contato" className="scroll-mt-20 mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32"><div><p className="text-[10px] uppercase tracking-[.28em] text-[#718873]">Vamos começar?</p><h2 className="mt-5 max-w-lg font-serif text-5xl leading-tight">Estou aqui para ouvir você.</h2><p className="mt-7 max-w-md text-sm leading-8 text-[#70796f]">Se sentir que este é o momento de iniciar sua jornada de cuidado, entre em contato. Será um prazer conversar com você.</p></div>
        <div className="border-t border-[#e0e5dc] pt-7"><div className="flex gap-5 border-b border-[#e0e5dc] py-6"><Mail className="mt-1 text-[#638269]" size={19}/><div><p className="text-[9px] uppercase tracking-[.2em] text-[#92998f]">E-mail</p><p className="mt-2 text-sm">Entre em contato para informações e agendamentos</p></div></div><div className="flex gap-5 border-b border-[#e0e5dc] py-6"><Phone className="mt-1 text-[#638269]" size={19}/><div><p className="text-[9px] uppercase tracking-[.2em] text-[#92998f]">Atendimento</p><p className="mt-2 text-sm">Consulte disponibilidade e modalidade de atendimento</p></div></div><div className="flex gap-5 py-6"><MapPin className="mt-1 text-[#638269]" size={19}/><div><p className="text-[9px] uppercase tracking-[.2em] text-[#92998f]">Localização</p><p className="mt-2 text-sm">Informações de endereço mediante contato</p></div></div><a href="mailto:contato@suzanalopes.com.br?subject=Agendamento%20de%20consulta" className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#54785b] px-7 py-4 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-[#3f6147]">Enviar mensagem <ArrowUpRight size={14}/></a></div>
      </section>
    </main>
    <footer className="border-t border-[#e4e7df] px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-center sm:flex-row sm:text-left"><p className="font-serif text-lg">Suzana Lopes <span className="font-sans text-xs text-[#92998f]">· Psicologia</span></p><p className="text-[9px] uppercase tracking-[.16em] text-[#92998f]">© {new Date().getFullYear()} · Todos os direitos reservados</p><a href="#inicio" className="text-[9px] uppercase tracking-[.16em] text-[#638269]">Voltar ao topo ↑</a></div></footer>
  </div>;
}
