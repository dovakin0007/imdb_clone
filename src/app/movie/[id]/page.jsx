import React from 'react'
import Image from 'next/image';

const API_KEY = process.env.API_KEY;

async function getMovie(movie_id){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`,{ next: { revalidate: 10000 } });
  const json_data = await res.json();
  
  return json_data;

}

export default async function MoviePage({params}) {
  const movie_id = params.id;

  
  
  const movie_data = await getMovie(movie_id);

  
  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
      <Image src={`https://image.tmdb.org/t/p/original${movie_data.backdrop_path||movie_data.poster_path}`} width={500} height={300} 
      className='rounded-lg'
      placeholder='blur'
      blurDataURL='/spinner.svg'
      alt="Movie Poster"
      style={{
        maxWidth: '100%',
        height: '100%',
      }}
    />
    <div className='p-2'>
      <h2 className='text-lg mb-3 font-bold'>
        {movie_data.title || movie_data.name || movie_data.original_title}
      </h2>
      <p className='text-lg mb-3'>
        <span className='font-semibold mr-2'>
          Overview: 
        </span>
        {movie_data.overview}
      </p>
      <p className='mb-3'> 
      <span className='font-semibold mr-2'>
        Date Released:
      </span>
      {movie_data.release_date || movie_data.first_air_date}
      </p>
      <p className='mb-3'> 
      <span className='font-semibold mr-2'>
        Rating: 
      </span>
      {movie_data.vote_count}
      </p>
    </div>
      </div>

    </div>
  )
}


