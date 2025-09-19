const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <div className="mt-2 h-1 w-24 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Professional Summary
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            I'm a seasoned DevOps Engineering Lead with over 10 years of experience transforming software delivery practices. 
                            I specialize in building resilient cloud infrastructure, implementing robust CI/CD pipelines, and fostering 
                            collaborative DevOps cultures within organizations.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            My expertise includes container orchestration with Kubernetes, multi-cloud infrastructure management, 
                            and automation at scale. I'm passionate about implementing infrastructure as code, security best practices, 
                            and observability solutions that drive operational excellence.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            As a technical leader, I help organizations adopt modern DevOps practices, improve deployment frequency, 
                            and reduce time-to-market while maintaining high reliability standards. I excel at bridging gaps between 
                            development and operations teams to create seamless software delivery pipelines.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Professional Experience
                        </h3>

                        <div className="mb-6">
                            <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                                Senior DevOps Engineering Lead
                            </h4>
                            <p className="text-gray-500 dark:text-gray-400">
                                Fortune 500 Technology Company • 2020 - Present
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">
                                Leading a team of 12 DevOps engineers responsible for cloud infrastructure on AWS and GCP.
                                Architected and implemented a multi-region Kubernetes platform supporting 100+ microservices.
                                Reduced deployment time by 80% through automated CI/CD pipelines and infrastructure as code.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                                DevOps Engineer
                            </h4>
                            <p className="text-gray-500 dark:text-gray-400">
                                Financial Services Company • 2017 - 2020
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">
                                Implemented infrastructure as code using Terraform and CloudFormation across AWS environments.
                                Designed and deployed CI/CD pipelines with Jenkins for containerized applications.
                                Improved system reliability with comprehensive monitoring solutions using Prometheus and Grafana.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                                Master of Science in Computer Science, Cloud Computing
                            </h4>
                            <p className="text-gray-500 dark:text-gray-400">
                                Top Technical University • 2015 - 2017
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
