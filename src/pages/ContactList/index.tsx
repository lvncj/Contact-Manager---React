import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import { CONTACT_URL, COLUMNS } from '../../constants';


const ContactList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // resolve, reject
    const fetchContacts = async () => {
      try {
        const contacts = await axios.get(CONTACT_URL);
        setData(contacts.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    const isDeleteConfirmed = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    try {
      if (isDeleteConfirmed) {
        await axios.get(`${CONTACT_URL}${id}`);
        setData((previousData) =>
          previousData.filter((item: any) => item.id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="d flex flex-column justify-content-center align-items-center bg-light vh-100 vw-100 p-2">
        <small className="h3">
          Contact List
          <Link to={"contacts/create"} className="btn btn-primary ms-2">
            <i className="fa fa-plus-circle me-2"></i>New
          </Link>
        </small>
        <table className="table table-striped">
          <thead>
            <tr>
              {/* TODO */}
              {COLUMNS.map((column: any) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const { id, name, phone, email } = item;
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>
                    <Link
                      to={`/contacts/read/${id}`}
                      className="btn btn-warning me-2"
                    >
                      {" "}
                      <i className="fa fa-eye" />
                    </Link>
                    <Link
                      to={`/contacts/update/${id}`}
                      className="btn btn-primary me-2"
                    >
                      {" "}
                      <i className="fa fa-pen" />
                    </Link>
                    <button
                      onClick={(e) => handleDelete(id)}
                      className="btn btn-danger"
                    >
                      <i className="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
