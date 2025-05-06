import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      boxShadow: {
        elevated: '0 4px 16px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.08), 0 0.5px 1.5px 0 rgba(0,0,0,0.04)',
        'elevated-lg': '0 8px 32px 0 rgba(0,0,0,0.12), 0 2px 8px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.08)',
        'elevated-dark': '0 2px 8px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.14), 0 0.5px 1.5px 0 rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}
export default config 