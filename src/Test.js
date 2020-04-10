// @flow

import React, { Component, Fragment } from 'react'
import {
    Tooltip,
    Marker,
    LayerGroup,
    FeatureGroup,
  Circle,
  CircleMarker,
  Map,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'

export default class AnimateExample extends Component {
    state = {
      animate: false,
      latlng: {
        lat: 51.505,
        lng: -0.09,
      },
    }
  
    handleClick = (e) => {
      this.setState({
        latlng: e.latlng,
      })
    }
  
    toggleAnimate = () => {
      this.setState({
        animate: !this.state.animate,
      })
    }
  
    render() {
      return (
        <div style={{ textAlign: 'center' }}>
          <label>
            <input
              checked={this.state.animate}
              onChange={this.toggleAnimate}
              type="checkbox"
            />
            Animate panning
          </label>
          <Map
            animate={this.state.animate}
            center={this.state.latlng}
            length={4}
            onClick={this.handleClick}
            zoom={13}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
        </div>
      )
    }
  }