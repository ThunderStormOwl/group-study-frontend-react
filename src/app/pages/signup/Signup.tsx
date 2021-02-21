import React from 'react';
import { ThemeContext } from '../../shared/contexts/theme';
import { useTheme } from '../../shared/hooks/useTheme';
import { Form } from '../../shared/components/Form';
import {Input} from'../../shared/components/Input';
import './Signup.css'

export const Signup: React.FC = () => {

    const {isDark} = useTheme();

    return(
        <div className="page-wrapper">
            <Form >

                <Input 
                    placeholder="Phil Becker"
                    label="Full name"
                />
                <Input 
                    placeholder="Phil Becker"
                    label="Full name"
                />
                <Input 
                    placeholder="Phil Becker"
                    label="Full name"
                />
                <Input 
                    placeholder="Phil Becker"
                    label="Full name"
                />
                <Input 
                    placeholder="Phil Becker"
                    label="Full name"
                />

            </Form>
        </div>
    );

}