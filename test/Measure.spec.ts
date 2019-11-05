import { expect } from 'chai'

import { 
  Measure,
  MeasureType
} from '../src/Measure'


describe('measures', () => {
  describe('createMeasure', () => {
    it('should create a mm measure', () => {
      const m = new Measure(25,MeasureType.mm)
      expect(m.type).to.equal(MeasureType.mm)
      expect(m.value).to.equal(25)
    })
  })
  
  describe('convertMeasure', () => {
    it('should convert between mm and in', () => {
      const m = new Measure(25,MeasureType.mm)
      const i = m.convertTo(MeasureType.in)
      const m2 = i.convertTo(MeasureType.mm)

      expect(i.type).to.equal(MeasureType.in)
      expect(i.value).to.equal(0.984251968503937)

      expect(m2.type).to.equal(MeasureType.mm)
      expect(m2.value).to.equal(25)
    })
    
    it('should convert between ft and in', () => {
      const m = new Measure(6,MeasureType.ft)
      const i = m.convertTo(MeasureType.in)
      const m2 = i.convertTo(MeasureType.ft)

      expect(i.type).to.equal(MeasureType.in)
      expect(i.value).to.equal(72)

      expect(m2.type).to.equal(MeasureType.ft)
      expect(m2.value).to.equal(6)
    })
    
    it('should throw an exception', () => {
      const m = new Measure(6,MeasureType.ft)
      expect(()=>{m.convertTo(MeasureType.ft)}).to.throw('...')
    })

  })

})