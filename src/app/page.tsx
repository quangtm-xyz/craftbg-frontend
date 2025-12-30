'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const locales = ['en', 'vi', 'hi', 'id', 'bn', 'ur', 'tl']

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        // Detect language from cookie or browser
        const cookieLang = document.cookie.match(/preferred-locale=([^;]+)/)?.[1]
        const browserLang = navigator.language.split('-')[0]
        const detectedLang = cookieLang || browserLang || 'en'
        const validLang = locales.includes(detectedLang) ? detectedLang : 'en'

        // Redirect to language-specific route
        router.replace(`/${validLang}`)
    }, [router])

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Loading...</p>
            </div>
        </div>
    )
}
