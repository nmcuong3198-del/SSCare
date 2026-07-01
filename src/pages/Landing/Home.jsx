import HeroSection from "./section/Hero/Hero";
import MissionSection from "./section/Mission/Mission";
import TestimonialSection from "./section/Testimonial/Testimonials";
import DownloadSection from "./section/Download/Download";

export default function Home() {
    return (
        <>
            <HeroSection />
            <MissionSection />
            <TestimonialSection />
            <DownloadSection />
        </>
    );
}