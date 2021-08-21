import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@material-ui/data-grid";
import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { watchList } from "../../../app/store/slices/watchListSlice";

const WatchList = () => {
  const list = useAppSelector(watchList);
  const columns: GridColDef[] = [
    {
      field: "instrumentSymbol",
      headerName: "Symbol",
      width: 150,
      editable: false,
    },
    {
      field: "addedPrice",
      headerName: "Added Price",
      width: 150,
      editable: false,
    },
    {
      field: "buyTargetPrice",
      headerName: "Buy Target Price",
      width: 150,
      editable: false,
    },
    {
      field: "sellTargetPrice",
      headerName: "Sell Target Price",
      width: 150,
      editable: false,
    },
  ];
  return (
    <div>
      {/* {console.log(list)} */}
      <DataGrid columns={columns} rows={list[0].items} />
    </div>
  );
};

export default WatchList;
