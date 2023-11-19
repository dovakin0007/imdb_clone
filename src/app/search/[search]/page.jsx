import React from 'react';
import Results from '@/app/components/Results';
const API_KEY = process.env.API_KEY;
export default async function SearchParams({params}) {
    const search_string = params.search;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_string}&include_adult=false&language=en-US&page=1`)
    const data = await res.json();
  
    const results = data.results;
  return (
    <div>
    {results && results.length===0 && (
        <h1 className='text-center pt-6'>
            No results found
        </h1>
    )}

    {results && <Results results={results}/>}
    </div>
  )
}
