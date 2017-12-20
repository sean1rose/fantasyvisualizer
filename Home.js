import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Fantasy Visualizer</h1>
        <Link className='button' to='/quarterbacks'>
          <Button>
            Quarterbacks            
          </Button>
        </Link>
      </div>
    )
  }
}

export default Home;