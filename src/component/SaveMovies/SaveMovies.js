import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { AiTwotoneDelete } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { db } from '../../Firebase';

export default function SaveMovies() {
    const [listMoviesSave, setListMoviesSave] = useState([]);
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);
    const userRef = doc(db, 'user', `${user?.email}`)
    useEffect(() => {
        onSnapshot(doc(db, 'user', `${user?.email}`), (doc) => {
            setListMoviesSave(doc.data()?.savedMovie);
        })
    }, [user?.email]);
    const deleteMovie = async (id) => {
        try {
            const newMoviesList = listMoviesSave.filter((movie) => movie.id !== id)
            updateDoc(userRef, {
                savedMovie: newMoviesList
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full mb-6 px-4' >
                {listMoviesSave && listMoviesSave.length && listMoviesSave.map(((movie, index) => {
                    return <div key={movie.id} className='inline-block group ' >
                        <div className='flex flex-col'>
                            <div className='relative mr-2 cursor-pointer'>
                                <img className='w-full h-auto block rounded-lg' src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                                    alt={movie.title} />
                                <div onClick={() => deleteMovie(movie.id)} className='absolute top-2 right-2 z-10'>
                                    <AiTwotoneDelete className='text-white w-4 h-4 opacity-0 group-hover:opacity-100 transition ease-linear duration-200' />
                                </div>
                                <div className='absolute top-0 left-0 hover:bg-black/50 w-full h-full'>
                                    <div className='flex items-center justify-center w-full h-full' onClick={() => {
                                        return navigate(`/${movie.id}`)
                                    }}>
                                        <BsPlayCircle className='text-white w-10 h-10 opacity-0 group-hover:opacity-100 transition ease-linear duration-200' />
                                    </div>
                                </div>
                            </div>
                            <span className='w-full whitespace-normal
                        text-white group-hover:text-red-600 text-xs md:text-base'>{movie.title}</span>
                        </div>
                    </div>
                }))}
            </div>
        </>
    )
}
