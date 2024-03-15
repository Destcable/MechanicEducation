async function getListTopic(_, _, context) {
    return await context.prisma.topic.findMany();
};

module.exports = {
    getListTopic
}