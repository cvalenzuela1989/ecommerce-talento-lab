import React from 'react';
import Producto from './Producto';

function ListaProductos({ productos, onAgregarProducto }) {
  
  return (
    <div style={styles.contenedor}>
      {/* Mapeo de productos de la API */}
      {productos.map(producto => (
        <Producto 
          key={producto.id} 
          producto={producto} 
          onAgregar={onAgregarProducto}
        />
      ))}
    </div>
  );
}

export default ListaProductos;

const styles = {
    contenedor: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '15px',
        padding: '20px',
    },
};