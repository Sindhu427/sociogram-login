import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';

 
function Navbar() {
  return (
    <div className="navbarContainer">
        <div className="navbarLeft">
        <span className="logo">Socialogram</span>
        </div>
        <div className="navbarCenter">
            <div className="SearchBar">
                <SearchIcon className="searchIcon"/>
                <input type="text" placeholder="Search for friends,posts and videos" className="searchInput"
        
                />
            </div>
        </div>
        <div className="navbarRight">
           
        <img src="assets/7600d51d1da85b173a2cef2334529505.jpg" alt="" className="navbarImg" />
       </div>
    </div>
  )
}

export default Navbar;
