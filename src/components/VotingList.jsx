import React, { useState, useEffect } from 'react'
import Voting from './voting.jsx'

const VotingList = () => {

  const [votings, setVotings] = useState([]);
  const getCSRFTokenFromCookie = () => {
    return decodeURIComponent(document.cookie.split('; ')
      .find(row => row.startsWith('XSRF-TOKEN'))
      .split('=')[1]);
  };

  useEffect(() => {
    const votacion = async () => {
      try {
        const token = getCSRFTokenFromCookie();
        const res = await fetch('http://localhost:8000/api/votings', {
          method: 'GET',
          headers: {
            'X-XSRF-TOKEN': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!res.ok) {
          throw new Error('Error en la solicitud. Código de estado: ' + res.status);
        }
        const datos = await res.json();
        setVotings(datos.data);

      } catch (error) {
        console.error('Error al cargar los datos:', error.message);
      }
    }
    votacion();
  }, []);
  return (

    <div className="app-container">

      <h1>Votaciones</h1>

      {votings.map((voting) => (
        <Voting key={voting.id} voting={voting} />
      ))}
    </div>
  );
}

export default VotingList;