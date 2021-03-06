module.exports = {
    files: {
        options: {
            browsers: [
                'last 2 version',
                'safari 6',
                'ie 9',
                'opera 12.1',
                'ios 6',
                'android 4',
                'Firefox ESR'
            ],
            map: true
        },
        expand: true,
        flatten: true,
        src: '<%= cssDest %>/*.css',
        dest: '<%= cssDest %>'
    }
};