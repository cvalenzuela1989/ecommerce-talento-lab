import React, { useState } from 'react';

function Login({ onLogin }) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'talento') { 
      onLogin(); 
    } else {
      alert('Contraseña incorrecta. Inténtalo con "talento"');
    }
  };

  return (
    <div style={styles.contenedor}>
      <h2 style={styles.titulo}>Acceso de Administrador 🔑</h2>
      <form onSubmit={handleSubmit} style={styles.formulario}>
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
          style={styles.input}
        />
        <button type="submit" style={styles.boton}>Ingresar</button>
      </form>
    </div>
  );
}

export default Login;

const styles = {
    contenedor: {
        padding: '40px',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '50px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    titulo: {
        color: '#0056b3',
        marginBottom: '20px',
    },
    formulario: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginTop: '20px',
    },
    input: {
        padding: '12px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    boton: {
        backgroundColor: '#0056b3',
        color: 'white',
        padding: '12px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
    }
};