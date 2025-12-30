# CraftBg.click - Frontend

A modern, multilingual web application for background removal and image enhancement, built with Next.js 14 (App Router) and TypeScript.

## 🌟 Features

- **Background Removal**: AI-powered background removal using remove.bg API
- **Image Enhancement**: Upscale and enhance images using Real-ESRGAN AI
- **Multilingual Support**: 7 languages (English, Hindi, Indonesian, Bengali, Urdu, Filipino, Vietnamese)
- **Responsive Design**: Mobile-first, fully responsive UI
- **Dark Mode**: Built-in dark mode support
- **SEO Optimized**: Complete SEO metadata with hreflang and canonical tags

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Internationalization**: Custom i18n implementation
- **API Integration**: Axios

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend server running (see backend README)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

### Static Export
```bash
npm run build
```
Static files will be generated in the `out/` directory.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── [lang]/            # Internationalized routes
│   │   │   ├── page.tsx       # Remove Background page
│   │   │   ├── image-enhancer/# Image Enhancer page
│   │   │   └── layout.tsx     # Language-specific layout
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── remove-bg/         # Background removal components
│   │   ├── image-enhancer/    # Image enhancement components
│   │   └── shared/            # Shared components
│   └── lib/                   # Utilities and configs
│       ├── i18n.tsx          # Internationalization
│       └── api.ts            # API client
├── public/                    # Static assets
├── .env.example              # Environment template
├── next.config.mjs           # Next.js configuration
├── tailwind.config.js        # Tailwind CSS config
└── tsconfig.json             # TypeScript config
```

## 🌐 Supported Languages

- 🇬🇧 English (en)
- 🇮🇳 Hindi (hi)
- 🇮🇩 Indonesian (id)
- 🇧🇩 Bengali (bn)
- 🇵🇰 Urdu (ur)
- 🇵🇭 Filipino (fil)
- 🇻🇳 Vietnamese (vi)

## 🔗 API Endpoints

The frontend connects to the backend API:

- `POST /api/remove-bg` - Remove background from image
- `POST /api/enhance-image` - Enhance and upscale image

## 🎨 Key Components

### Remove Background
- `HomeClient.tsx` - Main client component with state management
- `UploadZone.tsx` - Drag & drop file upload
- `BeforeAfterPreview.tsx` - Image comparison view
- `ProcessingSpinner.tsx` - Loading state

### Image Enhancer
- `ImageEnhancerClient.tsx` - Main enhancer component
- `BeforeAfterToggle.tsx` - Toggle between original/enhanced
- `DownloadButton.tsx` - Download enhanced image

### Shared
- `Header.tsx` - Navigation header
- `Footer.tsx` - Footer with links
- `FeaturesSection.tsx` - Feature highlights
- `FAQ.tsx` - Frequently asked questions
- `About.tsx` - About section with SEO content

## 🔧 Configuration

### Next.js Config
- Static export enabled
- Image optimization disabled for static export
- Trailing slash enabled

### Tailwind CSS
- Custom color palette
- Dark mode support
- Responsive breakpoints

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:5000` |

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Static Hosting (Netlify, GitHub Pages, etc.)
```bash
npm run build
# Deploy the 'out/' directory
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🐛 Known Issues

- None currently

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js 14
