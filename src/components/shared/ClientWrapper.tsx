'use client'

import { useState, useEffect, ReactNode } from 'react'

interface ClientWrapperProps {
    children: ReactNode
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Check initial dark mode from document
        const dark = document.documentElement.classList.contains('dark')
        setIsDark(dark)
    }, [])

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDark])

    return (
        <>
            {children}
        </>
    )
}
