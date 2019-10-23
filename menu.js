const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#00ffff', '#0088FF'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 2,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
});


const createMenuItem = (x,y,item) => {
  const menuItem = new PIXI.Text(item,style)

  menuItem.x = x
  menuItem.y = y

  menuItem.interactive = true;

  const onOver = () => {
      menuItem.isOver = true
      menuItem.alpha = 0.5

      console.log(menuItem.width)
  }

  const onOut = () => {
      menuItem.isOver = false;
      menuItem.alpha = 1
  }

  const onUp = () => {
    console.log(`selected [${item}]`)
  }

  menuItem
    .on('pointerup', onUp)
    .on('pointerover', onOver)
    .on('pointerout', onOut)

  return menuItem
}

const createMenu = (x,y,items) => {
  const menu = new PIXI.Container()

  menu.x = x
  menu.y = y

  items.forEach((item,i)=>{
    menu.addChild(createMenuItem(x,y+i*(style.fontSize*1.2),item))
  })

  return menu
}
