import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import {Paper,Typography,Rating }  from '@mui/material'

const AnyReactComponent = () => <LocationOnSharpIcon sx={{color:'#aa0000'}}/>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBfuzDPVdlGrWew5Xgd60tyuLtGZVRk8Bw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChange={""}
          onChildClick={""}
          options={""}
          
          margin={[50,50,50,50]}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            
          />
           <AnyReactComponent
            lat={58.955413}
            lng={30.337844}
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;