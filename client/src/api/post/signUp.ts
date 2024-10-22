import axios from "axios";

export async function signUp(name: string, email: string, password: string) {
    try {  
        const response = await axios.post (`${import.meta.env.VITE_API_ENDPOINT}/api/auth/sign-up`,{
            email: email,
            password: password,
            name: name
        })
        return response;
    } catch (error) {
        console.log ("Signup Error: ", error);
    }
}