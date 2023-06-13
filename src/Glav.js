import React, { useState } from 'react';
import './2g.css';
import { Link } from 'react-router-dom'

export const Glav = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(true);
  };

  const handleSearchClose = () => {
    setIsSearchVisible(false);
  };

  return (
        <div className="v2_25">
            
            <Link to="/likapicture:id" className="button-picture">
              <div className="button-container">
                <div className="button-inner">
                  <div className="v2_26"></div>
                </div>
              </div>
            </Link>

            <div className="v2_46"></div>
            <div className="v2_47"></div>
            <div className="v2_48"></div>
            <div className="v2_49"></div>
            
            <button className="search" onClick={handleSearchClick}>
               <div className="button-inner">
                <div className="search"></div>
                <div className="lupa"></div>
                <div className="palka"></div> 
               </div>
            </button>
            
            {isSearchVisible && (
            <div className="search-container">
              <div className="search-overlay" />
              <div>
                <input className="search-input" type="text" placeholder="Введите тег" />
                <button className="search-close-button" onClick={handleSearchClose}>X
                </button>
              </div>
             </div>
            )}

            <Link to="/lika:id" className="button-user">
              <div className="button-container">
                <div className="button-inner">
                  <div className="v2_51"></div>
                  <div className="v29_54"></div>
                  <div className="v29_55"></div> 
                </div>
              </div>
            </Link>

            <Link to="/" className="button-main">
              <div className="button-container">
                <div className="button-inner">
                  <div className="v54_32"></div>
                  <div className="v54_34"></div>
                  <div className="v54_35"></div>
                  <div className="v54_36"></div> 
                </div>
              </div>
          </Link>
        </div>
  );
}