import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="row">
                    <ul className='foot-list'>
                        <li className='col'>
                            <Link to='/' className='foot-links' >
                                Inicio
                            </Link>
                        </li>
                        <li className='col'>
                            <Link to='/costa-rica' className='foot-links' >
                                Costa Rica
                            </Link>
                        </li>
                        <li className='col'>
                            <Link to='/actividades' className='foot-links' >
                                Actividades
                            </Link>
                        </li>
                        <li className='col'>
                            <Link to='/servicios' className='foot-links' >
                                Servicios
                            </Link>
                        </li>
                        <li className='col'>
                            <Link to='/sign-up' className='foot-links' >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr/>
                <div className="row">
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} Erick Esteban Vega Vargas
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
