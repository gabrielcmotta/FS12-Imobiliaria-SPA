import { useState } from 'react';
import '../LoginModal/LoginModal.css';

export default function LoginModal({ isOpen, onClose }) {
    const [selected, setSelected] = useState('login');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode manipular os dados do formulário
        console.log(formData);
        if (selected === 'login') {
            // Lógica de login
        } else {
            // Lógica de cadastro
        }
    };

    return (
        <div className="login-modal">
            <div className="login-modal-content">
                <h2>{selected === 'login' ? 'Login' : 'Cadastro'}</h2>
                <form onSubmit={handleSubmit}>
                    {selected === 'login' ? (
                        <>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />

                            <label htmlFor="password">Senha:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />

                            <button type="submit">Entrar</button>
                        </>
                    ) : (
                        <>
                            <label htmlFor="name">Nome:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />

                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />

                            <label htmlFor="password">Senha:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />

                            <button type="submit">Cadastrar</button>
                        </>
                    )}
                </form>
                <div className="login-modal-options">
                    <button
                        className={selected === 'login' ? 'active' : ''}
                        onClick={() => setSelected('login')}
                    >
                        Login
                    </button>
                    <button
                        className={selected === 'cadastro' ? 'active' : ''}
                        onClick={() => setSelected('cadastro')}
                    >
                        Cadastro
                    </button>
                </div>
                <button className="close-modal" onClick={onClose}>X</button>
            </div>
        </div>
    );
}
