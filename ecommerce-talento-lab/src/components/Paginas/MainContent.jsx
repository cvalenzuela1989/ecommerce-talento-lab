import React, { useState, useEffect } from 'react';
import ListaProductos from '../Productos/ListaProductos.jsx';
import Carrito from '../Carrito/Carrito';


const MOCKAPI_URL = 'https://68fa7f3eef8b2e621e80281a.mockapi.io/api/v1/productos'; 


function MainContent({ carrito, agregarProducto, vaciarCarrito }) {
  

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // 1. Iniciar el estado de carga
    setCargando(true);
    setError(null);

    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch(MOCKAPI_URL);
        
        if (!respuesta.ok) {
          // Si la respuesta HTTP no es exitosa (ej. 404, 500)
          throw new Error(`Error en la solicitud: Código ${respuesta.status}`);
        }
        
        const data = await respuesta.json();

        // 2. Mapeo para asegurar que los nombres de las propiedades sean correctos
        const productosMapeados = data.map((item) => ({
             id: item.id,
             
             nombre: item.nombre || 'Producto Desconocido', 
             precio: item.precio || 19.99, 
        }));


        setProductos(productosMapeados);
        setCargando(false); // Carga exitosa

      } catch (err) {
        console.error("Error al obtener datos:", err);
        setError("Error al cargar productos. Por favor, inténtalo más tarde."); 
        setCargando(false); 
      }
    };

    obtenerProductos();
    
  }, []); 


  // 3. Renderizado Condicional
  let contenidoProductos;
  
  if (cargando) {
    contenidoProductos = <p style={styles.mensajeEstado}>Cargando productos... 🔄</p>;
  } else if (error) {
    contenidoProductos = <p style={{...styles.mensajeEstado, color: 'red'}}>{error}</p>;
  } else if (productos.length === 0) {
     contenidoProductos = <p style={styles.mensajeEstado}>No se encontraron productos.</p>;
  }
  else {
    contenidoProductos = (
        <ListaProductos 
            productos={productos}
            onAgregarProducto={agregarProducto} 
        />
    );
  }

  return (
    <div style={styles.contenedor}>
      
      <div style={styles.listaContenedor}>
          <h2>Productos en Venta</h2>
          {contenidoProductos}
      </div>
      
      {/* Pasar el estado y las funciones del carrito */}
      <Carrito 
          productosSeleccionados={carrito} 
          onVaciarCarrito={vaciarCarrito} 
      />
    </div>
  );
}

export default MainContent;

const styles = {
    contenedor: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 0',
    },
    listaContenedor: {
        flex: 2, 
        paddingRight: '20px',
        textAlign: 'center',
    },
    mensajeEstado: {
        fontSize: '1.4em',
        color: '#0056b3',
        padding: '30px',
        fontWeight: 'bold',
    }
};