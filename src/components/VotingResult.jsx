import React, { useState } from 'react'
import getCSRFTokenFromCookie from '@/functions/getCSRFTokenFromCookie';


const VotingResult = ({ resultado }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    result: {
      background: isHovered ? '#d9d9d9' : '#f0f0f0',
      padding: '5px',
      margin: '5px',
    },
  };

  return (
    <div style={styles.result}>
      {resultado.count}
    </div>
  );
}

export default VotingResult;