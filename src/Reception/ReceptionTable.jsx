import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ReceptionTable.scss";
import Delete from "../images/Vectordelete.svg";
import Edit from "../images/Vectoredit.svg";
import DeleteWindow from "../Modal/DeleteWindow/DeleteWindow";
import EditWindow from "../Modal/EditWindow/EditWindow";
import "../Modal/EditWindow/EditWindow.scss";
import "../Modal/DeleteWindow/DeleteWindow.scss";
import _ from "lodash";
import moment from "moment";
const link = "http://localhost:8000/api/patients/";

const ReceptionTable = ({ sortReception, setReceptions, from, to, filter }) => {
  const [active, setActive] = useState(false);
  const [activeEdit, setActiveEdit] = useState(false);
  const [receptionEdit, setReceptionEdit] = useState({});
  const [deleteReception, setDelReception] = useState({});

  const editReception = async (reception) => {
    const { _id, name, doctor, date, complaints } = reception;
    await axios
      .patch(`${link}${_id}`, {
        _id: _id,
        name: name,
        doctor: doctor,
        date: date,
        complaints: complaints,
      })
      .then((res) => {
        if (res.status !== 200) {
          alert("Ошибка!");
        } else {
          getReceptions();
        }
      });
  };

  async function getReceptions() {
    await axios.get(`${link}`).then((res) => {
      if (res) {
        setReceptions(res.data);
      }
    });
  }

  useEffect(() => {
    console.log("srxegaew");
    getReceptions();
  }, []);

  const onEditClick = (reception) => {
    setActiveEdit(true);
    setReceptionEdit(reception);
  };

  const onDelClick = (reception) => {
    setActive(true);
    setDelReception(reception);
  };

  const filteredArr = [...sortReception];

  const filterDate = (array) => {
    if (!filter) {
      if (from && to) {
        array = _.filter(filteredArr, (item) =>
          moment(item.date).isBetween(from, to, "date", "[]")
        );
      } else if (from) {
        array = _.filter(filteredArr, (item) =>
          moment(item.date).isAfter(from)
        );
      } else if (to) {
        array = _.filter(filteredArr, (item) => moment(item.date).isBefore(to));
      }
    } else {
      array = sortReception;
    }
    return array;
  };

  return (
    <div>
      <table>
        <thead>
          <th>Имя</th>
          <th>Врач</th>
          <th>Дата</th>
          <th>Жалобы</th>
          <th></th>
        </thead>
        <tbody>
          {filterDate(filteredArr).map((reception) => (
            <tr key={`${reception._id}`}>
              <td className="border">{reception.name}</td>
              <td>{reception.doctor}</td>
              <td>
                {reception.date.slice(0, 10).split("-").reverse().join(".")}
              </td>
              <td>{reception.complaints}</td>
              <td>
                <img
                  src={Delete}
                  alt="Удаление"
                  onClick={() => onDelClick(reception)}
                />
                <img
                  src={Edit}
                  alt="редактирование"
                  onClick={() => onEditClick(reception)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <DeleteWindow
          active={active}
          setActive={setActive}
          receptions={sortReception}
          setReceptions={setReceptions}
          deleteReception={deleteReception}
        />
        {activeEdit && (
          <EditWindow
            setActiveEdit={setActiveEdit}
            receptionEdit={receptionEdit}
            editReception={editReception}
          />
        )}
      </div>
    </div>
  );
};

export default ReceptionTable;
