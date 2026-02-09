"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Box,
  Check,
  ChevronRight,
  CircuitBoard,
  Cpu,
  Eye,
  ImageIcon,
  Layers,
  Paintbrush,
  Rocket,
  Route,
  Scaling,
  Settings2,
  Shield,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

/* ─── Reusable scroll-triggered wrapper ─────────────── */
function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section label ─────────────────────────────────── */
function SectionTag({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${center ? "justify-center" : ""}`}>
      <div className="h-px w-8 bg-lime" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-lime">
        {children}
      </span>
    </div>
  );
}

/* ─── Heading helper ────────────────────────────────── */
function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-sans text-3xl sm:text-4xl lg:text-5xl font-800 tracking-tight leading-[1.1] ${className}`}
    >
      {children}
    </h2>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-neutral-50 overflow-x-hidden">
      {/* ─── NAV ──────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-neutral-800/60 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt="Headless"
              width={64}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-sans text-lg font-800 tracking-tight">
              headless
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-body text-neutral-400">
            <a href="#agents" className="hover:text-neutral-50 transition-colors">Agentes</a>
            <a href="#services" className="hover:text-neutral-50 transition-colors">Serviços</a>
            <a href="#process" className="hover:text-neutral-50 transition-colors">Processo</a>
            <a href="#cases" className="hover:text-neutral-50 transition-colors">Casos de Uso</a>
            <a href="#pricing" className="hover:text-neutral-50 transition-colors">Preços</a>
          </div>

          <Button
            asChild
            size="sm"
            className="bg-lime text-surface font-sans font-700 hover:bg-lime/90 rounded-lg"
          >
            <a href="https://calendly.com/joao-filipe-santos1720/30min" target="_blank" rel="noopener noreferrer">
              Marcar Chamada
              <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
        </div>
      </nav>

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* background grid + radial glow */}
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(202,255,4,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-40 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge
              variant="outline"
              className="mb-8 border-neutral-700 bg-neutral-900/50 text-neutral-300 font-mono text-xs tracking-wider px-3 py-1.5 rounded-lg"
            >
              <span className="size-1.5 rounded-full bg-lime animate-pulse mr-2" />
              A implementar agentes com Claude, OpenAI e Gemini
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-800 tracking-tight leading-[0.95]"
          >
            Agentes de IA que
            <br />
            <span className="text-lime">fazem o trabalho.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-xl text-lg sm:text-xl font-body text-neutral-400 leading-relaxed"
          >
            Desenhamos, construímos e implementamos agentes de IA de nível
            profissional que automatizam tarefas criativas e operacionais de alto
            valor — integrados diretamente na tua stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-lime text-surface font-sans font-700 text-base h-12 px-8 rounded-xl hover:bg-lime/90 glow-lime"
            >
              <a href="https://calendly.com/joao-filipe-santos1720/30min" target="_blank" rel="noopener noreferrer">
                Marcar Chamada
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 rounded-xl border-neutral-700 text-neutral-300 font-body hover:bg-neutral-800/50"
            >
              <a href="#agents">
                Ver Agentes
                <ChevronRight className="size-4" />
              </a>
            </Button>
          </motion.div>

          {/* trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono uppercase tracking-[0.15em] text-neutral-600"
          >
            <span className="flex items-center gap-2">
              <Check className="size-3 text-lime" /> Em produção
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-3 text-lime" /> Agnóstico de modelos
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-3 text-lime" /> Outputs seguros para marca
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-3 text-lime" /> Monitorização 24/7
            </span>
          </motion.div>
        </div>
      </section>

      {/* ─── MODEL MARQUEE ────────────────────────────── */}
      <div className="border-y border-neutral-800/60 py-5 overflow-hidden fade-edges-x">
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "Nano Banana Pro (Gemini)",
            "Flux 2",
            "gpt-image-1.5",
            "Seedream",
            "Nano Banana Pro (Gemini)",
            "Flux 2",
            "gpt-image-1.5",
            "Seedream",
            "Nano Banana Pro (Gemini)",
            "Flux 2",
            "gpt-image-1.5",
            "Seedream",
          ].map((model, i) => (
            <span
              key={i}
              className="mx-8 font-mono text-sm text-neutral-500 flex items-center gap-3"
            >
              <Cpu className="size-3.5 text-neutral-600" />
              {model}
            </span>
          ))}
        </div>
      </div>

      {/* ─── AGENT EXAMPLES ───────────────────────────── */}
      <section id="agents" className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTag>O Que Os Nossos Agentes Fazem</SectionTag>
            <SectionHeading>
              Trabalhos reais. Resultados reais.
              <br />
              <span className="text-neutral-500">Em produção hoje.</span>
            </SectionHeading>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ImageIcon,
                title: "Imagens de Produto em Escala",
                desc: "Gera milhares de fotografias de produto on-brand a partir de um feed de SKUs. Ligado ao Shopify, Magento ou ao teu CMS.",
                tag: "E-Commerce",
                metric: "12.000+ imagens/mês",
                model: "Flux 2",
              },
              {
                icon: Paintbrush,
                title: "Criação de Criativos para Ads",
                desc: "Produz variantes de anúncios em múltiplos formatos e tamanhos automaticamente. Testa conceitos visuais A/B sem esperar pela equipa de design.",
                tag: "Marketing",
                metric: "40x mais rápido",
                model: "gpt-image-1.5",
              },
              {
                icon: Layers,
                title: "Pipeline de Edição de Imagem",
                desc: "Remoção de fundo, relighting, limpeza, redimensionamento, reformatação — tudo automatizado com controlo de qualidade em cada passo.",
                tag: "Operações",
                metric: "98,7% de precisão",
                model: "Seedream",
              },
              {
                icon: Shield,
                title: "Produção de Assets Brand-Safe",
                desc: "Style guides, restrições de cor, regras de compliance — integrados no agente. Cada output corresponde à tua identidade de marca.",
                tag: "Marca",
                metric: "Zero violações",
                model: "Routing personalizado",
              },
              {
                icon: Route,
                title: "Routing Inteligente de Modelos",
                desc: "Os agentes escolhem o melhor modelo para cada tarefa com base em qualidade, velocidade e custo. Flux para qualidade, Nano Banana para velocidade.",
                tag: "Infraestrutura",
                metric: "3 modelos, 1 API",
                model: "Multi-modelo",
              },
              {
                icon: Eye,
                title: "Monitorização & QA de Outputs",
                desc: "Cada asset gerado é avaliado, registado e sinalizado. Outputs com falhas são apanhados antes de chegarem a produção.",
                tag: "Fiabilidade",
                metric: "Scoring em tempo real",
                model: "Eval personalizado",
              },
            ].map((agent, i) => (
              <Reveal key={agent.title} delay={i * 0.08}>
                <Card className="group bg-surface-raised border-neutral-800 hover:border-neutral-700 transition-colors duration-300 rounded-2xl h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-xl bg-neutral-800 flex items-center justify-center group-hover:bg-lime/10 transition-colors">
                        <agent.icon className="size-5 text-neutral-400 group-hover:text-lime transition-colors" />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-[10px] border-neutral-700 text-neutral-500 font-mono rounded-md"
                      >
                        {agent.tag}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-sans font-700 mt-4">
                      {agent.title}
                    </CardTitle>
                    <CardDescription className="font-body text-neutral-500 leading-relaxed">
                      {agent.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Separator className="bg-neutral-800 mb-4" />
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-lime">{agent.metric}</span>
                      <span className="text-neutral-600">{agent.model}</span>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────── */}
      <section id="services" className="py-32 lg:py-40 border-t border-neutral-800/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTag>Serviços</SectionTag>
            <SectionHeading>
              A tua equipa ganha alavancagem,
              <br />
              <span className="text-neutral-500">não mais uma ferramenta.</span>
            </SectionHeading>
            <p className="mt-6 max-w-2xl text-lg font-body text-neutral-500 leading-relaxed">
              Não vendemos uma plataforma SaaS. Entregamos agentes de IA
              personalizados que correm dentro dos teus sistemas reais — pipelines
              de e-commerce, CMS, stacks de marketing, ferramentas internas.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-px bg-neutral-800 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: CircuitBoard,
                step: "01",
                title: "Design",
                desc: "Mapeamos os teus workflows, identificamos alvos de automação e arquitetamos pipelines de agentes que encaixam na tua stack.",
              },
              {
                icon: Terminal,
                step: "02",
                title: "Construção",
                desc: "Agentes personalizados construídos com os melhores modelos de imagem, com routing inteligente, fallbacks e guardrails de marca.",
              },
              {
                icon: Rocket,
                step: "03",
                title: "Deploy",
                desc: "Implementação no teu ambiente de produção — Shopify, Webflow, APIs personalizadas, ferramentas internas. Sem plataformas separadas.",
              },
              {
                icon: Settings2,
                step: "04",
                title: "Melhoria",
                desc: "Monitorização contínua, scoring de outputs, upgrades de modelos e iteração. Os teus agentes melhoram com o tempo.",
              },
            ].map((svc, i) => (
              <Reveal key={svc.step} delay={i * 0.1}>
                <div className="bg-surface-raised p-8 lg:p-10 h-full group hover:bg-surface-overlay transition-colors duration-300">
                  <span className="font-mono text-xs text-neutral-600 tracking-wider">
                    {svc.step}
                  </span>
                  <div className="mt-4 size-12 rounded-xl bg-neutral-800 flex items-center justify-center group-hover:bg-lime/10 transition-colors">
                    <svc.icon className="size-5 text-neutral-400 group-hover:text-lime transition-colors" />
                  </div>
                  <h3 className="mt-6 font-sans text-xl font-700 tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-neutral-500 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────── */}
      <section id="process" className="py-32 lg:py-40 border-t border-neutral-800/60 relative">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(202,255,4,0.04) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTag>Como Funciona</SectionTag>
            <SectionHeading>
              Da primeira chamada à
              <br />
              <span className="text-neutral-500">produção em semanas.</span>
            </SectionHeading>
          </Reveal>

          <div className="mt-20 space-y-0">
            {[
              {
                num: "01",
                title: "Chamada de Descoberta",
                desc: "Ficamos a conhecer os teus workflows, tech stack e pontos de dor. Sem pitch deck — apenas uma conversa sobre o que precisas de automatizar.",
                duration: "30 min",
              },
              {
                num: "02",
                title: "Arquitetura do Agente",
                desc: "Desenhamos o pipeline do agente: quais modelos, que triggers, onde é implementado, como os outputs são validados e como se integra nos teus sistemas.",
                duration: "1 semana",
              },
              {
                num: "03",
                title: "Construção & Testes",
                desc: "Construímos o agente, ligamo-lo às tuas fontes de dados e testamo-lo com workloads reais. Vês os outputs antes de ir para produção.",
                duration: "2–4 semanas",
              },
              {
                num: "04",
                title: "Deploy & Monitorização",
                desc: "Deploy em produção com monitorização, alertas e scoring de qualidade. Ficamos ligados para otimização contínua e upgrades de modelos.",
                duration: "Contínuo",
              },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="group flex items-start gap-8 py-10 border-b border-neutral-800/60 last:border-0">
                  <span className="font-mono text-4xl sm:text-5xl font-700 text-neutral-800 group-hover:text-lime/20 transition-colors min-w-[80px]">
                    {step.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <h3 className="font-sans text-xl sm:text-2xl font-700 tracking-tight">
                        {step.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="border-neutral-700 text-neutral-500 font-mono text-[10px] rounded-md"
                      >
                        {step.duration}
                      </Badge>
                    </div>
                    <p className="mt-3 max-w-xl font-body text-neutral-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <ArrowRight className="hidden sm:block size-5 text-neutral-700 group-hover:text-lime group-hover:translate-x-1 transition-all mt-2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ────────────────────────────────── */}
      <section id="cases" className="py-32 lg:py-40 border-t border-neutral-800/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTag>Casos de Uso</SectionTag>
            <SectionHeading>
              Para equipas que produzem
              <br />
              <span className="text-neutral-500">conteúdo visual em escala.</span>
            </SectionHeading>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Box,
                title: "E-Commerce",
                items: [
                  "Geração de fotografia de produto a partir de modelos 3D ou flat-lays",
                  "Criação de cenas lifestyle para páginas de catálogo",
                  "Redimensionamento automático para requisitos de marketplace",
                  "Produção de assets para campanhas sazonais",
                ],
              },
              {
                icon: Sparkles,
                title: "Marketing de Performance",
                items: [
                  "Variantes de criativos para ads em múltiplos formatos (Meta, Google, TikTok)",
                  "Personalização dinâmica por segmento de audiência",
                  "Geração rápida de visuais para testes A/B",
                  "Outputs verificados para compliance em indústrias reguladas",
                ],
              },
              {
                icon: Workflow,
                title: "Operações de Conteúdo",
                items: [
                  "Geração de imagens para blogs e editorial",
                  "Pipelines de assets para redes sociais",
                  "Automação de templates de marca",
                  "Exportação multi-formato (web, print, social)",
                ],
              },
              {
                icon: Scaling,
                title: "Enterprise & Ferramentas Internas",
                items: [
                  "Gestão interna de assets com edição assistida por IA",
                  "Pipelines automatizados de QA e compliance de imagens",
                  "Dashboards de agentes personalizados para equipas não-técnicas",
                  "Workflows de assets multi-marca e multi-região",
                ],
              },
            ].map((useCase, i) => (
              <Reveal key={useCase.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-neutral-800 bg-surface-raised p-8 lg:p-10 hover:border-neutral-700 transition-colors group h-full">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-neutral-800 flex items-center justify-center group-hover:bg-lime/10 transition-colors">
                      <useCase.icon className="size-5 text-neutral-400 group-hover:text-lime transition-colors" />
                    </div>
                    <h3 className="font-sans text-xl font-700 tracking-tight">
                      {useCase.title}
                    </h3>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {useCase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-body text-sm text-neutral-400 leading-relaxed"
                      >
                        <Check className="size-3.5 text-lime mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROOF / METRICS ──────────────────────────── */}
      <section id="proof" className="py-32 lg:py-40 border-t border-neutral-800/60">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTag>Resultados</SectionTag>
            <SectionHeading>
              Medidos em output,
              <br />
              <span className="text-neutral-500">não em promessas.</span>
            </SectionHeading>
          </Reveal>

          {/* metrics grid */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 rounded-2xl overflow-hidden">
            {[
              { value: "50K+", label: "Assets gerados por mês" },
              { value: "14min", label: "Conclusão média por batch" },
              { value: "98,7%", label: "Taxa de aprovação de qualidade" },
              { value: "12x", label: "Output vs. equipa manual" },
            ].map((metric, i) => (
              <Reveal key={metric.label} delay={i * 0.08}>
                <div className="bg-surface-raised p-8 text-center">
                  <div className="font-sans text-3xl sm:text-4xl lg:text-5xl font-800 text-lime tracking-tight">
                    {metric.value}
                  </div>
                  <div className="mt-2 font-body text-sm text-neutral-500">
                    {metric.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* case study cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                company: "Marca DTC de Moda",
                result: "Substituiu uma equipa de 3 fotógrafos por um pipeline de agentes. 12.000 imagens de produto/mês, redução de custos de 90%.",
                tags: ["E-Commerce", "Flux 2"],
              },
              {
                company: "Agência de Performance",
                result: "Automatizou a produção de criativos para 40+ clientes. 10x mais output criativo, CPA 60% mais baixo nas variantes vencedoras.",
                tags: ["Marketing", "gpt-image-1.5"],
              },
              {
                company: "Retalhista Enterprise",
                result: "Pipeline de compliance multi-região em 8 mercados. Zero violações de marca em 6 meses de produção.",
                tags: ["Enterprise", "Multi-modelo"],
              },
            ].map((cs, i) => (
              <Reveal key={cs.company} delay={i * 0.1}>
                <Card className="bg-surface-raised border-neutral-800 rounded-2xl hover:border-neutral-700 transition-colors h-full">
                  <CardHeader>
                    <div className="flex gap-2">
                      {cs.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-[10px] border-neutral-700 text-neutral-500 font-mono rounded-md"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-lg font-sans font-700 mt-3">
                      {cs.company}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-sm text-neutral-400 leading-relaxed">
                      {cs.result}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono text-lime hover:underline"
                    >
                      Ler caso de estudo <ArrowUpRight className="size-3" />
                    </a>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────── */}
      <section
        id="pricing"
        className="py-32 lg:py-40 border-t border-neutral-800/60 relative"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(202,255,4,0.04) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <SectionTag center>Preços</SectionTag>
              <SectionHeading className="mx-auto">
                Duas formas de trabalhar
                <br />
                <span className="text-neutral-500">connosco.</span>
              </SectionHeading>
              <p className="mt-6 max-w-2xl mx-auto text-lg font-body text-neutral-500 leading-relaxed">
                Cada projeto começa com uma chamada de descoberta. Sem templates.
                Sem pacotes. Apenas o agente certo para o teu negócio.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start">
            {/* Founders — left side */}
            <Reveal>
              <div className="hidden lg:flex flex-col items-center justify-center gap-8 sticky top-32 py-12">
                <p className="font-mono text-xs text-neutral-600 uppercase tracking-[0.2em]">
                  Conhece os fundadores
                </p>
                <div className="flex flex-col items-center gap-6">
                  {/* Founder 1 */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="size-16 rounded-full bg-neutral-800 border-2 border-neutral-700 overflow-hidden shrink-0">
                      <Image
                        src="/founder1.jpeg"
                        alt="Joao Santos"
                        width={64}
                        height={64}
                        className="size-full object-cover"
                      />
                    </div>
                    <p className="font-sans text-sm font-700">Joao Santos</p>
                    <p className="font-mono text-[11px] text-neutral-500 -mt-1">
                      Co-Fundador
                    </p>
                  </div>
                  {/* Founder 2 */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="size-16 rounded-full bg-neutral-800 border-2 border-neutral-700 overflow-hidden flex items-center justify-center shrink-0">
                      {/* Replace with <Image src="/founders/tiago.jpg" ... /> */}
                      <Bot className="size-6 text-neutral-600" />
                    </div>
                    <p className="font-sans text-sm font-700">Tiago Martinho</p>
                    <p className="font-mono text-[11px] text-neutral-500 -mt-1">
                      Co-Fundador
                    </p>
                  </div>
                </div>
                <div className="h-px w-16 bg-neutral-800" />
                <p className="font-body text-sm text-neutral-500 text-center max-w-[240px] leading-relaxed">
                  Trabalhamos diretamente com cada cliente. Sem intermediários.
                </p>
              </div>
            </Reveal>

            {/* Pricing cards — right side, centered */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Project */}
              <Reveal>
                <Card className="bg-surface-raised border-neutral-800 rounded-2xl hover:border-neutral-700 transition-colors h-full">
                  <CardHeader>
                    <Badge
                      variant="outline"
                      className="w-fit text-[10px] border-neutral-700 text-neutral-500 font-mono rounded-md"
                    >
                      Pontual
                    </Badge>
                    <CardTitle className="text-2xl font-sans font-800 mt-3">
                      Projeto
                    </CardTitle>
                    <CardDescription className="font-body text-neutral-500">
                      Um projeto com âmbito definido para desenhar, construir e
                      implementar um agente ou pipeline específico na tua stack.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Separator className="bg-neutral-800 mb-6" />
                    <ul className="space-y-3">
                      {[
                        "Arquitetura & design do agente",
                        "Build personalizado nos melhores modelos",
                        "Integração com os teus sistemas",
                        "Testes com workloads reais",
                        "Deploy em produção",
                        "30 dias de suporte pós-lançamento",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 font-body text-sm text-neutral-300"
                        >
                          <Check className="size-3.5 text-lime shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <span className="font-sans text-3xl font-800 tracking-tight">
                        Personalizado
                      </span>
                      <span className="ml-2 font-body text-sm text-neutral-500">
                        definido por projeto
                      </span>
                    </div>
                    <Button asChild className="w-full mt-6 bg-neutral-800 text-neutral-200 font-sans font-600 rounded-xl hover:bg-neutral-700 h-11">
                      <a href="https://calendly.com/joao-filipe-santos1720/30min" target="_blank" rel="noopener noreferrer">
                        Iniciar Projeto
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>

              {/* Retainer */}
              <Reveal delay={0.1}>
                <Card className="bg-surface-raised border-lime/30 rounded-2xl hover:border-lime/50 transition-colors glow-lime h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-4 py-1.5 bg-lime text-surface text-[10px] font-mono font-600 uppercase tracking-wider rounded-bl-xl">
                    Mais Popular
                  </div>
                  <CardHeader>
                    <Badge
                      variant="outline"
                      className="w-fit text-[10px] border-lime/30 text-lime font-mono rounded-md"
                    >
                      Mensal
                    </Badge>
                    <CardTitle className="text-2xl font-sans font-800 mt-3">
                      Avença
                    </CardTitle>
                    <CardDescription className="font-body text-neutral-500">
                      Parceria contínua para desenvolvimento de agentes,
                      otimização e novas capacidades.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Separator className="bg-neutral-800 mb-6" />
                    <ul className="space-y-3">
                      {[
                        "Tudo incluído no Projeto",
                        "Monitorização & QA contínuos",
                        "Upgrades mensais de modelos",
                        "Desenvolvimento de novos agentes",
                        "Suporte prioritário & SLA",
                        "Canal Slack dedicado",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 font-body text-sm text-neutral-300"
                        >
                          <Check className="size-3.5 text-lime shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <span className="font-sans text-3xl font-800 tracking-tight">
                        Personalizado
                      </span>
                      <span className="ml-2 font-body text-sm text-neutral-500">
                        avença mensal
                      </span>
                    </div>
                    <Button asChild className="w-full mt-6 bg-lime text-surface font-sans font-700 rounded-xl hover:bg-lime/90 h-11">
                      <a href="https://calendly.com/joao-filipe-santos1720/30min" target="_blank" rel="noopener noreferrer">
                        Marcar Chamada
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────── */}
      <section className="py-32 lg:py-40 border-t border-neutral-800/60 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 80%, rgba(202,255,4,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-8">
              <Bot className="size-5 text-lime" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-lime">
                Pronto para implementar
              </span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-800 tracking-tight leading-[1.05]">
              Pára de contratar para tarefas
              <br />
              <span className="text-lime">que agentes resolvem.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-lg font-body text-neutral-400 leading-relaxed">
              Diz-nos o que precisas de automatizar. Mostramos-te o que um agente
              consegue fazer — com uma prova de conceito nos teus dados reais.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-lime text-surface font-sans font-700 text-base h-14 px-10 rounded-xl hover:bg-lime/90 glow-lime"
              >
                <a href="https://calendly.com/joao-filipe-santos1720/30min" target="_blank" rel="noopener noreferrer">
                  Marcar Chamada de Descoberta
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
            <p className="mt-6 font-mono text-xs text-neutral-600">
              Chamada de 30 min · Sem pitch deck · Prova de conceito gratuita
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────── */}
      <footer className="border-t border-neutral-800/60 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo.png"
                  alt="Headless"
                  width={56}
                  height={35}
                  className="h-9 w-auto"
                />
                <span className="font-sans text-base font-800 tracking-tight">
                  headless
                </span>
              </div>
              <p className="mt-3 font-body text-sm text-neutral-600 max-w-xs">
                Agentes de IA que fazem o trabalho. Desenhados, construídos e
                implementados para produção.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 font-body text-sm text-neutral-500">
              <a href="#agents" className="hover:text-neutral-300 transition-colors">Agentes</a>
              <a href="#services" className="hover:text-neutral-300 transition-colors">Serviços</a>
              <a href="#process" className="hover:text-neutral-300 transition-colors">Processo</a>
              <a href="#cases" className="hover:text-neutral-300 transition-colors">Casos de Uso</a>
              <a href="#pricing" className="hover:text-neutral-300 transition-colors">Preços</a>
            </div>
          </div>

          <Separator className="bg-neutral-800 my-10" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-700">
            <span>&copy; {new Date().getFullYear()} Headless. Todos os direitos reservados.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-neutral-400 transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-neutral-400 transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── MOBILE NAV SPACER ────────────────────────── */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
