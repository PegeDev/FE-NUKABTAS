import { Inter } from 'next/font/google'
import '@/app/global.css'

const InterFont = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const RootLayout = ({ children }) => {
    return (
        <html lang="id" className={InterFont.className}>
            <body className="antialiased">{children}</body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
