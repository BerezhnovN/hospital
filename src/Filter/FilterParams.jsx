import React from "react";
import Delete from "../images/Vectordelete.svg";
import "./FilterParams.scss";

const FilterParams = ({ filter, setFilter, from, to, setTo, setFrom }) => {
  return (
    <div>
      <div className="datafilter">
        <label>с:</label>
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <label>по:</label>
        <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
        <button>Фильтровать</button>
        <img src={Delete} alt="delete" onClick={(e) => setFilter(!filter)} />
      </div>
    </div>
  );
};

export default FilterParams;
