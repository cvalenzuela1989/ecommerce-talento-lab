import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
  };

  return (
    <div style={styles.contenedor}>
      <h2 style={styles.titulo}>Ponte en Contacto 📧</h2>
      <p>Nuestro equipo te responderá a la brevedad.</p>
      
      <form onSubmit={handleSubmit} style={styles.formulario}>
        <input type="text" placeholder="Tu Nombre" required style={styles.input} />
        <input type="email" placeholder="Tu Email" required style={styles.input} />
        <textarea placeholder="Tu Mensaje" required style={styles.textarea}></textarea>
        <button type="submit" style={styles.boton}>Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default Contact;

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
    textarea: {
        padding: '12px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        minHeight: '100px',
        resize: 'vertical',
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