import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh' 
      }}>
      <h1 style={{ fontSize: '5rem', marginBottom: '2rem' }}>404</h1>
      <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
        Oops! La página que estás buscando no existe.
      </p>
      <button 
        style={{ 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          padding: '0.75rem 1.5rem', 
          borderRadius: '0.25rem', 
          marginTop: '2rem', 
          cursor: 'pointer' 
        }}
        onClick={() => window.history.back()}
      >
        Volver atrás
      </button>
    </div>
  );
};

export default NotFoundPage;
