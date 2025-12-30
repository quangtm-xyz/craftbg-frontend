'use client'

import { useTranslation } from '../lib/i18n';

export default function FeaturesSection() {
    const { t } = useTranslation();

    return (
        <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
                {t('features.section_title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{t('features.fast.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t('features.fast.desc')}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{t('features.precise.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t('features.precise.desc')}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{t('features.free.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t('features.free.desc')}</p>
                </div>
            </div>
        </div>
    );
}
