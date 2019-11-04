var measures = require('../src/measures')



var assert = require('assert')
describe('measures', () => {
  describe('createMeasure', () => {
    it('should create a mm measure', () => {
      const m = measures.createMeasure(25,"mm")
      assert.equal(m.type, "mm")
      assert.equal(m.value, 25)
    })
  })
  
  describe('convertMeasure', () => {
    it('should convert mm to inches', () => {
      const m = measures.createMeasure(25,"mm")
      const i = measures.convertMeasure(m,"in")
      const m2 = measures.convertMeasure(i,"mm")
      assert.equal(i.type, "in")
      assert.equal(i.value, 0.984251968503937)
      assert.equal(m2.type, "mm")
      assert.equal(m2.value, 25)
    })
  })

})