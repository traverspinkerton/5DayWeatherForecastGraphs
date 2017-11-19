import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import fetchWeather from '../actions/index';

class SearchBar extends Component {
	state = {
		term: ''
	}

	onFormSubmit = e => {
		e.preventDefault();

		console.log('this.state.term: ', this.state.term);
		// fire off action creater to fetch weather with term from state
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input
					value={this.state.term}
					placeholder='Enter a city name for 5-day forecast}'
					onChange={e => this.setState({ term: e.target.value })}
				/>
				<button type="submit">
					Submit
				</button>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch );
}


export default connect(null, mapDispatchToProps)(SearchBar);