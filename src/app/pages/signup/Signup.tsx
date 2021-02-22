import React, { useState } from 'react';
import { Form } from '../../shared/components/Form';
import { Input } from'../../shared/components/Input';
import './Signup.css';
import { DarkModeCheckbox } from '../../shared/components/DarkModeCheckbox';
import { Button } from '../../shared/components/Button';

const formDataTemplate = {
    name:"",
    email:"",
    username:"",
    password:"",
    phone:"",
    address:""
}

export const Signup: React.FC = () => {

    const [formData, updateFormData] = React.useState(formDataTemplate);

    const handleFormChange = ((e) => {

        updateFormData({
            ...formData,
            [e.target.name] : e.target.value.trim()
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        //send to back end here
    };

    return(
        <div className="page-wrapper">
            <Form >
                
                <div>
                    <Input
                        label="Full name:"
                        placeholder="Phil Becker"
                        onChange={handleFormChange}
                    />
                    <Input 
                        label="Email:"
                        placeholder="philb123@email.com"
                        type="email"
                        onChange={handleFormChange}
                    />
                </div>

                <div>
                    <Input
                        label="Username:"
                        placeholder="phil.is.Cool_123"
                        onChange={handleFormChange}
                    />
                    <Input 
                        label="Password:"
                        placeholder="123imgay;)"
                        type="password"
                        onChange={handleFormChange}
                    />
                </div>

                <div>
                    <Input 
                        label="Phone number:"
                        placeholder="555-12345"
                        onChange={handleFormChange}
                    />
                    <Input 
                        label="Address:"
                        placeholder="123 whatever street"
                        onChange={handleFormChange}
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
                        <Button 
                            className="form-button test"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Sign me up!
                        </Button>
                    </div>
                </div>

            </Form>
            
            <DarkModeCheckbox/>

        </div>
    );

}