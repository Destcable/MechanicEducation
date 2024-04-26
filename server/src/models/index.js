const { getListGroup, getManyGroup, getOneGroup } = require("./Group/resolvers/Query");
const { getListThemeTask, getManyThemeTask, getOneThemeTask } = require("./ThemeTask/resolvers/Query");
const { getListTopic, getManyTopic } = require("./Topic/resolvers/Query");
const { topicHeader } = require("./TopicHeader/resolvers/Query");
const { getThemes, topicThemes, topicThemeById, getManyTopicThemes } = require("./TopicTheme/resolvers/Query");
const { getListUser, getManyUser, getOneUser } = require("./User/resolvers/Query");

module.exports = { 
    getListThemeTask,
    getManyThemeTask,
    getOneThemeTask,
    getListTopic,
    getManyTopic,
    topicHeader,
    getThemes,
    topicThemes,
    getManyTopicThemes,
    topicThemeById,


    getOneGroup,
    getListGroup,
    getManyGroup,
    getListUser,
    getManyUser,
    getOneUser
}