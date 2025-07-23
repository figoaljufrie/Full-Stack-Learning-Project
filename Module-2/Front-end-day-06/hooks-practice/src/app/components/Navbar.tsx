'use client'
import { useEffect } from "react"
import { useOnlineStore } from "../utils/onlineStore"

export default function Navbar() {
  const { isOnline, setOnline, checkOnlineStatus} = useOnlineStore()

const IDLE_TIMEOUT = 5000 // 5 detik untuk idle
  useEffect(() => {
    checkOnlineStatus()
  }, [checkOnlineStatus])

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black"> Hooks Practice</h1>
      <div className="flex items-center gap-2">
        <span className={`px-3 py-1 rounded-full
        text-sm font-medium ${isOnline ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}`}>
          {isOnline ? 'Online' : 'Offline'}
        </span>
        <button
        onClick={checkOnlineStatus}
        className="bg-gray-500 px-2 py-1 rounded text-sm hover:bg-black-600">
          Refresh Status
        </button>
      </div>
    </nav>
  )
}