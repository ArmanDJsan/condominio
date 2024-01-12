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
import "tabulator-tables/dist/css/tabulator.min.css";
//import 'react-tabulator/lib/styles.css';
import { ReactTabulator } from 'react-tabulator'
import { element } from "prop-types";

export function Tables() {

  const bill = [{
    "id": 2,
    "name": "bill2",
    "description": "Quae magnam iusto dolorem vitae magnam. Repellendus ea a blanditiis sit.",
    "amount": 4000,
    "cuota": 200,
    "type": "occasional",
    "deadline": "28/05/2024",
    "created_at": "30/11/2023"
  }];
  const rows = [
    {
      "id": 1,
      "bill_id": 2,
      "number": "73",
      "name": "armand sanchez",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 2,
      "bill_id": 2,
      "number": "19",
      "name": "Tina Morar",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 3,
      "bill_id": 2,
      "number": "66",
      "name": "Prof. Susie Waters",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 4,
      "bill_id": 2,
      "number": "99",
      "name": "Albin O'Reilly",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 5,
      "bill_id": 2,
      "number": "64",
      "name": "Chadd Larkin",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 6,
      "bill_id": 2,
      "number": "52",
      "name": "Loy Zboncak",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 7,
      "bill_id": 2,
      "number": "18",
      "name": "Twila Frami",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 8,
      "bill_id": 2,
      "number": "30",
      "name": "Martina Orn IV",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 9,
      "bill_id": 2,
      "number": "19",
      "name": "Fernando Krajcik V",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 10,
      "bill_id": 2,
      "number": "94",
      "name": "Reed Ferry",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 11,
      "bill_id": 2,
      "number": "63",
      "name": "Audie Huel",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 12,
      "bill_id": 2,
      "number": "44",
      "name": "Kevin Konopelski",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 13,
      "bill_id": 2,
      "number": "53",
      "name": "Prof. Cordelia Bosco MD",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 14,
      "bill_id": 2,
      "number": "89",
      "name": "Elda Reichert",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 15,
      "bill_id": 2,
      "number": "13",
      "name": "Linwood Lind Jr.",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 16,
      "bill_id": 2,
      "number": "30",
      "name": "Alene McGlynn",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 17,
      "bill_id": 2,
      "number": "84",
      "name": "Freida Keebler",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 18,
      "bill_id": 2,
      "number": "26",
      "name": "Miss Carolanne Vandervort V",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 19,
      "bill_id": 2,
      "number": "31",
      "name": "Mr. Simeon Kshlerin",
      "paid": true,
      "paid_date": "30/11/2023"
    },
    {
      "id": 20,
      "bill_id": 2,
      "number": "78",
      "name": "Kiera Pfeffer",
      "paid": true,
      "paid_date": "30/11/2023"
    }
  ];




  var data = [];
  const setingData = (element, index) => {
    data[index] = {
      'id': element.id, 'nombre': element.name, 'nro': element.number, 'pago': element.paid, 'fecha': element.paid_date, cellMouseMove: function (e, cell) {
        //e - the event object
        //cell - cell component
        alert("x");
      },
    }
  };
  rows.forEach(setingData);

  var columns = [
    {
      title: "identificacion",
      columns: [
        { title: "#Apto", field: "nro", hozAlign: "center" },
        { title: "Nombre", field: "nombre", hozAlign: "left" },
      ],
    },
    { title: 'Pago bs', field: 'pago', hozAlign: 'center', editor: true, formatter: 'tickCross' },
    { title: 'fecha', field: 'fecha', hozAlign: 'center', sorter: "date" },
  ];


  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card className="px-2">
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h3" color="blue">
            Cuenta: {bill[0].name}
          </Typography>
          <Typography variant="h6" color="blue">
            {bill[0].description}
          </Typography>
          <Typography variant="small" color="orange">
            Monto: {bill[0].amount} /    cutoa: {bill[0].cuota}
          </Typography>
          <Typography variant="small" color="yellow">
            Vigencia: {bill[0].created_at} -  {bill[0].deadline}
          </Typography>



        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">

          <ReactTabulator
            data={data}
            columns={columns}
            layout={"fitColumns"}
            resizableColumnFit={true}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;
/* [# Apto/Local */