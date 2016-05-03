import 'normalize.css/normalize.css';
import './Main.sass';

import React from 'react'
import ReactDOM from 'react-dom'
import GoogleMapReact from 'google-map-react'
class SimpleMap extends React.Component {
  state = {
    center: [35.22, 110.48],
    zoom: 4
  };

  _onChange = ({center, zoom}) => {
    this.setState({
      center: center,
      zoom: zoom
    });
  }

  render() {
    return (
       <GoogleMapReact
        onChange={this._onChange}
        center={this.state.center}
        zoom={this.state.zoom}>
        <div className="map" lat={35.22} lng={110.48}>CENTER</div>
      </GoogleMapReact>
    );
  }
}

ReactDOM.render(
  <div style={{width: '100%', height: '100vh', color: 'green'}}>
    <SimpleMap/>
  </div>,
  document.getElementById('app')
);
