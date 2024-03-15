const { getListTopic } = require("../models/Topic/resolvers/Query");
const { topicHeader } = require("../models/TopicHeader/resolvers/Query");
const { getThemes, topicThemes, topicThemeById } = require("../models/TopicTheme/resolvers/Query");

module.exports = {
    getListTopic, 
    topicHeader,
    getThemes,
    topicThemes,
    topicThemeById
}; 