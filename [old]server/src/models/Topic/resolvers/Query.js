const convertToNumbers = require("../../../utils/convertToNumbers");

async function getListTopic(_, _, context) {
    return await context.prisma.topic.findMany();
};

async function getManyTopic(_, args, context) { 
    return await context.prisma.topic.findMany({ 
        where: { 
            id: { 
                in: convertToNumbers(args.ids)
            },
        }
    });
};

module.exports = {
    getListTopic,
    getManyTopic
}; 