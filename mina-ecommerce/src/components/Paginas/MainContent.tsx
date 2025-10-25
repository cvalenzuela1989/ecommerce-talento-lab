import React, { useState, useEffect } from 'react';
import ListaProductos from '../Productos/ListaProductos';
import Carrito from '../Carrito/Carrito';
import { type Producto } from '../../types';


const MOCKAPI_URL = 'https://mockapi.io/clone/68fa7f3eef8b2e621e80281b/api/v1/productos'; 

// Props vienen de App.tsx
interface MainContentProps {
  carrito: Producto[];
  agregarProducto: (producto: Producto) => void;
  vaciarCarrito: () => void;
}

function MainContent({ carrito, agregarProducto, vaciarCarrito }: MainContentProps) {
  

  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {

    setCargando(true);
    setError(null);

    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch(MOCKAPI_URL);
        
        if (!respuesta.ok) {
          // Si la respuesta HTTP no es exitosa
          throw new Error(`Error en la solicitud: Código ${respuesta.status}`);
        }
        
        const data: any[] = await respuesta.json();


        const productosMapeados: Producto[] = data.map((item) => ({
             id: item.id,
             nombre: item.nombre || item.name || 'Producto Desconocido',
             precio: item.precio || 19.99, 
        }));


        setProductos(productosMapeados);
        setCargando(false); // Carga exitosa

      } catch (err) {
        // ⚙️ Requisito: Gestiona posibles errores
        console.error("Error al obtener datos:", err);
        setError("Error al cargar productos. Por favor, inténtalo más tarde."); 
        setCargando(false); // Carga terminada con error
      }
    };

    obtenerProductos();
    
  }, []); // Array vacío: se ejecuta solo al montar (componentDidMount)

  // --- Renderizado Condicional del Contenido ---
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
            productos={productos} // Usamos los productos obtenidos de la API
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
      
      {}
      <Carrito 
          productosSeleccionados={carrito} 
          onVaciarCarrito={vaciarCarrito} 
      />
    </div>
  );
}

export default MainContent;

const styles: { [key: string]: React.CSSProperties } = {
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