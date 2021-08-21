import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWatchListItem } from "../../models/watchList/WatchListItem";
import { IWatchList } from "../../models/watchList/WatchList";
import { RootState } from "../store";

export interface WatchListState {
  list: IWatchList[];
}

const initialState: WatchListState = {
  list: [{ name: "FirstList", items: [] }],
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
