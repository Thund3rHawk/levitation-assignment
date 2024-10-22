import prisma from "../../db";
import { asyncHandler } from "../../utils/asyncHandler";
import bcrypt from 'bcrypt'

export const signUp = asyncHandler(async (req, res) => {
    try {
        const { email, password, name } = req.body;
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                console.log("Bcrypt Error: ", err);
                return;
            }
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) {
                    console.log('Bcrypt Hash Error: ', err);
                    return;
                }
                const user = await prisma.user.create({
                    data: {
                        name: name,
                        email: email,
                        password: hash
                    }
                })
                res.send({ message: "User Registered successfully.", data: user })
            });
        })
    } catch (error) {
        res.send('SignUp error: ' + error);
    }
})