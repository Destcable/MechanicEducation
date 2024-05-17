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
};

async function deleteManyTopic(_, args, context) {
    const { ids } = args;

    const dataDeleted = await context.prisma.topic.findMany({
        where: {
            id: {
                in: convertToNumbers(ids)
            },
        },
    });

    await context.prisma.topicHeader.deleteMany({
        where: {
            topicId: {
                in: convertToNumbers(ids)
            }
        },
    });

    await context.prisma.topic.deleteMany({
        where: {
            id: { in: ids },
        },
    });

    return dataDeleted;
};

async function deleteManyTopicTheme(_, args, context) { 
    const { ids } = args;

    const dataDeleted = await context.prisma.topicTheme.findMany({
        where: {
            id: {
                in: convertToNumbers(ids)
            },
        },
    });

    await context.prisma.topicTheme.deleteMany({
        where: {
            id: { in: ids },
        },
    });

    return dataDeleted;
};

async function addUserTask(_, args, context) { 
    const { login, taskID } = args;

    // Найти пользователя по логину
    const user = await context.prisma.user.findUnique({
      where: {
        login: login,
      }
    });
  
    if (!user) {
      throw new Error(`User with login ${login} not found`);
    }
  
    // Обновить задачи пользователя
    const updatedTasks = [...user.tasks, taskID];
  
    // Обновить пользователя с новыми задачами
    const updateUser = await context.prisma.user.update({
      where: {
        login: login,
      },
      data: {
        tasks: updatedTasks,
      }
    });
  
    return updateUser;
};

module.exports = {
    createTopic,
    deleteTopic,
    createTopicTheme,
    createThemeTask,
    createGroup,
    createUser,
    deleteManyUser,
    deleteManyGroup,
    deleteManyThemeTask,
    deleteManyTopic,
    deleteManyTopicTheme,
    addUserTask
}