import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown, ArrowRight, Check, ChevronDown, CircleHelp, Clock3, Code2,
  Compass, GraduationCap, Menu, MessageCircle, ShieldCheck, Sparkles, WandSparkles, X, Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IA Sem Limites — Aprenda a usar as melhores ferramentas de IA" },
      { name: "description", content: "Um método prático para descobrir, escolher e aproveitar ferramentas de inteligência artificial gratuitas para estudar, criar e trabalhar." },
      { property: "og:title", content: "IA Sem Limites — Mais possibilidades com IA" },
      { property: "og:description", content: "Aprenda a usar ferramentas de IA gratuitas num só método prático." },
    ],
  }),
  component: Index,
});

const tools = [
  { name: "ChatGPT", tag: "Ideias & escrita", color: "bg-emerald-50 text-emerald-700", mark: "✳" },
  { name: "Claude", tag: "Texto & análise", color: "bg-orange-50 text-orange-700", mark: "✺" },
  { name: "Gemini", tag: "Pesquisa & produtividade", color: "bg-blue-50 text-blue-700", mark: "✦" },
  { name: "SeeDance", tag: "Vídeo com IA", color: "bg-fuchsia-50 text-fuchsia-700", mark: "▶" },
  { name: "Grok", tag: "Exploração & ideias", color: "bg-slate-100 text-slate-800", mark: "𝕏" },
  { name: "Qwen", tag: "Assistente inteligente", color: "bg-violet-50 text-violet-700", mark: "Q" },
  { name: "GLM", tag: "Criação & raciocínio", color: "bg-sky-50 text-sky-700", mark: "G" },
  { name: "MiniMax", tag: "Multimédia & voz", color: "bg-rose-50 text-rose-700", mark: "M" },
  { name: "Kimi", tag: "Documentos & pesquisa", color: "bg-indigo-50 text-indigo-700", mark: "K" },
  { name: "NVIDIA", tag: "Modelos & tecnologia", color: "bg-lime-50 text-lime-800", mark: "N" },
  { name: "Mimo", tag: "Aprendizagem", color: "bg-cyan-50 text-cyan-700", mark: "m" },
  { name: "IBM", tag: "Soluções inteligentes", color: "bg-blue-50 text-blue-800", mark: "IBM" },
];

const faqs = [
  { q: "Preciso de pagar por todas estas ferramentas?", a: "Não. O método dá prioridade a opções gratuitas e explica que limites ou condições de cada ferramenta deves verificar. Algumas funções avançadas podem exigir pagamento." },
  { q: "Preciso de experiência com inteligência artificial?", a: "Não. A proposta é ajudar principiantes a começar com passos simples e exemplos práticos." },
  { q: "Posso usar no telemóvel?", a: "Sim. Muitas ferramentas de IA funcionam no navegador do telemóvel ou através das suas aplicações oficiais." },
  { q: "O método garante rendimentos?", a: "Não. O método ensina formas de usar ferramentas de IA; resultados dependem da tua prática, das tuas competências e das oportunidades que encontrares." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const contact = "mailto:adcreatives05@gmail.com?subject=Quero%20saber%20mais%20sobre%20o%20m%C3%A9todo%20IA%20Sem%20Limites";
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <div className="bg-slate-950 px-4 py-2.5 text-center text-xs font-medium tracking-wide text-white sm:text-sm">
        <span className="mr-2 inline-flex items-center gap-1.5 text-cyan-300"><Sparkles size={14} /> MÉTODO PRÁTICO</span>
        Descobre mais possibilidades com ferramentas de IA gratuitas
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-200"><WandSparkles size={21} /></span>
            <span className="leading-tight"><span className="block text-base font-black tracking-tight">IA <span className="text-blue-600">SEM LIMITES</span></span><span className="text-[10px] font-semibold uppercase tracking-[.18em] text-slate-400">Aprende • Cria • Evolui</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a className="transition hover:text-blue-600" href="#ferramentas">Ferramentas</a>
            <a className="transition hover:text-blue-600" href="#metodo">O método</a>
            <a className="transition hover:text-blue-600" href="#faq">Perguntas frequentes</a>
          </nav>
          <a href={contact} className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:inline-flex">Quero saber mais <ArrowRight size={16} /></a>
          <button aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="rounded-xl border border-slate-200 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {menuOpen && <nav className="grid gap-1 border-t border-slate-100 bg-white px-5 py-4 text-sm font-semibold md:hidden">
          <a className="rounded-xl px-3 py-3 hover:bg-slate-50" href="#ferramentas" onClick={closeMenu}>Ferramentas</a>
          <a className="rounded-xl px-3 py-3 hover:bg-slate-50" href="#metodo" onClick={closeMenu}>O método</a>
          <a className="rounded-xl px-3 py-3 hover:bg-slate-50" href="#faq" onClick={closeMenu}>Perguntas frequentes</a>
          <a className="mt-2 rounded-xl bg-blue-600 px-3 py-3 text-center text-white" href={contact} onClick={closeMenu}>Quero saber mais</a>
        </nav>}
      </header>

      <section id="inicio" className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(96,165,250,0.16),_transparent_42%),radial-gradient(ellipse_at_bottom_right,_rgba(167,139,250,0.15),_transparent_38%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm sm:text-sm"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Mais ferramentas. Mais possibilidades.</div>
            <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-[-.045em] text-slate-950 sm:text-5xl lg:text-6xl">A inteligência artificial está a evoluir. <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Aprende a acompanhar.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">Um método simples para descobrires ferramentas de IA, perceberes para que serve cada uma e começares a usá-las para estudar, criar conteúdo e trabalhar com mais eficiência.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#metodo" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700">Conhecer o método <ArrowRight size={18} /></a>
              <a href="#ferramentas" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">Ver ferramentas <ArrowDown size={17} /></a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-emerald-600" /> Ideal para iniciantes</span>
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-emerald-600" /> Foco em opções gratuitas</span>
              <span className="inline-flex items-center gap-2"><Check size={16} className="text-emerald-600" /> No teu ritmo</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-200/60 via-violet-100/50 to-cyan-100/70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-slate-950 p-4 shadow-2xl shadow-slate-300/70 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
                <span className="text-xs font-semibold tracking-wide text-slate-400">O TEU ESPAÇO DE IA</span>
                <Sparkles size={17} className="text-cyan-300" />
              </div>
              <div className="grid grid-cols-2 gap-3 py-5 sm:grid-cols-3">
                {tools.slice(0, 6).map((tool) => <div key={tool.name} className="rounded-2xl border border-white/10 bg-white/[.06] p-3 transition hover:-translate-y-1 hover:bg-white/10 sm:p-4"><div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-lg font-black text-slate-900">{tool.mark}</div><p className="font-bold text-white">{tool.name}</p><p className="mt-1 text-[11px] leading-4 text-slate-400">{tool.tag}</p></div>)}
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200"><Zap size={21} /></span>
                <div><p className="text-sm font-bold text-white">A ferramenta certa para cada tarefa</p><p className="mt-1 text-xs leading-5 text-slate-400">Descobre, compara e aprende a aplicar.</p></div>
                <ArrowRight className="ml-auto shrink-0 text-cyan-200" size={18} />
              </div>
            </div>
            <div className="absolute -left-4 top-16 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl sm:flex"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><GraduationCap size={21} /></span><div><p className="text-xs font-bold text-slate-900">Aprende na prática</p><p className="text-[11px] text-slate-500">Um passo de cada vez</p></div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50/80">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-7 sm:grid-cols-4 lg:px-8">
          {[["01", "Descobrir", "Encontra ferramentas úteis"], ["02", "Compreender", "Conhece os pontos fortes"], ["03", "Experimentar", "Aprende com exemplos"], ["04", "Aplicar", "Usa no teu dia a dia"]].map(([n, title, desc]) => <div key={n} className="flex gap-3"><span className="text-sm font-black text-blue-600">{n}</span><div><p className="font-bold text-slate-900">{title}</p><p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p></div></div>)}
        </div>
      </section>

      <section id="ferramentas" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center"><span className="text-xs font-black uppercase tracking-[.22em] text-blue-600">O universo da IA</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Um mundo de ferramentas. <span className="text-blue-600">Uma forma melhor de começar.</span></h2><p className="mt-4 leading-7 text-slate-600">Conhece algumas das plataformas que podes explorar. As funcionalidades e os planos gratuitos podem mudar, por isso aprende também a confirmar as condições actuais de cada serviço.</p></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => <article key={tool.name} className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"><span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-black ${tool.color}`}>{tool.mark}</span><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><h3 className="font-bold text-slate-900">{tool.name}</h3>{i < 3 && <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-emerald-700">Popular</span>}</div><p className="mt-1 text-sm text-slate-500">{tool.tag}</p></div><ArrowRight size={17} className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600" /></article>)}
        </div>
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-4 text-center text-sm text-slate-600"><Sparkles size={16} className="mr-2 inline text-violet-600" /> E muito mais: Aurora, Nova, Mercurio, Solar e outras plataformas para explorar.</div>
      </section>

      <section id="metodo" className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div><span className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">O método</span><h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">Não precisas de conhecer tudo. <span className="text-cyan-300">Só precisas de saber por onde começar.</span></h2><p className="mt-5 max-w-xl leading-8 text-slate-300">Em vez de perderes tempo a saltar de ferramenta em ferramenta, segue uma abordagem organizada para perceber o que usar, quando usar e como tirar mais proveito de cada opção.</p><a href={contact} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-100">Pedir informações <ArrowRight size={17} /></a></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[{icon:Compass,title:"1. Descobre",desc:"Conhece plataformas e identifica as que respondem às tuas necessidades."},{icon:CircleHelp,title:"2. Escolhe",desc:"Compara capacidades, limites, privacidade e disponibilidade."},{icon:Code2,title:"3. Experimenta",desc:"Pratica com instruções e exemplos que podes adaptar."},{icon:ShieldCheck,title:"4. Usa com critério",desc:"Confirma informações importantes e respeita os teus dados."}].map((item) => <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[.05] p-6"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300"><item.icon size={22} /></span><h3 className="mt-5 text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 lg:grid-cols-[1fr_auto]">
          <div className="p-8 sm:p-12 lg:p-14"><span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white"><Clock3 size={14} /> Começa ao teu ritmo</span><h2 className="mt-5 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">Transforma curiosidade em competência.</h2><p className="mt-4 max-w-xl leading-7 text-blue-100">Dá o próximo passo para aprender a usar a inteligência artificial de forma mais consciente, prática e criativa.</p><a href={contact} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50">Quero saber como funciona <ArrowRight size={18} /></a></div>
          <div className="hidden items-center justify-center pr-12 lg:flex"><div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/20 bg-white/10"><div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/15"><WandSparkles size={64} className="text-white" /></div></div></div>
        </div>
      </section>

      <section id="faq" className="border-t border-slate-100 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5"><div className="text-center"><span className="text-xs font-black uppercase tracking-[.22em] text-blue-600">Dúvidas comuns</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Perguntas frequentes</h2><p className="mt-3 text-slate-600">Tudo o que precisas de saber antes de dar o próximo passo.</p></div>
          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">{faqs.map((faq, i) => <div key={faq.q} className="py-5"><button className="flex w-full items-center justify-between gap-4 text-left font-bold text-slate-900" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>{faq.q}<ChevronDown size={19} className={`shrink-0 text-blue-600 transition ${openFaq === i ? "rotate-180" : ""}`} /></button>{openFaq === i && <p className="mt-3 pr-7 text-sm leading-7 text-slate-600">{faq.a}</p>}</div>)}</div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <a href="#inicio" className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white"><WandSparkles size={19} /></span><span className="font-black tracking-tight">IA <span className="text-blue-600">SEM LIMITES</span></span></a>
          <p className="text-sm text-slate-500">Dúvidas? <a className="font-semibold text-blue-600 hover:underline" href="mailto:adcreatives05@gmail.com">adcreatives05@gmail.com</a></p>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} IA Sem Limites. Todos os direitos reservados.</p>
        </div>
        <div className="border-t border-slate-100 px-5 py-4 text-center text-xs leading-5 text-slate-400">As marcas mencionadas pertencem aos respectivos proprietários. Este projecto é independente e não representa nem é afiliado oficialmente a essas empresas. Disponibilidade, preços e funcionalidades podem mudar.</div>
      </footer>
    </main>
  );
}
