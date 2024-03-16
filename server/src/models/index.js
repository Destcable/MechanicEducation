const { getListThemeTask } = require("./ThemeTask/resolvers/Query");
const { getListTopic, getManyTopic } = require("./Topic/resolvers/Query");
const { topicHeader } = require("./TopicHeader/resolvers/Query");
const { getThemes, topicThemes, topicThemeById } = require("./TopicTheme/resolvers/Query");

module.exports = { 
    getListThemeTask,
    getListTopic,
    getManyTopic,
    topicHeader,
    getThemes,
    topicThemes,
    topicThemeById
}