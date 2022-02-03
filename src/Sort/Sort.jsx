import React, { useEffect, useState } from "react";
import "./Sort.scss";

const Sort = ({ setDirection, setField }) => {
  const [sort, setSort] = useState(false);
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    console.log('sortValue', sortValue)
  }, [sortValue])

  const handleValue = (e) => {
    console.log('1', e.target.value)
    setSortValue(e.target.value);
    setField(e.target.value);
    if (!(e.target.value)) {
      setSort(false);
    }
  }

  return (
    <div>
      {sort ? (
        <div className="activeSort">
          <label className="label">Сортировать по:</label>
          <select
            value={sortValue}
            onChange={(e) => handleValue(e)}
          >
            <option value={""}></option>
            <option value={"name"}>Имя</option>
            <option value={"doctor"}>Врач</option>
            <option value={"date"}>Дата</option>
          </select>
          <label className="label">Направление:</label>
          <select
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value={"asc"}>По возрастанию</option>
            <option>По убыванию</option>
          </select>
        </div>
      ) : (
        <div className="inactive">
          <label className="label">Сортировать по:</label>
          <select
            value={sortValue}
            onChange={(e) => {
              setSort(true);
              setSortValue(e.target.value);
              setField(e.target.value);
            }}
          >
            <option value={""}></option>
            <option value={"name"}>Имя</option>
            <option value={"doctor"}>Врач</option>
            <option value={"date"}>Дата</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Sort;
