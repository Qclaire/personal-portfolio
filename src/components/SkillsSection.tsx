"use client";

import { useState } from "react";

// Interactive skill meter component
const SkillMeter = ({ 
    name, 
    level, 
    icon,
    color
}: { 
    name: string; 
    level: number;
    icon: string;
    color: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-5 rounded-lg bg-splash bg-opacity-10 border border-accent border-opacity-20 backdrop-blur-sm relative overflow-hidden">
                <div 
                    className="absolute bottom-0 left-0 h-1 transition-all duration-700 ease-out" 
                    style={{ 
                        width: isHovered ? '100%' : `${level}%`,
                        backgroundColor: color,
                        boxShadow: isHovered ? `0 0 10px ${color}, 0 0 20px ${color}` : 'none'
                    }}
                ></div>
                
                <div className="flex items-center space-x-3">
                    <div className="text-2xl" style={{ color }}>{icon}</div>
                    <div className="flex-grow">
                        <div className="flex justify-between">
                            <span className="font-medium">{name}</span>
                            <span 
                                className={`transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-60'}`}
                                style={{ color }}
                            >
                                {level}%
                            </span>
                        </div>
                    </div>
                </div>
                
                {isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-accent opacity-10 animate-pulse"></div>
                )}
            </div>
        </div>
    );
};

// Interactive tool card for the ecosystem grid
const ToolCard = ({ name, icon, category }: { name: string; icon: string; category: string }) => {
    return (
        <div className="card-3d bg-splash bg-opacity-10 rounded-lg border border-accent border-opacity-20 p-4 text-center transition-all duration-300 hover:border-opacity-60 group relative">
            <div className="text-3xl mb-2 group-hover:scale-110 transform transition-all duration-300">{icon}</div>
            <div className="font-medium">{name}</div>
            <div className="text-xs mt-1 opacity-70">{category}</div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
        </div>
    );
};

const SkillsSection = () => {
    // Interactive categories with icons and colors
    const skillCategories = [
        {
            title: "Cloud & Containers",
            icon: "☁️",
            color: "#5B8FB9", // Primary color
            skills: [
                { name: "AWS", level: 95, icon: "☁️" },
                { name: "Kubernetes", level: 90, icon: "⎈" },
                { name: "Google Cloud", level: 85, icon: "☁️" },
                { name: "Azure", level: 80, icon: "☁️" },
                { name: "Docker", level: 95, icon: "🐳" },
            ]
        },
        {
            title: "Automation & CI/CD",
            icon: "⚙️",
            color: "#FF8D29", // Accent color
            skills: [
                { name: "Terraform", level: 95, icon: "🏗️" },
                { name: "Ansible", level: 90, icon: "📜" },
                { name: "Jenkins", level: 90, icon: "🤖" },
                { name: "GitHub Actions", level: 85, icon: "⚡" },
                { name: "GitLab CI/CD", level: 85, icon: "🦊" },
            ]
        },
        {
            title: "Monitoring & Security",
            icon: "🔐",
            color: "#A5DC86", // Highlight color
            skills: [
                { name: "Prometheus", level: 90, icon: "📊" },
                { name: "HashiCorp Vault", level: 85, icon: "🔒" },
                { name: "ELK Stack", level: 85, icon: "🔍" },
                { name: "Datadog", level: 80, icon: "🐶" },
                { name: "Security Services", level: 85, icon: "🛡️" },
            ]
        }
    ];

    // Tools ecosystem with categories
    const toolsEcosystem = [
        { name: "Docker", icon: "🐳", category: "Containerization" },
        { name: "Kubernetes", icon: "⎈", category: "Orchestration" },
        { name: "Terraform", icon: "🏗️", category: "IaC" },
        { name: "Ansible", icon: "📜", category: "Configuration" },
        { name: "Jenkins", icon: "🤖", category: "CI/CD" },
        { name: "GitHub Actions", icon: "⚡", category: "CI/CD" },
        { name: "AWS", icon: "☁️", category: "Cloud" },
        { name: "Azure", icon: "☁️", category: "Cloud" },
        { name: "GCP", icon: "☁️", category: "Cloud" },
        { name: "Prometheus", icon: "📊", category: "Monitoring" },
        { name: "Grafana", icon: "📈", category: "Visualization" },
        { name: "Vault", icon: "🔒", category: "Security" },
        { name: "ArgoCD", icon: "🚢", category: "GitOps" },
        { name: "Istio", icon: "🕸️", category: "Service Mesh" },
        { name: "Helm", icon: "⎮", category: "Package Manager" },
    ];

    // Tab state for interactive view
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="skills" className="py-24 relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 bg-code-pattern"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="text-4xl font-bold mb-4 inline-block">
                        <span className="glow-text">Technical Powers</span>
                    </h2>
                    
                    <div className="h-1 w-24 bg-accent mx-auto rounded-full glow-box mb-6"></div>
                    
                    <p className="text-lg max-w-3xl mx-auto opacity-90">
                        My DevOps toolkit is built on a foundation of automation, scalability, and security.
                        I orchestrate complex systems with code, transforming infrastructure chaos into elegant,
                        reliable solutions that accelerate development and delight teams.
                    </p>
                </div>

                {/* Interactive tabs for skill categories */}
                <div className="mb-12 flex justify-center animate-on-scroll">
                    <div className="inline-flex p-1 rounded-full bg-splash bg-opacity-30 backdrop-blur-sm border border-accent border-opacity-20">
                        {skillCategories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                                    activeTab === index 
                                    ? 'bg-accent text-background shadow-lg' 
                                    : 'hover:bg-splash hover:bg-opacity-50'
                                }`}
                            >
                                <span>{category.icon}</span>
                                <span>{category.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills grid with animated skill bars */}
                <div className="mb-20 animate-on-scroll">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {skillCategories[activeTab].skills.map((skill, index) => (
                            <SkillMeter 
                                key={index} 
                                name={skill.name} 
                                level={skill.level} 
                                icon={skill.icon} 
                                color={skillCategories[activeTab].color}
                            />
                        ))}
                    </div>
                </div>

                {/* Playful tools ecosystem */}
                <div className="animate-on-scroll">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold mb-2">
                            <span className="text-accent">DevOps</span> Toolkit
                        </h3>
                        <p className="opacity-80 max-w-2xl mx-auto">
                            My ecosystem of technologies that power modern cloud infrastructure and automation
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {toolsEcosystem.map((tool, index) => (
                            <ToolCard 
                                key={index} 
                                name={tool.name} 
                                icon={tool.icon} 
                                category={tool.category}
                            />
                        ))}
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-10"></div>
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent rounded-full blur-3xl opacity-10"></div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
