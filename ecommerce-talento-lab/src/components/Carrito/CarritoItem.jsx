import React from 'react';

function CarritoItem({ producto }) {
  // Aseguramos el formato de precio
  const precioFormateado = producto.precio ? producto.precio.toFixed(2) : 'N/A';
  
  return (
    <li style={styles.item}>
      <span style={styles.nombre}>{producto.nombre}</span>
      <span style={styles.precio}>${precioFormateado}</span>
    </li>
  );
}

export default CarritoItem;

const styles = {
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0',
        borderBottom: '1px solid #eee',
        listStyle: 'none',
    },
    nombre: {
        flex: 1,
        textAlign: 'left',
        color: '#444',
    },
    precio: {
        fontWeight: 'bold',
        color: '#007bff',
    }
};