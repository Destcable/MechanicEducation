async function getListThemeTask(_, _, context) {
    return await context.prisma.themeTask.findMany();
};

module.exports = {
    getListThemeTask,
}; 