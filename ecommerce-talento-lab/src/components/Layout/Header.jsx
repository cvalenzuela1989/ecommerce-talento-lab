import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1>🛒 Mi eCommerce Dinámico</h1>
      <nav style={styles.nav}>
        {/* Enlaces de navegación con Link */}
        <Link to="/" style={styles.link}>Productos</Link>
        <Link to="/about" style={styles.link}>Acerca de</Link>
        <Link to="/contact" style={styles.link}>Contacto</Link>
        <Link to="/admin" style={styles.link}>Admin (Ruta Protegida)</Link>
      </nav>
    </header>
  );
}

export default Header;

const styles = {
    header: {
        backgroundColor: '#0056b3',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
    },
    nav: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '5px 10px',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    }
};