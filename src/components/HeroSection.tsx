"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Client-side only floating icons component
const FloatingIcons = () => {
    // Pre-defined positions to avoid hydration mismatch
    const iconPositions = [
        { top: "30%", left: "66%", duration: "9s" },
        { top: "35%", left: "29%", duration: "7.8s" },
        { top: "53%", left: "50%", duration: "9.9s" },
        { top: "25%", left: "11%", duration: "4.1s" },
        { top: "82%", left: "78%", duration: "6.5s" },
        { top: "44%", left: "56%", duration: "7s" }
    ];

    const iconTypes = ['k8s', 'docker', 'aws', 'jenkins', 'terraform', 'git'];
    
    return (
        <>
            {iconTypes.map((icon, i) => (
                <div 
                    key={i}
                    className="absolute floating" 
                    style={{
                        top: iconPositions[i].top,
                        left: iconPositions[i].left,
                        opacity: 0.2,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: iconPositions[i].duration
                    }}
                >
                    <div className="text-4xl">
                        {icon === 'k8s' && '⎈'}
                        {icon === 'docker' && '🐳'}
                        {icon === 'aws' && '☁️'}
                        {icon === 'jenkins' && '🤖'}
                        {icon === 'terraform' && '🏗️'}
                        {icon === 'git' && '⑂'}
                    </div>
                </div>
            ))}
        </>
    );
};

const HeroSection = () => {
    const [loaded, setLoaded] = useState(false);
    const [terminalLines, setTerminalLines] = useState<string[]>([]);
    const [currentCommand, setCurrentCommand] = useState('');
    const [isUserScrolling, setIsUserScrolling] = useState(false);
    
    const commands = [
        { cmd: "whoami", result: "oswald-gyabaah\nlead-devops-engineer" },
        { cmd: "uname -a", result: "DevOps Pro Kernel v4.2 OSG #1 SMP Continuous Delivery" },
        { cmd: "ls ~/skills", result: "python/  django/  terraform/  kubernetes/  aws/  docker/  jenkins/  ansible/  prometheus/  grafana/" },
        { cmd: "cat ~/about.txt", result: "Hi, I'm Oswald - I automate deployments by day and debug mysterious production issues by night.\nTurning coffee into infrastructure code since 2015.\nSpecialist in making machines do what humans should never have to." },
        { cmd: "ps aux | grep hobbies", result: "oswald    1337  5.0  3.8  gaming\noswald    2468 10.5  2.3  cooking\noswald    3579  8.2  4.5  tinkering-hardware\noswald    4680  7.1  3.2  reading-tech-blogs" },
        { cmd: "df -h", result: "Filesystem      Size  Used  Avail  Use%  Mounted on\n/dev/brain       100G   95G     5G   95%  /coffee\n/dev/ssd1        500G  380G   120G   76%  /projects\n/dev/passion     1.0T  750G   250G   75%  /innovation" },
        { cmd: "uptime", result: " 08:42:13 up 10 years, 5 users, load average: automation(0.65), scalability(0.42), reliability(0.98)" },
        { cmd: "history | tail -n 5", result: "126  scaled kubernetes cluster across multiple regions\n127  optimized CI pipeline, reduced build time by 70%\n128  implemented infrastructure as code for entire platform\n129  designed zero-downtime deployment strategy\n130  orchestrated migration to microservices architecture" },
        { cmd: "ping -c1 future.me", result: "PING future.me (2035.0.0.1): 56 data bytes\n64 bytes from 2035.0.0.1: icmp_seq=0 ttl=64 time=0.5 ms\n--- future.me ping statistics ---\n1 packets transmitted, 1 packets received, 0.0% packet loss\nResponse: \"connected: building scalable systems\"" },
        { cmd: "top", result: "Tasks:   3 total\n  PID USER      PR  PRIORITY   %CPU  COMMAND\n    1 oswald    20  Automation  85.0  ./create_scalable_infra\n    2 oswald    20  Scalability 78.5  ./optimize_performance\n    3 oswald    20  Reliability 92.3  ./ensure_high_availability" },
        { cmd: "curl ifconfig.me", result: "{\n  \"ip\": \"2001:db8::1\",\n  \"location\": \"Ghana\",\n  \"status\": \"Building the future\"\n}" },
        { cmd: "help", result: "Available commands:\n- whoami: Display my identity\n- uname -a: Show system information\n- ls ~/skills: List my technical skills\n- cat ~/about.txt: Read about me\n- ps aux | grep hobbies: View my interests\n- df -h: Check my knowledge capacity\n- uptime: View my experience duration\n- history | tail -n 5: See recent achievements\n- ping -c1 future.me: Check my future prospects\n- top: View my top priorities\n- curl ifconfig.me: Get my current status\n- help: Show this help menu" }
    ];

    useEffect(() => {
        setLoaded(true);
        
        const intervals: NodeJS.Timeout[] = [];
        const timeouts: NodeJS.Timeout[] = [];
        
        // Helper to add timeout to cleanup list
        const addTimeout = (callback: () => void, delay: number): NodeJS.Timeout => {
            const timeout = setTimeout(callback, delay);
            timeouts.push(timeout);
            return timeout;
        };
        
        // Helper to add interval to cleanup list
        const addInterval = (callback: () => void, delay: number): NodeJS.Timeout => {
            const interval = setInterval(callback, delay);
            intervals.push(interval);
            return interval;
        };
        
        // Smart auto-scroll that only scrolls if user is already at bottom
        const smartAutoScroll = () => {
            const terminalContent = document.querySelector('.terminal-content');
            if (terminalContent && !isUserScrolling) {
                const { scrollTop, scrollHeight, clientHeight } = terminalContent;
                const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px tolerance
                
                if (isAtBottom) {
                    terminalContent.scrollTop = scrollHeight;
                }
            }
        };
        
        // Handle scroll events to detect user scrolling
        const handleScroll = () => {
            const terminalContent = document.querySelector('.terminal-content');
            if (terminalContent) {
                const { scrollTop, scrollHeight, clientHeight } = terminalContent;
                const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
                setIsUserScrolling(!isAtBottom);
            }
        };
        
        // Add scroll event listener
        const terminalContent = document.querySelector('.terminal-content');
        if (terminalContent) {
            terminalContent.addEventListener('scroll', handleScroll);
        }
        
        // Function to simulate typing one character at a time
        const typeCommand = (text: string, callback?: () => void, speed = 70): void => {
            let i = 0;
            
            const typeInterval = addInterval(() => {
                if (i < text.length) {
                    setCurrentCommand(prev => prev + text.charAt(i));
                    i++;
                } else {
                    clearInterval(typeInterval);
                    if (callback) callback();
                }
                
                // Smart auto-scroll only if user is at bottom
                smartAutoScroll();
            }, speed);
        };
        
        // Function to simulate typing results line by line
        const typeResult = (text: string, onComplete?: () => void, speed = 30): void => {
            let i = 0;
            let typedText = '';
            let currentLineIndex = -1;
            
            const typeInterval = addInterval(() => {
                if (i < text.length) {
                    typedText += text.charAt(i);
                    i++;
                    
                    setTerminalLines(prev => {
                        const newLines = [...prev];
                        if (currentLineIndex === -1) {
                            // Add new line for this result
                            newLines.push(typedText);
                            currentLineIndex = newLines.length - 1;
                        } else {
                            // Update the current line
                            newLines[currentLineIndex] = typedText;
                        }
                        return newLines;
                    });
                } else {
                    clearInterval(typeInterval);
                    if (onComplete) onComplete();
                }
                
                // Smart auto-scroll only if user is at bottom
                smartAutoScroll();
            }, speed);
        };
        
        // Execute commands with realistic typing animation
        let currentCmdIndex = 0;
        
        const executeNextCommand = () => {
            if (currentCmdIndex < commands.length) {
                const command = commands[currentCmdIndex];
                
                // Start typing the command
                setCurrentCommand('');
                typeCommand(command.cmd, () => {
                    // Command finished typing, add a small delay before showing result
                    addTimeout(() => {
                        // Add the command to terminal lines
                        setTerminalLines(prev => [...prev, `$ ${command.cmd}`]);
                        setCurrentCommand('');
                        
                        // Start typing the result line by line
                        const resultLines = command.result.split('\n');
                        let lineIndex = 0;
                        
                        const typeNextResultLine = () => {
                            if (lineIndex < resultLines.length) {
                                typeResult(
                                    resultLines[lineIndex],
                                    () => {
                                        lineIndex++;
                                        if (lineIndex < resultLines.length) {
                                            addTimeout(typeNextResultLine, 100);
                                        } else {
                                            // Move to the next command
                                            currentCmdIndex++;
                                            addTimeout(executeNextCommand, 500);
                                        }
                                    }
                                );
                            }
                        };
                        
                        // Start typing result after a pause
                        addTimeout(typeNextResultLine, 300);
                        
                    }, 300); // Short pause after command is typed
                });
            }
        };
        
        // Start the first command after a delay
        addTimeout(() => {
            executeNextCommand();
        }, 1000);
        
        // Clean up all intervals and timeouts
        return () => {
            intervals.forEach(interval => clearInterval(interval));
            timeouts.forEach(timeout => clearTimeout(timeout));
            
            // Remove scroll event listener
            const terminalContent = document.querySelector('.terminal-content');
            if (terminalContent) {
                terminalContent.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <section id="home" className="min-h-screen pt-16 pb-12 flex items-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute w-full h-full top-0 left-0 z-0">
                <div className="circuit-pattern absolute inset-0 opacity-20"></div>
                <div className="gradient-overlay absolute inset-0 bg-gradient-to-br from-background via-background to-transparent"></div>
                
                {/* Using client-side floating icons component */}
                <FloatingIcons />
            </div>
            
            <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex flex-col items-center justify-center min-h-[70vh]">
                    {/* Centered Terminal Animation */}
                    <div className="w-full max-w-4xl mx-auto relative">
                        <div className="terminal-window bg-black rounded-lg shadow-2xl border border-green-400 border-opacity-30 overflow-hidden">
                            {/* Terminal Header */}
                            <div className="terminal-header flex items-center bg-black px-4 py-2 border-b border-green-400 border-opacity-20">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-center flex-1 text-sm text-green-400">oswald@devops:~/portfolio</div>
                            </div>
                            
                            {/* Terminal Content */}
                            <div className="terminal-content p-4 font-mono text-sm h-96 overflow-y-auto bg-black">
                                <div className="text-green-400 mb-2"># Welcome to Oswald's DevOps Terminal</div>
                                <div className="text-gray-500 mb-2">Last login: {new Date().toLocaleString()} from reality</div>
                                {terminalLines.map((line, i) => (
                                    <div key={i} className={`mb-1 ${line.startsWith('$') ? 'text-green-400' : 'text-gray-500'}`}>
                                        {line}
                                    </div>
                                ))}
                                {currentCommand && (
                                    <div className="flex items-center">
                                        <span className="text-green-400 mr-2">$</span>
                                        <span className="text-green-400 typing-effect">{currentCommand}</span>
                                    </div>
                                )}
                                {!currentCommand && terminalLines.length === commands.length * 2 && (
                                    <div className="flex items-center">
                                        <span className="text-green-400 mr-2">$</span>
                                        <span className="text-green-400 cursor-blink">_</span>
                                    </div>
                                )}
                            </div>
                            
                            {/* Scroll to bottom indicator */}
                            {isUserScrolling && (
                                <div className="absolute bottom-2 right-2 bg-green-400 text-black px-2 py-1 rounded text-xs animate-pulse cursor-pointer"
                                     onClick={() => {
                                         const terminalContent = document.querySelector('.terminal-content');
                                         if (terminalContent) {
                                             terminalContent.scrollTop = terminalContent.scrollHeight;
                                         }
                                     }}>
                                    ↓ New content below
                                </div>
                            )}
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-10 animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400 rounded-full blur-3xl opacity-5"></div>
                    </div>
                </div>
                
                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm mb-2 opacity-70">Scroll Down</span>
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
