import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

export const Form: React.FC<InputProps> = (props) => {

    return(
        <input
            {...props}
        />
    );

}