import React from 'react';
import './styles/Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'contained' | 'outlined' | 'Text'
}

export const Button: React.FC<ButtonProps> = ({variant, ...props}) => {

    if(variant === 'outlined') return (
        <button
        {...props}
        className={"padding-s margin-top-m border-radius-soft border-thin "+
                   "font-size-m text-uppercase text-fix " + props.className}
    />)

    if(variant === 'Text') return (
        <button
        {...props}
        className={"padding-s margin-top-m border-radius-soft border-none "+
                   "font-size-m text-uppercase text-fix " + props.className}
    />)

    return (
        <button
        {...props}
        className={"padding-s margin-top-m background-primary border-radius-soft border-none "+
                   "text-white font-size-m text-uppercase " + props.className}
    />)

}