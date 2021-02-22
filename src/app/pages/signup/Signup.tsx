import React, { useState } from 'react';
import { Form } from '../../shared/components/Form';
import { Input } from'../../shared/components/Input';
import './Signup.css';
import { DarkModeCheckbox } from '../../shared/components/DarkModeCheckbox';
import { Button } from '../../shared/components/Button';
import Maria from '../../shared/assets/images/Maria.jpg';
import Eclipse from '../../shared/assets/images/eclipse.jpg';
import {useTheme} from '../../shared/hooks/useTheme';
import {Route} from 'react-router-dom';

const formDataTemplate = {
    name:"",
    email:"",
    username:"",
    password:"",
    phone:"",
    address:""
}

export const Signup: React.FC = () => {

    const {isDark} = useTheme();

    const [formData, updateFormData] = React.useState(formDataTemplate);

    const handleFormChange = (e: React.ChangeEvent<any>) => {

        updateFormData({
            ...formData,
            [e.target.name] : e.target.value.trim()
        });

    };

    const handleSubmit = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        alert(  "Name: " + formData.name +
              "\nEmail: " + formData.email +
              "\nUsername: " + formData.username +
              "\nPassword: " + formData.password +
              "\nPhone: " + formData.phone +
              "\nAddress: " + formData.address);
        //send to back end here
    };

    return(
        <div 
            className="page-wrapper" 
            style={{backgroundImage: isDark?`url(${Eclipse})`:`url(${Maria})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'}}
        >
            <Form >
                
                <div>
                    <Input
                        name="name"
                        label="Full name:"
                        placeholder="Phil Becker"
                        onChange={handleFormChange}
                    />
                    <Input
                        name="email"
                        label="Email:"
                        placeholder="philb123@email.com"
                        type="email"
                        onChange={handleFormChange}
                    />
                </div>

                <div>
                    <Input
                        name="username"
                        label="Username:"
                        placeholder="phil.is.Cool_123"
                        onChange={handleFormChange}
                    />
                    <Input
                        name="password"
                        label="Password:"
                        placeholder="123imgay;)"
                        type="password"
                        onChange={handleFormChange}
                    />
                </div>

                <div>
                    <Input
                        name="phone"
                        label="Phone number:"
                        placeholder="555-12345"
                        onChange={handleFormChange}
                    />
                    <Input
                        name="address"
                        label="Address:"
                        placeholder="123 whatever street"
                        onChange={handleFormChange}
                    />
                </div>
                
                <div className="buttons-wrapper padding-top-g padding-bottom-s">
                    
                    <div className="back-button-wrapper">
                        <Route render={({history}) => (
                            <Button 
                            className="form-button"
                            variant='outlined'
                            onClick={() => history.push('/signin')}
                            >
                                Back to log in
                            </Button>
                        )}/>
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
            
            <DarkModeCheckbox style={{color: 'white'}}/>

        </div>
    );

}