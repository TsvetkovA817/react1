import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dbFire as firebaseDB } from '../services/firebase';
import "./ViewContact.css";

const ViewContact = () => {
  const [contact, setContact] = useState({});

  const { id } = useParams();

  useEffect(() => {
    firebaseDB
      .child(`contacts/${id}`)
      .get()
      .then((data) => {
        if (data.exists()) {
          setContact({ ...data.val() });
        } else {
          setContact({});
        }
      });
  }, [id]);

  return (
    <div style={{ marginTop: "50px" }}>
      <div className={"card"}>
        <div className={"card-header"}>
          <p>Просмотр контакта</p>
        </div>
        <div className={"container"}>
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Имя:</strong>
          <span>{contact.name}</span>
          <br />
          <br />
          <strong>Email:</strong>
          <span>{contact.email}</span>
          <br />
          <br />
          <strong>Тел:</strong>
          <span>{contact.tel}</span>
          <br />
          <br />
          <strong>Подробно:</strong>
          <span>{contact.desc}</span>
          <div style={{ marginTop: "30px" }}>
            <Link to={"/contacts"}>
              <button className={"bttn btn-edit"}>К списку</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewContact;
