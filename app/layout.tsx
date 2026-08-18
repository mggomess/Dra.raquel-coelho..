import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karolina Bickel Advocacia",
  description: "Advocacia e estruturação internacional para empresas, patrimônio, residência, offshores e banking.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
