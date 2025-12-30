'use client'

import { useState } from 'react'
import UploadZone from './UploadZone'
import ProcessingSpinner from './ProcessingSpinner'
import BeforeAfterToggle from './BeforeAfterToggle'
import BeforeAfterPreview from './BeforeAfterPreview'
import DownloadButton from './DownloadButton'
import { useTranslation } from '../../lib/i18n'

export default function ImageEnhancerClient() {
    const { t } = useTranslation()
    const [originalImage, setOriginalImage] = useState<string | null>(null)
    const [processedImage, setProcessedImage] = useState<string | null>(null)
    const [isProcessing, setIsProcessing] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleReset = () => {
        setOriginalImage(null)
        setProcessedImage(null)
        setError(null)
    }

    const handleSampleImage = async (url: string) => {
        setError(null)
        setIsProcessing(true)

        try {
            const response = await fetch(url)
            const blob = await response.blob()
            const file = new File([blob], 'sample.jpg', { type: blob.type })

            const reader = new FileReader()
            reader.onload = (e) => {
                setOriginalImage(e.target?.result as string)
            }
            reader.readAsDataURL(file)

            const { enhanceImage } = await import('../../lib/enhancer-api')
            const resultBlob = await enhanceImage(file)
            const resultUrl = URL.createObjectURL(resultBlob)
            setProcessedImage(resultUrl)
        } catch (err: any) {
            setError(err.response?.data?.error || t('error.upload_failed'))
            setOriginalImage('')
        } finally {
            setIsProcessing(false)
        }
    }

    return (
        <div className="flex flex-col items-center">
            {!originalImage && !isProcessing && (
                <>
                    <UploadZone
                        setOriginalImage={setOriginalImage}
                        setProcessedImage={setProcessedImage}
                        setIsProcessing={setIsProcessing}
                        setError={setError}
                    />

                    {/* Error message or Help message - they replace each other with same dimensions */}
                    <div className="mt-4 min-h-[80px] flex items-center justify-center">
                        {error ? (
                            <div className="w-full dark:bg-red-900/20">
                                <p className="text-red-600 dark:text-red-400 text-center text-sm">{error}</p>
                                <button
                                    onClick={handleReset}
                                    className="mt-3 mx-auto block px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 text-sm font-medium"
                                >
                                    {t('button.tryAgain')}
                                </button>
                            </div>
                        ) : (
                            <p className="text-center text-gray-600 dark:text-gray-400 text-sm px-4">
                                💡 {t("upload.help_message")}
                            </p>
                        )}
                    </div>

                    <p className="mt-10 text-center text-gray-700 dark:text-gray-300 font-medium">{t("sample_text")}</p>

                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <img
                            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400"
                            alt="Sample low quality"
                            width={200}
                            height={250}
                            className="rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition"
                            onClick={() => handleSampleImage('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400')}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400"
                            alt="Sample landscape"
                            width={200}
                            height={250}
                            className="rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition"
                            onClick={() => handleSampleImage('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400')}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400"
                            alt="Sample architecture"
                            width={200}
                            height={250}
                            className="rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition"
                            onClick={() => handleSampleImage('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400')}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400"
                            alt="Sample nature"
                            width={200}
                            height={250}
                            className="rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition"
                            onClick={() => handleSampleImage('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400')}
                        />
                    </div>

                    {/* BeforeAfterToggle - Only show on mobile (below lg) */}
                    <div className="lg:hidden mt-8">
                        <BeforeAfterToggle />
                    </div>

                    <p className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400 max-w-2xl">{t("privacy_text")}</p>
                </>
            )}

            {isProcessing && <ProcessingSpinner />}


            {originalImage && processedImage && !isProcessing && (
                <div className="space-y-6">
                    <BeforeAfterPreview
                        originalImage={originalImage}
                        processedImage={processedImage}
                    />

                    <DownloadButton processedImage={processedImage} />

                    <button
                        onClick={handleReset}
                        className="w-full py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                        {t('button.enhanceAnother')}
                    </button>
                </div>
            )}
        </div>
    )
}
