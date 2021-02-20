import React from 'react';
import { ThemeContext } from '../../shared/contexts/theme';
import { useTheme } from '../../shared/hooks/useTheme';
import { Form } from '../../shared/components/Form';

export const Signup: React.FC = () => {

    const {isDark} = useTheme();

    return(
        <div className="form-wrapper">
            <Form>

            </Form>
        </div>
    );

}