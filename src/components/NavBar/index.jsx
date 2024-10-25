import React, { useState } from 'react';
import './NavBar.css';
import LoginModal from '../LoginModal/index.jsx';
import LogoImob from '../../Imgs/Logoimob.webp';

export default function NavBar() {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const openLoginModal = () => {
        setLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setLoginModalOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={LogoImob} alt="ImobiTech" />
            </div>
            <ul className="navbar-links">
                <li><a href="#">Início</a></li>
                <li><a href="#">Imóveis</a></li>
                <li><a href="#">Depoimentos</a></li>
                <li><a href="#">Sobre Nós</a></li>
            </ul>
            <button onClick={openLoginModal}>Acessar Painel</button>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </nav>
    );
}
