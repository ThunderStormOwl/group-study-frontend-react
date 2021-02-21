import React from 'react';
import './styles/Form.css'

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement>{}

export const Form: React.FC<FormProps> = (props) => {

    return(
        <div className="form-wrapper">
            <form
                {...props}
            />
        </div>
    );

}