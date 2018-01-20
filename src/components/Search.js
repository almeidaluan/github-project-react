import React,{Component} from 'react'



const Search = ({handleSearch}) =>(
      <div className="search">
        <input type="search" onKeyUp={handleSearch}/>
      </div>
    )

export default Search;
