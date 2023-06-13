import React from 'react';
import './1main.css';
import { Link } from 'react-router-dom'

export const Links = () => {
  return (
    <div class="v1_3">
      <div class="v2_4"></div>
      <div class="v2_10"></div>
      <div class="v2_7"></div>
      <div class="v2_11"></div>
      <div class="v2_8"></div>
      <div class="v2_9"></div>
      <div class="v2_12"></div>
      <div class="v2_13"></div>
      <div class="v2_15"></div>
      <div class="v2_16"></div>
      <div class="v2_18"></div>
      <div class="v2_19"></div>
      <div class="v2_20"></div>
      <div class="v2_21"></div>
      <div class="v2_22"></div>
      <div class="v2_23"></div>
      <div class="v2_24"></div>

      <Link to="/sigin" className="button-singin">
        <div className="button-container">
          <div className="button-inner">
            <div class="v2_17"></div>
            <span class="v2_153">Регистрация</span>
          </div>
        </div>
      </Link>

      <Link to="/glavst" className="button-glavst">
        <div className="button-container">
          <div className="button-inner">
            <div class="v2_6"></div>
            <span class="v2_151">Главная</span> 
          </div>
        </div>
      </Link>

      <Link to="/login" className="button-login">
        <div className="button-container">
          <div className="button-inner">
            <div class="v2_14"></div>
            <span class="v2_152">Авторизация</span>
          </div>
        </div>
      </Link>
    </div>
  );
}