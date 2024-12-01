import React, { useContext } from "react";
import { Context } from "../store/appContext";
//import "../../styles/home.css";

export const Contact = () => {

    const { store } = useContext(Context);

    const handleRemoveContacat = (index) => {
        const contactToDelete = contacts[index];
        deleteContact(contactToDelete.id);
    };

    return (
        <div className="list-group list-group-item d-flex mt-5 container">
            {
                store.contacts.map((contact) => (
                    <div className="d-flex justify-content-between contact mx-auto" key={contact}>
                        <div className="user my-auto"><i className="fa-solid fa-user user1"></i></div>
                        <div className="d-block">
                            <div className="mb-2"><h5>{contact.name}</h5></div>
                            <div className="mb-2"><i className="fa-solid fa-phone"></i>{contact.phone}</div>
                            <div className="mb-2"><i className="fa-solid fa-envelope"></i> {contact.email}</div>
                            <div><i className="mb-2 fa-solid fa-location-dot"></i> {contact.address}</div>
                        </div>
                        <div>
                            <button className="btn btn-dark border border-warning m-1" onClick={() => { }}><i className="fa-solid fa-pen"></i></button>
                            <button className="btn btn-dark border border-danger m-1" onClick={handleRemoveContacat }><i className="fa-solid fa-x"></i></button>
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