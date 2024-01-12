import react from 'react'
import { useEffect, useState } from 'react'
import Bill from './Bill';

const BillList = () => {

    const [bills, setBills] = useState([]);
    const getCSRFTokenFromCookie = () => {
        return decodeURIComponent(document.cookie.split('; ')
            .find(row => row.startsWith('XSRF-TOKEN'))
            .split('=')[1]);
    };

    useEffect(() => {
        const fetchBills = async () => {
            try {
                const token = getCSRFTokenFromCookie();
                const res = await fetch('http://localhost:8000/api/bills', {
                    method: 'GET',
                    headers: {
                        'X-XSRF-TOKEN': token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });
                if (!res.ok) {
                    throw new Error('Error al procesar la solicitud, codigo de estado: ', res.status)
                }
                const datos = await res.json();
                setBills(datos.data);
                console.log(datos.data);
            }
            catch (error) {
                console.error('Error al cargar las cuentas', error.message);
            }
        }
        fetchBills();
    }, []);

    return (
        <div className="app-container">
            <h1>Recibos</h1>
            {bills.map((bill) => (
                <Bill key={bill.id} receipt={bill} />
            ))}
        </div>
    );

};

export default BillList;


