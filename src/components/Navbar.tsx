"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    // Navigation items with icons to make it more playful
    const navItems = [
        { name: "About", href: "#about", icon: "👨‍💻" },
        { name: "Certifications", href: "#certifications", icon: "🏆" },
        { name: "Projects", href: "#projects", icon: "🚀" },
        { name: "Skills", href: "#skills", icon: "🛠️" },
        { name: "DevOps Tools", href: "#devops-tools", icon: "⚙️" },
        { name: "Contact", href: "#contact", icon: "📬" },
    ];

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            // Set navbar background style when scrolled
            setIsScrolled(window.scrollY > 50);

            // Find the current active section
            const sections = navItems.map(item => item.href.substring(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            } else if (window.scrollY < 100) {
                setActiveSection("home");
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 backdrop-blur-md ${
            isScrolled ? 'bg-opacity-80 bg-background py-2' : 'bg-transparent py-4'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Area with Terminal-like display */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-accent group relative perspective"
                        >
                            <span className="terminal-text px-4 py-2 rounded flex items-center">
                                <span className="mr-2">$</span>
                                <span className="typing-text">Oswald_Gyabaah</span>
                                <span className="cursor-blink">_</span>
                            </span>
                            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 rounded transition-opacity duration-300"></div>
                        </Link>
                    </div>

                    {/* Desktop Menu - Interactive Orb Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <div className="nav-orbs flex space-x-3 bg-opacity-20 bg-splash px-6 py-3 rounded-full">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`nav-orb flex flex-col items-center group relative ${
                                        activeSection === item.href.substring(1) ? 'active' : ''
                                    }`}
                                >
                                    <div className={`orb-icon text-xl mb-1 transition-all duration-300 transform ${
                                        activeSection === item.href.substring(1) 
                                            ? 'scale-125 text-accent' 
                                            : 'text-foreground hover:scale-110 hover:text-secondary'
                                    }`}>
                                        {item.icon}
                                    </div>
                                    <span 
                                        className={`text-xs transition-all duration-300 ${
                                            activeSection === item.href.substring(1) 
                                                ? 'opacity-100 text-accent' 
                                                : 'opacity-70 group-hover:opacity-100'
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                    {activeSection === item.href.substring(1) && (
                                        <span className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-accent rounded-full transform -translate-x-1/2"></span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle - Creative Version */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-10 h-10 relative focus:outline-none"
                            aria-label="Toggle navigation menu"
                        >
                            <div className="block w-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span 
                                    className={`block absolute h-0.5 w-8 text-terminal-green bg-current transform transition duration-500 ease-in-out ${
                                        isMenuOpen ? 'rotate-45' : '-translate-y-2'
                                    }`}
                                ></span>
                                <span 
                                    className={`block absolute h-0.5 w-8 text-terminal-green bg-current transform transition duration-500 ease-in-out ${
                                        isMenuOpen ? 'opacity-0' : ''
                                    }`}
                                ></span>
                                <span 
                                    className={`block absolute h-0.5 w-8 text-terminal-green bg-current transform transition duration-500 ease-in-out ${
                                        isMenuOpen ? '-rotate-45' : 'translate-y-2'
                                    }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Creative Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-4 pb-8 backdrop-blur-lg bg-background bg-opacity-90 border-b-2 border-accent border-opacity-30">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`terminal-command block px-4 py-3 mb-1 rounded transition-all ${
                                    activeSection === item.href.substring(1)
                                        ? 'bg-splash bg-opacity-50 text-accent' 
                                        : 'hover:bg-splash hover:bg-opacity-20'
                                }`}
                            >
                                <div className="flex items-center">
                                    <span className="text-terminal-green mr-2">&gt;</span>
                                    <span className="mr-3 text-xl">{item.icon}</span>
                                    <span>{item.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
            
            {/* Visual indicator for active section */}
            <div className="hidden md:block h-0.5 bg-accent max-w-7xl mx-auto relative">
                <div 
                    className="h-full absolute transition-all duration-300 glow-bar"
                    style={{
                        left: `${navItems.findIndex(item => item.href.substring(1) === activeSection) * 16.66}%`,
                        width: '16.66%',
                        boxShadow: '0 0 10px var(--accent), 0 0 20px var(--accent)'
                    }}
                ></div>
            </div>
        </nav>
    );
};

export default Navbar;
