'use client'

import { createContext, useContext, Dispatch, SetStateAction } from 'react';

type Translations = Record<string, string>;

interface I18nContextType {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
    t: (key: string) => string;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Optional hook để dùng dễ hơn
export const useI18n = () => {
    const context = useContext(I18nContext);
    if (!context) throw new Error('useI18n must be used within I18nProvider');
    return context;
};

// Alias for compatibility with existing components
export const useTranslation = useI18n;
