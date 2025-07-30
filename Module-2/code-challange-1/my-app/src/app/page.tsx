// app/page.tsx or components/Home.tsx (your landing structure)
import Navbar from "@/components/navbar"
import PortfolioTitle from "@/components/portfolioTitle"
import AboutMe from "@/components/aboutMe"
import Project from "@/components/project"
import Contact from "@/components/contact"
import Experiences from "@/components/experience"


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar/>
      {/* Section 1: Hero Title */}
      <section className="h-screen flex items-center justify-center">
        <PortfolioTitle/>
      </section>

      {/* Section 2: About Me */}
      <section className="w-full h-screen px-8 py-20 bg-stone-50">
        <AboutMe/>
      </section>
      <section className="w-full h-screen px-8 py-20 bg-black">
        <Project/>
      </section>
      <section className="w-full h-screen px-8 py-20 bg-stone-50">
        <Experiences/>
      </section>
       <section className="w-full h-screen px-8 py-20 bg-black">
        <Contact/>
      </section>
    </main>
  )
}