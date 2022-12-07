import React from 'react'

// import { FaSearch } from "react-icons/fa";

import "./SearchStyle.css";

function Search({ searchValue, setSearchValue }) {

    // const handleSearch = (e) =>{
    //     e.preventDefault();
    //     console.log('click');
    // }

    const handleSearchValue = (e) =>{
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }

    return (
        <form  onSubmit={(e)=>{e.preventDefault()}} className='search'>
            <div className='search__container'>
                <input onChange={handleSearchValue} className='search__input' value={searchValue} type="text" name='searchTask' id='searchTask' placeholder='Search Item...' autoComplete='off'/>
                {/* <button onClick={handleSearch} className='search__btn' type="submit"><FaSearch /></button> */}
            </div>
        </form>
    );
};

export  { Search };