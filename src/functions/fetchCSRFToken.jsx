const fetchCSRFToken = async () => {
    try {
      const response = await fetch('http://localhost:8000/sanctum/csrf-cookie', {
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Error al obtener el token CSRF');
      }
    } catch (error) {
      console.error('Error al obtener el token CSRF:', error.message);
    }
  };

  export default fetchCSRFToken;