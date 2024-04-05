async function getListThemeTask(_, _, context) {
    return await context.prisma.themeTask.findMany();
};

async function getManyThemeTask(_, args, context) { 
    const { themeId } = args;
    
    return await context.prisma.themeTask.findMany({ 
        where: { themeId }
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