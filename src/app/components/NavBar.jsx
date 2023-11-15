import React from 'react'
import NavBarItem from './NavBarItem';

export default function NavBar() {
  return (
    <div className='flex justify-center space-x-4 dark:bg-gray-500 bg-amber-100 lg:text p-4' >
        <NavBarItem title="Trending" param="fetchTrending"/>
        
        <NavBarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
