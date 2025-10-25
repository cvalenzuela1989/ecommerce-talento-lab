import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import About from './components/Paginas/About';
import Contact from './components/Paginas/Contact';
import MainContent from './components/Paginas/MainContent';
import { Producto } from './types';

function App() {
  // 1. Estado del Carrito (usando el tipo Producto)
  const [carrito, setCarrito] = useState<Producto[]>([]);

  // Función para agregar productos (se pasa a MainContent y luego a ListaProductos)
  const agregarProducto = (productoSeleccionado: Producto) => {
    setCarrito([...carrito, productoSeleccionado]);
    console.log(`Producto añadido: ${productoSeleccionado.nombre}`);
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
    console.log("Carrito vaciado.");
  };

  return (
    <div style={styles.layout}>
      {/* El Header contiene la navegación con Links */}
      <Header />
      
      <main style={styles.main}>
        {/* 2. Definición de Rutas */}
        <Routes>
          {/* Ruta Principal: Contiene la lógica de API, Productos y Carrito */}
          <Route 
            path="/" 
            element={
              <MainContent 
                carrito={carrito}
                agregarProducto={agregarProducto}
                vaciarCarrito={vaciarCarrito}
              />
            } 
          />
          
          {/* Rutas Estáticas */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback 404 */}
          <Route path="*" element={<div style={styles.error}><h2>404 | Página no encontrada</h2></div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

const styles: { [key: string]: React.CSSProperties } = {
    layout: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
    },
    main: {
        flex: 1,
        padding: '20px',
        backgroundColor: '#f4f4f9',
    },
    error: {
        textAlign: 'center',
        padding: '50px',
    }
};