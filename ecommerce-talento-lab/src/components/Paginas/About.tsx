import React from 'react';

function About() {
  return (
    <div style={styles.contenedor}>
      <h2 style={styles.titulo}>Acerca de Nuestra Tecnología 🚀</h2>
      <p style={styles.parrafo}>
        Somos un eCommerce moderno construido con React, potenciado por **Vite** para un desarrollo rápido y **TypeScript** para una mayor robustez. Nuestra meta es ofrecer la mejor experiencia de usuario con una arquitectura de componentes limpia.
      </p>
      <p style={styles.parrafo}>¡Bienvenido al futuro del desarrollo!</p>
    </div>
  );
}

export default About;

const styles: { [key: string]: React.CSSProperties } = {
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