import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Fantasy Visualizer</h1>
        <Link className='button' to='/quarterbacks'>
        Quarterbacks
        </Link>
      </div>
    )
  }
}

export default Home;