import { FETCH_WEATHER } from '../actions/index';
console.log('FETCH_WEATHER: ', FETCH_WEATHER);

export default function forecastReducer (state = [], action) {
	console.log('action.payload: ', action.payload);

	switch (action.type) {
		case FETCH_WEATHER:
			return [ action.payload.data, ...state ];
	}

	return state;
}