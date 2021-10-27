import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAppSelector } from '../../app/hooks';
import { watchList } from '../../app/store/slices/watchListSlice';

const WatchList = () => {
	const list = useAppSelector(watchList);
	const columns: GridColDef[] = [
		{
			field: 'id',
			headerName: 'ID',
			width: 150,
			editable: false,
			hide: true,
		},
		{
			field: 'instrumentSymbol',
			headerName: 'Symbol',
			width: 150,
			editable: false,
		},
		{
			field: 'addedPrice',
			headerName: 'Added Price',
			width: 200,
			editable: false,
		},
		{
			field: 'buyTargetPrice',
			headerName: 'Buy Target Price',
			width: 200,
			editable: false,
		},
		{
			field: 'sellTargetPrice',
			headerName: 'Sell Target Price',
			width: 200,
			editable: false,
		},
	];
	return (
		<div>
			{/* {console.log(list)} */}
			<DataGrid
				columns={columns}
				rows={list[0].items}
				style={{ height: '500px', width: '1000px' }}
			/>
		</div>
	);
};

export default WatchList;
