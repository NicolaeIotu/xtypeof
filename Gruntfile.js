module.exports = function (grunt) {
  let __preferLocal = { preferLocal: true }
  let __preferNotLocal = { preferLocal: false }
  
  grunt.initConfig({
    // template vars
    __cwd: __dirname,
    
    // shell plugin
    shell: {
      purge: {
        command: [
          'npm install',
          'rm -f *.tgz',
          'rm -rf ./dist',
          'mkdir -p dist',
          'rm -rf ./docs',
          'mkdir -p docs',
          'npm uninstall',
          'rm -rf ./node_modules',
          'rm -rf ./.nyc_output'
        ].join(' && '),
        options: __preferNotLocal
      },
      eslintInit: {
        command: 'printf \'%s\n%s\n%s\n\' \'Use the following to initialize eslint:\' \'cd "<%= __cwd %>"\' ' +
          '\'eslint --init\''
      },
      eslintFix: {
        command: 'eslint --fix -c "<%= __cwd %>/.eslintrc.json"',
        options: __preferLocal
      },
      eslintFixDryRun: {
        command: 'eslint --fix-dry-run -c "<%= __cwd %>/.eslintrc.json"',
        options: __preferLocal
      },
      jsdoc: {
        command: 'rm -rf "<%= __cwd %>/jsdoc" && jsdoc -c "<%= __cwd %>/scripts/jsdoc-conf.js" "<%= __cwd %>"'
      },
      prepublish: {
        command: 'npm publish --dry-run'
      },
      pretest: {
        "command": 'grunt jsdoc && ' +
            'grunt uglifyBasic && ' +
            'browserify -e dist/xtypeof.js -o dist/xtypeof.bundle.js -s xtypeof'
      }
    },
    
    // uglify plugin
    uglify: {
      basic: {
        options: {
          mangle: true,
          compress: true
        },
        files: {
          'dist/xtypeof.js': ['lib/xtypeof.js']
        }
      },
      basicWithMap: {
        options: {
          mangle: true,
          compress: true,
          sourceMap: true
        },
        files: {
          'dist/xtypeof.js': ['lib/xtypeof.js']
        }
      }
    }
  })
  
  grunt.loadNpmTasks('grunt-shell')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  
  grunt.registerTask('default', ['shell:eslintFixDryRun'])
  grunt.registerTask('purge', ['shell:purge'])
  grunt.registerTask('eslintInit', ['shell:eslintInit'])
  grunt.registerTask('eslintFix', ['shell:eslintFix'])
  grunt.registerTask('eslintFixDryRun', ['shell:eslintFixDryRun'])
  grunt.registerTask('jsdoc', ['shell:jsdoc'])
  grunt.registerTask('prepublish', ['shell:prepublish'])
  grunt.registerTask('pretest', ['shell:pretest'])
  
  grunt.registerTask('uglifyBasic', ['uglify:basic'])
  grunt.registerTask('uglifyBasicWithMap', ['uglify:basicWithMap'])
}
