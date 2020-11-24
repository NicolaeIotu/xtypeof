module.exports = {
  'plugins': ["plugins/markdown"],
  'recurseDepth': 10,
  'source': {
    'includePattern': '.+\\.js(doc|x)?$',
    'excludePattern': '(^|\\/|\\\\)_',
    'exclude': [
      './.github', './.idea', './.nyc_output', './dist', './node_modules', './test',  './scripts'
    ]
  },
  'sourceType': 'module',
  'tags': {
    'allowUnknownTags': true,
    'dictionaries': [
      'jsdoc',
      'closure'
    ]
  },
  'templates': {
    'default': {
      'includeDate': false,
      'outputSourceFiles': true,
      'useLongnameInNav': true
    },
    'cleverLinks': false,
    'monospaceLinks': false
  },
  'opts': {
    'template': 'templates/default',
    'encoding': 'utf8',
    'destination': './docs/',
    'recurse': true
  }
}
