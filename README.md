# NextJS 16 Started

This project is a minimalist starter template for building modern applications using [Next.js 16](https://nextjs.org/), [React 19](https://react.dev/), and [Tailwind CSS 4](https://tailwindcss.com/). It comes pre-configured with best practices, TypeScript, automatic formatting, and linting.

## ✨ Features

- Ready-to-use structure with Next.js 16 (App Router)
- TypeScript support
- Styling with Tailwind CSS 4
- Optimized fonts using `next/font` (Geist and Geist Mono)

## 🚀 Getting Started

Install the dependencies:

```bash
pnpm install
# or
npm run install
# or
yarn install
```

Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

- `src/app/`: Application pages and layouts
- `src/app/layout.tsx`: Root layout component (applies to all pages)
- `src/app/(home)/page.tsx`: Home page component
- `src/lib/fonts.ts`: Geist font configuration
- `src/styles/globals.css`: Global styles with Tailwind CSS

## 🛠️ Useful Scripts

- `dev`: Starts the development server
- `build`: Builds the application for production
- `start`: Starts the production server
- `check-types`: Runs TypeScript to check for type errors

## ☁️ Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/), but you can use any Node.js-compatible service.
