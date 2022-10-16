import React from 'react'
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function Row({ title, listMovies, idRow }) {
    const slideLeft = () => {
        var slider = document.getElementById('slider' + idRow);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider' + idRow);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <div className='mb-10'>
                <h2 className='text-white mt-4 font-bold'>{title}</h2>
                <div className='relative flex items-center mt-4 '>
                    <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-30 hover:opacity-100 cursor-pointer z-10 '
                        size={40} />
                    <div id={'slider' + idRow} className='w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' >
                        {listMovies && listMovies.length && listMovies.map(((movie, index) => {
                            return <Movie key={index} movie={movie} />
                        }))}
                    </div>
                    <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-30 hover:opacity-100 cursor-pointer ' size={40} />

                </div>
            </div>
        </>
    )
}
