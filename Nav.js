import React from 'react';
import { NavLink }from 'react-router-dom';
import { Menu, Dropdown, Container } from 'semantic-ui-react';
import { Button } from 'antd'
import styled from "styled-components";

const DropdownMenuStyles = styled(Dropdown.Menu)`
  min-width: 260px !important;
  display: grid !important;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
`;

const DropdownItemStyles = styled(Dropdown.Item)`
  display: inline !important;
`

const teams = [{name: 'ari', label: 'ARI'}, {name: 'atl', label: 'ATL'}, {name: 'bal', label: 'BAL'}, {name: 'buf', label: 'BUF'},  {name: 'car', label: 'CAR'}, {name: 'chi', label: 'CHI'}, {name: 'cin', label: 'CIN'}, {name: 'cle', label: 'CLE'},  {name: 'dal', label: 'DAL'}, {name: 'den', label: 'DEN'}, {name: 'det', label: 'DET'}, {name: 'gb', label: 'GB'},  {name: 'hou', label: 'HOU'}, {name: 'ind', label: 'IND'}, {name: 'jax', label: 'JAX'}, {name: 'kc', label: 'KC'},  {name: 'lar', label: 'LAR'}, {name: 'mia', label: 'MIA'}, {name: 'min', label: 'MIN'}, {name: 'ne', label: 'NE'},  {name: 'no', label: 'NO'}, {name: 'nyg', label: 'NYG'}, {name: 'nyj', label: 'NYJ'}, {name: 'oak', label: 'OAK'},  {name: 'phi', label: 'PHI'}, {name: 'pit', label: 'PIT'}, {name: 'lac', label: 'LAC'}, {name: 'sea', label: 'SEA'},  {name: 'sf', label: 'SF'}, {name: 'tb', label: 'TB'}, {name: 'ten', label: 'TEN'}, {name: 'was', label: 'WAS'}];
const positions = [{name: 'qb', label: 'QB'}, {name: 'rb', label: 'RB'}, {name: 'wr', label: 'WR'}, {name: 'te', label: 'TE'}];

const Nav = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item  header>
        <NavLink activeClassName='active' to='/'>Fantasy Visualizer</NavLink>
      </Menu.Item>
      {/* TEAMS */}
      <Dropdown item simple text='Teams'>
        <DropdownMenuStyles>
          {teams.map((team, idx) => {
            return (
              <DropdownItemStyles key={team.name}>{team.label}</DropdownItemStyles>
            );
          })}            
        </DropdownMenuStyles>   
      </Dropdown>
      
      {/* POSITIONs */}
      <Dropdown item simple text='Position'>
        <Dropdown.Menu>
          {positions.map((position, idx) => {
            return (
              <Dropdown.Item key={position.name}>{position.label}</Dropdown.Item>
            );
          })}            
        </Dropdown.Menu>     
      </Dropdown>

      {/* WEEKS */}
      <Dropdown item simple text='Weekly'>
      </Dropdown>

      {/* YEARS */}
      <Dropdown item simple text='Year'>
      </Dropdown>      
    </Container>
  </Menu>
  // <ul className='nav'>
  //   <li><NavLink exact activeClassName='active' to='/'>Home</NavLink></li>
  //   <li><NavLink activeClassName='active' to='/quarterbacks'>Quarterbacks</NavLink></li>
  // </ul>
);

export default Nav;