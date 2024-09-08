import { prisma } from "../config/prisma.js";

export const usersController = {
    getAllTeachers: async (req, res) => {
        try {
            const data = await prisma.user.findMany({
                where: { 
                    role: 'TEACHER'
                }
            })

            return res.send(data)   
        } catch (error) {
            return res.status(400).send(error)
        }
    },

}