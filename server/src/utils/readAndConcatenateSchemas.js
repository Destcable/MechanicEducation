const fs = require('fs');

function readAndConcatenateSchemas(filePaths) { 
    return filePaths.map(filePath => fs.readFileSync(filePath, 'utf-8')).join('\n');
};

module.exports = { 
    readAndConcatenateSchemas
};