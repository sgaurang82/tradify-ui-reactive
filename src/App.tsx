import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Dashboard from './features/dashboards/Dashboard';
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
	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<header className='App-header'>
					<Dashboard />
				</header>
			</ThemeProvider>
		</div>
	);
}

export default App;
