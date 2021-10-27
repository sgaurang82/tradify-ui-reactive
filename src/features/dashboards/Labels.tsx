import { Avatar, Chip, Stack } from '@mui/material';
import {
	DataGrid,
	GridColDef,
	GridValueFormatterParams,
} from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';

import { SP500 } from '../../data/sp500';
import { DJIA } from '../../data/djia';
import { RSL3000 } from '../../data/russell300';

const Labels = () => {
	const [index, setIndex] = useState('SP500');
	const [rows, setRows] = useState<any[]>([]);

	useEffect(() => {
		if (index === 'SP500') {
			setRows(SP500);
		} else if (index === 'DJIA') {
			setRows(DJIA);
		} else if (index === 'RSL3000') {
			setRows(RSL3000);
		}
	}, [index]);
	const columns: GridColDef[] = [
		{
			field: 'id',
			headerName: 'ID',
			width: 150,
			editable: false,
			hide: true,
		},

		{
			field: 'symbol',
			headerName: 'Symbol',
			width: 150,
			editable: false,
		},
		{
			field: 'name',
			headerName: 'Name',
			width: 150,
			editable: false,
		},
		{
			field: 'sector',
			headerName: 'Sector',
			width: 200,
			editable: false,
		},
		{
			field: 'indexWeight',
			headerName: 'Index Weight',
			width: 200,
			editable: false,
			align: 'right',
			headerAlign: 'right',
			valueFormatter: (params: GridValueFormatterParams) => {
				const valueFormatted =
					params.value !== undefined
						? Number(params.value as number).toFixed(2)
						: 0;
				return `${valueFormatted} %`;
			},
		},
	];

	return (
		<div>
			<Stack direction='row' spacing={1}>
				<Chip
					label='S&P 500'
					onClick={() => setIndex('SP500')}
					avatar={<Avatar>S</Avatar>}
					color='primary'
				/>
				<Chip
					label='DJIA'
					variant='outlined'
					onClick={() => setIndex('DJIA')}
					avatar={<Avatar>D</Avatar>}
					color='primary'
				/>
				<Chip
					label='Russell 3000'
					variant='outlined'
					onClick={() => setIndex('RSL3000')}
					avatar={<Avatar>R</Avatar>}
					color='primary'
				/>
			</Stack>
			<div>
				<DataGrid
					columns={columns}
					rows={rows}
					style={{ height: '500px', width: '1000px' }}
					rowsPerPageOptions={[50, 100, 500, 1000]}
				/>
			</div>
		</div>
	);
};

export default Labels;
