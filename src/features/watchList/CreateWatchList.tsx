import { TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../app/hooks';
import { addItem } from '../../app/store/slices/watchListSlice';

const CreateWatchList = () => {
	const { control, handleSubmit } = useForm();
	const dispatch = useAppDispatch();
	const onSubmit = (data: any) => {
		dispatch(
			addItem({
				id: new Date().getTime(),
				instrumentSymbol: data.symbol,
				instrumentType: 'EQ',
				addedPrice: data.addedPrice,
				buyTargetPrice: data.buyPrice,
				sellTargetPrice: data.sellPrice,
			})
		);
	};
	return (
		<div style={{ display: 'flex', alignItems: 'flex-start' }}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name='symbol'
					control={control}
					defaultValue=''
					render={({ field }) => (
						<TextField label='Symbol' {...field} autoFocus={true} />
					)}
				/>

				<Controller
					name='addedPrice'
					control={control}
					defaultValue=''
					render={({ field }) => <TextField label='Added Price' {...field} />}
				/>
				<Controller
					name='buyPrice'
					control={control}
					defaultValue=''
					render={({ field }) => <TextField label='Buy Price' {...field} />}
				/>
				<Controller
					name='sellPrice'
					control={control}
					defaultValue=''
					render={({ field }) => <TextField label='Sell Price' {...field} />}
				/>

				<IconButton type='submit'>
					<AddIcon></AddIcon>
				</IconButton>
			</form>
		</div>
	);
};

export default CreateWatchList;
