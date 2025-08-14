// app/page.tsx or components/Home.tsx
import Navbar from "@/components/navbar";
import PortfolioTitle from "@/components/portfolioTitle";
import AboutMe from "@/components/aboutMe";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Experiences from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Section 1: Hero Title */}
      <section className="min-h-screen md:h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-10 md:py-20">
        <PortfolioTitle />
      </section>

      {/* Section 2: About Me */}
      <section className="w-full min-h-screen md:h-screen px-4 sm:px-6 md:px-8 py-10 md:py-20 bg-stone-50">
        <AboutMe />
      </section>

      {/* Section 3: Projects */}
      <section className="w-full min-h-screen md:h-screen px-4 sm:px-6 md:px-8 py-10 md:py-20 bg-black">
        <Project />
      </section>

      {/* Section 4: Experiences */}
      <section className="w-full min-h-screen md:h-screen px-4 sm:px-6 md:px-8 py-10 md:py-20 bg-stone-50">
        <Experiences />
      </section>

      {/* Section 5: Contact */}
      <section className="w-full min-h-screen md:h-screen px-4 sm:px-6 md:px-8 py-10 md:py-20 bg-black">
        <Contact />
      </section>
    </main>
  );
}
