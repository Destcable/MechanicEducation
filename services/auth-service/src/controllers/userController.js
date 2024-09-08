import { prisma } from "../config/prisma.js";
import { validate } from "../utils/validate.js";

export const userController = {
    create: async (req, res) => {
        const validateData = validate(req, {
            name: 'required',
            login: 'required',
            password: 'required',
            role: 'required',
        });

        if (validateData.errors) {
            return res.status(404).send(validateData.errors)
        }

        const { name, login, password, role } = validateData;
        
        try {
            const data = await prisma.user.create({
                data: {
                    name, login,
                    password, role,
                    title: req.body.title
                }
            })
    
            return res.send(data)   
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    tokenVerify: () => {

    },

    tokenRefresh: () => {

    }
}