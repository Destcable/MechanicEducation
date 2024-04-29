const convertToNumbers = require("../utils/convertToNumbers");

async function createTopic(root, args, context) {
    const { name } = args;

    const templateHeaderSettings = {
        title: "Title",
        topic: "",
        topLineColor: "#3b5571",
        bottomLineColor: "#43698f",
        isButton_InfoContent: false,
        buttonInfoContent_text: "",
        isButton_KeyWords: false,
        buttonKeyWords_text: ""
    };

    const topicData = await context.prisma.topic.create({
        data: {
            name
        }
    });

    await context.prisma.topicHeader.create({
        data: {
            topicId: topicData.id,
            settings: templateHeaderSettings
        }
    });


    return topicData;
};

async function deleteTopic(root, args, context) {
    const { id } = args;
    return await context.prisma.topic.delete({
        where: {
            id
        }
    })
};

async function createTopicTheme(_, args, context) {
    const { topicId, title, description } = args;

    return await context.prisma.topicTheme.create({
        data: {
            topicId,
            title,
            description
        }
    })
};

async function createThemeTask(_, args, context) {

    return await context.prisma.themeTask.create({
        data: args
    });
};

async function createGroup(_, args, context) {
    return await context.prisma.group.create({
        data: args
    });
};

async function createUser(_, args, context) {
    return await context.prisma.user.create({
        data: args
    });
};

async function deleteManyUser(_, args, context) {
    const { ids } = args;
    
    const dataDeleted = await context.prisma.user.findMany({
        where: { 
            id: { 
                in: convertToNumbers(ids)
            },
        },
    });

    await context.prisma.user.deleteMany({
        where: {
            id: { in: ids },
        },
    });

    return dataDeleted;
};

async function deleteManyGroup(_, args, context) { 
    const { ids } = args;
    
    const dataDeleted = await context.prisma.group.findMany({
        where: { 
            id: { 
                in: convertToNumbers(ids)
            },
        },
    });

    await context.prisma.group.deleteMany({
        where: {
            id: { in: ids },
        },
    });

    return dataDeleted;
};

async function deleteManyThemeTask(_, args, context) { 
    const { ids } = args;
    
    const dataDeleted = await context.prisma.themeTask.findMany({
        where: { 
            id: { 
                in: convertToNumbers(ids)
            },
        },
    });

    await context.prisma.themeTask.deleteMany({
        where: {
            id: { in: ids },
        },
    });

    return dataDeleted;
}

module.exports = {
    createTopic,
    deleteTopic,
    createTopicTheme,
    createThemeTask,
    createGroup,
    createUser,
    deleteManyUser,
    deleteManyGroup,
    deleteManyThemeTask
}