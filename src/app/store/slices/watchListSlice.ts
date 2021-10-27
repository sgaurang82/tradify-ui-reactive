import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWatchListItem } from "../../models/watchList/WatchListItem";
import { IWatchList } from "../../models/watchList/WatchList";
import { RootState } from "../store";

export interface WatchListState {
  list: IWatchList[];
}

const initialState: WatchListState = {
  list: [{ name: "FirstList", items: [{id:0,instrumentSymbol:"AAPL",buyTargetPrice:0,addedPrice:0,instrumentType:"EQ",sellTargetPrice:0},{id:1,instrumentSymbol:"BB",buyTargetPrice:0,addedPrice:0,instrumentType:"EQ",sellTargetPrice:0},{id:2,instrumentSymbol:"DOCS",buyTargetPrice:0,addedPrice:0,instrumentType:"EQ",sellTargetPrice:0}] }
],
};
export const watchListSlice = createSlice({
  name: "watchlist",
  initialState: initialState,
  reducers: {
    addItem: (state: WatchListState, action: PayloadAction<IWatchListItem>) => {
      state.list[0].items.push(action.payload);
    },
  },
});

export const { addItem } = watchListSlice.actions;

export const watchList = (state: RootState) => state.watchList.list;

export default watchListSlice.reducer;
