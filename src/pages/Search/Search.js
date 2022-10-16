import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { BsPlayCircle } from 'react-icons/bs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { db } from '../../Firebase';
import { getSearchMovies } from '../../redux/moviesSlice';

export default function Search() {
    const navigate = useNavigate();
    const [like, setLike] = useState(false);
    const user = useSelector(state => state.user.user);
    const movieID = doc(db, 'user', `${user?.email}`);
    const listMoviesSearch = useSelector(state => state.movies.SearchMovies);
    const dispatch = useDispatch()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keywords = searchParams.get('keywords');
    const saveMovie = async (movie) => {
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

    useEffect(() => {
        dispatch(getSearchMovies(keywords))
    }, [dispatch, keywords])
    console.log(listMoviesSearch);

    return (
        < >
            <div className='h-full w-full bg-cover py-24 relative mb-4' style={{ backgroundImage: "linear-gradient(180deg,transparent 0,#000),url(https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg)" }} >
                <div className='container mx-4 '>
                    <h1 className='text-white font-bold text-2xl'>Search</h1>
                </div>
            </div>
            <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full mb-6 px-4' >
                {listMoviesSearch && listMoviesSearch.length && listMoviesSearch.map(((movie, index) => {
                    return <div key={movie.id} className='inline-block group ' >
                        <div className='flex flex-col'>
                            <div className='relative mr-2 cursor-pointer'>
                                <img className='w-full h-auto block rounded-lg' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                                    alt={movie.title} />

                                <div className='absolute top-0 left-0 hover:bg-black/50 w-full h-full'>
                                    <div className='flex items-center justify-center w-full h-full' onClick={() => {
                                        return navigate(`/${movie.id}`)
                                    }}>
                                        <BsPlayCircle className='text-white w-10 h-10 opacity-0 group-hover:opacity-100 transition ease-linear duration-200' />
                                    </div>
                                    <p onClick={() => saveMovie(movie)} className='absolute top-2 left-2 z-10'>
                                        {like && user
                                            ? (<FaHeart className='text-white w-4 h-4 opacity-0 group-hover:opacity-100 transition ease-linear duration-200 ' />)
                                            : (<FaRegHeart className='text-white w-4 h-4 opacity-0 group-hover:opacity-100 transition ease-linear duration-200 ' />)
                                        }

                                    </p>
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
