import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import ListSimilar from '../../component/ListSimilar/ListSimilar';
import { getCreditMovies, getMovieDetail, getSimilarMovies, getVideos } from '../../redux/moviesSlice'

export default function Detail() {
    const { id } = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieDetail(id))
        dispatch(getCreditMovies(id))
        dispatch(getVideos(id))
        dispatch(getSimilarMovies(id))
    }, [dispatch, id])
    const movieDetail = useSelector(state => state.movies.MovieDetail)
    const credit = useSelector(state => state.movies.Credit);
    const videos = useSelector(state => state.movies.Videos);
    const similarMovies = useSelector(state => state.movies.SimilarMovies);
    return (
        <>
            <div className='w-full bg-cover bg-center relative ' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path})`, height: "50vh" }}>
                <div className='bg-black/50 w-full h-full top-0 ;left-0' style={{
                    backgroundImage: 'linear-gradient(to top,#000,transparent)'
                }}></div>
            </div>
            <div className='bg-black/80'></div>
            <div className='mx-4 md:mx-8 relative'>
                <div className='md:grid md:grid-cols-3 text-white '>
                    <div className='hidden md:block'>
                        <img className='rounded-3xl' src={`https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path}`} alt={movieDetail?.title} />
                    </div>
                    <div className='col-span-2 md:ml-6'>
                        <h1 className='text-2xl font-bold md:text-5xl'>{movieDetail?.title}</h1>
                        <div>
                            {movieDetail?.genres.map((genre, index) => {
                                return <button className='bg-black text-xs mr-2 rounded-[30px] border-white p-2 border-[1px] mt-4' key={index}>
                                    {genre.name}
                                </button>
                            })}
                        </div>
                        <p className='text-sm mt-4'>
                            {movieDetail?.overview}
                        </p>
                        <h4 className='font-medium mt-10 text-2xl'>Cast</h4>
                        <div className='flex flex-wrap'>
                            {credit?.slice(0, 4).map((char, index) => {
                                return <img key={char.id} className='mr-2 rounded-lg h-[160px] w-[100px] mb-4' src={`https://image.tmdb.org/t/p/original/${char.profile_path}`} alt={char.name} />
                            })}
                        </div>
                    </div>
                </div>
            </div >
            <div className='mx-4 md:mx-8'>
                <div className='mt-[100px]'>
                    {videos?.slice(1, 3)?.map((video, index) => (
                        <div key={video.id} className="font-bold text-2xl mt-6">
                            <div className="text-white">
                                <h2>{video.name}</h2>
                            </div>
                            <iframe className='md:h-[90vh] h-[60vh]' src={`https://www.youtube.com/embed/${video.key}`} width="100%" title="video"></iframe>
                        </div>
                    ))}
                </div>
                <div>
                    <ListSimilar similarMovies={similarMovies} />
                </div>
            </div>
        </>
    )
}
