import React from 'react';
import { ThemeContext } from '../../shared/contexts/theme';
import { useTheme } from '../../shared/hooks/useTheme';
import { Form } from '../../shared/components/Form';
import {Input} from'../../shared/components/Input';

export const Signup: React.FC = () => {

    const {isDark} = useTheme();

    return(
        <div className="form-wrapper">
            <Form>

                <Input placeholder="Name, please">
                    <label>Test</label>
                </Input>

            </Form>
        </div>
    );

}