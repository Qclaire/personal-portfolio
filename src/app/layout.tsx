import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Ubuntu, Space_Grotesk } from "next/font/google"; // More playful fonts
import "./globals.css";
import Script from "next/script";
import BackgroundParticles from "@/components/BackgroundParticles";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

const ubuntu = Ubuntu({
    weight: ["400", "500", "700"],
    variable: "--font-ubuntu",
    subsets: ["latin"],
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Oswald Gyabaah | DevOps Engineer Portfolio",
    description:
        "A playful showcase of Oswald Gyabaah's DevOps expertise and engineering leadership",
    keywords: [
        "Oswald Gyabaah",
        "DevOps",
        "Engineering",
        "Portfolio",
        "Creative",
        "Vibrant",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${spaceGrotesk.variable} font-ubuntu antialiased`}
            >
                {/* Animated Background Particles - Client Component */}
                <BackgroundParticles />

                {/* Main Content */}
                <div className="perspective-container">{children}</div>

                {/* Add script for handling interactive elements */}
                <Script id="interactive-elements">{`
                    // Add scroll reveal animation
                    document.addEventListener('DOMContentLoaded', () => {
                        const observerOptions = {
                            threshold: 0.1,
                            rootMargin: '0px 0px -50px 0px'
                        };
                        
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    entry.target.classList.add('animate-in');
                                    observer.unobserve(entry.target);
                                }
                            });
                        }, observerOptions);
                        
                        document.querySelectorAll('.animate-on-scroll').forEach(el => {
                            observer.observe(el);
                        });
                    });
                `}</Script>
            </body>
        </html>
    );
}
