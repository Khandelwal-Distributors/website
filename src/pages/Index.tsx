import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandShowcase from "@/components/BrandShowcase";
import DaikinSolutionPlaza from "@/components/DaikinSolutionPlaza";
import ProductCategories from "@/components/ProductCategories";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EndOfSeasonSale from "@/components/EndOfSeasonSale";
import YouTubeVideos from "@/components/YouTubeVideos";
import StoreProfiles from "@/components/StoreProfiles";
import BrochureDownload from "@/components/BrochureDownload";
import OurClients from "@/components/OurClients";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import RentAnAC from "@/components/RentAnAC";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BrandShowcase />
        <DaikinSolutionPlaza />
        <ProductCategories />
        <Services />
        <ProjectsShowcase />
        <OurClients />
        <EndOfSeasonSale />
        <RentAnAC />
        <YouTubeVideos />
        <StoreProfiles />
        <BrochureDownload />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
