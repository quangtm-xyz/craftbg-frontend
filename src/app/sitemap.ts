import type { MetadataRoute } from 'next'

const languages = ['en', 'vi', 'hi', 'id', 'bn', 'ur', 'tl']
const baseUrl = 'https://www.craftbg.click'

export default function sitemap(): MetadataRoute.Sitemap {
    const routes: MetadataRoute.Sitemap = []

    languages.forEach((lang) => {
        const langPath = lang === 'en' ? '' : `/${lang}`

        routes.push({
            url: `${baseUrl}${langPath}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        })

        routes.push({
            url: `${baseUrl}${langPath}/remove-background`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        })
    })

    return routes
}
