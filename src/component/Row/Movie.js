import React, { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../../Firebase'

export default function Movie({ movie }) {
    const navigate = useNavigate();
    const [like, setLike] = useState(false);
    const user = useSelector(state => state.user.user);
    const movieID = doc(db, 'user', `${user?.email}`);
    const saveMovie = async () => {
        if (user?.email) {
            setLike(!like);
            await updateDoc(movieID, {
                savedMovie: arrayUnion({
                    id: movie.id,
                    title: movie.title,
                    img: movie.backdrop_path,
                }),
            });
        } else {
            alert('Please login to save a movie')
        }
    }

    const goToDetail = () => {
        navigate(`/${movie.id}`)
    }
    return (
        <div key={movie.id} className='inline-block group ' >
            <div className='flex flex-col'>
                <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-[2px]'>
                    <img className='w-full h-auto block rounded-lg' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                        alt={movie.title} />
                    <div className='absolute top-0 left-0 hover:bg-black/50 w-full h-full'>
                        <div className='flex items-center justify-center w-full h-full' onClick={goToDetail}>
                            <BsPlayCircle className='text-white w-10 h-10 opacity-0 group-hover:opacity-100 transition ease-linear duration-200' />
                        </div>
                        <p onClick={saveMovie} className='absolute top-2 left-2 z-10'>
                            {like && user
                                ? (<FaHeart className='text-white w-4 h-4 opacity-0 group-hover:opacity-100 transition ease-linear duration-200 ' />)
                                : (<FaRegHeart className='text-white w-4 h-4 opacity-0 group-hover:opacity-100 transition ease-linear duration-200 ' />)
                            }

                        </p>
                    </div>
                </div>
                <span className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] whitespace-normal
                text-white group-hover:text-red-600 text-xs md:text-base'>{movie.title}</span>
            </div>
        </div>
    )
}
