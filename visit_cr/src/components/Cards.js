import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Descubre Costa Rica</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/juliana-barquero-ANTavf3QXvY-unsplash.jpg'
                        text='Aprenda sobre Costa Rica y los lugares a donde puedes ir!'
                        label='Sobre Costa rica'
                        path='/costa-rica'
                        />
                        <CardItem 
                        src='images/pexels-must-bee-kayak.jpg'
                        text='En Costa Rica los visitantes encontrarán todo lo que buscan: aventura, sol, playas, bosque, vida silvestre y bienestar y mucho más.'
                        label='Actividades'
                        path='/actividades'
                        />
                         <CardItem 
                        src='images/pexels-dziana-hasanbekava-5589439.jpg'
                        text='Planifique su viaje: Encuentre donde hospedarse, guias turísticos, restaurantes, transporte y más...'
                        label='Servicios'
                        path='/servicios'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
