import React from 'react';
import { NavLink }from 'react-router-dom';
import { Menu, Dropdown, Container } from 'semantic-ui-react';

const teams = [{name: 'ari', label: 'ARI'}, {name: 'atl', label: 'ATL'}, {name: 'bal', label: 'BAL'}, {name: 'buf', label: 'BUF'}];
const positions = [{name: 'qb', label: 'QB'}, {name: 'rb', label: 'RB'}, {name: 'wr', label: 'WR'}, {name: 'te', label: 'TE'}];

const Nav = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <NavLink activeClassName='active' to='/'>Fantasy Visualizer</NavLink>
      </Menu.Item>
      <Dropdown item simple text='Menu'>

        <Dropdown.Menu>

          <Dropdown.Header>Options</Dropdown.Header>

          <Dropdown.Divider />

          <Dropdown.Item>
            <i className='dropdown icon'/>
            <span className='text'>Teams</span>
            <Dropdown.Menu>
              {teams.map((team, idx) => {
                return (
                  <Dropdown.Item key={team.name}>{team.label}</Dropdown.Item>
                );
              })}            
            </Dropdown.Menu>          
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item>
            <i className='dropdown icon'/>
            <span className='text'>Positions</span>
            <Dropdown.Menu>
              {positions.map((position, idx) => {
                return (
                  <Dropdown.Item key={position.name}>{position.label}</Dropdown.Item>
                );
              })}            
            </Dropdown.Menu>          
          </Dropdown.Item>

        </Dropdown.Menu>

      </Dropdown>
    </Container>
  </Menu>
  // <ul className='nav'>
  //   <li><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
  //   <li><NavLink activeClassName='active' to='/quarterbacks'>Quarterbacks</NavLink></li>
  // </ul>
);

export default Nav;