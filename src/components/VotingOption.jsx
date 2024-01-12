import React, { useState } from 'react'
import getCSRFTokenFromCookie from '@/functions/getCSRFTokenFromCookie';


const VotingOption = ({ option, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const votar = async (val) => {
    try {
      const token = getCSRFTokenFromCookie();
      const res = await fetch('http://localhost:8000/api/voting/vote', {
        method: 'POST',
        headers: {
          'X-XSRF-TOKEN': token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "option": val
        }),
        credentials: 'include',
      });
      if (!res.ok) {
        throw new Error('Error al intentar votar: ' + res.status);
      }
      const resultado = await res.json();
      console.log(resultado);
    } catch (error) {
      console.error('Error al registrar voto:', error.message);
    }


  };

  const styles = {
    option: {
      background: isHovered ? '#d9d9d9' : '#f0f0f0',
      padding: '5px',
      margin: '5px',
    },
  };

  return (
    <>
      {type == "active" ?
        <div style={styles.option}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => votar(option.id)}>
            {option.description}
        </div> :
        <div style={styles.option}>
            {option.description}
        </div>}

    </>
  );
}

export default VotingOption;