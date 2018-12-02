import React, { Component } from 'react';


class NavigationBtn extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (

        <a className={this.props.classNameCustom} role={this.props.role} area-haspopup ={this.props.my_aria_haspopup} aria-expanded={this.props.my_aria_expanded} data-toggle={this.props.my_data_toggle} id={this.props.id} href={this.props.searchLocation} >{this.props.nameAttr}</a>

    );
  }
}

export default NavigationBtn;
