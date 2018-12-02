import React, { Component } from 'react';

class Custom extends Component {
    constructor(props){
      super(props)
      this.type='submit'
    }
    render() {
      return (
        
            <input type={this.type} className='btn btn-success'></input>
        
      );
    }
  }
  
  export default Custom;