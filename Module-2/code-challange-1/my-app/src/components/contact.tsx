'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { ContactInfo } from '@/types/contact'

export default function Contact() {
  const [contact, setContact] = useState<ContactInfo | null> (null)

  useEffect(()=>{
    async function fetchContact() {
      try {

        const response = await fetch(
        "https://api.backendless.com/2957847F-19F6-40EA-BF45-09BBC7138B28/77756B75-B34A-438C-BDFD-3C5EF6C28E57/data/contacts")
        const data = await response.json()
      setContact(data[0]) //Only 1 contact info

      } catch (error) {
        console.error("Failed to fetch contact info:", error)
      }
      
      
  
    }
    fetchContact()
  }, [])

  return (
    <section className="min-h-screen overflow-hidden">
      <div className="flex justify-center items-center">
        <h1 className="trance-text">
          CONTACT
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 gap-3">
        <p>{contact?.name}</p>
        <p>{contact?.email}</p>
        <p>{contact?.socialmedia}</p>
        <p>{contact?.phoneNumber}</p>
        <p>{contact?.address}</p>
      </div>
    </section>
  )
}
