import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'ITS-R-Amazon-Insurance', description: 'ITS-R Universe' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{background:'#0a0a0f',color:'#f8fafc',margin:0}}>{children}</body></html>)
}