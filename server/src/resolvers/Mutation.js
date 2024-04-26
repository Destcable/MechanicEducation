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

async function createThemeTask(_,args, context) { 

    return await context.prisma.themeTask.create({
        data: args
    });
};

async function createGroup(_,args, context) { 
    return await context.prisma.group.create({
        data: args
    });
};

async function createUser(_,args, context) { 
    return await context.prisma.user.create({
        data: args
    });
};

module.exports = { 
    createTopic, 
    deleteTopic,
    createTopicTheme,
    createThemeTask, 
    createGroup,
    createUser
}