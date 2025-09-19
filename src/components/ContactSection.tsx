"use client";

import { useState } from "react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success?: boolean;
        message?: string;
    } | null>(null);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Mock submission with DevOps themed messages
        try {
            // Simulate API call with stages like a CI/CD pipeline
            await new Promise(resolve => setTimeout(resolve, 500)); // Quick initial check
            
            // Show pipeline stages
            const stages = [
                { stage: "initialize", duration: 300 },
                { stage: "validate", duration: 400 },
                { stage: "build", duration: 500 },
                { stage: "deploy", duration: 300 }
            ];
            
            for (const { stage, duration } of stages) {
                await new Promise(resolve => setTimeout(resolve, duration));
            }

            // Simulated successful response
            setSubmitStatus({
                success: true,
                message: "Pipeline completed successfully! Message deployed to inbox. Pull request opened.",
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setSubmitStatus({
                success: false,
                message:
                    "Pipeline failed: Message deployment encountered an error. Check your connection and retry.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute w-full h-full top-0 left-0 z-0">
                <div className="circuit-pattern absolute inset-0 opacity-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-pink rounded-full blur-[120px] opacity-10"></div>
                <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent rounded-full blur-[150px] opacity-10"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-splash bg-opacity-20 backdrop-blur-sm rounded-full">
                        <span className="text-accent text-sm font-semibold">Initialize Connection</span>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-4 glow-text">
                        Open a <span className="text-accent">Pull Request</span>
                    </h2>
                    
                    <div className="mt-4 mb-6 flex justify-center">
                        <div className="flex items-center">
                            <div className="h-px w-8 bg-accent opacity-40"></div>
                            <div className="mx-2 text-terminal-green text-2xl">{"<-->"}</div>
                            <div className="h-px w-8 bg-accent opacity-40"></div>
                        </div>
                    </div>
                    
                    <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
                        Ready to collaborate on something amazing? Submit a request below
                        or connect through one of my communication channels.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="backdrop-blur-sm bg-background bg-opacity-30 p-8 rounded-lg border border-accent border-opacity-20">
                        <h3 className="text-2xl font-bold mb-6 text-foreground">
                            <span className="text-terminal-green">$</span> contact --info
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                                <div className="flex-shrink-0 mt-1 text-accent">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="ml-3 text-base">
                                    <p className="font-medium text-accent">
                                        Email
                                    </p>
                                    <p className="mt-1 text-foreground">
                                        oswald.gyabaah@example.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                                <div className="flex-shrink-0 mt-1 text-accent">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="ml-3 text-base">
                                    <p className="font-medium text-accent">
                                        Phone
                                    </p>
                                    <p className="mt-1 text-foreground">+233 xx xxx xxxx</p>
                                </div>
                            </div>

                            <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                                <div className="flex-shrink-0 mt-1 text-accent">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="ml-3 text-base">
                                    <p className="font-medium text-accent">
                                        Location
                                    </p>
                                    <p className="mt-1 text-foreground">Accra, Ghana</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-bold mb-4 text-foreground">
                                <span className="text-terminal-green">$</span> git remote add origin
                            </h3>
                            <div className="flex space-x-5">
                                <a
                                    href="https://github.com/ogyabaah"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-splash bg-opacity-30 hover:bg-opacity-50 transition-all text-accent hover:scale-110 transform"
                                >
                                    <span className="sr-only">GitHub</span>
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="https://linkedin.com/in/oswaldgyabaah"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full flex items-center justify-center bg-splash bg-opacity-30 hover:bg-opacity-50 transition-all text-accent hover:scale-110 transform"
                                >
                                    <span className="sr-only">LinkedIn</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1E1E2E] rounded-lg p-8 border border-accent border-opacity-20 shadow-lg backdrop-blur-sm relative group">
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-px bg-gradient-to-r from-accent to-neon-pink rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 text-foreground">
                                <span className="text-terminal-green">$</span> ./submit-message.sh
                            </h3>
                            
                            <div className="terminal-like mb-4">
                                <div className="text-terminal-green text-sm font-mono mb-1"># Create a new pipeline for collaboration</div>
                            </div>

                            <form onSubmit={handleSubmit} className="font-mono">
                                <div className="mb-6">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-accent mb-1"
                                    >
                                        NAME=
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-background border border-accent border-opacity-40 rounded-md focus:border-neon-pink focus:border-opacity-70 text-foreground placeholder-gray-500"
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-accent mb-1"
                                    >
                                        EMAIL=
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-background border border-accent border-opacity-40 rounded-md focus:border-neon-pink focus:border-opacity-70 text-foreground placeholder-gray-500"
                                        required
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-accent mb-1"
                                    >
                                        SUBJECT=
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-background border border-accent border-opacity-40 rounded-md focus:border-neon-pink focus:border-opacity-70 text-foreground placeholder-gray-500"
                                        required
                                        placeholder="Let's collaborate"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-accent mb-1"
                                    >
                                        MESSAGE=
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-background border border-accent border-opacity-40 rounded-md focus:border-neon-pink focus:border-opacity-70 text-foreground placeholder-gray-500"
                                        required
                                        placeholder="I'd like to discuss an opportunity..."
                                    ></textarea>
                                </div>

                                {submitStatus && (
                                    <div
                                        className={`mb-6 p-4 rounded-md font-mono ${
                                            submitStatus.success
                                                ? "bg-terminal-green bg-opacity-20 text-terminal-green"
                                                : "bg-red-900 bg-opacity-20 text-red-400"
                                        }`}
                                    >
                                        {submitStatus.success ? '✅ ' : '❌ '}
                                        {submitStatus.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`btn-glow w-full px-6 py-3 font-medium rounded-md text-center relative overflow-hidden ${
                                        isSubmitting
                                            ? "opacity-70 cursor-not-allowed"
                                            : ""
                                    }`}
                                >
                                    <span className="relative z-10">
                                        {isSubmitting ? 
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                ./sending-message.sh
                                            </span> : 
                                            'git push --message'
                                        }
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
