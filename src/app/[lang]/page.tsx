import Header from '../../components/shared/Header'
import About from '../../components/remove-bg/About'
import FAQ from '../../components/remove-bg/FAQ'
import Footer from '../../components/shared/Footer'
import HomeClient from '../../components/remove-bg/HomeClient'
import ClientWrapper from '../../components/shared/ClientWrapper'
import SEOLeft from '../../components/remove-bg/SEOLeft'
import FeaturesSection from '../../components/remove-bg/FeaturesSection'


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

export default function Home({ params }: { params: { lang: string } }) {
    return (
        <ClientWrapper>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header />

                <main className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6">
                        <SEOLeft />
                        <HomeClient />
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
