const path = require('path');

const schemaFilePaths = [
    path.join(__dirname, 'customTypes.graphql'),
    path.join(__dirname, 'src/models/Topic/schema.graphql'),
    path.join(__dirname, 'src/models/TopicHeader/schema.graphql'),
    path.join(__dirname, 'src/models/TopicTheme/schema.graphql'),
    path.join(__dirname, 'src/models/ThemeTask/schema.graphql'),
];

module.exports = { 
    schemaFilePaths
};