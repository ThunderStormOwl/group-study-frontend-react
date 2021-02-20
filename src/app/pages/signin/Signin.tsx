import React, { useCallback, useState } from 'react';
import './Signin.css';
import {Button} from '../../shared/components/Button';
import {Link} from 'react-router-dom';
import {useTheme} from '../../shared/hooks/useTheme'

export const Signin: React.FC = () => {

    const {isDark, toggleDarkMode} = useTheme();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[keepConnected, setKeepConnected] = useState(false);


    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }, [email, password]);
    
    return(
        <div className="signin-base flex-content-center flex-items-center">
            <div className="padding-g shadow-m border-red border-radius-soft flex-column flex-items-center background-paper">
                <h2>Log in</h2>
                <div className="margin-top-m">
                    <form 
                        className="flex-column login-form"
                        onSubmit={handleSubmit}
                    >

                            <input 
                                className="padding-m font-size-m" 
                                placeholder="Email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        
                            <input
                                minLength={2}
                                className="padding-m font-size-m margin-top-s" 
                                placeholder="Senha"
                                type="password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <label className="font-size-m margin-top-s padding-top-s padding-bottom-m display-flex flex-items-center">
                                <input
                                    className="margin-right-s"
                                    type="checkbox"
                                    checked={keepConnected}
                                    onChange={(e) => setKeepConnected(!keepConnected)}
                                />
                                Manter conectado
                            </label>
                            

                            <Button>entrar</Button>
                    </form>
                    
                </div>
                <Link to="/signup" className="font-size-m margin-top-m font-weight-g">
                    Cadastrar-se
                </Link>
            </div>

            <div className="dark-mode-container">

                <label className="font-size-m padding-g display-flex flex-items-center">
                        <input
                            className="margin-right-s"
                            type="checkbox"
                            checked={isDark}
                            onChange={() => toggleDarkMode()}
                        />
                        Dark mode
                </label>

            </div>
        </div>
    );

}