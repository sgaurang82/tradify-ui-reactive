// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Checkbox,
	IconButton,
	ToggleButton,
	ToggleButtonGroup,
} from '@mui/material';
import axios from 'axios';

import { useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Bar, ComposedChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { ExpandMore } from '@mui/icons-material';
import { borderBottom } from '@mui/system';

interface IProps {
	symbol: string;
}

const StockChart = (props: IProps) => {
	const [chartData, setChartData] = useState<any | null>(null);
	const [quote, setQuote] = useState<any | null>(null);
	const [duration, setDuration] = useState<string>('1y');
	const [activeData, setActiveData] = useState<any | null>(null);
	const [volumePlot, setVolumePlot] = useState<boolean>(false);

	const [showActions, setShowActions] = useState<boolean>(true);

	const [dataPointCollections, setDataPointCollections] = useState<any>([]);

	const durationList = ['1d', '5d', '1m', '3m', '6m', '9m', '1y', '5y', '10y'];

	const numFormatter = (num: number) => {
		if (num > 999 && num < 1000000) {
			return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
		} else if (num > 1000000) {
			return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
		} else if (num < 900) {
			return num; // if value < 1000, nothing to do
		}
	};
	useEffect(() => {
		axios
			.get(
				//"https://cloud.iexapis.com/stable/stock/twtr/chart/10d?token=pk_458def83f0a5453396f377545831ab6a"
				`https://sandbox.iexapis.com/stable/stock/${props.symbol}/chart/${duration}?token=Tpk_d10d989b63894ee697c4ff8f0273353d`
			)
			.then((res) => setChartData(res.data))
			.catch((e) => console.log(e));
	}, [duration, props.symbol]);

	useEffect(() => {
		axios
			.get(
				//"https://cloud.iexapis.com/stable/stock/twtr/chart/10d?token=pk_458def83f0a5453396f377545831ab6a"
				`https://sandbox.iexapis.com/stable/stock/${props.symbol}/batch?types=quote,news,chart&range=1m&last=10&&token=Tpk_d10d989b63894ee697c4ff8f0273353d`
			)
			.then((res) => console.log(res.data))
			.catch((e) => console.log(e));
	}, [duration, props.symbol]);

	useEffect(() => {
		axios
			.get(
				//"https://cloud.iexapis.com/stable/stock/twtr/chart/10d?token=pk_458def83f0a5453396f377545831ab6a"
				`https://sandbox.iexapis.com/stable/stock/${props.symbol}/quote?token=Tpk_d10d989b63894ee697c4ff8f0273353d`
			)
			.then((res) => setQuote(res.data))
			.catch((e) => console.log(e));
	}, [props.symbol]);

	const mouseMove = (props: any) => {
		if (
			props !== null &&
			props.activePayload != null &&
			props.activePayload.length > 0
		) {
			setActiveData(props.activePayload[0].payload);
		}
	};
	return (
		<Card
			style={{ width: '500px', margin: '10px' }}
			// onMouseOut={() => setShowActions(false)}
			// onMouseUp={() => setShowActions(true)}
		>
			<CardHeader
				// avatar={
				//   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
				//     R
				//   </Avatar>
				// }
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title={
					quote === null || quote.companyName === null ? '' : quote.companyName
				}
				// subheader={
				// 	<div>
				// 		{activeData !== null ? 'P:' + activeData.close : ''} &nbsp;{' '}
				// 		{activeData !== null && duration !== '1d'
				// 			? 'D:' + activeData.date
				// 			: ''}{' '}
				// 		&nbsp;{' '}
				// 		{activeData !== null &&
				// 		activeData.minute !== undefined &&
				// 		duration === '1d'
				// 			? 'M:' + activeData.minute
				// 			: ''}{' '}
				// 	</div>
				// }
			/>
			{/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
			{showActions && (
				<CardActions
					disableSpacing
					style={{
						height: '25px',
						borderTop: '1px solid',
					}}
				>
					<div>
						{' '}
						<Checkbox
							checked={volumePlot}
							onChange={(e) => setVolumePlot(e.target.checked)}
							title={'Volume'}
						/>{' '}
					</div>
					<div>
						<ToggleButtonGroup
							value={duration}
							exclusive
							onChange={(e: any, data: string) => {
								if (data !== null) {
									setDuration(data);
								}
							}}
							aria-label='Duration'
							size={'small'}
						>
							{durationList.map((item) => (
								<ToggleButton value={item} aria-label='left aligned'>
									{item}
								</ToggleButton>
							))}
						</ToggleButtonGroup>
					</div>
				</CardActions>
			)}
			<CardContent>
				<div style={{ fontSize: 14 }}>
					{activeData !== null ? 'P:' + activeData.close : ''} &nbsp;{' '}
					{activeData !== null && duration !== '1d'
						? 'D:' + activeData.date
						: ''}{' '}
					&nbsp;{' '}
					{activeData !== null &&
					activeData.minute !== undefined &&
					duration === '1d'
						? 'M:' + activeData.minute
						: ''}{' '}
					{activeData !== null &&
					volumePlot === true &&
					activeData.volume !== undefined
						? 'V:' + numFormatter(activeData.volume)
						: ''}{' '}
				</div>

				<ComposedChart
					height={200}
					width={450}
					data={chartData}
					margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
					onMouseMove={mouseMove}
				>
					{/* <CartesianGrid strokeDasharray="3 3" /> */}
					{/* <XAxis dataKey='date' axisLine={false} tick={false} /> */}
					{/* <YAxis
						axisLine={false}
						tick={false}
						type='number'
						domain={['auto', 'auto']}
					/> */}
					{/* <Tooltip /> */}
					{/* <Legend /> */}
					{/* <Line type="monotone" dataKey="low" stroke="#8884d8" />
        <Line type="monotone" dataKey="high" stroke="#8884d8" /> */}

					<Line
						type='linear'
						dataKey={duration === '1d' ? 'average' : 'close'}
						stroke='blue'
						dot={false}
					/>
					{volumePlot && (
						<Bar dataKey={(data) => data.volume / 100000} fill='green' />
					)}
				</ComposedChart>
			</CardContent>
			{showActions && (
				<CardActions
					disableSpacing
					style={{ height: '25px', borderTop: '1px solid' }}
				>
					<IconButton size='small' aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton size='small' aria-label='share'>
						<ShareIcon />
					</IconButton>
					<ExpandMore
						// expand={expanded}
						// onClick={handleExpandClick}
						// aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
			)}
		</Card>
	);
};

export default StockChart;
