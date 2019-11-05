import { BoardModel } from '../model/BoardModel'
import * as PIXI from 'pixi.js'

export class BoardView {
  model:BoardModel
  constructor(model:BoardModel) {
    this.model = model
  }
  x = new PIXI.Container()
  
  /*public createBoard(x,y,w,h) {
    const board = new PIXI.Container()

    board.x = x
    board.y = y

    const gfx = new PIXI.Graphics()

    gfx.lineStyle(2, 0xFEEB77, 1)
    gfx.beginFill(0x650A5A, 1)
    gfx.drawRect(x, y, w, h)
    gfx.endFill();

    board.addChild(gfx)

    return board
  }*/

  
};