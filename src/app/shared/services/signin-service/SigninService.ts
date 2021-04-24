import { IRequestResult } from './../../interfaces/ICustomRequestErrors';
import { AxiosError } from "axios";
import { Api } from "../axios-config/AxiosConfig";

const signIn = async (email : string, password : string): Promise<IRequestResult> => {
    try{
        await Api.post('/sign-in', undefined, {
            headers: {
                email,
                password
            }
        });
        return {sucess : true};
    }
    catch(error){
        const err = error as AxiosError;
        
        const result : IRequestResult = {messages: [], sucess : false};

        if(err.response?.data){
            err.response.data.errors?.UserName?.forEach((fieldError: string) => {
                result.messages?.push(fieldError);
            });
        }
        else if(err.message === 'Network Error'){
            if(result.messages){
                result.messages?.push("Make sure you are connected to the internet!")
            }
            return result;
        }

        return result;
    }
}

export const SigninService ={
    signIn
};