import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Button, Input, Select } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { addItem, watchList } from "./app/store/slices/watchListSlice";
import { IWatchListItem } from "./app/models/watchList/WatchListItem";
import { Controller, useForm } from "react-hook-form";
import { register } from "./serviceWorker";
import CreateWatchList from "./features/counter/watchList/CreateWatchList";
import WatchList from "./features/counter/watchList/WatchList";
import AllCharts from "./app/models/watchList/AllCharts";

function App() {
  const dispatch = useAppDispatch();
  const list = useAppSelector(watchList);

  const onSubmit = (data: any) => console.log(data);

  const { control, handleSubmit } = useForm<IWatchListItem>();
  // const onAddClick = () => {
  //   dispatch(
  //     addItem({
  //       instrumentSymbol: "A",
  //       addedPrice: 0.0,
  //       instrumentType: "EQ",
  //       buyTargetPrice: 0.0,
  //       sellTargetPrice: 0.0,
  //     })
  //   );
  // };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <AllCharts />
        <CreateWatchList />
        <WatchList />

        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="instrumentType"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />
          <input type="submit" />
        </form>
        <Button onClick={onAddClick}> Add</Button>
        {list[0].items.map((item: IWatchListItem) => {
          return <div>{item.instrumentSymbol}</div>;
        })}
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
      </header>
    </div>
  );
}

export default App;
