import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Condições — Headless",
  description:
    "Termos e condições de utilização do website e dos serviços da Headless.",
};

export default function Terms() {
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
          Termos e Condições
        </h1>
        <p className="font-mono text-sm text-neutral-500 mb-12">
          Última atualização: fevereiro de 2025
        </p>

        <div className="space-y-10 font-body text-neutral-400 leading-relaxed text-[15px]">
          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              1. Âmbito e Aceitação
            </h2>
            <p>
              Estes Termos e Condições regulam a utilização do website da
              Headless e a prestação dos nossos serviços de consultoria e
              desenvolvimento de agentes de IA. Ao aceder ao nosso website ou
              contratar os nossos serviços, aceitas estes termos na sua
              totalidade. Se não concordares com alguma disposição, deves cessar
              a utilização do website.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              2. Serviços
            </h2>
            <p>
              A Headless presta serviços de design, construção, implementação e
              manutenção de agentes de inteligência artificial personalizados.
              Os serviços específicos, âmbito, prazos e valores são definidos
              individualmente em propostas ou contratos celebrados com cada
              cliente.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              3. Propriedade Intelectual
            </h2>
            <p className="mb-3">
              Todo o conteúdo do website da Headless, incluindo textos, gráficos,
              logótipos, ícones, imagens e software, é propriedade da Headless
              ou dos seus licenciantes e está protegido por leis de propriedade
              intelectual.
            </p>
            <p>
              Salvo acordo em contrário por escrito, o código e agentes
              desenvolvidos no âmbito de um projeto são entregues ao cliente
              após pagamento integral. A Headless reserva o direito de
              reutilizar metodologias, frameworks e componentes genéricos
              desenvolvidos internamente.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              4. Responsabilidades do Cliente
            </h2>
            <ul className="space-y-2 list-disc list-inside text-neutral-400">
              <li>Fornecer informações e acessos necessários para a execução dos serviços</li>
              <li>Comunicar requisitos e alterações de forma atempada</li>
              <li>Realizar os pagamentos acordados nos prazos definidos</li>
              <li>Garantir que os dados e conteúdos fornecidos não violam direitos de terceiros</li>
              <li>Cumprir as leis aplicáveis na utilização dos agentes desenvolvidos</li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              5. Pagamentos e Faturação
            </h2>
            <p>
              Os valores e condições de pagamento são definidos na proposta ou
              contrato de cada projeto. Salvo acordo em contrário, os
              pagamentos devem ser efetuados no prazo de 15 dias após emissão
              da fatura. O atraso no pagamento pode resultar na suspensão dos
              serviços.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              6. Confidencialidade
            </h2>
            <p>
              Ambas as partes comprometem-se a manter a confidencialidade de
              toda a informação sensível ou proprietária partilhada durante a
              relação comercial. Esta obrigação mantém-se durante e após o
              término da relação contratual.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              7. Limitação de Responsabilidade
            </h2>
            <p>
              Os serviços da Headless são prestados &quot;tal como estão&quot;.
              Na máxima extensão permitida por lei, a Headless não será
              responsável por danos indiretos, incidentais, especiais ou
              consequenciais decorrentes da utilização dos nossos serviços ou
              website. A responsabilidade total da Headless está limitada ao
              valor pago pelo cliente nos 12 meses anteriores ao evento que
              originou a reclamação.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              8. Garantias e Suporte
            </h2>
            <p>
              Os projetos incluem um período de suporte pós-lançamento conforme
              definido na proposta (tipicamente 30 dias). Durante este período,
              corrigimos bugs e problemas técnicos sem custo adicional.
              Funcionalidades novas ou alterações de âmbito são tratadas como
              trabalho adicional.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              9. Rescisão
            </h2>
            <p>
              Qualquer das partes pode rescindir a relação contratual com aviso
              prévio de 30 dias por escrito. Em caso de rescisão, o cliente é
              responsável pelo pagamento de todo o trabalho realizado até à data
              de rescisão. A Headless entregará todo o trabalho concluído.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              10. Utilização de IA e Modelos de Terceiros
            </h2>
            <p>
              Os agentes desenvolvidos pela Headless podem utilizar modelos de
              inteligência artificial de terceiros (incluindo Claude, OpenAI e
              Google). O cliente reconhece que estes modelos estão sujeitos aos
              termos de utilização dos respetivos fornecedores e que a Headless
              não controla o comportamento dos modelos subjacentes.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              11. Lei Aplicável e Resolução de Litígios
            </h2>
            <p>
              Estes Termos e Condições são regidos pela lei portuguesa. Para a
              resolução de quaisquer litígios decorrentes destes termos, as
              partes submetem-se à competência exclusiva dos tribunais
              portugueses.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              12. Alterações
            </h2>
            <p>
              A Headless reserva-se o direito de alterar estes Termos e
              Condições a qualquer momento. As alterações entram em vigor após
              publicação nesta página. A continuação da utilização do website
              após qualquer alteração constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-xl font-700 text-neutral-50 mb-4">
              13. Contacto
            </h2>
            <p>
              Para questões sobre estes Termos e Condições, contacta-nos em:{" "}
              <a
                href="mailto:joao@headless.pt"
                className="text-lime hover:underline"
              >
                joao@headless.pt
              </a>
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
