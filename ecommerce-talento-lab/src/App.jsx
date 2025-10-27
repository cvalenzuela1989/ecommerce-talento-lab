import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";
import MainContent from "./components/Paginas/MainContent.jsx";
import About from "./components/Paginas/About.jsx";
import Contact from "./components/Paginas/Contact.jsx";
import Login from "./components/Paginas/Login.jsx";
import Protected from "./components/Paginas/Protected.jsx";
import DetalleProducto from "./components/Productos/DetalleProducto.jsx";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [estaAutenticado, setEstaAutenticado] = useState(false); 
  const navigate = useNavigate();

  // agregar productos
  const agregarProducto = (productoSeleccionado) => {
    setCarrito([...carrito, productoSeleccionado]);
    console.log(`Producto añadido: ${productoSeleccionado.nombre}`);
  };

  // vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
    console.log("Carrito vaciado.");
  };

  // Lógica de autenticación
  const handleLogin = () => {
    setEstaAutenticado(true);
    navigate('/admin');
  };
  
  // Componente Wrapper para la protección (Guarda de Ruta)
  const RequireAuth = ({ children }) => {
    if (!estaAutenticado) {
      return <Navigate to="/login" replace />; 
    }
    return children;
  };


  return (
    <div style={styles.layout}>
      <Header />
      
      <main style={styles.main}>
        <Routes>
            {/* Ruta Principal: Carga de API, Productos y Carrito */}
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
            
            {/* Ruta Dinámica (Detalle de Producto) */}
            <Route path="/productos/:id" element={<DetalleProducto />} />

            {/* Rutas Estáticas */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Rutas Protegidas */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route 
              path="/admin" 
              element={
                <RequireAuth>
                  <Protected />
                </RequireAuth>
              } 
            />

            {/* Fallback 404 */}
            <Route path="*" element={<div style={styles.error}><h2>404 | Página no encontrada</h2></div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

const styles = {
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