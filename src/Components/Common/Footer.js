import React from 'react'
import { CardFooter } from 'reactstrap'

const Footer = () => {
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
                  <a href="/">Inicio</a>
                </li>
                <li className="list-inline-item">
                  <a href="/about">Acerca de</a>
                </li>
                <li className="list-inline-item">
                  <a href="/contact">Contacto</a>
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
