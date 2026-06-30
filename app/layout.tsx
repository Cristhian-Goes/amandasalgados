import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Amanda Salgados | Salgadinhos de Festa em Cândido Mota, SP',
  description: 'Salgadinhos de festa com fabricação própria. Mini coxinhas, bolinhas de queijo, quibes, risoles e mini churros. Delivery e fritura no local do seu evento. Sua Festa Começa Aqui!',
  keywords: ['salgadinhos', 'festa', 'coxinha', 'bolinha de queijo', 'quibe', 'Cândido Mota', 'delivery', 'eventos'],
  authors: [{ name: 'Amanda Salgados' }],
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'Amanda Salgados | Salgadinhos de Festa',
    description: 'Salgadinhos de festa com fabricação própria. Delivery e fritura no local. Sua Festa Começa Aqui!',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1410',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
