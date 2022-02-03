import React, { useState } from "react";
import "./EditWindow.scss";

const EditWindow = ({ setActiveEdit, receptionEdit, editReception }) => {
  const formattedDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  const [name, setName] = useState(receptionEdit.name);
  const [doctor, setDoctor] = useState(receptionEdit.doctor);
  const [date, setDate] = useState(formattedDate(receptionEdit.date));
  const [complaints, setComplaints] = useState(receptionEdit.complaints);

  return (
    <div className="modalEdit" onClick={() => setActiveEdit(false)}>
      <div className="modal-contentEdit" onClick={(e) => e.stopPropagation()}>
        <div className="title">
          <h1>Изменить прием</h1>
        </div>
        <form>
          <label>Имя:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Врач:</label>
          <input
            type="text"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
          <label>Дата:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Жалобы:</label>
          <textarea
            value={complaints}
            onChange={(e) => setComplaints(e.target.value)}
          ></textarea>
        </form>
        <div className="btn">
          <button onClick={() => setActiveEdit()}>Cancel</button>
          <button
            className="btn-save"
            onClick={() => {
              setActiveEdit();
              editReception({
                _id: receptionEdit._id,
                name,
                doctor,
                date,
                complaints,
              });
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditWindow;
