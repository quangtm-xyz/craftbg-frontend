/** @type {import('next').NextConfig} */
const nextConfig = {
    // Removed 'output: export' for Vercel deployment
    // Vercel handles Next.js apps natively without static export
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
}

export default nextConfig
