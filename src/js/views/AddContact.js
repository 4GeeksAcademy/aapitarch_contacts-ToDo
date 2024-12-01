import React from "react"
import { Link } from "react-router-dom";

export const AddContact = () => {

    //const { actions } = useContext(Context);

    return (
        <div>
            <h1>Pagina de añadir contacto</h1>
            <form className="form mx-auto">
                <div className="mb-3">
                    <label for="name" className="form-label">Nombre completo:</label>
                    <input type="text" className="form-control" placeholder="Nombre completo"/>
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Telefono:</label>
                    <input type="text" className="form-control" placeholder="Telefono"/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Correo electronico:</label>
                    <input type="text" className="form-control" placeholder="Correo electronico"/>
                </div>
                <div className="mb-3">
                    <label for="adress" className="form-label">Direccion:</label>
                    <input type="text" className="form-control" placeholder="Direccion"/>
                </div>


                <div className="d-flex justify-content-between">
                    <button onClick={''} type="submit" className="btn btn-primary button1">Aceptar</button>
                </div>
            </form>
            <hr></hr>
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
}