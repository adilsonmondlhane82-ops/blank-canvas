import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown, ArrowRight, Check, ChevronDown, CircleHelp,
  MessageCircle, Menu, ShieldCheck, Sparkles, X, Zap,
  PlayCircle, Users, Infinity as InfinityIcon, Send, MonitorSmartphone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lovable Infinity Access | Acesso vitalício por 346 MT" },
      { name: "description", content: "Conhece o Lovable Infinity Access em Moçambique: pagamento único de 346 MT, tutoriais de instalação e acesso ao grupo de atualizações." },
      { property: "og:title", content: "Lovable Infinity Access" },
      { property: "og:description", content: "Começa com instruções claras, vídeos de instalação e acompanhamento da comunidade." },
    ],
  }),
  component: Index,
});

const checkout = "https://pay.lojou.app/wdjj4";
const whatsapp = "https://wa.me/258857365200?text=" + encodeURIComponent("Olá! Tenho interesse no Lovable Infinity Access por 346 MT e gostaria de esclarecer algumas dúvidas.");
const faqs = [
  { q: "O pagamento é mensal?", a: "Não. O preço apresentado é de 346 MT, pago uma única vez pelo acesso ao produto adquirido." },
  { q: "Como recebo as instruções?", a: "Após a confirmação do pagamento, consulta as instruções e os vídeos de instalação que receberás." },
  { q: "Como configuro a extensão?", a: "Segue os vídeos pela ordem indicada e aplica os passos compatíveis com a versão do produto que recebeste." },
  { q: "Como acompanho as atualizações?", a: "Após a compra, receberás acesso ao grupo disponibilizado para acompanhar as atualizações publicadas." },
  { q: "O produto é oficial da Lovable?", a: "Lovable Infinity Access é apresentado como um produto independente e não é afiliado oficialmente à Lovable." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [feedbackType, setFeedbackType] = useState("Experiência de utilização");
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackStatus, setFeedbackStatus] = useState("");
  const closeMenu = () => setMenuOpen(false);

  function sendFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!feedbackMessage.trim()) {
      setFeedbackStatus("Escreve uma mensagem antes de enviar.");
      return;
    }
    const subject = encodeURIComponent("Feedback — Lovable Infinity Access: " + feedbackType);
    const body = encodeURIComponent(
      "Tipo: " + feedbackType + "\nNome: " + (feedbackName || "Não indicado") +
      "\nEmail: " + (feedbackEmail || "Não indicado") + "\n\nMensagem:\n" + feedbackMessage
    );
    setFeedbackStatus("A abrir o teu aplicativo de email para concluíres o envio.");
    window.location.href = "mailto:adcreatives05@gmail.com?subject=" + subject + "&body=" + body;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080914] text-white">
      <div className="bg-gradient-to-r from-violet-700 via-fuchsia-700 to-indigo-700 px-4 py-2.5 text-center text-xs font-bold tracking-wide text-white sm:text-sm">
        <span className="inline-flex items-center gap-2"><Sparkles size={14} /> LOVABLE INFINITY ACCESS</span>
        <span className="hidden sm:inline"> · Pagamento único de 346 MT</span>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080914]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" onClick={closeMenu} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-900/40"><InfinityIcon size={23} /></span>
            <span className="leading-tight"><span className="block text-sm font-black tracking-tight sm:text-base">LOVABLE <span className="text-fuchsia-300">INFINITY</span></span><span className="text-[10px] font-semibold uppercase tracking-[.2em] text-slate-400">Access • Learn • Create</span></span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
            <a className="transition hover:text-fuchsia-300" href="#como-funciona">Como funciona</a>
            <a className="transition hover:text-fuchsia-300" href="#beneficios">Benefícios</a>
            <a className="transition hover:text-fuchsia-300" href="#faq">FAQ</a>
          </nav>
          <a href={checkout} className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-fuchsia-100 sm:inline-flex">Garantir acesso <ArrowRight size={16} /></a>
          <button aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="rounded-xl border border-white/15 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {menuOpen && <nav className="grid gap-1 border-t border-white/10 bg-[#0b0c1a] px-5 py-4 text-sm font-semibold md:hidden">
          <a className="rounded-xl px-3 py-3 hover:bg-white/5" href="#como-funciona" onClick={closeMenu}>Como funciona</a>
          <a className="rounded-xl px-3 py-3 hover:bg-white/5" href="#beneficios" onClick={closeMenu}>Benefícios</a>
          <a className="rounded-xl px-3 py-3 hover:bg-white/5" href="#faq" onClick={closeMenu}>Perguntas frequentes</a>
          <a className="mt-2 rounded-xl bg-fuchsia-600 px-3 py-3 text-center text-white" href={checkout} onClick={closeMenu}>Comprar por 346 MT</a>
        </nav>}
      </header>

      <section id="inicio" className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.22),_transparent_45%),radial-gradient(ellipse_at_bottom_right,_rgba(217,70,239,0.13),_transparent_40%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-2 text-xs font-bold text-fuchsia-200 sm:text-sm"><span className="h-2 w-2 rounded-full bg-emerald-400" /> PARA CRIADORES E PROGRAMADORES</div>
            <h1 className="max-w-2xl text-4xl font-black leading-[1.06] tracking-[-.045em] sm:text-5xl lg:text-6xl">Cansado de interromper os teus projetos por causa dos <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-200 bg-clip-text text-transparent">créditos?</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">Conhece o Lovable Infinity Access, uma extensão para o navegador acompanhada por instruções de instalação em vídeo e uma comunidade para acompanhar as atualizações do produto.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-2 text-sm text-slate-200"><Check size={15} className="text-emerald-300" /> Pagamento único</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-2 text-sm text-slate-200"><Check size={15} className="text-emerald-300" /> Acesso vitalício</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-2 text-sm text-slate-200"><Check size={15} className="text-emerald-300" /> Tutoriais em vídeo</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={checkout} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-fuchsia-950/50 transition hover:-translate-y-1 hover:brightness-110">QUERO O MEU ACESSO VITALÍCIO <ArrowRight size={18} /></a>
              <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[.04] px-7 py-4 text-base font-bold text-slate-100 transition hover:bg-white/10">Ver como funciona <ArrowDown size={17} /></a>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">Após a confirmação do pagamento, segue os vídeos e as instruções que receberás para configurar o produto.</p>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101122] p-5 shadow-2xl shadow-black/40 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5"><div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></div><span className="text-[10px] font-bold tracking-[.2em] text-slate-500">WORKFLOW ASSISTANT</span><Sparkles size={17} className="text-fuchsia-300"/></div>
              <div className="py-7 text-center"><div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] border border-fuchsia-300/20 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-fuchsia-200 shadow-lg shadow-fuchsia-950/30"><InfinityIcon size={54}/></div><p className="mt-5 text-xl font-black">O teu próximo projeto</p><p className="mt-2 text-sm text-slate-400">Mais clareza para configurar. Mais apoio para começar.</p></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[.04] p-4"><PlayCircle className="text-violet-300" size={23}/><p className="mt-3 font-bold">Vídeos passo a passo</p><p className="mt-1 text-xs leading-5 text-slate-400">Segue as instruções pela ordem indicada.</p></div>
                <div className="rounded-2xl border border-white/10 bg-white/[.04] p-4"><Users className="text-fuchsia-300" size={23}/><p className="mt-3 font-bold">Grupo de utilizadores</p><p className="mt-1 text-xs leading-5 text-slate-400">Acompanha as atualizações publicadas.</p></div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-300/15 bg-emerald-300/[.06] p-4"><ShieldCheck className="shrink-0 text-emerald-300" size={22}/><p className="text-xs leading-5 text-slate-300">Pagamento único de <strong className="text-white">346 MT</strong>. Sem mensalidade deste produto.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.025]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-7 sm:grid-cols-4 lg:px-8">
          {[[<Zap size={19}/>, "Configuração guiada"], [<MonitorSmartphone size={19}/>, "No navegador compatível"], [<PlayCircle size={19}/>, "Vídeos explicativos"], [<Users size={19}/>, "Grupo de atualizações"]].map(([icon, label]) => <div key={String(label)} className="flex items-center gap-3 text-sm font-semibold text-slate-300"><span className="text-fuchsia-300">{icon}</span>{label}</div>)}
        </div>
      </section>

      <section id="beneficios" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center"><span className="text-xs font-black uppercase tracking-[.22em] text-fuchsia-300">Feito para simplificar</span><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Tudo o que precisas para <span className="text-fuchsia-300">começar com orientação.</span></h2><p className="mt-4 leading-7 text-slate-400">Uma experiência direta, com instruções organizadas e um lugar para acompanhares as novidades do produto.</p></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[{icon:InfinityIcon,title:"Acesso vitalício",desc:"Um único pagamento pelo acesso ao produto adquirido."},{icon:PlayCircle,title:"Tutoriais em vídeo",desc:"Recebe vídeos com os passos para instalar e configurar a extensão."},{icon:Users,title:"Grupo de atualizações",desc:"Acede ao grupo disponibilizado após a compra."},{icon:MonitorSmartphone,title:"Orientação no navegador",desc:"Segue as instruções para a versão e o navegador compatíveis."},{icon:MessageCircle,title:"Contacto de suporte",desc:"Entra em contacto pelo WhatsApp se precisares de esclarecer dúvidas."},{icon:ShieldCheck,title:"Informação transparente",desc:"Consulta os requisitos e as condições de funcionamento antes de começar."}].map((item) => <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[.035] p-6 transition hover:-translate-y-1 hover:border-fuchsia-300/30 hover:bg-white/[.055]"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-fuchsia-200"><item.icon size={23}/></span><h3 className="mt-5 text-lg font-extrabold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p></article>)}
        </div>
      </section>

      <section id="como-funciona" className="bg-[#101122] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center"><span className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">Começa em poucos passos</span><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Como funciona o acesso?</h2><p className="mt-4 leading-7 text-slate-400">Segue esta sequência para não perderes nenhuma etapa importante.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[{n:"01",title:"Faz a compra",desc:"Clica no botão e conclui o pagamento de 346 MT no checkout."},{n:"02",title:"Recebe os materiais",desc:"Após a confirmação, consulta as instruções e os vídeos que receberás."},{n:"03",title:"Segue os vídeos",desc:"Aplica a extensão no navegador compatível, seguindo cada passo indicado."},{n:"04",title:"Entra no grupo",desc:"Acede ao grupo disponibilizado para acompanhares as atualizações publicadas."}].map((step) => <article key={step.n} className="relative rounded-2xl border border-white/10 bg-white/[.035] p-6"><span className="text-sm font-black tracking-widest text-fuchsia-300">{step.n}</span><h3 className="mt-4 text-lg font-extrabold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{step.desc}</p></article>)}
          </div>
          <div className="mx-auto mt-8 flex max-w-3xl gap-3 rounded-2xl border border-amber-300/20 bg-amber-200/[.05] p-4 text-sm leading-6 text-amber-100/90"><CircleHelp className="mt-0.5 shrink-0 text-amber-300" size={20}/><p><strong>Importante:</strong> segue os vídeos pela ordem indicada. depois da compra, consulta os vídeos de instalação e segue os passos indicados para configurar o produto.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-fuchsia-300/20 bg-gradient-to-br from-violet-950 via-[#17122b] to-[#101122] p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-3xl"/>
          <span className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-4 py-2 text-xs font-bold text-fuchsia-200"><Sparkles size={14}/> PAGAMENTO ÚNICO</span>
          <h2 className="relative mt-5 text-3xl font-black tracking-tight sm:text-4xl">Dá o próximo passo no teu fluxo de trabalho.</h2>
          <p className="relative mx-auto mt-4 max-w-xl leading-7 text-slate-300">Recebe o material de instalação, segue os tutoriais e acompanha as atualizações do produto através do grupo.</p>
          <div className="relative mt-7"><span className="text-5xl font-black tracking-tight sm:text-6xl">346 <span className="text-2xl text-fuchsia-200">MT</span></span><p className="mt-2 text-sm text-slate-400">Pagamento único · Acesso vitalício ao produto adquirido</p></div>
          <a href={checkout} className="relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-4 font-extrabold text-white shadow-xl shadow-fuchsia-950/40 transition hover:-translate-y-1 hover:brightness-110 sm:w-auto">COMPRAR AGORA <ArrowRight size={18}/></a>
          <p className="relative mt-4 text-xs text-slate-500">Após o pagamento, segue as instruções de acesso recebidas.</p>
        </div>
      </section>


      <section id="feedbacks-clientes" className="border-y border-white/10 bg-white/[.025] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[.22em] text-fuchsia-300">Comunidade</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Mais de 743 utilizadores activos</h2>
            <p className="mt-4 leading-7 text-slate-400">Conhece as opiniões partilhadas por utilizadores sobre a experiência com o produto.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-[#101122] p-6"><div className="text-amber-300" aria-label="5 estrelas">★★★★★</div><p className="mt-4 leading-7 text-slate-300">“A extensão ajudou-me a continuar os meus trabalhos, porque os créditos disponíveis limitavam os meus projectos.”</p><p className="mt-5 font-extrabold">Rogério Dumbo</p><p className="mt-1 text-xs text-slate-500">Feedback partilhado pelo cliente</p></article>
            <article className="rounded-2xl border border-white/10 bg-[#101122] p-6"><div className="text-amber-300" aria-label="5 estrelas">★★★★★</div><p className="mt-4 leading-7 text-slate-300">“Antes não sabia bem como funcionava uma extensão, mas fiquei satisfeito por ter experimentado e conseguir avançar com os meus projectos.”</p><p className="mt-5 font-extrabold">Leandro Alexandre</p><p className="mt-1 text-xs text-slate-500">Feedback partilhado pelo cliente</p></article>
            <article className="rounded-2xl border border-white/10 bg-[#101122] p-6"><div className="text-amber-300" aria-label="5 estrelas">★★★★★</div><p className="mt-4 leading-7 text-slate-300">“É prático e o apoio que recebi foi excelente.”</p><p className="mt-5 font-extrabold">Elisa Cumbe</p><p className="mt-1 text-xs text-slate-500">Feedback partilhado pela cliente</p></article>
          </div>
          <p className="mt-6 text-center text-xs leading-5 text-slate-500">Os comentários devem corresponder a experiências reais e ser publicados com autorização dos respectivos clientes.</p>
        </div>
      </section>

      <section id="faq" className="border-t border-white/10 bg-white/[.025] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5"><div className="text-center"><span className="text-xs font-black uppercase tracking-[.22em] text-fuchsia-300">Dúvidas comuns</span><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Perguntas frequentes</h2></div>
          <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#101122] px-5 sm:px-7">{faqs.map((faq, i) => <div key={faq.q} className="py-5"><button className="flex w-full items-center justify-between gap-4 text-left font-bold text-slate-100" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>{faq.q}<ChevronDown size={19} className={`shrink-0 text-fuchsia-300 transition ${openFaq === i ? "rotate-180" : ""}`}/></button>{openFaq === i && <p className="mt-3 pr-7 text-sm leading-7 text-slate-400">{faq.a}</p>}</div>)}</div>
        </div>
      </section>

      <section id="feedback" className="mx-auto max-w-4xl px-5 py-20 sm:py-24">
        <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-start">
          <div><span className="text-xs font-black uppercase tracking-[.22em] text-fuchsia-300">Estamos a ouvir</span><h2 className="mt-4 text-3xl font-black tracking-tight">A tua opinião importa.</h2><p className="mt-4 leading-7 text-slate-400">Envia uma sugestão, uma dúvida ou conta-nos a tua experiência. O formulário prepara uma mensagem para o teu aplicativo de email.</p><a href="mailto:adcreatives05@gmail.com" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-fuchsia-300 hover:text-fuchsia-200"><Send size={16}/> adcreatives05@gmail.com</a></div>
          <form onSubmit={sendFeedback} className="rounded-2xl border border-white/10 bg-white/[.035] p-5 sm:p-7">
            <label className="mb-2 block text-sm font-semibold text-slate-200" htmlFor="feedback-type">Tipo de feedback</label>
            <select id="feedback-type" value={feedbackType} onChange={(e) => setFeedbackType(e.target.value)} className="mb-4 w-full rounded-xl border border-white/10 bg-[#101122] px-4 py-3 text-sm text-white outline-none focus:border-fuchsia-400"><option>Experiência de utilização</option><option>Sugestão</option><option>Dúvida</option><option>Problema</option></select>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="feedback-name" className="mb-2 block text-sm font-semibold text-slate-200">Nome (opcional)</label><input id="feedback-name" value={feedbackName} onChange={(e) => setFeedbackName(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#101122] px-4 py-3 text-sm outline-none focus:border-fuchsia-400" placeholder="O teu nome"/></div>
              <div><label htmlFor="feedback-email" className="mb-2 block text-sm font-semibold text-slate-200">Email (opcional)</label><input id="feedback-email" type="email" value={feedbackEmail} onChange={(e) => setFeedbackEmail(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#101122] px-4 py-3 text-sm outline-none focus:border-fuchsia-400" placeholder="nome@email.com"/></div>
            </div>
            <label htmlFor="feedback-message" className="mb-2 mt-4 block text-sm font-semibold text-slate-200">Mensagem</label><textarea id="feedback-message" required rows={4} value={feedbackMessage} onChange={(e) => setFeedbackMessage(e.target.value)} className="w-full resize-y rounded-xl border border-white/10 bg-[#101122] px-4 py-3 text-sm outline-none focus:border-fuchsia-400" placeholder="Escreve aqui o teu feedback..."/>
            <button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-extrabold text-slate-950 transition hover:bg-fuchsia-100">Enviar feedback <ArrowRight size={17}/></button>
            {feedbackStatus && <p role="status" className="mt-3 text-sm text-slate-300">{feedbackStatus}</p>}
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#05060d]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <a href="#inicio" className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500"><InfinityIcon size={20}/></span><span className="font-black tracking-tight">LOVABLE <span className="text-fuchsia-300">INFINITY ACCESS</span></span></a>
          <div className="flex flex-wrap gap-5 text-sm text-slate-400"><a className="hover:text-white" href="mailto:adcreatives05@gmail.com">Email</a><a className="hover:text-white" href={whatsapp} target="_blank" rel="noreferrer">Suporte WhatsApp</a><a className="hover:text-white" href="#faq">Perguntas frequentes</a></div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Lovable Infinity Access.</p>
        </div>
        <div className="border-t border-white/5 px-5 py-4 text-center text-xs leading-5 text-slate-500">Lovable Infinity Access é um produto independente e não é afiliado, patrocinado nem aprovado oficialmente pela Lovable. O acesso vitalício refere-se ao produto adquirido; funcionalidades de serviços de terceiros podem mudar.</div>
      </footer>

      <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com o suporte pelo WhatsApp" className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500 px-4 py-3.5 text-sm font-extrabold text-white shadow-2xl shadow-emerald-950/50 transition hover:-translate-y-1 hover:bg-emerald-400 sm:bottom-7 sm:right-7"><MessageCircle size={20}/> <span className="hidden sm:inline">Falar com o suporte</span><span className="sm:hidden">Suporte</span></a>
    </main>
  );
}
