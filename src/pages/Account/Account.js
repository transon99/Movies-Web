import React from 'react'
import SaveMovies from '../../component/SaveMovies/SaveMovies'

export default function Account() {
    return (
        <>
            <div className='h-full w-full bg-cover py-24 relative' style={{ backgroundImage: "linear-gradient(180deg,transparent 0,#000),url(https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg)" }} >
                <div className='container mx-4 '>
                    <h1 className='text-white font-bold text-2xl'>My Movies</h1>
                </div>
            </div>
            <SaveMovies />
        </>
    )
}
