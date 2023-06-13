import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './6login.css';
import { Link } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleRegister = (event) => {
        if (username && password) {
            // Выполнение регистрации или отправка данных на сервер
            // ...
      
            // Переход на другую страницу после успешной регистрации
            navigate('/glavst');
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    };

  return (
        <div className="v2_112">
            <div className="auth-container">
                <input
                className="auth-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Логин"
                />
                <input
                className="auth-input2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                />
                <button className="auth-button" onClick={handleRegister}>
                    <div className="streka1"></div>
                    <div className="streka2"></div>
                    <div className="streka3"></div>
                </button>
            </div>

            <Link to="/" className="button-main">
              <div className="button-container">
                <div className="button-inner">
                    <div className="v54_78"></div>
                    <div className="v54_80"></div>
                    <div className="v54_81"></div>
                    <div className="v54_82"></div>
                </div>
              </div>
            </Link>
        </div>
    );
}