import 'normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

const App = React.createClass({

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'100vh'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'AQI'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

});

ReactDOM.render(<App />, document.getElementById('app'));
