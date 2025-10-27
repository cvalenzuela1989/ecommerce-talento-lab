import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Desafío de Integración de API - TalentoLab - Jacqueline Valenzuela &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;

const styles = {
    footer: {
        backgroundColor: '#333',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
    },
};