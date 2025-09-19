import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import DevOpsToolsSection from "@/components/DevOpsToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="font-sans min-h-screen">
            <Navbar />
            <main>
                <HeroSection />
                <AboutSection />
                <CertificationsSection />
                <ProjectsSection />
                <SkillsSection />
                <DevOpsToolsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
