import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";

export const Contact = () => {

    const { store, actions } = useContext(Context);

    const handleRemoveContacat = (index) => {
        actions.deleteContact(index);
    };

    return (
        <div className="container">
            {
                store.contacts.map((contact) => (
                    <div className="contact" key={contact.id}>
                        <div className="user"><i className="fa-solid fa-user user1"></i></div>
                        <div className="d-block">
                            <div className="mb-2"><h5>{contact.name}</h5></div>
                            <div className="mb-2"><i className="fa-solid fa-phone"></i>{contact.phone}</div>
                            <div className="mb-2"><i className="fa-solid fa-envelope"></i> {contact.email}</div>
                            <div><i className="mb-2 fa-solid fa-location-dot"></i> {contact.address}</div>
                        </div>
                        <div>
                            <Link to={`/addContact/${contact.id}`}>
                                <button className="btn btn-dark border border-warning"><i className="fa-solid fa-pen"></i></button>
                            </Link>
                            <button className="btn btn-dark border border-danger" onClick={() => {handleRemoveContacat(contact.id)}}><i className="fa-solid fa-x"></i></button>
                        </div>
                    </div>
                ))
            }
        </div>
    );

    /*
    <div className="text-center mt-5">
        <h1>Lista de contactos</h1>
        <ul class="list-group list-group-item d-flex justify-content-between">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
        </ul>
    </div>
    */
};