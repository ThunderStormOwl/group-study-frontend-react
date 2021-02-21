import React from 'react';
import { Form } from '../../shared/components/Form';
import { Input } from'../../shared/components/Input';
import './Signup.css';
import { DarkModeCheckbox } from '../../shared/components/DarkModeCheckbox';
import { Button } from '../../shared/components/Button';

export const Signup: React.FC = () => {
    

    return(
        <div className="page-wrapper">
            <Form >
                
                <div>
                    <Input
                        label="Full name:"
                        placeholder="Phil Becker"
                    />
                    <Input 
                        label="Email:"
                        placeholder="philb123@email.com"
                        type="email"
                    />
                </div>

                <div>
                    <Input
                        label="Username:"
                        placeholder="phil.is.Cool_123"
                    />
                    <Input 
                        label="Password:"
                        placeholder="123imgay;)"
                        type="password"
                    />
                </div>

                <div>
                    <Input 
                        label="Phone number:"
                        placeholder="555-12345"
                    />
                    <Input 
                        label="Address:"
                        placeholder="123 whatever street"
                    />
                </div>
                
                <div className="buttons-wrapper padding-top-g padding-bottom-s">
                    
                    <div className="back-button-wrapper">
                        <Button 
                            className="form-button"
                            variant='outlined'
                        >
                            Back to log in
                        </Button>
                    </div>

                    <div className="submit-button-wrapper">
                        <Button className="form-button test">
                            Sign me up!
                        </Button>
                    </div>
                </div>

            </Form>
            
            <DarkModeCheckbox/>

        </div>
    );

}