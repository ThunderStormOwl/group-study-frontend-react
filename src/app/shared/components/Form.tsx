import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement>{
    formClass?: string;
}

export const Form: React.FC<FormProps> = (props) => {

    return(
        <form
            {...props}
            className={props.formClass? props.formClass : "default"}
        />
    );

}