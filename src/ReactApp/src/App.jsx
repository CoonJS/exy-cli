import React, { Component } from 'react';

import ReactLogo from './img/ReactLogo.png';
import './global.css';

export default class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1 style={{fontFamily: 'monospace', color: 'white'}}>POWERED BY EXY CLI</h1>
        <img src={ReactLogo} alt="React" />
      </div>
    );
  }
};
