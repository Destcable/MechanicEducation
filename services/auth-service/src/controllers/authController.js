import { prisma } from "../config/prisma.js"
import { validate } from "../utils/validate.js";

export const authController = { 
    login: async (req, res) => {
        const validateData = validate(req, { 
            login: 'required',
            password: 'required'
        });

        if (validateData.errors) { 
            return res.status(404).send(validateData.errors)
        }
        
        const { login, password } = validateData;

        const user = await prisma.user.findUnique({ 
            where: { login, password }     
        })

        return res.send( user ? user : {status: false} )
    },

    logout: () => {

    }
}