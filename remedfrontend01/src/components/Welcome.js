import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div className="container">


        <h2>Halo {this.props.name}</h2>


      </div>
    );
  }
}

export default Welcome;