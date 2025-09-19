# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

-   **Responsive Design**: Looks great on all devices from mobile to desktop
-   **Dark Mode Support**: Automatically adapts to user's system preferences
-   **Modern Tech Stack**: Next.js, TypeScript, and Tailwind CSS
-   **Interactive UI**: Smooth scrolling, responsive navigation, and interactive elements
-   **Customizable**: Easy to modify and add your own information

## Sections

-   **Hero**: Introduction and call-to-action buttons
-   **About**: Personal background, education, and experience
-   **Projects**: Showcase of your work with descriptions and links
-   **Skills**: Visual representation of your technical skills
-   **Contact**: Contact form and contact information

## Getting Started

### Prerequisites

-   Node.js 18.x or later
-   npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd personal-portfolio
    ```

2. Install the dependencies:

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

## Customization

### Personal Information

Update the following files to add your personal information:

-   `src/components/HeroSection.tsx`: Update the name, title, and introduction
-   `src/components/AboutSection.tsx`: Update your background and experience
-   `src/components/ProjectsSection.tsx`: Add your projects
-   `src/components/SkillsSection.tsx`: Update your skills and their levels
-   `src/components/ContactSection.tsx`: Add your contact information
-   `src/components/Footer.tsx`: Update the social media links and copyright info

### Images

Place your images in the `public` directory and update the image paths in the components.

### Styling

The project uses Tailwind CSS for styling. You can modify the styles in the respective component files or update the Tailwind configuration in `tailwind.config.js`.

## Built With

-   [Next.js](https://nextjs.org) - React framework for production
-   [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
-   [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
