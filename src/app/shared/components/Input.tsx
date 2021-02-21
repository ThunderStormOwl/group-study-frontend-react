import React from 'react';
import './styles/Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string
}

export const Input: React.FC<InputProps> = ({label, ...props}) => {

    return(
        <div className="input-wrapper flex-column padding-g">
            {label?<label>{label}</label>:null}
            <input
                {...props}
                className="input-text"
            />
        </div>
    );

}