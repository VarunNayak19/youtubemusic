import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAsyncSearch, getAllSearch } from '../../redux/searchSlice';
import { useParams } from "react-router-dom"
import "./results.css"
const Results = () => {
    const searchResults = JSON.parse(localStorage.getItem("searchResults"))
    console.log(searchResults.result.songs)

    const navigateToPlayer = (i) => {
        localStorage.setItem("index", i)
    }
    return (
        <div className='resultsContainer'>
            {
                searchResults.result.songs.map((ele, i) => {
                    return (
                        <div className='eachContainer' onClick={navigateToPlayer}>
                            <img src={ele.thumbnail} alt="em" className='thumbnail' />
                            <h6>{ele.name}</h6>
                        </div>
                    );
                })
            }


        </div>
    )
}

export default Results