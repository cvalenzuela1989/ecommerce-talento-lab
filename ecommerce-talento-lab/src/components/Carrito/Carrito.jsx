import React from 'react';
import CarritoItem from './CarritoItem';

function Carrito({ productosSeleccionados, onVaciarCarrito }) {
  
  // Cálculo del total, usando 0 como fallback para precios no definidos
  const total = productosSeleccionados.reduce(
    (sum, producto) => sum + (producto.precio || 0), 
    0
  );

  return (
    <div style={styles.contenedor}>
      <h2 style={styles.titulo}>Mi Carrito 🛒</h2>

      {productosSeleccionados.length === 0 ? (
        <p style={styles.vacio}>El carrito está vacío. ¡Añade productos de la API!</p>
      ) : (
        <>
          <ul style={styles.lista}>
            {productosSeleccionados.map((producto, index) => (
              <CarritoItem key={index} producto={producto} />
            ))}
          </ul>

          <div style={styles.resumen}>
            <span style={styles.totalLabel}>TOTAL:</span>
            <span style={styles.totalValor}>${total.toFixed(2)}</span>
          </div>

          <button 
            onClick={onVaciarCarrito} 
            style={styles.botonVaciar}
          >
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
}

export default Carrito;

const styles = {
    contenedor: {
        width: '320px',
        padding: '15px',
        border: '1px solid #007bff',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 123, 255, 0.2)',
        backgroundColor: '#eaf6ff',
        height: 'fit-content',
        position: 'sticky', 
        top: '20px',
    },
    titulo: {
        color: '#0056b3',
        borderBottom: '2px solid #007bff',
        paddingBottom: '10px',
        marginBottom: '15px',
    },
    lista: {
        padding: 0,
        margin: 0,
    },
    resumen: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        paddingTop: '10px',
        borderTop: '2px solid #0056b3',
    },
    totalLabel: {
        fontSize: '1.3em',
        fontWeight: 'bold',
    },
    totalValor: {
        fontSize: '1.3em',
        fontWeight: 'bold',
        color: '#dc3545',
    },
    botonVaciar: {
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        marginTop: '15px',
        fontWeight: 'bold',
    },
    vacio: {
        textAlign: 'center',
        color: '#6c757d',
        fontStyle: 'italic',
        padding: '20px 0',
    }
};