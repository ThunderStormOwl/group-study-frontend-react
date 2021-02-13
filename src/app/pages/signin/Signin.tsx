import React, { useCallback, useState } from 'react';
import './Signin.css';
import {Button} from '../../shared/components/Button'

export const Signin: React.FC = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }, [email, password]);
    
    return(
        <div className="signin-base flex-content-center flex-items-center">
            <div className="padding-g shadow-m border-red flex-column flex-items-center">
                <h2>Log in</h2>
                <div className="margin-top-m">
                    <form 
                        className="flex-column login-form"
                        onSubmit={handleSubmit}
                    >

                            <input 
                                className="background padding-m font-size-m" 
                                placeholder="Email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        
                            <input
                                minLength={2}
                                className="background padding-m font-size-m margin-top-s" 
                                placeholder="Senha"
                                type="password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button>
                                Logar
                            </Button>
                    </form>
                </div>
            </div>
        </div>
    );

}