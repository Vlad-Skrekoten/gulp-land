const config = {
    mode:'production',

    entry: {
        index: './src/js/index.js',
        // contacts: './src/js/contact.js',
    },

    output: {
        filename: '[name].bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};