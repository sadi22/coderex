/* eslint no-extend-native: 0 */

// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)

console.log('Made by Code%cRex %cwith coffee ', 'color: #00b4ff', 'color: #000');

// core-js comes with Next.js. So, you can import it like below
import includes from 'core-js/library/fn/string/virtual/includes'
import repeat from 'core-js/library/fn/string/virtual/repeat'
import assign from 'core-js/library/fn/object/assign'

// FOLLOWING IS THE IMPORT I NEEDED FOR IE 11, 10
import 'core-js/fn/object/assign'

// THESE MAY NOT BE NECESARY FOR IE, AT ALL
import 'core-js/library/es6/map'
import 'core-js/library/es6/set'


String.prototype.includes = includes
String.prototype.repeat = repeat
