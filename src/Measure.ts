export enum MeasureType {
  mm = "mm",
  in = "in",
  ft = "ft"
}

export class Measure {
  value: number
  type: MeasureType
  
  constructor(value:number, type:MeasureType) {
    this.value = value
    this.type = type
  }
  
  public convertTo(type:MeasureType):Measure {
    if(this.type === MeasureType.mm && type === MeasureType.in) {
      return new Measure(this.value/25.4,type)
    } else if(this.type === MeasureType.in && type === MeasureType.mm) {
      return new Measure(this.value*25.4,type)
    } else if(this.type === MeasureType.in && type === MeasureType.ft) {
      return new Measure(this.value/12.0,type)
    } else if(this.type === MeasureType.ft && type === MeasureType.in) {
      return new Measure(this.value*12.0,type)
    } else {
      throw "..."
    }
  }
}


