import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'LFC-CFR | Labourers For Christ Center For Reconstruction',
  description: 'Rebuilding People and Cities for A Path of Kingdom Destiny. An apostolic ministry in Williamsburg, VA.',
  keywords: ['church', 'apostolic', 'Williamsburg VA', 'LFC-CFR', 'ministry', 'reconstruction'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-palette="A" data-mode="light">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
