import React, { Component } from 'react';

import './Main.css';
import {Link} from 'react-router-dom';
import { Header, Icon ,Card,Menu} from 'semantic-ui-react';
import Main from './Main';

class Home extends Component {

  render() {

    return (
        <div id="back">
            <Main/>
            <div style={{
                height: '530px',
            }}>
                <h1 style={{
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: 100,
                    marginTop: 60,
                    fontFamily: 'bold'
                }}>Land Block</h1>
                <h4 style={{
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: 60,
                    marginTop: 80,
                    fontFamily: 'bold'
                }}>A Decentralised Real Estate Application</h4>
            </div>
        </div>
    )
  }
}

export default Home;
