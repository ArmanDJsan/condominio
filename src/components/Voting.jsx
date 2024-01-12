import React from 'react';
import VotingOption from './VotingOption';

const Voting = ({ voting }) => {
  const styles = {
    votingContainer: {
      border: '1px solid #ccc',
      padding: '15px',
      marginBottom: '20px',
      display: 'flex', // Utilizamos flexbox
      justifyContent: 'space-between', // Distribuye los elementos horizontalmente
    },
    optionsContainer: {
      marginTop: '10px',
      width: '48%', // Ocupa el 48% del contenedor principal
    },
    option: {
      background: '#f0f0f0',
      padding: '5px',
      margin: '5px',
    },
  };

  return (<>
     
        <h2>{voting.name}</h2>
        <p>{voting.description}</p>

        <h3>{voting.status}</h3>
    <div style={styles.votingContainer}>
     
      <div style={styles.optionsContainer}>
        {voting.options.map((option) => (
        <VotingOption key={option.id} description={option.description} />
        ))}
      </div>
      <div style={styles.optionsContainer}>
        {voting.departments_count.map((resultado) => (
          <VotingOption  key={resultado.option_id}  description={resultado.count} />
        ))}
      </div>
    </div>
    </>);
};

export default Voting;
