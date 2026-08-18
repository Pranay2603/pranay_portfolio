import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Projects />
        <Experience />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
