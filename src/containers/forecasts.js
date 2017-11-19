import React, { Component } from 'react';
import { connect, } from 'react-redux';

import ForecastGraph from '../components/forecast_graph';
import Googlemap from '../components/google_map';

class Forecasts extends Component {
	getForecastTableItems = forecastData => {
		const name = forecastData.city.name;
		const temps = forecastData.list.map(day =>  1.8*(day.main.temp - 273) + 32);
		const pressures = forecastData.list.map(day => day.main.pressure);
		const humidities = forecastData.list.map(day => day.main.humidity);
		const {lon, lat} = forecastData.city.coord;

		return (
			<tr key={name}>
				<td> <Googlemap lon={lon} lat={lat}/> </td>
				<ForecastGraph data={temps} color='red' unit='F'/>
				<ForecastGraph data={pressures} color='blue' unit='hPa'/>
				<ForecastGraph data={humidities} color='orange' unit='%'/>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.forecasts.map(this.getForecastTableItems)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ forecasts }) {
	return { forecasts };
}

export default connect(mapStateToProps)(Forecasts);