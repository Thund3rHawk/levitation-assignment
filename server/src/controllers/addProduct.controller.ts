import { error } from "console";
import { asyncHandler } from "../utils/asyncHandler";

export const addProduct = asyncHandler (async (req,res)=>{    
    try{
        const {name, qty, rate, totalAmount} = req.body;
        const {userId} = req.params;

        res.send ("product added successfully");

    }catch(e){
        res.send ("adding product error: " + e);
    }
})