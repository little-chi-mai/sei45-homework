import React, { Component } from 'react';
import axios from 'axios';

const getUrl = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${ city },au&appid=b52ed0195870668074ca4bd922aaaa25`
};

class Weather extends Component {
  constructor () {
    super();
    this.state = {
      temp: "",
      city: "Sydney",
      loading: false,
      showInfo: true,
    }
    this._fetchWeather = this._fetchWeather.bind(this);
    this._handleInput = this._handleInput.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._renderInfo = this._renderInfo.bind(this);
  }

  componentDidMount() {
    this._fetchWeather();
  }

  _handleKeyDown(event) {
    if (event.key === 'Enter') {
      this._fetchWeather();
    }
  }

  _fetchWeather() {
    const url = getUrl(this.state.city);
    if (!this.state.city) return;
    this.setState({loading: true});
    axios(url)
    .then((response) => {
      const temp = response.data.main.temp;
      this.setState({temp: (temp - 273.15).toFixed(2), loading: false, showInfo: true});
    });
  }

  _handleInput(event) {
    this.setState({city: event.target.value, showInfo: false});
  }

  _handleClick() {
    this._fetchWeather();
  }

  _renderInfo() {
    if (this.state.showInfo) {
      return (
        <p>Weather in <span className="city" >{ this.state.city }</span> is { this.state.temp ? `${ this.state.temp } C` : ''}</p>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Australia Weather Today</h2>
        <input type="search" placeholder="e.g. melbourne" onChange={ this._handleInput } onKeyDown={ this._handleKeyDown } />
        <button onClick={ this._handleClick }>Search</button>
        { this._renderInfo() }
        <p>{ this.state.loading ? "loading..." : "" }</p>
      </div>
    );
  }
}

export default Weather;
