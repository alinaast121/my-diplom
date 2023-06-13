import React, { useRef, useState } from 'react';
import './5loadpicture.css';
import { Link, useNavigate } from 'react-router-dom'

export const LoadPicture = () => {

  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const [description1, setDescription1] = useState('');
  const handleInputChange1 = (event) => {
    setDescription1(event.target.value);
  };

  const [description2, setDescription2] = useState('');
  const handleInputChange2 = (event) => {
    setDescription2(event.target.value);
  };

  const handleSaveButtonClick = () => {
    // Дополнительная логика обработки сохранения данных перед переходом на другую страницу
    // ...

    navigate('/lika:id'); // Переход на другую страницу
  };


  return (
  <div className="v2_127">
    <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <button className="v2_128" onClick={handleButtonClick}>
      <div className="name"></div>
      <div className="v29_37"></div>
      </button>
      <div className="image-container">
      {selectedImage && (
        <img src={selectedImage} alt="Загруженное изображение" className="uploaded-image" />
      )}
      </div>

    <div className="input-box-2">
      <textarea
        className="input-2"
        value={description1}
        onChange={handleInputChange1}
        placeholder="Добавьте тег"
        ></textarea>
      </div>

    <div className="input-box">
      <textarea
        className="input"
        value={description2}
        onChange={handleInputChange2}
        placeholder="Добавьте описание"
        ></textarea>
      </div>
      
      <Link to="/lika:id" className="button-lkz">
      <div className="button-container" onClick={handleSaveButtonClick}>
        <div className="button-inner">
          <div className="v2_140"></div>
          <div className="v4_26"></div>
          <div className="v4_27"></div>
          <div className="v4_28"></div>
        </div>
      </div>
    </Link>

    <Link to="/lika:id" className="button-lk">
      <div className="button-container">
        <div className="button-inner">
          <div className="v54_88"></div>
          <div className="v54_90"></div>
          <div className="v54_91"></div>
          <div className="v54_92"></div>
        </div>
      </div>
    </Link>
  </div>
  );
};