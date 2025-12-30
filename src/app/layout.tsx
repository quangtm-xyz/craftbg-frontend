import './globals.css'

export const metadata = {
    title: 'CraftBG - AI Background Remover',
    description: 'Remove image backgrounds instantly with AI - 100% Free'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif" }}>
                {children}
            </body>
        </html>
    )
}
