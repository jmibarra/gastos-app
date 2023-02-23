import React from 'react'
import { Button, CardFooter } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate("/"+path)
    } 
    return (
        <>
            <CardFooter>
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                    <p className="mb-0">© 2023 GastosApp. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-md-end">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <Button color="link" onClick={() => navigateTo("")}>Inicio</Button>
                        </li>
                        <li className="list-inline-item">
                            <Button color="link" onClick={() => navigateTo("about")}>Acerca de</Button>
                        </li>
                        <li className="list-inline-item">
                            <Button color="link" onClick={ () => navigateTo("contact")}>Contacto</Button>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </CardFooter>
        </>
    )
}

export default Footer
