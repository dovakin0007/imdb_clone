import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import loading from '../loading'
import { FaRegThumbsUp } from "react-icons/fa";

export default function Card({result}) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border
    sm:border-slate-400 sm:m-2 transition-shadow-200 group'>
    <Suspense fallback={<loading> </loading>}>
    <Link href={`/movie/${result.id}`}>
    <Image src={`https://image.tmdb.org/t/p/original${result.backdrop_path||result.poster_path}`} width={500} height={300} 
      className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity-200'
      placeholder='blur'
      blurDataURL='/spinner.svg'
      alt="image not found"
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
    <div className='p-2 dark:text-gray-200'>
      <p className='line-clamp-2 text-md'>
        {result.overview}
      </p>
      <h2 className='truncate text-lg font-bold'>
        {result.title || result.name}
      </h2>
      <p className='flex space-x-0.5 items-center'>
        {result.release_date || result.first_air_date}
        <FaRegThumbsUp className='h-4 mr-1 ml-3'/> {result.vote_count}
      </p>
    </div>
    </Link>
    </Suspense>
    </div>
  )
}
