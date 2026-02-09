import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Headless",
  description:
    "Política de privacidade da Headless. Como recolhemos, utilizamos e protegemos os teus dados pessoais.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-surface text-neutral-50">
      {/* Nav */}
      <nav className="border-b border-neutral-800/60 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
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
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime mb-4">
          Legal
        </p>
        <h1 className="font-sans text-4xl sm:text-5xl font-800 tracking-tight leading-[1.1] mb-4">
          Política de Privacidade
        </h1>
        <p className="font-mono text-sm text-neutral-500 mb-12">
          Última atualização: fevereiro de 2025
        </p>

        <div className="space-y-10 font-body text-neutral-400 leading-relaxed text-[15px]">
          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              1. Informação Geral
            </h2>
            <p>
              A Headless (&quot;nós&quot;, &quot;nosso&quot;) compromete-se a
              proteger a privacidade dos visitantes do nosso website e dos nossos
              clientes. Esta Política de Privacidade explica como recolhemos,
              utilizamos, armazenamos e protegemos os teus dados pessoais quando
              interages connosco.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              2. Dados que Recolhemos
            </h2>
            <p className="mb-3">
              Podemos recolher os seguintes tipos de dados pessoais:
            </p>
            <ul className="space-y-2 list-disc list-inside text-neutral-400">
              <li>
                <span className="text-neutral-300">Dados de contacto:</span>{" "}
                nome, email, número de telefone, empresa — fornecidos quando
                agendas uma chamada ou entras em contacto connosco.
              </li>
              <li>
                <span className="text-neutral-300">Dados de utilização:</span>{" "}
                informações sobre como utilizas o nosso website, incluindo
                páginas visitadas, tempo de permanência e tipo de dispositivo.
              </li>
              <li>
                <span className="text-neutral-300">Dados de comunicação:</span>{" "}
                conteúdo de emails, mensagens e chamadas trocadas connosco.
              </li>
              <li>
                <span className="text-neutral-300">Dados contratuais:</span>{" "}
                informações necessárias para a execução de serviços, incluindo
                dados de faturação e detalhes de projeto.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              3. Como Utilizamos os Teus Dados
            </h2>
            <p className="mb-3">
              Utilizamos os teus dados pessoais para:
            </p>
            <ul className="space-y-2 list-disc list-inside text-neutral-400">
              <li>Responder aos teus pedidos de contacto e agendar chamadas</li>
              <li>Prestar os nossos serviços de consultoria e desenvolvimento de agentes de IA</li>
              <li>Enviar comunicações relevantes sobre os nossos serviços (apenas com o teu consentimento)</li>
              <li>Melhorar o nosso website e a experiência do utilizador</li>
              <li>Cumprir obrigações legais e regulamentares</li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              4. Base Legal para o Tratamento
            </h2>
            <p>
              O tratamento dos teus dados pessoais é realizado com base em: (a)
              o teu consentimento; (b) a execução de um contrato ou
              diligências pré-contratuais; (c) o cumprimento de obrigações
              legais; ou (d) os nossos interesses legítimos, desde que não
              prevaleçam os teus direitos e liberdades fundamentais.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              5. Partilha de Dados
            </h2>
            <p>
              Não vendemos nem partilhamos os teus dados pessoais com terceiros
              para fins de marketing. Podemos partilhar dados com prestadores de
              serviços que nos auxiliam na operação do negócio (ex.: serviços de
              email, agendamento, alojamento web), sempre com garantias
              adequadas de proteção de dados. Podemos igualmente divulgar dados
              quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              6. Retenção de Dados
            </h2>
            <p>
              Conservamos os teus dados pessoais apenas durante o período
              necessário para as finalidades para as quais foram recolhidos, ou
              conforme exigido por lei. Dados de clientes são conservados
              durante a relação contratual e pelo período legalmente exigido
              após o seu término.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              7. Os Teus Direitos
            </h2>
            <p className="mb-3">
              Ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD),
              tens os seguintes direitos:
            </p>
            <ul className="space-y-2 list-disc list-inside text-neutral-400">
              <li>Direito de acesso aos teus dados pessoais</li>
              <li>Direito de retificação de dados incorretos ou incompletos</li>
              <li>Direito ao apagamento dos teus dados</li>
              <li>Direito à limitação do tratamento</li>
              <li>Direito à portabilidade dos dados</li>
              <li>Direito de oposição ao tratamento</li>
              <li>Direito de retirar o consentimento a qualquer momento</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer destes direitos, contacta-nos através do
              email indicado abaixo.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              8. Segurança
            </h2>
            <p>
              Implementamos medidas técnicas e organizativas adequadas para
              proteger os teus dados pessoais contra perda, acesso não
              autorizado, divulgação, alteração ou destruição.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              9. Cookies
            </h2>
            <p>
              O nosso website pode utilizar cookies e tecnologias semelhantes
              para melhorar a experiência de navegação. Podes gerir as tuas
              preferências de cookies através das definições do teu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              10. Contacto
            </h2>
            <p>
              Para questões relacionadas com a proteção de dados ou para exercer
              os teus direitos, contacta-nos em:{" "}
              <a
                href="mailto:joao@headless.pt"
                className="text-lime hover:underline"
              >
                joao@headless.pt
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              11. Alterações a Esta Política
            </h2>
            <p>
              Reservamo-nos o direito de atualizar esta Política de Privacidade
              a qualquer momento. Quaisquer alterações serão publicadas nesta
              página com a data de atualização revista.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800/60">
          <Link
            href="/"
            className="font-mono text-sm text-lime hover:underline"
          >
            &larr; Voltar à página principal
          </Link>
        </div>
      </main>
    </div>
  );
}
