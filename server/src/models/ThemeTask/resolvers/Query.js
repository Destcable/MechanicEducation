const convertToNumbers = require("../../../utils/convertToNumbers");

async function getListThemeTask(_, _, context) {
    return await context.prisma.themeTask.findMany();
};

async function getManyThemeTask(_, args, context) { 
    const { ids } = args;
    
    return await context.prisma.themeTask.findMany({ 
        where: { 
            id: { 
                in: convertToNumbers(ids)
            },
        }
    })
};

async function getOneThemeTask(_, args, context) { 
    const { id } = args;

    return await context.prisma.themeTask.findUnique({ 
        where: { id }
    })
};

module.exports = { 
    getListThemeTask,
    getManyThemeTask,
    getOneThemeTask
}; 