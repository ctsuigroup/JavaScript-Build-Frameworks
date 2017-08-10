var webpack = require('webpack');
var path = require('path');

console.log("__dirname:: "+__dirname);
module.exports = {
    entry: [
        './entry.js'
    ],
    output: {
    	path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};

