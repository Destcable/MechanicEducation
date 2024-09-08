const convertToNumbers = require("../../../utils/convertToNumbers");

async function getThemes(_, args, context) { 
    return await context.prisma.topicTheme.findMany();
}

async function topicThemes(_, args, context) { 
    const { topicId } = args;
 
    return await context.prisma.topicTheme.findMany({
        where: { topicId }
    })
};

async function getManyTopicThemes(_, args, context) { 
    const { ids } = args;

    return await context.prisma.topicTheme.findMany({ 
        where: { 
            id: { 
                in: convertToNumbers(ids)
            },
        }
    })
}

async function topicThemeById(_, args, context) {
    const { id } = args;

    return await context.prisma.topicTheme.findUnique({
        where: { id }
    });
};


module.exports = { 
    topicThemes,
    topicThemeById,
    getManyTopicThemes,
    getThemes
};