// import Color from './color'

export default class Dot {
  ctx:any
  x:number
  y:number
  vx:number = -0.5 + Math.random()
  vy:number = -0.5 + Math.random()
  radius:number = Math.random() * 3
  color:any = Math.random() * 3

  constructor (ctx:any, canvasWidth:number, canvasHeight:number, x?:number, y?:number) {
    this.ctx = ctx
    this.x = x || Math.random() * canvasWidth
    this.y = y || Math.random() * canvasHeight
  }

  draw ():void {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color.style
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.ctx.fill()
  }
}
