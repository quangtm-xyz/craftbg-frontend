'use client'

import { useState } from 'react'

export default function BeforeAfterToggle() {
    const [isAfter, setIsAfter] = useState(false)

    return (
        <div className="w-full max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
                <span className={`text-sm font-medium ${!isAfter ? 'text-primary' : 'text-gray-500'}`}>Before</span>
                <button
                    onClick={() => setIsAfter(!isAfter)}
                    className="relative inline-flex h-6 w-11 items-center rounded-full"
                    style={{ backgroundColor: isAfter ? '#3b82f6' : '#d1d5db' }}
                    aria-label="Toggle before/after"
                >
                    <span
                        className="inline-block h-4 w-4 rounded-full bg-white shadow-lg"
                        style={{ transform: isAfter ? 'translateX(23px)' : 'translateX(4px)', transition: 'transform 0.2s' }}
                    />
                </button>
                <span className={`text-sm font-medium ${isAfter ? 'text-primary' : 'text-gray-500'}`}>After</span>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white select-none mx-auto" style={{ width: '75%' }}>
                <img
                    src={isAfter ? "/enhancer_after.png" : "/enhancer_before.png"}
                    alt={isAfter ? "After" : "Before"}
                    width={512}
                    height={512}
                    className="w-full block"
                    loading="lazy"
                    draggable={false}
                />
            </div>
        </div>
    )
}
