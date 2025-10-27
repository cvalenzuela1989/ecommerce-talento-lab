import React from 'react';

function About() {
  return (
    <div style={styles.contenedor}>
      <h2 style={styles.titulo}>Acerca de Mi Tienda de Electrónica</h2>
      <p style={styles.parrafo}>
        Somos un eCommerce moderno construido con React y potenciado por Vite para un desarrollo rápido.
        Nuestro objetivo es ofrecer la mejor experiencia de compra, utilizando una arquitectura de componentes limpia y eficiente.
      </p>
      <p style={styles.parrafo}>
        Este proyecto dpretende demostrar la integración de una API externa (MockAPI), gestión de estado con `useState` y `useEffect`, y navegación avanzada con Rutas Dinámicas y Protegidas.
      </p>
    </div>
  );
}

export default About;


const styles = {
    contenedor: {
        padding: '40px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '50px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    titulo: {
        color: '#0056b3',
        marginBottom: '20px',
    },
    parrafo: {
        lineHeight: '1.6',
        color: '#333',
    }
};