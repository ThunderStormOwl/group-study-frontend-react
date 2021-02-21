import React from 'react';
import { ThemeContext } from '../../shared/contexts/theme';
import { useTheme } from '../../shared/hooks/useTheme';
import { Form } from '../../shared/components/Form';
import {Input} from'../../shared/components/Input';
import './Signup.css'

export const Signup: React.FC = () => {

    const {isDark, toggleDarkMode} = useTheme();

    return(
        <div className="page-wrapper">
            <Form >

                <Input
                    label="Full name:"
                    placeholder="Phil Becker"
                />
                <Input 
                    label="Email:"
                    placeholder="philb123@email.com"
                />
                <Input
                    label="Username:"
                    placeholder="phil.is.Cool_123"
                />
                <Input 
                    label="Password:"
                    placeholder="123imgay;)"
                />
                <Input 
                    label="Phone number:"
                    placeholder="555-12345"
                />

            </Form>
            <div className="dark-mode-container">

                <label className="font-size-m padding-g display-flex flex-items-center">
                        <input
                            className="margin-right-s"
                            type="checkbox"
                            checked={isDark}
                            onChange={() => toggleDarkMode()}
                        />
                        Dark mode
                </label>

            </div>
        </div>
    );

}