import React, { useState } from "react";
import axios from "axios";
import "./Reception.scss";
const link = "http://localhost:8000/api/patients/";

const Reception = ({ receptions, setReception }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [complaints, setComplaints] = useState("");
  const [doctor, setDoctor] = useState("");

  const addReception = async () => {
    await axios
      .post(`${link}`, {
        name: name,
        doctor: doctor,
        date: date,
        complaints: complaints,
      })
      .then((res) => {
        setName("");
        setDate();
        setComplaints("");
        setDoctor("");

        if (res.status !== 200) {
          alert("Ошибка!", res.status);
        } else {
          const updateReception = [...receptions, res.data];
          setReception(updateReception);
        }
      });
  };

  const checkInputs = (name, doctor, date, complaints) => {
    if (name && doctor && date && complaints) {
      addReception();
    } else {
      alert("Все поля должны быть заполнены !");
    }
  };

  return (
    <div className="main">
        <label>
          <p>Имя:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <p>Врач:</p>
          <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
            <option></option>
            <option>RAMZAN</option>
            <option>Vasya</option>
            <option>Nikita</option>
          </select>
        </label>
        <label>
          <p>Дата:</p>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </label>
        <label>
          <p>Жалобы:</p>
          <input
            type="text"
            value={complaints}
            onChange={(e) => setComplaints(e.target.value)}
          />
        </label>
        <button onClick={() => checkInputs(name, doctor, date, complaints)}>
          Добавить
        </button>
    </div>
  );
};

export default Reception;
