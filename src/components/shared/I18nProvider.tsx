'use client'

import { ReactNode } from 'react'
import { I18nContext } from '../../lib/i18n-context'

interface I18nProviderProps {
    children: ReactNode
    language: string
    translations: Record<string, string>
}

export default function I18nProvider({ children, language, translations }: I18nProviderProps) {
    const t = (key: string): string => translations[key] ?? key

    return (
        <I18nContext.Provider value={{ language, setLanguage: () => { }, t }}>
            {children}
        </I18nContext.Provider>
    )
}
