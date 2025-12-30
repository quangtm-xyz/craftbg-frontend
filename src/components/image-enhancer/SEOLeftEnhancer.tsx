'use client'

import { useTranslation } from '../../lib/i18n'
import BeforeAfterToggleEnhancer from './BeforeAfterToggleEnhancer'

export default function SEOLeftEnhancer() {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-8 text-5xl md:text-6xl font-black leading-tight text-center dark:text-white min-h-[200px] md:min-h-[240px] flex flex-col justify-center">
                {t("enhancer.hero_title_1")}<br />
                <span className="text-primary">{t("enhancer.hero_title_2")}</span><br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 dark:text-green-400">{t("enhancer.hero_title_3")}</span>
            </h1>

            {/* BeforeAfterToggleEnhancer - Only show on desktop (lg and up) */}
            <div className="hidden lg:block mt-8 w-full">
                <BeforeAfterToggleEnhancer />
            </div>
        </div>
    )
}
