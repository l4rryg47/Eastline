# Eastline Shippers - Corporate Website

A modern, responsive corporate website for Eastline Shippers, a leading oil shipping and logistics company. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Friendly**: Built with search engine optimization in mind
- **Contact Form**: Functional contact form with validation
- **Multi-page**: Comprehensive sections including About, Services, Projects, and more

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Icons**: [Heroicons](https://heroicons.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites

- Node.js 14.6.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/eastline-shippers.git
   cd eastline-shippers
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/                    # App router pages and layouts
│   │   ├── about/              # About page
│   │   ├── careers/            # Careers page
│   │   ├── contact/            # Contact page with form
│   │   ├── projects/           # Projects showcase
│   │   ├── services/           # Services overview
│   │   ├── sustainability/     # Sustainability initiatives
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   │
│   ├── components/             # Reusable components
│   │   ├── layout/             # Layout components
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   └── Header.tsx      # Navigation header
│   │   └── ui/                 # UI components
│   │
│   ├── lib/                    # Utility functions and configs
│   └── types/                  # TypeScript type definitions
│
├── public/                     # Static files
│   ├── images/                 # Image assets
│   └── favicon.ico             # Favicon
│
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore file
├── next.config.js              # Next.js configuration
├── package.json                # Project dependencies
├── postcss.config.js           # PostCSS configuration
├── README.md                   # This file
└── tailwind.config.js          # Tailwind CSS configuration
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SITE_URL=https://eastlineshippers.com
# Add other environment variables here
```

## Building for Production

1. Create an optimized production build:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Netlify

1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build your project:
   ```bash
   npm run build
   ```

3. Deploy to Netlify:
   ```bash
   netlify deploy --prod
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com/)

---

© 2023 Eastline Shippers. All rights reserved.
