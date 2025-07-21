import React from 'react'

import { GrDocumentTime } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { SiRemovedotbg } from "react-icons/si";
import { RiListSettingsLine } from "react-icons/ri";

export default function page() {
  return (
    //Buat box column di bagian kiri.
    <div className="min-h-screen flex bg-gradient-to-br from-gray-600 via-emerald-700 to-stone-400">
       
       {/* Side-bar kiri The Image code is for the logo for each tablets.*/}
        <div className="w-64 min-h-screen p-4 flex flex-col justify-between gap-4 backdrop-blur-md rounded-xl border border-white/20 shadow-md m-4">
          
          {/* Grid atas.*/}
          <div className="bg-white/10 rounded-xl shadow p-4">
            <h1 className="text-md text-gray-200 font-bold">00.45 A.M</h1>
            <img src="null" alt="logo" className="w-10 h-10 mt-2"/>
          </div>

          {/* Grid Tengah.*/}
          <div className="flex-1 overflow-y-auto bg-white/10 rounded-xl shadow p-4">
            <h2 className="text-lg text-gray-200 font-bold mb-4">Navigation</h2>
            
            <div className="text-md text-gray-200 font-normal flex flex-col gap-3">
            <div className="flex items-center gap-3">
            <GrDocumentTime className="text-white text-xl"/>
            <p>Time-Tracker</p>
            </div>
            
            <div className="flex items-center gap-3">
            <GrProjects className="text-white text-xl"/>
            <p>Board</p>
            </div>

            <div className="flex items-center gap-3">
            <LiaProjectDiagramSolid className="text-white text-xl" />
            <p>Project</p>
            </div>

            <div className="flex items-center gap-3">
            <SiRemovedotbg className="text-white text-xl"/>
            <p>Productivity</p>
            </div>

            <div className="flex items-center gap-3">
            <RiListSettingsLine className="text-white text-xl"/>
            <p>Settings</p>
            </div>
          </div>
        </div>

          {/* Grid Bawah (profile).*/}
          <div className="bg-white/10 rounded-xl shadow p-4 flex items-center justify-left gap-2">
            <img src="null" alt="icon" className="w-4 h-4 mr-2"/>
            <p className="text-xs text-gray-200 font-bold"> Figo Aljufrie </p>
          </div>
        </div>

    {/* Break, di bawah ini untuk main content */}
    {/* Break, di bawah ini untuk main content */}

      <main className="flex-1 p-6 flex flex-col items-center">

        {/*H1 untuk judul page (To Do List)*/}
          <h1 className="text-6xl font-bold mb-6 text-gray-900"> T.D.L</h1>

        {/* Set-up Grid Untuk Jadwal & list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mb-6">

          {/* Grid Participants */}
            <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-md p-3 pb-10 flex flex-col items-start">
              <p className="text-sm font-bold text-white mb-2"> Participants </p>
              <div className="flex -space-x-2">
                <img src="/avatar1.png" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="/avatar2.png" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="/avatar3.png" className="w-8 h-8 rounded-full border-2 border-white" />
                <div className="w-8 h-8 p-4 rounded-full border-2 border-white bg-white text-gray-500 text-xs flex items-center justify-center">+3</div>
              </div>
            </div>

          {/* Grid Time */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-md p-4 pb-10 flex flex-col items-start">
              <p className="text-sm text-gray-200 font-bold mb-2">Time</p>
              <div className="flex items-center gap-2">
                <img src="/clock-icon.svg" className="w-5 h-5" />
                <p className="text-xs font-normal text-white"> 11.35 A.M</p>
              </div>
          </div>

          {/* Grid Productivity */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-md p-4 pb-10 flex flex-col items-start">
          <p className="text-sm text-gray-200 font-bold mb-2"> Productivity</p>
          <div className="flex items-center gap-2">
            <img src="/progress-icon.svg" className="w-5 h-5" />
          <p className="text-xs text-white">85% this week</p>
          </div>

          </div>
      </div> 

      {/* Break, di bawah ini untuk Grid Activity */}
    {/* Break, di bawah ini untuk Grid Activity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 w-full mt-6">

        {/* Break, di bawah ini untuk Grid KOLOM 1 */}
        <div className="bg-rose-400/45 backdrop-blur-md rounded-4xl shadow-md p-4 w-full flex flex-col mt-6 space-y-4 transition-shadow duration-300 hover:shadow-[0_0_25px_5px_rgba(251,113,133,0.5)]">
        <h1 className="text-lg font-bold text-white mb-6">To Do</h1>

        {/* Break, di bawah ini untuk membuat sub-grid di center */}

            {/* Break, di bawah ini untuk sub-grid task 1 */}
            <div className="bg-black/5 backdrop-blur-md rounded-2xl shadow-md p-4 mb-6 w-full transition-transform duration-300 hover:scale-105">
            <h2 className="text-sm font-bold text-white mb-1">Running Session (10km)</h2>
            <p className="inline-block bg-blue-300 rounded-xl px-2 py-1 text-xs font-bold text-black">Sports</p>
            <br></br>
            <br></br>
            <span className="text-xs font-normal text-white mb-1"> Jul 20, 2025</span>
            </div>

        </div>

        {/* Break, di bawah ini untuk Grid KOLOM 2 */}
        <div className="bg-sky-400/45 backdrop-blur-md rounded-4xl shadow-md p-4 w-full flex flex-col mt-6 space-y-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-rose-400/50">
        <h1 className="text-lg font-bold text-white mb-6">On Progress</h1>

        {/* Break, di bawah ini untuk membuat sub-grid di center */}

            {/* Break, di bawah ini untuk sub-grid task 1 */}
            <div className="bg-black/5 backdrop-blur-md rounded-2xl shadow-md p-4 mb-6 w-full transition-transform duration-300 hover:scale-105">
            <h2 className="text-sm font-bold text-white mb-1">Arsipan: Those Who Exist At a Slower Pace In Life</h2>
            <p className="inline-block bg-yellow-200 rounded-xl px-2 py-1 text-xs font-bold text-black">Passion Project</p>
            <br></br>
            <br></br>
            <span className="text-xs font-normal text-white mb-1"> Jul 20, 2025</span>
            </div>

            {/* Break, di bawah ini untuk sub-grid task 2 */}
            <div className="bg-black/5 backdrop-blur-md rounded-2xl shadow-md p-4 mb-6 w-full transition-transform duration-300 hover:scale-105">
            <h2 className="text-sm font-bold text-white mb-1">JavaScript Course</h2>
            <p className="inline-block bg-purple-300 rounded-xl px-2 py-1 text-xs font-bold text-black">Software Dev</p>
            <br></br>
            <br></br>
            <span className="text-xs font-normal text-white mb-1"> Jul 20, 2025</span>
            </div>

            {/* Break, di bawah ini untuk sub-grid task 3 */}
            <div className="bg-black/5 backdrop-blur-md rounded-2xl shadow-md p-4 mb-6 w-full transition-transform duration-300 hover:scale-105">
            <h2 className="text-sm font-bold text-white mb-1">KOL Campaign</h2>
            <p className="inline-block bg-lime-300 rounded-xl px-2 py-1 text-xs font-bold text-black">Freelance</p>
            <br></br>
            <br></br>
            <span className="text-xs font-normal text-white mb-1"> Jul 20, 2025</span>
            </div>

        </div>

        {/* Break, di bawah ini untuk Grid KOLOM 3 */}
        <div className="bg-white/30 backdrop-blur-md rounded-4xl shadow-md p-4 w-full flex flex-col mt-6 space-y-4">
        <h1 className="text-lg font-bold text-white mb-6">On Approval</h1>

        {/* Break, di bawah ini untuk membuat sub-grid di center */}

            {/* Break, di bawah ini untuk sub-grid task 1 */}
            <div className="bg-black/5 backdrop-blur-md rounded-2xl shadow-md p-4 mb-6 w-full">
            <h2 className="text-sm font-bold text-white mb-1">Script for KOL</h2>
            <p className="inline-block bg-lime-300 rounded-xl px-2 py-1 text-xs font-bold text-black">Freelance</p>
            <br></br>
            <br></br>
            <span className="text-xs font-normal text-white mb-1"> Jul 20, 2025</span>
            </div>

            {/* Break, di bawah ini untuk sub-grid task 2 */}
            <div className="bg-black/5 backdrop-blur-md rounded-2xl shadow-md p-4 mb-6 w-full">
            <h2 className="text-sm font-bold text-white mb-1">Music Event (Audience Report)</h2>
            <p className="inline-block bg-cyan-300 rounded-xl px-2 py-1 text-xs font-bold text-black">Organizer</p>
            <br></br>
            <br></br>
            <span className="text-xs font-normal text-white mb-1"> Jul 20, 2025</span>
            </div>

        </div>

        {/* Break, di bawah ini untuk Grid KOLOM 4 */}
        <div className="bg-emerald-400/45 backdrop-blur-md rounded-4xl shadow-md p-4 w-full flex flex-col mt-6 space-y-4">
        <h1 className="text-lg font-bold text-white mb-6">Considered Done</h1>

        {/* Break, di bawah ini untuk membuat sub-grid di center */}

            {/* Break, di bawah ini untuk sub-grid task 1 */}
            <div className="bg-black/5 backdrop-blur-md rounded-2xl shadow-md p-4 mb-6 w-full">
            <h2 className="text-sm font-bold text-white mb-1">Scheduling Project</h2>
            <p className="inline-block bg-red-300 rounded-xl px-2 py-1 text-xs font-bold text-black">Front-End</p>
            <br></br>
            <br></br>
            <span className="text-xs font-normal text-white mb-1"> Jul 20, 2025</span>
            </div>

             <div className="bg-black/5 backdrop-blur-md rounded-2xl shadow-md p-4 mb-6 w-full">
            <h2 className="text-sm font-bold text-white mb-1">Cycling Content Session</h2>
            <p className="inline-block bg-yellow-200 rounded-xl px-2 py-1 text-xs font-bold text-black">Passion Project</p>
            <br></br>
            <br></br>
            <span className="text-xs font-normal text-white mb-1"> Jul 20, 2025</span>
            </div>

        </div>
        
        </div>
     

      </main>
      </div>


  )
}