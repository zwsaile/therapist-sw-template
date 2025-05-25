# Therapist Practice Website

A modern, accessible, and responsive website template for therapists and counselors, built with [Next.js](https://nextjs.org/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

---

## About

This project provides a professional web presence for therapists, counselors, and mental health professionals. It includes sections for services, approach, qualifications, contact, and more. The design is clean, mobile-friendly, and easy to customize.

## Features

- ⚡️ **Fast**: Built with Next.js for optimal performance and SEO.
- 🎨 **Customizable**: Easily update content, colors, and branding.
- 📱 **Responsive**: Looks great on all devices.
- 🛡️ **Accessible**: Follows accessibility best practices.
- 📅 **Contact Form**: Secure, email-enabled contact form.
- 🧑‍🎓 **Qualifications**: Highlight your credentials and approach.
- 📝 **Easy Deployment**: Deploy to Vercel, Netlify, or your own server.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/therapist-sw-template.git
   cd therapist-sw-template
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add:
   ```
   RESEND_API_KEY=your-resend-api-key
   NOTIFICATION_EMAIL=your-notification-email@example.com
   ```

   These are used for the contact form email functionality.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint

## Project Structure

src/
  app/           # Next.js app directory
  components/    # Reusable React components
  pages/         # (If used) Legacy Next.js pages
  styles/        # Global styles (Tailwind)
  public/        # Static assets (images, favicon, etc.)


## Customization

- **Branding:** Update colors and fonts in `tailwind.config.ts` and `globals.css`.
- **Content:** Edit the components in `src/components/` to update text, images, and sections.
- **Contact Form:** The form uses [Resend](https://resend.com/) for email delivery. Update the API key and notification email in your environment variables.

## Deployment

- Deployed with [Vercel](https://therapist-sw-template-o8llmc1vr-zwsailes-projects.vercel.app/)
