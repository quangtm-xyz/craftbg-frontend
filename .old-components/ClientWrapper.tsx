'use client'

import { useState, useEffect, ReactNode } from 'react'
import ThemeToggle from './ThemeToggle'

interface ClientWrapperProps {
    children: ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDark])

    return (
        <>
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            {children}
        </>
    )
}
