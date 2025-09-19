import Image from "next/image";

interface Certification {
    title: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
    iconPath?: string;
    badgePath?: string;
}

const CertificationCard = ({
    certification,
}: {
    certification: Certification;
}) => {
    const { title, issuer, date, credentialUrl, badgePath } = certification;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 transition-all hover:shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
                {badgePath ? (
                    <div className="w-16 h-16 relative mr-4">
                        <Image
                            src={badgePath}
                            alt={`${title} certification badge`}
                            fill
                            style={{ objectFit: "contain" }}
                            className="rounded-md"
                        />
                    </div>
                ) : (
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-md flex items-center justify-center text-blue-600 dark:text-blue-300 mr-4">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            ></path>
                        </svg>
                    </div>
                )}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {issuer}
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                    {date}
                </span>
                {credentialUrl && (
                    <a
                        href={credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                    >
                        Verify
                        <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            ></path>
                        </svg>
                    </a>
                )}
            </div>
        </div>
    );
};

const CertificationsSection = () => {
    // Sample certifications data - replace with your actual certifications
    const certifications: Certification[] = [
        {
            title: "AWS Certified DevOps Engineer - Professional",
            issuer: "Amazon Web Services",
            date: "Issued Sep 2023 · Expires Sep 2026",
            credentialUrl: "https://www.credly.com/badges/example",
            badgePath: "/certifications/aws-devops-professional.png", // Replace with actual path when available
        },
        {
            title: "Certified Kubernetes Administrator (CKA)",
            issuer: "Cloud Native Computing Foundation",
            date: "Issued Mar 2023 · Expires Mar 2026",
            credentialUrl: "https://www.credly.com/badges/example",
            badgePath: "/certifications/kubernetes-cka.png", // Replace with actual path when available
        },
        {
            title: "Microsoft Certified: Azure DevOps Engineer Expert",
            issuer: "Microsoft",
            date: "Issued Jun 2022 · Expires Jun 2025",
            credentialUrl: "https://www.credly.com/badges/example",
            badgePath: "/certifications/azure-devops.png", // Replace with actual path when available
        },
        {
            title: "HashiCorp Certified: Terraform Associate",
            issuer: "HashiCorp",
            date: "Issued Nov 2022 · Expires Nov 2024",
            credentialUrl: "https://www.credly.com/badges/example",
            badgePath: "/certifications/terraform-associate.png", // Replace with actual path when available
        },
        {
            title: "Docker Certified Associate",
            issuer: "Docker",
            date: "Issued Feb 2022 · Expires Feb 2025",
            credentialUrl: "https://www.credly.com/badges/example",
            badgePath: "/certifications/docker-associate.png", // Replace with actual path when available
        },
        {
            title: "Red Hat Certified Engineer (RHCE)",
            issuer: "Red Hat",
            date: "Issued Jan 2021 · No Expiration",
            credentialUrl:
                "https://www.redhat.com/rhtapps/certification/verify/?certId=example",
            badgePath: "/certifications/redhat-rhce.png", // Replace with actual path when available
        },
    ];

    return (
        <section
            id="certifications"
            className="py-20 bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Professional Certifications
                    </h2>
                    <div className="mt-2 h-1 w-24 bg-blue-600 mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Industry-recognized credentials that validate my
                        expertise in DevOps practices, cloud platforms, and
                        infrastructure technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <CertificationCard key={index} certification={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
