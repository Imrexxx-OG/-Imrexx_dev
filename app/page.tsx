import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stack from "@/components/Stack";
import Shipped from "@/components/Shipped";
import Vouches from "@/components/Vouches";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Values />
        <Services />
        <Process />
        <Stack />
        <Shipped />
        <Vouches />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
