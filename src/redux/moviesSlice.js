import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import Requests from "../api/apiConfig"
import axios from "axios";

const moviesSlice = createSlice({

    name: "movie",
    initialState: {
        UpComingMovies: null,
        PopularMovies: null,
        TopRatedMovies: null,
        ActionMovies: null,
        ComedyMovies: null,
        MovieDetail: null,
        SearchMovies: null,
        Credit: null,
        Videos: null,
        SimilarMovies: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUpComingMovies.fulfilled, (state, action) => {
                state.UpComingMovies = action.payload;
            })
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                state.PopularMovies = action.payload;
            })
            .addCase(getTopRatedMovies.fulfilled, (state, action) => {
                state.TopRatedMovies = action.payload;
            })
            .addCase(getActionMovies.fulfilled, (state, action) => {
                state.ActionMovies = action.payload;
            })
            .addCase(getComedyMovies.fulfilled, (state, action) => {
                state.ComedyMovies = action.payload;
            })
            .addCase(getMovieDetail.fulfilled, (state, action) => {
                state.MovieDetail = action.payload;
            })
            .addCase(getSearchMovies.fulfilled, (state, action) => {
                state.SearchMovies = action.payload;
            })
            .addCase(getCreditMovies.fulfilled, (state, action) => {
                state.Credit = action.payload;
            })
            .addCase(getVideos.fulfilled, (state, action) => {
                state.Videos = action.payload;
            })
            .addCase(getSimilarMovies.fulfilled, (state, action) => {
                state.SimilarMovies = action.payload;
            })
    }

});

// Call API 
export const getUpComingMovies = createAsyncThunk('movie/getUpComingMovies', async () => {
    try {
        const response = await axios.get(Requests.requestsUpComing);
        return response.data.results
    } catch (error) {
        console.error(error);
    }
}
)

export const getPopularMovies = createAsyncThunk('movie/getPopularMovies', async () => {
    try {
        const response = await axios.get(Requests.requestsPopular);
        return response.data.results
    } catch (error) {
        console.error(error);
    }
})

export const getTopRatedMovies = createAsyncThunk('movie/getTopRatedMovies', async () => {
    try {
        const response = await axios.get(Requests.requestsToprRated);
        return response.data.results
    } catch (error) {
        console.error(error);
    }
})

export const getActionMovies = createAsyncThunk('movie/getActionMovies', async () => {
    try {
        const response = await axios.get(Requests.requestsActionMovies);
        return response.data.results
    } catch (error) {
        console.error(error);
    }
})

export const getComedyMovies = createAsyncThunk('movie/getComedyMovies', async () => {
    try {
        const response = await axios.get(Requests.requestsComedyMovies);
        return response.data.results
    } catch (error) {
        console.error(error);
    }
})

export const getMovieDetail = createAsyncThunk('movie/getMovieDetail', async (movieID) => {
    try {
        const response = await axios.get(Requests.requestsMovieDetail(movieID));
        return response.data
    } catch (error) {
        console.error(error);
    }
})

export const getSearchMovies = createAsyncThunk('movie/getSearchMovies', async (keywords) => {
    try {
        const response = await axios.get(Requests.requestsSearchMovies(keywords));
        return response.data.results
    } catch (error) {
        console.error(error);
    }
})
export const getCreditMovies = createAsyncThunk('movie/getCreditMovies', async (movieID) => {
    try {
        const response = await axios.get(Requests.requestCredit(movieID));
        return response.data.cast
    } catch (error) {
        console.error(error);
    }
})
export const getVideos = createAsyncThunk('movie/getVideos', async (movieID) => {
    try {
        const response = await axios.get(Requests.requestVideo(movieID));
        return response.data.results
    } catch (error) {
        console.error(error);
    }
})
export const getSimilarMovies = createAsyncThunk('movie/getSimilarMovies', async (movieID) => {
    try {
        const response = await axios.get(Requests.requestSimilarMovie(movieID));
        return response.data.results
    } catch (error) {
        console.error(error);
    }
})
export default moviesSlice.reducer