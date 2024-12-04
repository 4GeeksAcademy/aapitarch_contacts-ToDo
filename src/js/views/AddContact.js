import React, { useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/AddContact.css";

export const AddContact = () => {

    const { actions, store } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const contact = store.contacts.find(contact => contact.id === parseInt(id));
            if (contact) {
                document.getElementsByName("name")[0].value = contact.name;
                document.getElementsByName("phone")[0].value = contact.phone;
                document.getElementsByName("email")[0].value = contact.email;
                document.getElementsByName("address")[0].value = contact.address;
            }
        }
    }, [id, store.contacts]);
    
    function handleAddContact(e) {
        e.preventDefault();
        
        const name = e.target.elements.name.value;
        const phone = e.target.elements.phone.value;
        const email = e.target.elements.email.value;
        const address = e.target.elements.address.value;

        if(id) {
            actions.updateContact(id, {name, phone, email, address});
        } else {
            actions.addContact({ name, phone, email, address });
        }

        e.target.reset();
    }

    return (
        <div className="page-container">
            <h1>{id ? "Editar contacto" : "Añadir contacto"}</h1>
            <form onSubmit={handleAddContact} className="form-container">
                <div className="mb-3">
                    <label className="form-label">Nombre completo:</label>
                    <input type="text" name="name" className="form-control" placeholder="Nombre completo" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono:</label>
                    <input type="number" name="phone" className="form-control" placeholder="Teléfono" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo electrónico:</label>
                    <input type="email" name="email" className="form-control" placeholder="Correo electrónico" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección:</label>
                    <input type="text" name="address" className="form-control" placeholder="Dirección" required/>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary button1">Aceptar</button>
                </div>
            </form>

            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
}