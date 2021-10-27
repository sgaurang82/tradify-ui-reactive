import '../../App.css';

import { useAppSelector } from '../../app/hooks';
import { watchList } from '../../app/store/slices/watchListSlice';

import StockChart from '../../features/charts/stockChart';

function Charts() {
	const list = useAppSelector(watchList);

	return (
		<div style={{ display: 'flex', alignItems: 'start', flexWrap: 'wrap' }}>
			{list[0].items.map((item) => (
				<StockChart symbol={item.instrumentSymbol} />
			))}
		</div>
	);
}

export default Charts;
