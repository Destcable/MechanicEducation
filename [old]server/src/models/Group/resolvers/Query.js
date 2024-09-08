const convertToNumbers = require("../../../utils/convertToNumbers");

async function getListGroup(_, args, context) {
    return await context.prisma.group.findMany();
};

async function getManyGroup(_, args, context) { 
    const { ids } = args;
    
    return await context.prisma.group.findMany({ 
        where: { 
            id: { 
                in: convertToNumbers(ids)
            },
        }
    })
};

async function getOneGroup(_, args, context) { 
    const { id } = args;

    return await context.prisma.themeTask.findUnique({ 
        where: { id }
    })
};

module.exports = { 
    getListGroup,
    getManyGroup,
    getOneGroup
}; 