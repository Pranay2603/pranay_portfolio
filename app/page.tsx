import Intro from "@/components/Intro";
import Ruler from "@/components/Ruler";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Intro />
      <Ruler />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Stack />
      </main>
      <Footer />
    </>
  );
}
