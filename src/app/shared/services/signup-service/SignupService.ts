import { IRequestResult } from './../../interfaces/ICustomRequestErrors';
import { AxiosError } from "axios";
import { Api } from "../axios-config/AxiosConfig";

interface UserSignup {
    name: string,
    email: string,
    username: string,
    password: string
}

const signUp = async (user : UserSignup): Promise<IRequestResult> => {
    try{
        await Api.post('/SignUp', user);
        return {sucess : true};
    }
    catch(error){
        const err = error as AxiosError;
        
        const result : IRequestResult = {messages: [], sucess : false};
        if(err.response?.data){

            err.response.data.errors?.Password?.forEach((fieldError: string) => {
                result.messages?.push(fieldError);
            });
            err.response.data.errors?.Email?.forEach((fieldError: string) => {
                result.messages?.push(fieldError);
            });
            err.response.data.errors?.Name?.forEach((fieldError: string) => {
                result.messages?.push(fieldError);
            });
            err.response.data.errors?.UserName?.forEach((fieldError: string) => {
                result.messages?.push(fieldError);
            });
        }
        else if(err.message === 'Network Error'){
            if(result.messages){
                result.messages.push("Make sure you are connected to the internet!")
            }
            return result;
        }

        return result;
    }
}

export const SignupService ={
    signUp
};