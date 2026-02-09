import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Headless — Agentes de IA Que Fazem o Trabalho",
  description:
    "Desenhamos, construímos e implementamos agentes de IA de nível profissional que automatizam tarefas criativas e operacionais de alto valor. Integrados na tua stack. Monitorizados. Escaláveis.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Headless — Agentes de IA Que Fazem o Trabalho",
    description:
      "Agentes de IA de nível profissional para automação criativa e operacional. Personalizados, integrados e monitorizados.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark">
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} antialiased noise-bg`}
      >
        {children}
      </body>
    </html>
  );
}
