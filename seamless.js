const fs = require('fs');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    functions: require('./server'),
    // jwtPrivateKey: fs.readFileSync(path.join(__dirname, 'jwt.private')),

    publicPaths: !isProduction
        ? []
        : [
            ['/', path.join(__dirname, 'client/build')],
        ],

    client: {
        react: true,
        // outputPath: path.join(__dirname, 'client/src/api.js'),
    },

    
    expressConfig: isProduction && ((app, express) => {
        app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/build/index.html')));
    })
};