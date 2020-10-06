import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let i = this.props.opacity
    let c = <ColorBox opacity={this.props.opacity - 0.1}/>
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {i > 0.2 ? c : null}
      </div>
    )
  }

}

