import React from 'react';
import { render } from 'react-dom';
import GoogleMapReact from 'google-map-react'
import 'normalize.css/normalize.css';

class SimpleMap extends React.Component {
  constructor() {
    super();
    this.state = {
    center: [60.938043, 30.337157],
    zoom: 9
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange(e){
    this.setState({
      center: e.center,
      zoom: e.zoom
    });
    console.log(e.center);
    console.log(e.zoom);
  }
  render() {
    return (
       <GoogleMapReact
        onChange={this._onChange}
        center={this.state.center}
        zoom={this.state.zoom}>
        <div className="place" lat={60.955413} lng={30.337844}>MyPlace</div>
      </GoogleMapReact>
    );
  }
}

render(
  <div style={{width: '100%', height: 400}}>
    <SimpleMap/>
  </div>,
  document.getElementById('app')
);
