import Link from "next/link"
import { Button } from '@mui/material'

export default function page() {
  return (
    <main className="w-full flex items-center justify-center min-h-screen text-center px-4">
    
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img
      className="rounded-md"
      src="https://i.pinimg.com/1200x/5c/18/a5/5c18a51d705aa6a83fb3af033acf2166.jpg"
      alt="KopiKita"/>
    </div>
    <div className="w-full h-screen justify-center items-center flex flex-col">
      <h1 className="text-5xl text-white-500">KopiKita</h1>
      <p className="text-lg text-white-500 max-w-xl mb-8">
        Savor The Finest Blends Of Indonesian Coffee's
      </p>
      <Link href='/home'>
       <Button 
       variant="outlined"
       style={{ backgroundColor: '#d4a373', color: '#432818'}}
       >
        View Our Menu
       </Button>
      </Link>
      </div>
    </main>
  )
}
