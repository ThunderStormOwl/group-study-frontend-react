import React from 'react';
import { ThemeContext } from '../../shared/contexts/theme';
import { useTheme } from '../../shared/hooks/useTheme';

export const Signup: React.FC = () => {

    const {isDark} = useTheme();

    return(
        <div>
            Sign Up
        </div>
    );

}