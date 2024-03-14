const { topics } = require("../models/Topic/resolvers/Query");
const { topicHeader } = require("../models/TopicHeader/resolvers/Query");
const { topicThemes, topicThemeById } = require("../models/TopicTheme/resolvers/Query");

module.exports = { 
    topics, 
    topicHeader,
    topicThemes,
    topicThemeById
};