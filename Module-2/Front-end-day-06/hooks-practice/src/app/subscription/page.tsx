'use client'
import { setSubscription } from "../helpers/subscription.config"

export default function Subscription() {
  function chooseSubscription(type: 'standard' | 'premium') {
    if (type === 'standard') {
      setSubscription('standard', 7)
      alert (`Kamu berhasil berlangganan paket ${type}`)
    } else if (type === 'premium') {
      setSubscription ('premium', 365) 
      alert (`Kamu berhasil berlangganan paket ${type}`)
    }
  }

  function storeInSession(type: 'standard' | 'premium') {
    sessionStorage.setItem('subscription', type)
  }

  function storeInLocal(type: 'standard' | 'premium') {
    localStorage.setItem('subscription', type)
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="my-10 bg-slate-300 flex flex-col p-3 justify-center items-center gap-5">
        <p>Cara penyimpanan lainnya: </p>
        <button onClick={() => storeInSession('standard')}
            className="bg-slate-500 hover:bg-slate-600 rounded-md p-3 text-black">
              Session Storage
            </button>
            <button onClick={() => storeInLocal('standard')}
            className="bg-slate-500 hover:bg-slate-600 rounded-md p-3 text-black">
              Local Storage
            </button>
      </div>
      <div className="border border-slate-500 rounded-md bg-slate-100 p-10">
        <div className="flex">
          <div className="w-full text-black">
            Standard
            <ul className="mt-10 text-sm text-black list-disc">
              <li>Masa berlaku hingga 1 minggu (setelahnya subscribe ulang)</li>
              <li>Tidak dapat mengakses halaman tertentu</li>
            </ul>
            <button onClick={() => chooseSubscription('standard')}
            className="bg-slate-500 hover:bg-slate-600 rounded-md p-3 text-black">
              Default Package
            </button>
          </div>
           <div className="w-full text-black">
            Premium
             <ul className="mt-10 text-sm list-disc">
              <li>Masa berlaku hingga 1 minggu (setelahnya subscribe ulang)</li>
              <li>Dapat mengakses halaman tertentu</li>
            </ul>
            <button onClick={() => chooseSubscription('premium')}
            className="bg-green-500 hover:bg-green-600 rounded-md p-3 text-black">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
