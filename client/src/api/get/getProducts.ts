import axios from "axios";

export async function getProduct (userId: string){
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/api/products/${userId}/get`);
        return response;
    } catch (error) {
        console.log("Getting product error: ", error);        
    }
}