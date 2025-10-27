import React from 'react';
import { Link } from 'react-router-dom';

function Producto({ producto, onAgregar }) {
  
  const handleAgregarClick = () => {
    onAgregar(producto);
  };

  // Usamos un fallback seguro por si el precio no está definido
  const precioFormateado = producto.precio ? producto.precio.toFixed(2) : 'N/A';

  return (
    <div style={styles.card}>
      {/* Enlace a la ruta dinámica /productos/:id */}
      <Link to={`/productos/${producto.id}`} style={styles.link}>
        <h3 style={styles.nombre}>{producto.nombre}</h3>
      </Link>
      
      <p style={styles.precio}>${precioFormateado}</p>
      
      <button 
        onClick={handleAgregarClick} 
        style={styles.boton}
      >
        Añadir al Carrito
      </button>
    </div>
  );
}

export default Producto;

const styles = {
    card: {
        border: '1px solid #ddd',
        padding: '15px',
        margin: '10px',
        width: '200px',
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        backgroundColor: 'white',
        transition: 'transform 0.2s',
    },
    nombre: {
        fontSize: '1em',
        minHeight: '40px',
        lineHeight: '1.2',
        color: '#333',
    },
    precio: {
        color: '#28a745',
        fontWeight: 'bold',
        fontSize: '1.2em',
        margin: '10px 0',
    },
    boton: {
        backgroundColor: '#ffc107',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '10px',
        transition: 'background-color 0.2s',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
};