'use client'
import { LuSquareStack } from "react-icons/lu";

export default function Navbar() {
  return (
     <nav className="border-b bg-none top-0 z-50">
      <div className="container mx-auto p-4 flex items-center justify-between">

        {/* left-logo */}
        <div className="flex items-center gap-2">
          <LuSquareStack className="h-10 w-10"/>
        <p className="text-lg font-bold justify-left"> 
          Portfolio</p>
          </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="text-md font-bold hover:text-gray-400">About Me</a>
          <a href="#projects" className="text-md font-bold hover:text-gray-400">Projects</a>
          <a href="#contact" className="text-md font-bold hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  )
}
