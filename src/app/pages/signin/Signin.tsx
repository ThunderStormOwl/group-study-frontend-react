import React from 'react';
import './Signin.css';

export const Signin: React.FC = () => {

    return(
        <div className="signin-base flex-content-center flex-items-center">
            <div className="padding-g shadow-m border-red flex-column">
                <h2>Log in</h2>
                <div className="margin-top-m">
                    <form className="flex-column login-form">

                            <input className="background padding-m font-size-m" placeholder="Email"/>
                        
                            <input className="background padding-m font-size-m margin-top-s" placeholder="Senha"/>

                    </form>
                </div>
            </div>
        </div>
    );

}