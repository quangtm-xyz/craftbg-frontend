import { redirect } from 'next/navigation'

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

export default function RemoveBackgroundPage({ params }: { params: { lang: string } }) {
    redirect(`/${params.lang}`)
}
