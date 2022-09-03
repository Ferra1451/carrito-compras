import React from 'react';
import Item from './Item';

const productos = require('./data.json');

export default function Listado({ incrementarCant }) {
  return (
    <div className='container'>
      { productos.map((producto) => (
        <Item key={ producto.id } producto={ producto } incrementarCant={ incrementarCant } />
      )) }
    </div>
  );
}
