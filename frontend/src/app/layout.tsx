import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portifolio",
  description: "`portifolio de proej1tos de desenvolvimento web",
};

const fonte = Montserrat({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${fonte.className} antialiased`}>{children}</body>
    </html>
  )
}
