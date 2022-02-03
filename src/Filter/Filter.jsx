import React from "react";
import DateFilter from "../images/Vectordatefilter.svg";
import "./Filter.scss";

const Filter = ({filter, setFilter}) => {
  
  return (
    <div>
        <div>
          <div className="filter-main">
            <label>Добавить фильтр по дате:</label>
            <img
              src={DateFilter}
              alt="Date filter"
              onClick={(e) => setFilter(!filter)}
            />
          </div>
        </div>
    
    </div>
  );
};

export default Filter;
