import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Get a five day forecast for your city.</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
