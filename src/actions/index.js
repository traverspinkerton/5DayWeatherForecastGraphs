import axios from 'axios';

const API_KEY = 'a6632c70f58dcab4f02ac7402e233598';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?q=`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(term) {
	const url = `${ROOT_URL}${term},us&appid=${API_KEY}`;
	const request = axios.get(url);

	console.log('term', term);
	console.log('url', url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}