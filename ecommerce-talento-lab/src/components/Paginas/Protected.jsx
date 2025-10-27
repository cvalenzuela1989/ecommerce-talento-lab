import React from 'react';

function Protected() {
  return (
    <div style={styles.contenedor}>
      <h2 style={styles.titulo}>🔒 Panel de Administración (Ruta Protegida)</h2>
      <p>¡Bienvenido! Solo los usuarios autenticados pueden ver esta información sensible.</p>
    </div>
  );
}

export default Protected;

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
        color: '#dc3545', 
        marginBottom: '20px',
    }
};