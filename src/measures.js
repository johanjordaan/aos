const _labelLookup = {
  'mm':'mm',
  'in':"''",
  'ft':"'"
}

const _convesionLookup = {
  'mm->in':(v)=>v/25.4,
  'in->mm':(v)=>v*25.4,
  'ft->in':(v)=>v*12.0,
  'in->ft':(v)=>v/12.0,
}

const createMeasure = (value,type) => {
  return {
    type:type,
    label:_labelLookup[type],
    value:value
  }
}

const convertMeasure = (value,type) => {
  if(typeof(value)==='number') {
    return createMeasure(value,type)
  } else if(typeof(value)==='object') {
    if(value.type===type) {
      return value
    } else {
      return createMeasure(_convesionLookup[`${value.type}->${type}`](value.value),type)
    }
  }  
}

if(module!==undefined) {
  module.exports = {  
    convertMeasure:convertMeasure,
    createMeasure:createMeasure,
  }
}

