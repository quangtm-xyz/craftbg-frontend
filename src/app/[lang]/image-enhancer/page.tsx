import Header from '@/components/shared/Header'
import About from '@/components/image-enhancer/About'
import FAQ from '@/components/image-enhancer/FAQ'
import Footer from '@/components/shared/Footer'
import ClientWrapper from '@/components/shared/ClientWrapper'
import FeaturesSection from '@/components/image-enhancer/FeaturesSection'
import ImageEnhancerClient from '@/components/image-enhancer/ImageEnhancerClient'
import SEOLeftEnhancer from '@/components/image-enhancer/SEOLeftEnhancer'


export async function generateStaticParams() {
    return [
        { lang: 'en' },
        { lang: 'vi' },
        { lang: 'hi' },
        { lang: 'id' },
        { lang: 'bn' },
        { lang: 'ur' },
        { lang: 'tl' },
    ]
}

export default function ImageEnhancerPage({ params }: { params: { lang: string } }) {
    return (
        <ClientWrapper>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header />

                <main className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6">
                        <SEOLeftEnhancer />
                        <ImageEnhancerClient />
                    </div>

                    <FeaturesSection />

                    <About />
                    <FAQ />
                </main>

                <Footer />
            </div>
        </ClientWrapper>
    )
}

export async function generateMetadata({ params }: { params: { lang: string } }) {
    // TODO: Use i18n for metadata in Phase 2
    return {
        title: 'Free AI Image Enhancer - Upscale & Improve Photo Quality Online',
        description: 'Enhance image quality for free with AI. Upscale, denoise, sharpen photos online. Supports JPG, PNG, WebP. No signup needed.',
    }
}
