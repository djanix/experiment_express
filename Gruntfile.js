module.exports = function (grunt) {
    // --------------------------------------------------------------
    //   Check the /grunt folder to see all tasks (1 task per file)
    // --------------------------------------------------------------

    var pkg = grunt.file.readJSON('package.json');

    var config = {
        banner: pkg.name + ' - ' + pkg.version + '\n' +
                pkg.author.name + ' - ' + pkg.author.url + '\n' +
                'Copyright (c) <%= grunt.template.today("yyyy-mm-dd") %>',
        basePath: 'public',
        cacheBreaker: '<%= ((new Date()).valueOf().toString()) + (Math.floor((Math.random()*1000000)+1).toString()) %>',
        cssSrc: '<%= basePath %>/css/src',
        cssDest: '<%= basePath %>/css/dest',
        htmlFileExtension: 'hbs',
        imgPath: '<%= basePath %>/img',
        jsSrc: '<%= basePath %>/js/src',
        jsDest: '<%= basePath %>/js/dest',
    };

    require('load-grunt-config')(grunt, {
        data: config,
        loadGruntTasks: {
            config: require('./package.json'),
            pattern: 'grunt-*',
            scope: 'devDependencies'
        }
    });

    grunt.registerTask('default', ['deploy', 'watch']);
    grunt.registerTask('deploy', ['build:js', 'sprite', 'build:css', 'replace:cache_break']);

    grunt.registerTask('build:css', ['sass_imports', 'sass', 'autoprefixer', 'csswring']);
    grunt.registerTask('build:js', ['jshint', 'browserify']);
};