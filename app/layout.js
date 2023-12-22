import './globals.css'

export const metadata = {
  title: 'OYO: India`s Best Online Hotel Booking site for sanitized stay.',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}