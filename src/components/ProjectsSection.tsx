import Image from "next/image";

const ProjectCard = ({
    title,
    description,
    technologies,
    imageUrl,
    demoUrl,
    repoUrl,
    icon,
}: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    demoUrl?: string;
    repoUrl?: string;
    icon: string;
}) => {
    return (
        <div className="bg-[#1E1E2E] rounded-lg overflow-hidden shadow-xl border border-accent border-opacity-20 hover:border-opacity-60 transition-all hover:scale-105 backdrop-blur-sm relative group">
            {/* Glow effect on hover */}
            <div className="absolute -inset-px bg-gradient-to-r from-accent to-neon-pink rounded-lg opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
            <div className="relative z-10">
                {/* Top part with decorative header */}
                <div className="h-16 bg-gradient-to-r from-background to-[#1b1b29] flex items-center px-4 border-b border-accent border-opacity-20">
                    <div className="mr-3 text-3xl">{icon}</div>
                    <h3 className="text-xl font-bold text-foreground">
                        {title}
                    </h3>
                </div>
                <div className="p-6">
                    <div className="terminal-like mb-6">
                        <div className="text-terminal-green text-sm mb-1">
                            $ cat project_overview.md
                        </div>
                        <p className="text-gray-300 mb-4">{description}</p>
                    </div>

                    {/* Technologies */}
                    <div className="text-terminal-green text-sm mb-1">
                        $ ls ./technologies
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm font-medium bg-background text-accent border border-accent border-opacity-30 rounded-md hover:border-opacity-80 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="text-terminal-green text-sm mb-2">
                        $ ./actions.sh
                    </div>
                    <div className="flex space-x-4">
                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-glow px-4 py-2 font-medium rounded-md text-center relative group overflow-hidden"
                            >
                                <span className="relative z-10">
                                    View Architecture
                                </span>
                            </a>
                        )}
                        {repoUrl && (
                            <a
                                href={repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-splash bg-opacity-20 backdrop-blur-sm text-foreground font-medium rounded-md hover:bg-opacity-40 transition-all text-center border border-accent border-opacity-30"
                            >
                                <span className="flex items-center">
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View Code
                                </span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    // Projects data with DevOps focused icons
    const projects = [
        {
            title: "Enterprise Kubernetes Platform",
            description:
                "Designed and implemented a multi-cluster Kubernetes platform supporting 200+ microservices with automated scaling, self-healing, and multi-region failover capabilities.",
            technologies: [
                "Kubernetes",
                "Istio",
                "Terraform",
                "ArgoCD",
                "AWS EKS",
            ],
            imageUrl: "/projects/kubernetes.jpg",
            demoUrl: "https://example.com/k8s-architecture",
            repoUrl: "https://github.com/ogyabaah/enterprise-k8s-platform",
            icon: "⎈", // Kubernetes helm icon
        },
        {
            title: "CI/CD Pipeline Automation",
            description:
                "Built a comprehensive CI/CD framework with Jenkins that reduced deployment time from days to minutes, implemented infrastructure validation, and automated security scanning.",
            technologies: ["Jenkins", "Docker", "AWS", "Ansible", "SonarQube"],
            imageUrl: "/projects/cicd.jpg",
            demoUrl: "https://example.com/cicd-demo",
            repoUrl: "https://github.com/ogyabaah/cicd-automation",
            icon: "🔄", // CI/CD icon
        },
        {
            title: "Cloud Cost Optimization",
            description:
                "Developed and implemented a cloud cost optimization strategy that identified unused resources, rightsized infrastructure, and implemented auto-scaling policies, resulting in 40% cost reduction.",
            technologies: [
                "AWS",
                "Terraform",
                "Python",
                "CloudWatch",
                "Grafana",
            ],
            imageUrl: "/projects/cloud-cost.jpg",
            demoUrl: "https://example.com/cost-optimization",
            repoUrl: "https://github.com/ogyabaah/cloud-cost-optimization",
            icon: "💰", // Cost savings icon
        },
        {
            title: "Zero-Trust Security Implementation",
            description:
                "Architected a zero-trust security model with Vault for secret management, implementing a comprehensive IAM strategy, network policies, and automated compliance checks.",
            technologies: [
                "HashiCorp Vault",
                "AWS IAM",
                "OPA",
                "Kubernetes",
                "Terraform",
            ],
            imageUrl: "/projects/security.jpg",
            demoUrl: "https://example.com/zero-trust-architecture",
            repoUrl: "https://github.com/ogyabaah/zero-trust-implementation",
            icon: "🔒", // Security lock icon
        },
        {
            title: "Multi-Cloud Disaster Recovery",
            description:
                "Designed and implemented a multi-cloud disaster recovery solution that provided automatic failover between AWS and GCP with RPO < 5 minutes and RTO < 15 minutes.",
            technologies: ["AWS", "GCP", "Terraform", "Ansible", "GitOps"],
            imageUrl: "/projects/dr.jpg",
            demoUrl: "https://example.com/disaster-recovery",
            repoUrl: "https://github.com/ogyabaah/multi-cloud-dr",
            icon: "🌩️", // Cloud with lightning icon
        },
        {
            title: "Observability Platform",
            description:
                "Built a comprehensive monitoring and observability solution using the Prometheus ecosystem, with custom dashboards, automated alerts, and SLO tracking across all services.",
            technologies: [
                "Prometheus",
                "Grafana",
                "Loki",
                "OpenTelemetry",
                "Alertmanager",
            ],
            imageUrl: "/projects/observability.jpg",
            demoUrl: "https://example.com/observability-demo",
            repoUrl: "https://github.com/ogyabaah/observability-platform",
            icon: "📊", // Chart icon for monitoring
        },
    ];

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute w-full h-full top-0 left-0 z-0">
                <div className="circuit-pattern absolute inset-0 opacity-10"></div>
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-20"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-pink rounded-full blur-[120px] opacity-10"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-1.5 bg-splash bg-opacity-20 backdrop-blur-sm rounded-full">
                        <span className="text-accent text-sm font-semibold">
                            Infrastructure Deployments
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold mb-4 glow-text">
                        Featured <span className="text-accent">Projects</span>
                    </h2>

                    <div className="mt-4 mb-6 flex justify-center">
                        <div className="flex items-center">
                            <div className="h-px w-8 bg-accent opacity-40"></div>
                            <div className="mx-2 text-terminal-green text-2xl">
                                {"</>"}
                            </div>
                            <div className="h-px w-8 bg-accent opacity-40"></div>
                        </div>
                    </div>

                    <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
                        Highlighted below are key infrastructure and automation
                        projects I've architected, showcasing scalable solutions
                        that have transformed deployment workflows and driven
                        significant business outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/ogyabaah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-splash bg-opacity-20 backdrop-blur-sm border border-accent border-opacity-30 text-foreground font-medium rounded-md hover:bg-opacity-40 hover:border-opacity-60 transition-all"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
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
                        Browse Full Repository
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
