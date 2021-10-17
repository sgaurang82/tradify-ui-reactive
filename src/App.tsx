import './App.css';

import { useAppSelector } from './app/hooks';
import { watchList } from './app/store/slices/watchListSlice';
import CreateWatchList from './features/counter/watchList/CreateWatchList';
import WatchList from './features/counter/watchList/WatchList';

import StockChart from './features/charts/stockChart';

import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#07889B',
		},
		secondary: {
			main: '#E37222',
		},
	},
	typography: {
		fontFamily: 'Arial',
		fontSize: 12,
	},
});

function App() {
	const list = useAppSelector(watchList);

	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<header className='App-header'>
					<div
						style={{ display: 'flex', alignItems: 'start', flexWrap: 'wrap' }}
					>
						{list[0].items.map((item) => (
							<StockChart symbol={item.instrumentSymbol} />
						))}
					</div>

					<CreateWatchList />
					<WatchList />
				</header>
			</ThemeProvider>
		</div>
	);
}

export default App;
