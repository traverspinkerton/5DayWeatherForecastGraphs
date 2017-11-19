import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default function ForecastGraph({ data, color, unit }) {
	let average = Math.round(data.reduce((sum, value) => sum + value) / data.length);
	// type == 'temps' ? average -= 273 : average; 
	return (
		<td>
			<div>
				<Sparklines height={120} width={180} data={data}>
					<SparklinesLine color={color} />
					<SparklinesReferenceLine type='avg' />
				</Sparklines>
				<div>{average} {unit}</div>
			</div>
		</td>
	);
}