import "./landingPage.css"
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchAsyncSearch } from '../../redux/searchSlice';

import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [term, setterm] = useState("")
    const [searchTerm, setsearchTerm] = useState("")
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("term", term)
        setsearchTerm(term)
        console.log("searchterm", searchTerm)
        dispatch(fetchAsyncSearch(term));
        setterm("")
        localStorage.setItem("lastsearch", term)
        navigate("/results")

    }
    const resetValue = () => {
        setterm("")
    }
    return (
        <div className='landingPageContainer'>
            <img src={require("../../assets/youtube-music.png")} alt="icn" className='youtubeLogo' />
            <form className='searchBarDiv' onSubmit={submitHandler}>
                <input type="text" className='searchBarInput' value={term} onChange={(e) => setterm(e.target.value)} />
                <i className="fa-solid fa-xmark xmarkIcn" onClick={resetValue}></i>
                <i className="fa-solid fa-magnifying-glass magglassIcn" onClick={submitHandler}></i>

            </form>
        </div>
    )
}

export default LandingPage