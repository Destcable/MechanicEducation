async function topicHeader(_, args, context) {
    const { topicId } = args;

    return await context.prisma.topicHeader.findUnique({
        where: { topicId }
    });
};

module.exports = { 
    topicHeader
}