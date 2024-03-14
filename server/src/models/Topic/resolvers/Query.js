async function topics(_, _, context) {
    return await context.prisma.topic.findMany();
};

module.exports = {
    topics
}