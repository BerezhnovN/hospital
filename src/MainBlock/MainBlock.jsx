import React, { useState } from "react";
import HeaderMainPage from "../Header/HeaderMainPage";
import Reception from "../Reception/Reception";
import ReceptionTable from "../Reception/ReceptionTable";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";
import FilterParams from "../Filter/FilterParams";
import "./MainBlock.scss";

const MainPage = () => {
  const [receptions, setReceptions] = useState([]);
  const [editWindow, setEditWindow] = useState(false);
  const [filter, setFilter] = useState(true);
  const [direction, setDirection] = useState("asc");
  const [field, setField] = useState("");
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  const changeEditState = () => {
    setEditWindow(!editWindow);
  };

  const sortReception = [...receptions].sort((a, b) => {
    if (!field) {
      return 0;
    }
    if (direction === "asc") {
      if (a[field] === b[field]) return 0;
      return a[field] > b[field] ? 1 : -1;
    } else {
      if (a[field] === b[field]) return 0;
      return a[field] < b[field] ? 1 : -1;
    }
  });

  return (
    <div>
      <HeaderMainPage />
      <Reception receptions={receptions} setReception={setReceptions} />
      {filter ? (
        <div className="sort-filter">
          <Sort
            direction={direction}
            setDirection={setDirection}
            field={field}
            setField={setField}
          />
          <Filter filter={filter} setFilter={setFilter} />
        </div>
      ) : (
        <div className="sort-filterParams">
          <Sort
            direction={direction}
            setDirection={setDirection}
            field={field}
            setField={setField}
          />
          <FilterParams
            filter={filter}
            setFilter={setFilter}
            setFrom={setFrom}
            to={to}
            from={from}
            setTo={setTo}
          />
        </div>
      )}
      <ReceptionTable
        sortReception={sortReception}
        setReceptions={setReceptions}
        filter={filter}
        to={to}
        from={from}
      />
    </div>
  );
};

export default MainPage;
