import Navbar from "@/components/Navbar";
import ChangeYourLife from "@/components/sections/ChangeYourLife";
import DiFrage from "@/components/sections/DiFrage";
import DieGalerie from "@/components/sections/DieGalerie";
import Hero from "@/components/sections/Hero";
import LogosMarquee from "@/components/sections/LogosMarquee";
import WasIstSalt from "@/components/sections/WasIstSalt";
import WieDieBilderWirken from "@/components/sections/WieDieBilderWirken";

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
    </main>
  );
}
