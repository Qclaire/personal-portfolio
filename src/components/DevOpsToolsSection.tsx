interface ToolCategory {
    name: string;
    tools: Tool[];
}

interface Tool {
    name: string;
    icon?: string;
    description: string;
}

const ToolCard = ({ tool }: { tool: Tool }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
                {tool.icon ? (
                    <div className="w-10 h-10 flex items-center justify-center mr-3">
                        <img
                            src={tool.icon}
                            alt={tool.name}
                            className="max-w-full max-h-full"
                        />
                    </div>
                ) : (
                    <div className="w-10 h-10 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-3">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            ></path>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                        </svg>
                    </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {tool.name}
                </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
                {tool.description}
            </p>
        </div>
    );
};

const DevOpsToolsSection = () => {
    // Sample tools data - replace with your actual expertise
    const toolCategories: ToolCategory[] = [
        {
            name: "CI/CD & Automation",
            tools: [
                {
                    name: "Jenkins",
                    description:
                        "Building, testing, and deploying with automated pipelines. Expert in Jenkinsfile and shared libraries.",
                },
                {
                    name: "GitLab CI",
                    description:
                        "Setting up efficient CI/CD pipelines with GitLab runners and optimized job configurations.",
                },
                {
                    name: "GitHub Actions",
                    description:
                        "Creating workflow templates and reusable actions for automated CI/CD processes.",
                },
                {
                    name: "ArgoCD",
                    description:
                        "Implementing GitOps workflows with declarative continuous delivery for Kubernetes.",
                },
            ],
        },
        {
            name: "Infrastructure as Code",
            tools: [
                {
                    name: "Terraform",
                    description:
                        "Building modular, scalable cloud infrastructure using HCL with multi-environment support.",
                },
                {
                    name: "AWS CloudFormation",
                    description:
                        "Creating nested stacks and cross-stack references for complex AWS architectures.",
                },
                {
                    name: "Ansible",
                    description:
                        "Configuration management and application deployment automation with custom roles and modules.",
                },
                {
                    name: "Pulumi",
                    description:
                        "Infrastructure as code using familiar programming languages like TypeScript and Python.",
                },
            ],
        },
        {
            name: "Container & Orchestration",
            tools: [
                {
                    name: "Docker",
                    description:
                        "Building optimized images with multi-stage builds and best practices for security and efficiency.",
                },
                {
                    name: "Kubernetes",
                    description:
                        "Designing and operating production-grade clusters with advanced networking and security controls.",
                },
                {
                    name: "Helm",
                    description:
                        "Creating and maintaining charts for simplified application deployment and lifecycle management.",
                },
                {
                    name: "Istio",
                    description:
                        "Implementing service mesh for traffic management, observability and security policies.",
                },
            ],
        },
        {
            name: "Cloud Platforms",
            tools: [
                {
                    name: "AWS",
                    description:
                        "Designing scalable architectures using EC2, ECS, EKS, Lambda, and other AWS services.",
                },
                {
                    name: "Microsoft Azure",
                    description:
                        "Building solutions with Azure Kubernetes Service, Azure DevOps, and Azure Functions.",
                },
                {
                    name: "Google Cloud",
                    description:
                        "Implementing infrastructure on GKE, Cloud Functions, and leveraging Google's global network.",
                },
                {
                    name: "OpenStack",
                    description:
                        "Managing private cloud infrastructure with automated provisioning and self-service capabilities.",
                },
            ],
        },
        {
            name: "Monitoring & Observability",
            tools: [
                {
                    name: "Prometheus",
                    description:
                        "Setting up metric collection, alerting rules, and custom exporters for comprehensive monitoring.",
                },
                {
                    name: "Grafana",
                    description:
                        "Creating dashboards with advanced visualizations for real-time monitoring and analysis.",
                },
                {
                    name: "ELK Stack",
                    description:
                        "Implementing centralized logging with Elasticsearch, Logstash, and Kibana for log aggregation and analysis.",
                },
                {
                    name: "Datadog",
                    description:
                        "End-to-end monitoring with APM, infrastructure metrics, and custom integrations.",
                },
            ],
        },
        {
            name: "Security & Compliance",
            tools: [
                {
                    name: "Vault",
                    description:
                        "Managing secrets, encryption keys, and implementing secure service-to-service authentication.",
                },
                {
                    name: "SonarQube",
                    description:
                        "Ensuring code quality and security with automated code reviews and vulnerability scanning.",
                },
                {
                    name: "Open Policy Agent",
                    description:
                        "Implementing policy-as-code for Kubernetes admission control and fine-grained authorization.",
                },
                {
                    name: "Aqua Security",
                    description:
                        "Container security scanning and runtime protection for containerized applications.",
                },
            ],
        },
    ];

    return (
        <section id="devops-tools" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        DevOps Toolchain
                    </h2>
                    <div className="mt-2 h-1 w-24 bg-blue-600 mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My expertise spans across the entire DevOps lifecycle,
                        from source control to monitoring, with deep knowledge
                        of industry-leading tools and platforms.
                    </p>
                </div>

                <div className="space-y-12">
                    {toolCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                                {category.name}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {category.tools.map((tool, toolIndex) => (
                                    <ToolCard key={toolIndex} tool={tool} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevOpsToolsSection;
