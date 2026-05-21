import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  DollarSign, 
  Target, 
  ChevronRight,
  Menu,
  X,
  Star,
  Zap,
  Globe,
  Rocket,
  Layout,
  BarChart3
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5528999248195?text=Olá,%20vim%20pelo%20site%20da%20Únicus%20Agência%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20parcerias.";

// --- Components ---

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-2xl font-display font-extrabold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-neon-blue rounded-lg flex items-center justify-center glow-blue">
            <Zap className="text-black w-5 h-5 fill-current" />
          </div>
          ÚNICUS<span className="text-neon-blue">.</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase">
          <a href="#estrategy" className="hover:text-neon-blue transition-colors">Estratégia</a>
          <a href="#solutions" className="hover:text-neon-blue transition-colors">Soluções</a>
          <a href="#results" className="hover:text-neon-blue transition-colors">Resultados</a>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-neon-blue text-black font-black hover:scale-105 transition-all glow-blue-hover inline-block"
          >
            Crescer Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-neon-blue" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="md:hidden absolute top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-2xl p-10 flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}><X size={32} /></button>
            <a href="#estrategy" onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold uppercase">Estratégia</a>
            <a href="#solutions" onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold uppercase">Soluções</a>
            <a href="#results" onClick={() => setIsOpen(false)} className="text-3xl font-display font-bold uppercase">Resultados</a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 bg-neon-blue text-black font-bold uppercase text-sm text-center tracking-widest glow-blue"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-24 overflow-hidden mb-12 sm:mb-0">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-neon-blue/10 rounded-full blur-[120px] sm:blur-[180px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-neon-blue/5 rounded-full blur-[100px] sm:blur-[150px] translate-y-1/2 -translate-x-1/2" />
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Future"
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[#050505]/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="mb-6 sm:mb-8 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 border border-neon-blue/30 rounded-full text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black bg-neon-blue/5 text-neon-blue shadow-[0_0_20px_rgba(0,229,255,0.1)]">
            <Rocket size={12} className="animate-pulse" />
            Marketing de Elite para Influenciadores
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-[6.5rem] font-display font-extrabold tracking-normal leading-[1.2] sm:leading-[0.95] mb-8 sm:mb-10 text-gradient uppercase"
        >
          A INFLUÊNCIA <br /> 
          QUE <span className="text-neon-blue italic">FATURA</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg lg:text-2xl text-white/60 max-w-3xl mx-auto mb-10 sm:mb-16 leading-relaxed font-light"
        >
          Transformamos sua audiência em uma máquina de monetização através de <span className="text-white">gestão estratégica</span>, inovação e exclusividade linear.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group relative px-8 sm:px-12 py-5 sm:py-6 bg-white text-black font-black uppercase text-[10px] sm:text-xs text-center tracking-[0.25em] sm:tracking-[0.3em] overflow-hidden transition-all duration-500 hover:bg-neon-blue hover:text-black glow-blue-hover ring-4 ring-white/5 active:scale-95"
          >
            Escalar meu Império
          </a>
          <button className="w-full sm:w-auto px-8 py-5 border-b-2 border-white/5 hover:border-neon-blue font-bold uppercase text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] transition-all text-white/40 hover:text-white">
            Explorar Ecossistema
          </button>
        </motion.div>
      </div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
      />
    </section>
  );
};

const Stats = () => {
  const metrics = [
    { label: "Influenciadores Gerenciados", value: "+120" },
    { label: "De Visualizações Mensais", value: "+8M" },
    { label: "Campanhas Realizadas", value: "+350" },
    { label: "Gerados em Monetização", value: "+R$500MIL" },
  ];

  return (
    <section className="py-24 sm:py-32 border-y border-white/5 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-12 lg:gap-x-20">
          {metrics.map((m, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center group"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-5 text-neon-blue drop-shadow-[0_0_12px_rgba(0,229,255,0.3)] tracking-tight whitespace-nowrap transition-colors duration-500 group-hover:text-white">
                {m.value}
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-white/30 leading-relaxed max-w-[220px] transition-colors duration-500 group-hover:text-white/60">
                {m.label}
              </div>
              {/* Subtle underline accent */}
              <div className="w-8 h-[1px] bg-neon-blue/20 mt-6 group-hover:w-16 group-hover:bg-neon-blue transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section id="estrategy" className="py-20 sm:py-32 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="mb-16 sm:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="max-w-xl">
          <span className="uppercase tracking-[0.4em] font-black text-[10px] text-neon-blue mb-4 sm:mb-6 block border-l-2 border-neon-blue pl-4">Posicionamento de Elite</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-tight">Engenharia de <br /><span className="text-white/20">Crescimento Digital.</span></h2>
        </div>
        <div className="p-8 md:p-10 glass rounded-3xl max-w-xs text-[10px] sm:text-xs text-white/40 leading-relaxed uppercase tracking-widest hidden md:block border-l-4 border-neon-blue/30">
          Transformamos sua influência em um ativo financeiro escalável com estratégias de alto padrão.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Featured Card: INFLUÊNCIA QUE FATURA */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          className="md:col-span-2 lg:row-span-2 glass rounded-[2.5rem] p-6 sm:p-10 lg:p-12 flex flex-col justify-end relative overflow-hidden group border-white/5 glow-blue-hover transition-all duration-500 min-h-[400px] lg:min-h-[660px]"
        >
          <div className="absolute inset-0 -z-20 overflow-hidden">
             <div 
               className="absolute inset-0 opacity-[0.4] blur-[1px] transition-all duration-1000 group-hover:scale-105 group-hover:opacity-[0.6]"
               style={{ 
                 backgroundImage: `url('https://drive.google.com/uc?id=1bT1FH3O18l1OFqJM_8AMvQoJbDSNnnWR')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
             <div className="absolute -top-24 -right-24 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] group-hover:bg-neon-blue/20 transition-colors duration-700" />
          </div>
          
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-neon-blue/10 border border-neon-blue/20 rounded-2xl mb-6 sm:mb-8 flex items-center justify-center glow-blue-hover group-hover:bg-neon-blue group-hover:text-black transition-all duration-500">
            <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black mb-4 sm:mb-6 uppercase tracking-tighter leading-[0.95]">
            INFLUÊNCIA <br /> <span className="text-neon-blue italic">QUE FATURA.</span>
          </h3>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-sm font-light">
            Transformamos audiência em monetização através de estratégia, posicionamento e campanhas inteligentes.
          </p>
        </motion.div>

        {/* Card 2: SUPORTE REAL */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="md:col-span-2 glass rounded-[2.5rem] p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 group relative overflow-hidden border-white/5 transition-all duration-500 glow-blue-hover lg:h-[320px]"
        >
          <div className="absolute inset-0 -z-10">
             <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-700" alt="Support" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </div>

          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-neon-blue/20 group-hover:border-neon-blue/30 transition-all duration-500 shadow-2xl">
            <Users className="text-neon-blue w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-center sm:text-left relative z-10">
            <h3 className="text-xl sm:text-3xl font-display font-black mb-3 uppercase tracking-tight text-white group-hover:text-neon-blue transition-colors">SUPORTE REAL</h3>
            <p className="text-xs sm:text-sm text-white/40 leading-relaxed font-bold uppercase tracking-wider max-w-xs transition-colors group-hover:text-white/60">
              Equipe ativa acompanhando campanhas, resultados e otimizações diariamente.
            </p>
          </div>
        </motion.div>

        {/* Card 3: MATERIAL PRONTO */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-[2.5rem] p-6 sm:p-10 flex flex-col items-center justify-center text-center gap-6 group relative overflow-hidden border-white/5 transition-all duration-500 glow-blue-hover min-h-[320px] lg:h-[320px]"
        >

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-[60px] group-hover:bg-neon-blue/20 transition-colors" />

          <Layout className="text-neon-blue w-10 h-10 group-hover:rotate-6 transition-transform" />
          <h3 className="text-lg sm:text-2xl font-display font-black uppercase text-white group-hover:text-neon-blue transition-colors leading-tight">MATERIAL <br /> PRONTO</h3>
          <p className="text-[11px] text-white/40 leading-relaxed font-bold uppercase tracking-wider transition-colors group-hover:text-white/60 max-w-[220px] mx-auto">
            Stories, roteiros e estratégias pensadas para converter mais e facilitar sua divulgação.
          </p>
        </motion.div>

        {/* Card 4: ESCALA DE RESULTADOS */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-[2.5rem] p-6 sm:p-10 flex flex-col items-center justify-center text-center gap-6 group relative overflow-hidden border-white/5 transition-all duration-500 glow-blue-hover min-h-[320px] lg:h-[320px]"
        >
          <div className="absolute inset-0 -z-20">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-[0.05] group-hover:opacity-[0.1] transition-all duration-700" alt="Results" />
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 rounded-full blur-3xl group-hover:bg-neon-blue/15 transition-colors" />
          
          <TrendingUp className="text-neon-blue w-10 h-10 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
          <h3 className="text-lg sm:text-2xl font-display font-black uppercase text-white group-hover:text-neon-blue transition-colors leading-tight">ESCALA DE <br /> RESULTADOS</h3>
          <p className="text-[11px] text-white/40 leading-relaxed font-bold uppercase tracking-wider transition-colors group-hover:text-white/60 max-w-[220px] mx-auto">
            Estratégias focadas em retenção, crescimento e monetização contínua.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Intermediação de Marcas",
      desc: "Negociações de alto nível com foco em contratos de longo prazo e valor agregado.",
      icon: <Target className="w-8 h-8" />,
      tag: "COMMERCIAL"
    },
    {
      title: "Storytelling de Conversão",
      desc: "Aperfeiçoamento da narrativa diária para transformar visualizações em depósitos via PIX.",
      icon: <MessageSquare className="w-8 h-8" />,
      tag: "CREATIVE"
    },
    {
      title: "Desenvolvimento de Produtos",
      desc: "Do conceito ao lançamento: criamos o seu próprio império de infoprodutos ou SaaS.",
      icon: <Users className="w-8 h-8" />,
      tag: "BUILDER"
    }
  ];

  return (
    <section id="solutions" className="py-20 sm:py-32 md:py-40 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 sm:mb-8 uppercase tracking-tighter leading-tight">Nosso <span className="text-neon-blue">Ecossistema</span>.</h2>
          <div className="w-16 sm:w-24 h-1 bg-neon-blue mx-auto glow-blue" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20 }}
              className="p-8 sm:p-12 glass rounded-[2.5rem] sm:rounded-[3rem] group cursor-pointer border border-white/5 hover:border-neon-blue/20 transition-all flex flex-col gap-6 sm:gap-8"
            >
              <div className="text-[9px] sm:text-[10px] font-black tracking-[0.4em] sm:tracking-[0.5em] text-neon-blue opacity-50 group-hover:opacity-100 transition-opacity">
                {s.tag}
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white/[0.03] flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-all duration-500 shadow-inner">
                {s.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold">{s.title}</h3>
              <p className="text-sm sm:text-base text-white/30 leading-relaxed group-hover:text-white/60 transition-colors">{s.desc}</p>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 md:mt-auto flex items-center gap-2 text-neon-blue text-[10px] font-black uppercase tracking-widest opacity-60 md:opacity-0 group-hover:opacity-100 transition-all md:translate-x-4 group-hover:translate-x-0"
              >
                Saber Mais <ChevronRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Vantages = () => {
  const vantages = [
    {
      title: "Suporte personalizado",
      desc: "Um estrategista dedicado para entender seus objetivos únicos.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Estratégia de monetização",
      desc: "Caminhos claros para transformar sua influência em receita real.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Material pronto para divulgação",
      desc: "Formatos validados e designs de alta conversão.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Equipe de acompanhamento",
      desc: "Profissionais prontos para gerir todos os processos comerciais.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Suporte 24 horas",
      desc: "Atendimento imediato para crises ou oportunidades urgentes.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Storytelling estratégico",
      desc: "Narrativas que conectam e vendem sem parecer propaganda.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Crescimento de audiência",
      desc: "Táticas orgânicas e pagas para expandir sua base qualificada.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Gestão profissional de campanhas",
      desc: "Relatórios de performance e gestão completa com as marcas.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <section id="advantages" className="py-20 sm:py-32 md:py-40 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.5em] font-black text-[10px] text-neon-blue mb-8 block"
          >
            Vantagens Exclusivas
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-5xl md:text-6xl font-display font-black leading-[1.1] mb-10 uppercase tracking-tighter"
          >
            Mais do que publicidade. <br /> <span className="text-white/20">Criamos influência estratégica.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-white/40 leading-relaxed font-light max-w-3xl mx-auto"
          >
            A Únicus entrega suporte, posicionamento e estrutura para transformar audiência em monetização.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vantages.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="p-10 glass rounded-[2.5rem] border-white/5 transition-all duration-500 group glow-blue-hover flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-8 group-hover:bg-neon-blue group-hover:text-black transition-all duration-500 shadow-inner">
                {v.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4 tracking-tight group-hover:text-neon-blue transition-colors uppercase">{v.title}</h3>
              <p className="text-[10px] text-white/30 leading-relaxed font-bold uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors mt-auto">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carla Mendes",
      text: "A Únicus me ajudou a transformar meus stories em uma fonte de renda real. Hoje consigo monetizar minha audiência de forma muito mais estratégica.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Lucas Almeida",
      text: "O suporte e as estratégias fizeram total diferença nos meus resultados. A comunicação deles é outro nível.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Ana Beatriz",
      text: "Antes eu tinha engajamento e não sabia monetizar. Com a Únicus comecei a enxergar meu perfil como um negócio.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-32 md:py-40 bg-black relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="uppercase tracking-[0.5em] font-black text-[10px] text-neon-blue mb-4 block"
          >
            Prova Social Premium
          </motion.span>
          <h2 className="text-xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tighter leading-tight italic">
            Influenciadores falam <br className="hidden sm:block" /> <span className="text-white/20">da</span> Únicus<span className="text-neon-blue">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 sm:p-10 glass rounded-[2.5rem] border-white/5 hover:border-neon-blue/20 transition-all duration-500 flex flex-col justify-between min-h-[350px] glow-blue-hover"
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} className="text-neon-blue fill-neon-blue drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-white/60 leading-relaxed font-light mb-10 group-hover:text-white transition-colors">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-neon-blue/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img src={t.img} className="relative w-12 h-12 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-neon-blue/30 transition-all shadow-xl" alt={t.name} />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base tracking-tight">{t.name}</h4>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-black">Agenciada Únicus</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 sm:py-32 md:py-40 px-6">
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative group"
      >
        <div className="absolute inset-0 bg-neon-blue rounded-[2.5rem] sm:rounded-[4rem] group-hover:scale-[1.02] transition-transform duration-700 blur-[40px] sm:blur-[60px] opacity-10" />
        <div className="relative glass rounded-[2.5rem] sm:rounded-[4rem] p-10 sm:p-20 md:p-32 text-center border-white/5 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-30" />
          
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-display font-black tracking-tighter mb-8 sm:mb-12 uppercase leading-[1.1] sm:leading-none">
            JUNTE-SE <span className="text-white/20">AO</span> <br /> TOPO <span className="text-neon-blue italic">DAS REDES.</span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-white/40 mb-10 sm:mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Vagas ultra-limitadas para agenciamento premium em 2026. <br className="hidden sm:block" />
            Analisamos seu potencial antes da primeira conversa.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 sm:px-16 py-6 sm:py-8 bg-neon-blue text-black font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs text-center hover:scale-105 active:scale-95 transition-all glow-blue group-hover:glow-blue"
            >
              Candidatar Perfil
            </a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 sm:px-16 py-6 sm:py-8 border border-white/10 text-white font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs text-center hover:bg-white hover:text-black transition-all"
            >
              Falar Comercial
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="text-3xl font-display font-black tracking-tighter mb-8 flex items-center gap-2">
               ÚNICUS<span className="text-neon-blue">.</span>
            </div>
            <p className="text-white/20 max-w-xs leading-relaxed uppercase tracking-widest text-[10px] font-bold">
              Únicus Agência Digital. Liderando a próxima geração de influenciadores globais através de tecnologia e inteligência comercial.
            </p>
          </div>
          
          <div>
            <h4 className="text-neon-blue font-black uppercase tracking-[0.3em] text-[10px] mb-8">Navegação</h4>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-[0.1em] text-white/40">
              <a href="#" className="hover:text-white transition-colors">Estratégia</a>
              <a href="#" className="hover:text-white transition-colors">Cases</a>
              <a href="#" className="hover:text-white transition-colors">Ecossistema</a>
              <a href="#" className="hover:text-white transition-colors">Mentoria</a>
            </div>
          </div>

          <div>
            <h4 className="text-neon-blue font-black uppercase tracking-[0.3em] text-[10px] mb-8">Social</h4>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-[0.1em] text-white/40">
              <a href="https://instagram.com/unicus_agencia" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Instagram size={14} /> @unicus_agencia</a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Globe size={14} /> LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">X (Twitter)</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[10px] font-black tracking-[0.5em] text-white/10 uppercase">
          <div>&copy; 2026 ÚNICUS AGÊNCIA. TODOS OS DIREITOS RESERVADOS.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACIDADE</a>
            <a href="#" className="hover:text-white transition-colors">TERMOS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-neon-blue selection:text-black">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <BentoGrid />
        <Services />
        <Vantages />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      
      {/* Dynamic Background Accents */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-full h-[1px] bg-neon-blue/[0.03] animate-pulse" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-neon-blue/[0.03]" />
      </div>
    </div>
  );
}

