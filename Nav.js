import React from 'react';
import { NavLink }from 'react-router-dom';
import { Menu, Dropdown, Container } from 'semantic-ui-react';
import styled from "styled-components";

const DropdownMenuStyles = styled(Dropdown.Menu)`
  min-width: 260px !important;  
`;

const DropdownItemStyles = styled(Dropdown.Item)`
  display: inline !important;
`

const teams = [{name: 'ari', label: 'ARI'}, {name: 'atl', label: 'ATL'}, {name: 'bal', label: 'BAL'}, {name: 'buf', label: 'BUF'},  {name: 'ari', label: 'ARI'}, {name: 'atl', label: 'ATL'}, {name: 'bal', label: 'BAL'}, {name: 'buf', label: 'BUF'},  {name: 'ari', label: 'ARI'}, {name: 'atl', label: 'ATL'}, {name: 'bal', label: 'BAL'}, {name: 'buf', label: 'BUF'},  {name: 'ari', label: 'ARI'}, {name: 'atl', label: 'ATL'}, {name: 'bal', label: 'BAL'}, {name: 'buf', label: 'BUF'},  {name: 'ari', label: 'ARI'}, {name: 'atl', label: 'ATL'}, {name: 'bal', label: 'BAL'}, {name: 'buf', label: 'BUF'},  {name: 'ari', label: 'ARI'}, {name: 'atl', label: 'ATL'}, {name: 'bal', label: 'BAL'}, {name: 'buf', label: 'BUF'},  {name: 'ari', label: 'ARI'}, {name: 'atl', label: 'ATL'}, {name: 'bal', label: 'BAL'}, {name: 'buf', label: 'BUF'},  {name: 'ari', label: 'ARI'}, {name: 'atl', label: 'ATL'}, {name: 'bal', label: 'BAL'}, {name: 'buf', label: 'BUF'}];
const positions = [{name: 'qb', label: 'QB'}, {name: 'rb', label: 'RB'}, {name: 'wr', label: 'WR'}, {name: 'te', label: 'TE'}];

const Nav = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item  header>
        <NavLink activeClassName='active' to='/'>Fantasy Visualizer</NavLink>
      </Menu.Item>
      <Dropdown item simple text='Menu'>

        <Dropdown.Menu>

          <Dropdown.Header>Options</Dropdown.Header>

          <Dropdown.Divider />

          <Dropdown.Item>
            <i className='dropdown icon'/>
            <span className='text'>Teams</span>
            <DropdownMenuStyles>
              {teams.map((team, idx) => {
                return (
                  <DropdownItemStyles key={team.name}>{team.label}</DropdownItemStyles>
                );
              })}            
            </DropdownMenuStyles>          
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