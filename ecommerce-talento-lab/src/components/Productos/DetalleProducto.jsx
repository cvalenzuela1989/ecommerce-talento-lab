import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


const API_BASE_URL = 'https://68fa7f3eef8b2e621e80281a.mockapi.io/api/v1/productos';

function DetalleProducto() {
  
  const { id } = useParams(); 
  
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setCargando(true);
    setError(null);

    const obtenerDetalle = async () => {
      try {
        
        const respuesta = await fetch(`${API_BASE_URL}/${id}`); 
        
        if (!respuesta.ok) {
          throw new Error(`Producto con ID ${id} no encontrado.`);
        }
        
        const data = await respuesta.json();
        
        setProducto(data); 
        setCargando(false);
      } catch (err) {
        console.error("Error al obtener detalle:", err);
        setError("No pudimos cargar el detalle de este producto.");
        setCargando(false);
      }
    };

    obtenerDetalle();
    
  }, [id]); // El efecto se ejecuta cuando el ID del link cambia


  if (cargando) {
    return <div style={styles.mensajeEstado}>Cargando detalle del producto... ⏳</div>;
  }

  if (error) {
    return <div style={styles.mensajeEstadoError}>{error}</div>;
  }

  if (!producto) {
    return <div style={styles.mensajeEstado}>Producto no disponible.</div>;
  }

  // Desestructuramos el producto para usar sus propiedades
  const { nombre, precio, id: productoId } = producto; 

  return (
    <div style={styles.contenedor}>
      <Link to="/" style={styles.volverLink}>← Volver a la Lista</Link>
      <h2 style={styles.titulo}>{nombre}</h2>
      <div style={styles.detalleCard}>
        <p style={styles.precio}>Precio: <span style={{fontSize: '1.5em', fontWeight: 'bold'}}>${precio ? precio.toFixed(2) : 'N/A'}</span></p>
        <p style={styles.descripcion}>
          Detalle técnico y descripción completa del producto. 
          Este ID ({productoId}) fue cargado de manera dinámica desde la API.
        </p>
        <button 
          style={styles.botonComprar} 
          onClick={() => alert(`Simulando compra de: ${nombre}`)}
        >
          Comprar Ahora
        </button>
      </div>
    </div>
  );
}

export default DetalleProducto;

const styles = {
    contenedor: { padding: '40px', maxWidth: '800px', margin: 'auto' },
    titulo: { color: '#0056b3', borderBottom: '2px solid #ccc', paddingBottom: '10px' },
    detalleCard: { padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
    precio: { fontSize: '1.2em', margin: '15px 0' },
    descripcion: { color: '#666', lineHeight: '1.6' },
    botonComprar: { backgroundColor: '#28a745', color: 'white', padding: '12px 25px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
    volverLink: { textDecoration: 'none', color: '#007bff', display: 'block', marginBottom: '20px' },
    mensajeEstado: { textAlign: 'center', padding: '50px', fontSize: '1.5em', color: '#0056b3' },
    mensajeEstadoError: { textAlign: 'center', padding: '50px', fontSize: '1.5em', color: 'red' }
};