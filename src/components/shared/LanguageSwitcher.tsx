'use client'

import { useRef, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation, languages, Language } from '../../lib/i18n';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useTranslation();
    const router = useRouter();
    const pathname = usePathname();
    const [langOpen, setLangOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                setLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
        setLangOpen(false);

        // Set cookie for persistence
        document.cookie = `preferred-locale=${lang}; path=/; max-age=31536000`;

        // Navigate to the new language URL
        const currentPath = pathname || '/en';
        const segments = currentPath.split('/').filter(Boolean);

        // Check if first segment is a language code
        const currentLang = segments[0];
        const isLangSegment = Object.keys(languages).includes(currentLang);

        // Build new path
        let newPath;
        if (isLangSegment) {
            // Replace current language with new language
            segments[0] = lang;
            newPath = '/' + segments.join('/');
        } else {
            // Prepend new language
            newPath = '/' + lang + (currentPath === '/' ? '' : currentPath);
        }

        router.push(newPath);
    };

    return (
        <div className="relative" ref={langRef}>
            <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
                <span className="text-base">{languages[language as Language].flag}</span>
                <span className="font-medium hidden md:inline">{languages[language as Language].name}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    {(Object.keys(languages) as Language[]).map((lang) => (
                        <button
                            key={lang}
                            onClick={() => handleLanguageChange(lang)}
                            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 ${language === lang ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                        >
                            <span className="text-base">{languages[lang].flag}</span>
                            <span className={`text-sm font-medium ${language === lang ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
                                {languages[lang].name}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
