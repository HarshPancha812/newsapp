import React, { Component } from 'react';
import loading from './loading.gif'
export class Loading extends Component {
  render() {
    return (
        <div className="container text-center">
            <img src={loading} height="50px" width="50px" alt="" />
        </div>
    );
  }
}

export default Loading;
