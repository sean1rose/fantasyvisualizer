import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button , Responsive} from 'semantic-ui-react';
// http://nivo.rocks/#/heatmap/
import { ResponsiveHeatMap } from 'nivo';
import testdata from './testdata';
console.log('testdata - ', testdata);
class Home extends Component {
  render() {
    return (
      <div style={{height: "75vh", width: "100%"}} className='home-container'>
        <h1>Fantasy Visualizer</h1>
        {/* <Link className='button' to='/quarterbacks'>
          <Button>
            Quarterbacks            
          </Button>
        </Link> */}
        <ResponsiveHeatMap
          cellShape='circle'
          sizeVariation={1}
          data={testdata}
          // columns...
          // keys={[
          //   "tgt",
          //   "rec",
          //   "recyd",
          //   "rectd"
          // ]}
          keys={[
            "hot dog",
            "burger",
            "sandwich",
            "kebab",
            "fries",
            "donut",
            "junk",
            "sushi",
            "ramen",
            "curry",
            "udon"
          ]}
          indexBy="country"
          margin={{
              "top": 100,
              "right": 60,
              "bottom": 60,
              "left": 60
          }}
          forceSquare={true}
          axisTop={{
              "orient": "top",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": -90,
              "legend": "",
              "legendOffset": 36
          }}
          axisLeft={{
              "orient": "left",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": 0,
              "legend": "country",
              "legendPosition": "center",
              "legendOffset": -40
          }}
          cellOpacity={1}
          cellBorderColor="inherit:darker(0.4)"
          labelTextColor="inherit:darker(1.8)"
          defs={[
              {
                  "id": "lines",
                  "type": "patternLines",
                  "background": "inherit",
                  "color": "rgba(0, 0, 0, 0.1)",
                  "rotation": -45,
                  "lineWidth": 4,
                  "spacing": 7
              }
          ]}
          fill={[
              {
                  "id": "lines"
              }
          ]}
          animate={true}
          motionStiffness={80}
          motionDamping={9}
          hoverTarget="cell"
          cellHoverOthersOpacity={0.25}          
        />
      </div>
    )
  }
}

export default Home;