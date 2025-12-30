import { Metadata } from 'next'
import I18nProvider from '../../components/shared/I18nProvider'
import type { ReactNode } from 'react'
import { getTranslations } from '../../lib/i18n'

// 7 supported languages
const locales = ['en', 'vi', 'hi', 'id', 'bn', 'ur', 'tl']

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
    const lang = locales.includes(params.lang) ? params.lang : 'en'
    const t = getTranslations(lang)

    return {
        title: t['seo.title'],
        description: t['seo.description'],
        metadataBase: new URL('https://craftbg.click'),
        alternates: {
            canonical: `/${lang}`,
            languages: {
                'en': 'https://craftbg.click/en',
                'vi': 'https://craftbg.click/vi',
                'hi': 'https://craftbg.click/hi',
                'id': 'https://craftbg.click/id',
                'bn': 'https://craftbg.click/bn',
                'ur': 'https://craftbg.click/ur',
                'tl': 'https://craftbg.click/tl',
            }
        }
    }
}

export default async function LangLayout({
    children,
    params,
}: {
    children: ReactNode
    params: { lang: string }
}) {
    const lang = locales.includes(params.lang) ? params.lang : 'en'
    const langTranslations = getTranslations(lang)

    return (
        <I18nProvider language={lang} translations={langTranslations}>
            <div data-lang={lang}>
                {children}
            </div>
        </I18nProvider>
    )
}
