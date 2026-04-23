import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AckermannReview from "@/components/sections/AckermannReview";
import ChangeYourLife from "@/components/sections/ChangeYourLife";
import CTASection from "@/components/sections/CTASection";
import DieSchritte from "@/components/sections/DieSchritte";
import DiFrage from "@/components/sections/DiFrage";
import DieGalerie from "@/components/sections/DieGalerie";
import Hero from "@/components/sections/Hero";
import LogosMarquee from "@/components/sections/LogosMarquee";
import WasIstSalt from "@/components/sections/WasIstSalt";
import WieDieBilderWirken from "@/components/sections/WieDieBilderWirken";
import ReviewsSlider from "@/components/sections/ReviewsSlider";
import UeberSabine from "@/components/sections/UeberSabine";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogosMarquee />
      <DiFrage />
      <WasIstSalt />
      <DieGalerie />
      <ChangeYourLife />
      <WieDieBilderWirken />
      <AckermannReview />
      <ReviewsSlider />
      <DieSchritte />
      <UeberSabine />
      <CTASection />
      <Footer />
    </main>
  );
}
