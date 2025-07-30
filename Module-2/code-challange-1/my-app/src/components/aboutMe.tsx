'use client'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiPreact } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobe } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { CgFigma } from "react-icons/cg";

export default function AboutMe() {
  return (
    <section className="w-full text-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Row: Title + Text */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 py-8">
          {/* Left: ABOUT */}
          <h2 className="text-[15vw] text-black leading-none font-extrabold" style={{ letterSpacing: '-0.15em' }}>
            ABOUT
          </h2>

          {/* Right: Paragraph */}
          <div className="text-right leading-relaxed text-black text-base lg:text-lg space-y-1 max-w-lg mt-8 lg:mt-0">

            <p>I am currently focused on full-stack web development, blending code with a strong eye for design. I started Arsipan, a personal magazine project where I explore writing and visuals. I used to work in marketing communication for an event organizer, which taught me how to craft clear stories and experiences. Lately, I have been diving into 3D design with Blender.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-lg text-black font-bold">
            SKILLS / CAPABILITIES
          </p>
          </div>

        {/* Bottom Grid: 4x2 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          
          <div className="bg-black h-40 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <FaHtml5 className="w-20 h-20"/>
          </div>

           <div className="bg-black h-40 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <FaCss3Alt className="w-20 h-20"/>
          </div>

           <div className="bg-black h-40 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <DiJavascript className="w-22 h-22"/>
          </div>

           <div className="bg-black h-40 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <SiTypescript className="w-18 h-18"/>
          </div>

           <div className="bg-black h-40 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <RiNextjsLine className="w-25 h-25"/>
          </div>
           <div className="bg-black h-40 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <SiPreact className="w-22 h-22"/>
          </div>
           <div className="bg-black h-40 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <RiTailwindCssFill className="w-25 h-25"/>
          </div>
           <div className="bg-black h-40 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <SiAdobe className="w-20 h-20"/>
          </div>
        
          <div className="bg-black h-40 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
           <SiBlender className="w-20 h-20"/>
          </div>
        
          <div className="bg-black h-40 rounded-3xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
           <CgFigma className="w-20 h-20"/>
          </div>
        </div>

      </div>
    </section>
  )
}