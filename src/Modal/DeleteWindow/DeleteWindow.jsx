import React from "react";
import "./DeleteWindow.scss";
import axios from "axios";
const link = "http://localhost:8000/api/patients/";

const DeleteWindow = ({
  active,
  setActive,
  receptions,
  setReceptions,
  deleteReception,
}) => {
  const deletReception = async (id) => {
    await axios.delete(`${link}${id}`).then((res) => {
      if (res.status !== 200) {
        alert(res.data, res.status);
      } else {
        const delReception = receptions.filter(
          (reception) => reception._id !== id
        );
        setReceptions(delReception);
      }
    });
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="title">
          <h1> Удалить прием</h1>
        </div>
        <p>Вы действительно хотите удалить прием?</p>
        <div className="btn">
          <button onClick={() => setActive()}>Cancel</button>
          <button
            className="btn-save"
            onClick={() => {
              setActive();
              deletReception(deleteReception._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWindow;
