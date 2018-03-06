import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Button , Responsive} from 'semantic-ui-react';
import { ResponsiveHeatMap, Pie } from 'nivo';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend }  from 'recharts';

import rbDataService from './services/rbDataservice';
import teamDataService from './services/teamDataService';
console.log('Kareem Hunt - ', rbDataService.getRbAllWeeks('Hunt Kareem'));
console.log('KC Chiefs - ', teamDataService.getTeamAllWeeks('Kansas City Chiefs'));

const kareem = rbDataService.getRbAllWeeks('Hunt Kareem').arr;
const kc = teamDataService.getTeamAllWeeks('Kansas City Chiefs').arr;
console.log('kareem - ', kareem);
for (var i = 0; i < kareem.length; i++) {
  if (kareem[i]){
    console.log('a - ', kareem[i]["Att"]);
    console.log('b - ', kareem[i]["RZ Opp In20"]);
  }
}
class Home extends Component {

  render() {
    return (
      <div style={{height: "100vh", width: "100%"}} className='home-container'>
        <h1>Fantasy Visualizer</h1>
        {/* <Link className='button' to='/quarterbacks'>
          <Button>
            Quarterbacks            
          </Button>
        </Link> */}
        <BarChart width={900} height={400} data={kareem} >
          <XAxis  dataKey="week"/>
          <YAxis />
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip />
          <Legend />
          {/* RZ TOUCHES vs TOUCHES vs Team TOUCHES */}
          <Bar name="RZ Opp w/in 20" dataKey="RZ Opp In20" stackId="a" fill="red" />
          <Bar name="Attempts" dataKey="Att - RZ Opp In20" stackId="a" fill="#82ca9d" />
          <Bar name="Team Touches" dataKey="Team Touches - Att" stackId="a" fill="gray" />

          {/* SPECIFIC RZ TOUCHES vs RZ TOUCHES */}
          {/* <Bar name="RZ Opp w/in 5" dataKey="RZ Opp In5" stackId="a" fill="red" />
          <Bar name="RZ Opp" dataKey="RZ Opp In20 - RZ Opp In5" stackId="a" fill="#82ca9d" /> */}


          {/* <Bar datakey="Att" fill="#82ca9d" /> */}
          {/* <Bar stackId="a" /> */}
        </BarChart>


      </div>
    )
  }
}

export default Home;

{/* <Pie
width={600}
height={600}
  data={testdata}
  margin={{
      "top": 40,
      "right": 80,
      "bottom": 80,
      "left": 80
  }}
  innerRadius={0.5}
  padAngle={0.7}
  cornerRadius={3}
  colors="d320c"
  colorBy="id"
  borderColor="inherit:darker(0.6)"
  radialLabelsSkipAngle={10}
  radialLabelsTextXOffset={6}
  radialLabelsTextColor="#333333"
  radialLabelsLinkOffset={0}
  radialLabelsLinkDiagonalLength={16}
  radialLabelsLinkHorizontalLength={24}
  radialLabelsLinkStrokeWidth={1}
  radialLabelsLinkColor="inherit"
  slicesLabelsSkipAngle={10}
  slicesLabelsTextColor="#333333"
  animate={true}
  motionStiffness={90}
  motionDamping={15}
  legends={[
      {
          "anchor": "bottom",
          "direction": "row",
          "translateY": 56,
          "itemWidth": 100,
          "itemHeight": 14,
          "symbolSize": 14,
          "symbolShape": "circle"
      }
  ]}
/> */}