import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroSlider from '../../component/HeroSlider/HeroSlider'
import Row from '../../component/Row/Row'
import { getActionMovies, getComedyMovies, getPopularMovies, getTopRatedMovies, getUpComingMovies } from '../../redux/moviesSlice'
export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUpComingMovies());
        dispatch(getPopularMovies());
        dispatch(getTopRatedMovies());
        dispatch(getActionMovies());
        dispatch(getComedyMovies());
    }, [])

    const result = useSelector(state => state.movies)
    return (
        <>
            <HeroSlider />
            <Row idRow="1" title="UpComing" listMovies={result.UpComingMovies} />
            <Row idRow="2" title="Popular" listMovies={result.PopularMovies} />
            <Row idRow="3" title="TopRate" listMovies={result.TopRatedMovies} />
            <Row idRow="4" title="ActionMovie" listMovies={result.ActionMovies} />
            <Row idRow="5" title="ComedyMovies" listMovies={result.ComedyMovies} />
        </>
    )
}

