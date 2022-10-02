import React from 'react'
import "./header.css";

function Header() {
  return (
    <div className='max-width header'>
      <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*' alt='zomato-logo' className='header-logo' />
    <div className='header-right'>
      <div className='header-location-search-container'>
        <div className='location-wrapper'>
        <div className='location-icon-name' >
        <i className="fi fi-sr-marker absolute-center location-icon"></i>
        <div>Bangalore</div>
        
        </div>
        <i className="fi fi-rr-caret-down absolute-center"></i>
         </div>
         <div className='location-search-separator'></div>
         <div className='header-searchbar'>
         <i className="fi fi-rr-search absolute-center search-icon"></i>
         <input placeholder='search for restaurant, cuisine or a dish' className='search-input' />
         </div>
      </div>
      <div className='profile-wrapper'>
      <img src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile" />
            <span className='header-username'>Himanshi</span>
            <i className="fi fi-rr-angle-down absolute-center profile-option-icon"></i>
      </div>
    </div>
    </div>
  )
}

export default Header;
