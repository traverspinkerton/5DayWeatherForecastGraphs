import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Forecasts from '../containers/forecasts';

export default class App extends Component {
  render() {
    return (
      <div>
      	<h1>5 Day Weather Forecast</h1>
      	<SearchBar />
      	<Forecasts />
      </div>
    );
  }
}
