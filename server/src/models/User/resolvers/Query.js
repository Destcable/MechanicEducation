const convertToNumbers = require("../../../utils/convertToNumbers");

async function getListUser(_, _, context) {
    return await context.prisma.user.findMany();
};

async function getManyUser(_, args, context) { 
    const { ids } = args;
    
    return await context.prisma.user.findMany({ 
        where: { 
            id: { 
                in: convertToNumbers(ids)
            },
        }
    })
};

async function authUser(_, args, context) { 
    const { login, password } = args;
    return await context.prisma.user.findFirst({ 
        where: { login: login, password: password }
    });
};

async function getOneUser(_, args, context) { 
    const { id } = args;

    return await context.prisma.user.findUnique({ 
        where: { id }
    })
};

module.exports = { 
    getListUser,
    getManyUser,
    getOneUser,
    authUser
}; 