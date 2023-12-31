"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBox() {
    const [search, setSearch] = useState("")
    const router = useRouter()
    const handleSubmit =(e)=>{
        e.preventDefault();
        if (!search) return
        router.push(`/search/${search}`)
        setSearch("")
    }
  return (
    <form  onSubmit={handleSubmit} className='flex max-w-6xl mx-auto justify-between items-center px-5'>
        <input value={search} onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder='Search keywords...' className='w-full h-14 rounded-sm placeholder:gray-500 outline-none 
        bg-transparent flex-1'/>
        <button type='submit' className='text-amber-700 disabled:text-gray-400' disabled={!search} >Search</button>
    </form>
  )
}
