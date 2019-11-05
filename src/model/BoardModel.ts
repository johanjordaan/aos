import { Measure } from '../Measure';

export class BoardModel {
  width: Measure;
  height: Measure;
  
  constructor(width:Measure, height:Measure) {
    this.width = width
    this.height = height
  }
};