import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiKey = "842bc111f4mshbb3800ae5e66b65p1c7e57jsn118d0d19a7bb";

export const fetchAsyncSearch = createAsyncThunk('search/fetchAsyncSearch', async (searchTerm) => {
    console.log(searchTerm)
    const options = {
        method: 'GET',
        url: 'https://youtube-music1.p.rapidapi.com/v2/search',
        params: { query: searchTerm },
        headers: {
            'X-RapidAPI-Key': '842bc111f4mshbb3800ae5e66b65p1c7e57jsn118d0d19a7bb',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        localStorage.setItem("searchResults", JSON.stringify(response.data))
        return response.data
    }).catch(function (error) {
        console.error(error);
    });

})

const initialState = {
    search: {},
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        addSearch: (state, { payload }) => {
            state.search = payload;
        },
    },
    extraReducers: {
        [fetchAsyncSearch.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncSearch.fulfilled]: (state, { payload }) => {
            localStorage.setItem("auth", "true")
            console.log("fetch success")
            return { ...state, search: payload };
        },
        [fetchAsyncSearch.rejected]: () => {
            console.log("rejected")
        }
    }
});

export const { addSearch } = searchSlice.actions;
export default searchSlice.reducer;
export const getAllSearch = (state) => state.search;