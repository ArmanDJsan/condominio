import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup';
import Voting from '@/components/Voting';
import VotingOption from '@/components/VotingOption';
import VotingResult from '@/components/VotingResult';
import cancelVoting from '@/functions/cancelEvent';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import getCSRFTokenFromCookie from '@/functions/getCSRFTokenFromCookie';

const VotingList = () => {
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
    optionsContainer2: {
      marginTop: '10px',
      width: '100%',  //Ocupa el 48% del contenedor principal
    },
    option: {
      background: '#f0f0f0',
      padding: '5px',
      margin: '5px',
    },
  };

  const [votings, setVotings] = useState([]);
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
        console.log(datos.data);

      } catch (error) {
        console.error('Error al cargar los datos:', error.message);
      }
    }
    votacion();
  }, []);
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Votaciones
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["id", "nombre", "inicio", "fin", "status", "", " "].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {votings.map(
                (voting, key) => {
                  const className = `py-3 px-5 ${key === votings.length - 1 ? "" : "border-b border-blue-gray-50"}`;

                  return (
                    <tr key={voting.id}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {voting.id}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {voting.name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {voting.created_at}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {voting.deadline}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={voting.status === "completed" ? "green" : "blue-gray"}
                          value={voting.status}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <Popup key={voting.id} trigger={<button>Ver</button>} position="left">

                            {close => (
                              <div
                                className='bg-white text-center p-5'
                                style={{
                                  position: 'fixed',
                                  width: '80%',
                                  height: '60%',
                                  top: '50%',
                                  left: '50%',
                                  transform: 'translate(-50%, -50%)',
                                }}
                              >
                                <h2 >{voting.name}</h2>
                                <p className='mt-5'>{voting.description}</p>

                                <Chip
                                  variant="gradient"
                                  color={voting.status === "completed" ? "green" : "blue-gray"}
                                  value={voting.status}
                                  className="py-0.5 px-2 text-[11px] font-medium inline-block w-auto my-5"
                                />
                                {voting.status === "completed" ? <>
                                  <div style={styles.votingContainer}>
                                    <div style={styles.optionsContainer}>
                                      {voting.options.map((option) => (
                                        <VotingOption key={option.id} option={option} type={voting.status} />
                                      ))}
                                    </div>
                                    <div style={styles.optionsContainer}>
                                      {voting.departments_count.map((resultado) => (
                                        <VotingResult key={resultado.option_id} resultado={resultado} />
                                      ))}
                                    </div> </div></> : <>
                                  <h3>Realiza tu eleccion</h3>
                                  <div style={styles.votingContainer}>
                                    <div style={styles.optionsContainer2}>
                                      {voting.options.map((option) => (
                                        <VotingOption key={option.id} option={option} type={voting.status} />
                                      ))}
                                    </div>
                                  </div>
                                </>}

                                <a className="close" onClick={close}>
                                  Cerrar &times;
                                </a>
                              </div>
                            )}
                          </Popup>
                        </Typography>
                      </td>
                      <td>       
                        <button key={voting.id}  onClick={() => cancelVoting(voting.id, setVotings, votings, 'voting/cancel')}>X</button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default VotingList;