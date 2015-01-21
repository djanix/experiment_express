module.exports = {
    files: {
        expand: true,
        flatten: true,
        src: '<%= jsSrc %>/boot.js',
        dest: '<%= jsDest %>'
    },
    options: {
        plugin: [['minifyify', {
            map: 'boot.map',
            output: '<%= jsDest %>/boot.map'
        }]],
        transform: [
            'browserify-shim'
        ],
        watch: true,
        browserifyOptions: {
            debug: true
        }
    }
};