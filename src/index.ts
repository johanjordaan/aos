export * from './Measure'
export * from './model'
export * from './view'

import * as PIXI from 'pixi.js'

let type = "WebGL"

if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)
