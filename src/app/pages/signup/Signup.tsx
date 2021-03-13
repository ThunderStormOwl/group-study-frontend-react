import React, { useState } from 'react';
import { Form } from '../../shared/components/Form';
import { Input } from'../../shared/components/Input';
import './Signup.css';
import { DarkModeCheckbox } from '../../shared/components/DarkModeCheckbox';
import { Button } from '../../shared/components/Button';
import Maria from '../../shared/assets/images/Maria.jpg';
import Eclipse from '../../shared/assets/images/eclipse.jpg';
import {useTheme} from '../../shared/hooks/useTheme';
import {Route, useHistory} from 'react-router-dom';
import {SignupService} from '../../shared/services/signup-service/SignupService';

const formDataTemplate = {
    name:"",
    email:"",
    username:"",
    password:"",
    phone:"",
    address:""
}

export const Signup: React.FC = () => {

    const history = useHistory();

    const {isDark} = useTheme();

    const [formData, updateFormData] = React.useState(formDataTemplate);
    const [isLoading, setIsLoading] = useState(false);

    const handleFormChange = (e: React.ChangeEvent<any>) => {

        updateFormData({
            ...formData,
            [e.target.name] : e.target.value.trim()
            //insert here validation for passwords not matching
        });

    };

    const handleSubmit = async (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        const name = formData.name;
        const email = formData.email;
        const username = formData.username;
        const password = formData.password;

        setIsLoading(true);
        const result =  await SignupService.signUp({name, username, email, password});
        setIsLoading(false);

        if(result.sucess)
            history.push('/signin')
        else {
            if(!result.messages || result.messages.length === 0)
                alert("Something went wrong!")
            else
                alert(result.messages.join(",/n"));
        }

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
                        disabled={isLoading}
                        label="Full name:"
                        placeholder="Phil Becker"
                        onChange={handleFormChange}
                    />
                    <Input
                        name="email"
                        disabled={isLoading}
                        label="Email:"
                        placeholder="philb123@email.com"
                        type="email"
                        onChange={handleFormChange}
                    />
                </div>

                <div>
                    <Input
                        name="username"
                        disabled={isLoading}
                        label="Username:"
                        placeholder="phil.is.Cool_123"
                        onChange={handleFormChange}
                    />
                    <Input
                        name="password"
                        disabled={isLoading}
                        label="Password:"
                        placeholder="123imgay;)"
                        type="password"
                        onChange={handleFormChange}
                    />
                </div>

                <div>
                    <Input
                        name="phone"
                        disabled={isLoading}
                        label="Phone number:"
                        placeholder="555-12345"
                        onChange={handleFormChange}
                    />
                    <Input
                        name="address"
                        disabled={isLoading}
                        label="Address:"
                        placeholder="123 whatever street"
                        onChange={handleFormChange}
                    />
                </div>
                
                <div className="buttons-wrapper padding-top-g padding-bottom-s">
                    
                    <div>
                        <Route render={() => (
                            <Button 
                            disabled={isLoading}
                            className="form-button"
                            variant='outlined'
                            onClick={() => history.push('/signin')}
                            >
                                Back to log in
                            </Button>
                        )}/>
                    </div>

                    <div>
                        <Button
                            disabled={isLoading}
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