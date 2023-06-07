

import type {
  Plugin,
} from 'vite'






const TestPlugin: Plugin = {
  name: 'vite:react-babel',
  enforce: 'pre',


  configResolved(config) {
    console.log('===========================================')
    console.log(JSON.stringify(config))
    // console.log('111111111111111111111111111')
  },

}


export default ()=>{

  return TestPlugin
}



