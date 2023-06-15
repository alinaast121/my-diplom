import { React, useRef, useState } from 'react';
import './3lk.css';
import { Link } from 'react-router-dom'

export const LK = () => {
  
  const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleButtonClick = () => {
    fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    };
   
    return (
    
    <div className="v2_52">
      <div className="v2_124"></div>
      <span className="v2_125">логин</span>
      <div className="v29_27">
      <div className="v29_16">
        <img src="/picture/pic7.png"/>
      </div>
      <div className="v29_17">
        <img src="/picture/pic1.png"/>
      </div>
      <div className="v29_18">
        <img src="/picture/pic3.png"/>
      </div>
      <div className="v29_19">
        <img src="/picture/pic2.png"/>
      </div>
      <div className="v29_20">
        <img src="/picture/pic5.png"/>
      </div>
      <div className="v29_21">
        <img src="/picture/pic4.png"/>
      </div>
      <div className="v48_46"></div>
    </div>
      <span className="v29_14"> ср. оценка</span>
      <div className="v29_15"></div>
      
      <input
      type="file"
      style={{ display: 'none' }}
      ref={fileInputRef}
      onChange={handleFileChange}
      />
      <button className="izm" onClick={handleButtonClick}>
      <div className="str1"></div>
      <div className="str2"></div>
      <div className="str3"></div>
      </button>
      <div className="image-container">
        {selectedImage && (
        <img src={selectedImage} alt="Загруженное изображение" className="uploaded-im" />
        )}
        </div>
            

      <Link to="/" className="button-main">
        <div className="button-container">
          <div className="button-inner">
            <div className="v29_22"></div>
            <span className="v29_23">Выход</span>
          </div>
        </div>
      </Link>

            
      <div className="v29_26">
        <div className="v29_3">
          <img src="/picture/pic6.png"/>
        </div>
        <div className="v29_4">
          <img src="/picture/pic12.png"/>
        </div>
        <div className="v29_5">
          <img src="/picture/pic9.png"/>
        </div>
        <div className="v29_6">
          <img src="/picture/pic13.png"/>
        </div>
        <div className="v29_7">
          <img src="/picture/pic14.png"/>
        </div>
        <div className="v48_47"></div>
      </div>

      <Link to="/loadingpicture" className="button-load">
        <div className="button-container">
          <div className="button-inner">
            <div className="v29_2"></div>
            <div className="v29_29"></div>
            <div className="v29_30"></div>
          </div>
        </div>
      </Link>

            
      <Link to="/glavst" className="button-glav">
        <div className="button-container">
          <div className="button-inner">
            <div className="v54_58"></div>
            <div className="v54_60"></div>
            <div className="v54_61"></div>
            <div className="v54_62"></div>
          </div>
        </div>
      </Link>
    </div>
  );
}