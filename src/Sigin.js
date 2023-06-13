import  React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './7sigin.css';
import { Link } from 'react-router-dom'

export const Sigin = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleRegister = (event) => {
        if (username && password && confirmPassword) {
            // Выполнение регистрации или отправка данных на сервер
            // ...
      
            // Переход на другую страницу после успешной регистрации
            navigate('/glavst');
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    };

  return (
        <div className="v2_97">
            <div className="registration-container">
                <input
                className="registration-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Логин"
                />
                <input
                className="registration-input2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                />
                <input
                className="registration-input3"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Повторите пароль"
                />
                <button className="registration-button" onClick={handleRegister}>
                    <div className="str1"></div>
                    <div className="str2"></div>
                    <div className="str3"></div>
                </button>
            </div>

            <Link to="/" className="button-main">
              <div className="button-container">
                <div className="button-inner">
                    <div className="v54_73"></div>
                    <div className="v54_75"></div>
                    <div className="v54_76"></div>
                    <div className="v54_77"></div>
                </div>
              </div>
            </Link>
            
        </div>
    );
}