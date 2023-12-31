const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                    outputPath: 'images', 
                    },
                },
                ],
            }
        ]
    }
};