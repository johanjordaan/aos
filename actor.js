
const createActor = (x,y) => {
  const actor = new PIXI.Container()

  actor.x = x
  actor.y = y

  const gfx = new PIXI.Graphics()

  gfx.lineStyle(2, 0xFEEB77, 1)
  gfx.beginFill(0x650A5A, 1)
  gfx.drawCircle(0, 0, 50)
  gfx.endFill();


  gfx.interactive = true

  /*
  const onClick = () => {
    gfx.scale.x *= 1.25
    gfx.scale.y *= 1.25
  }
  gfx.on('pointerdown', onClick)
  */

  /*const onDragStart = (event) => {
      // store a reference to the data
      // the reason for this is because of multitouch
      // we want to track the movement of this particular touch
      gfx.data = event.data;
      gfx.alpha = 0.5;
      gfx.dragging = true;
  }

  const onDragEnd = () => {
      gfx.alpha = 1;
      gfx.dragging = false;
      // set the interaction data to null
      gfx.data = null;
  }

  const onDragMove = () => {
    if (gfx.dragging) {
      const newPosition = gfx.data.getLocalPosition(gfx.parent);
      gfx.x = newPosition.x;
      gfx.y = newPosition.y;
    }
  }*/

  const menu = createMenu(10,10,['Option A','Option B','Some other OPtion thats Longer'])

  const onOpenMenu = () => {
    gfx.scale.x *= 2
    gfx.scale.y *= 2
    actor.addChild(menu)
  }

  const onCloseMenu = () => {
    gfx.scale.x *= .5
    gfx.scale.y *= .5
    actor.removeChild(menu)
  }

  gfx
    .on('pointerdown', onOpenMenu)
    .on('pointerup', onCloseMenu)
    .on('pointerupoutside', onCloseMenu)
    //.on('pointermove', onDragMove);


  actor.addChild(gfx)

  return actor
}
