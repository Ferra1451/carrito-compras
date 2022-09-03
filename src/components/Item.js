export default function Item({ producto, incrementarCant }) {


  const decrementarStock = () => {
    producto.stock -= 1;
    incrementarCant();
  }

  return (
    <div className='producto'>
      <h3>{ producto.producto.nombre }</h3>
      <p>{ producto.producto.descripcion }</p>
      <h5>En stock: { producto.stock > 0 ? producto.stock : <span>agotado</span> }</h5>
      <button disabled={ producto.stock < 1 } onClick={ decrementarStock }>{ producto.stock > 0 ? 'Comprar' : 'Sin Stock' }</button>
    </div>
  );
}
