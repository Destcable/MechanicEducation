import { prisma } from "../config/prisma.js"
import { validate } from "../utils/validate.js";

export const courseController = { 
    create: async (req, res) => { 
        const validateData = validate(req, {
            name: 'required',
            section: 'required',
        });

        if (validateData.errors) {
            return res.status(404).send(validateData.errors)
        }

        const { name, section } = validateData;
        
        try {
            const data = await prisma.course.create({
                data: { name, section }
            })
    
            return res.send(data);
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    getAll: async (req, res) => {
        const data = await prisma.course.findMany();
        
        return res.send(data);
    },
}