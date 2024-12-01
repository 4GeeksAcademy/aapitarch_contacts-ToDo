import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {

    const { actions } = useContext(Context);

    function handleAddContact(e) {
        e.preventDefault();
        
        const name = e.target.elements.name.value;
        const phone = e.target.elements.phone.value;
        const email = e.target.elements.email.value;
        const address = e.target.elements.address.value;

        actions.addContact({ name, phone, email, address });
        e.target.reset();
    }

    return (
        <div>
            <h1>Pagina de añadir contacto</h1>
            <form onSubmit={handleAddContact} className="form mx-auto">
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

            <hr />
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
}