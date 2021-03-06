let impl = null;

switch (process.type) {
  case 'browser':
    impl = require('browser/utils/prefs').default;
    break;

  case 'renderer':
    impl = require('remote').require('../browser/utils/prefs').default;
    break;
}

export default impl;
