export default class Color {
  min: number
  r: number
  g: number
  b: number
  style: string

  constructor (min:number) {
    this.min = min || 0
    this.r = this.colorValue(min)
    this.g = this.colorValue(min)
    this.b = this.colorValue(min)
    this.style = this.createColorStyle(this.r, this.g, this.b)
    // this._init(this.min)
  }

  // _init (min:number):void {
  //   this.r = this.colorValue(min)
  //   this.g = this.colorValue(min)
  //   this.b = this.colorValue(min)
  //   this.style = this.createColorStyle(this.r, this.g, this.b)
  // }

  colorValue (min:number):number {
    return Math.floor(Math.random() * 255 + min)
  }

  createColorStyle (r:number, g:number, b:number):string {
    return `rgba(${r}, ${g}, ${b}, .8)`
  }
}
