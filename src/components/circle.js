// export class using module.exports
import React, { Component } from 'react';

import Shape from './Shape'
class Circle extends Shape {
    constructor(props) {
      super(props);
  }
    render() {
      return <div>{this.calculateArea()}</div>;
    }
  }
  export default Circle;









