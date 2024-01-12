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


  let departments = [
    {
      "id": 1,
      "number": "73",
      "floor": 3,
      "description": "Modi dolor eos quis voluptas harum officia voluptate maiores.",
      "building_id": 1,
      "user": "armand sanchez",
      "pay": [
        {
          "amount": "140.35",
          "method": "0",
          "transaction": "12349876",
          "notes": "ok",
          "status": "Completed",
          "department_id": 1,
          "bill_id": 1,
          "created_at": null,
          "updated_at": null
        },
        
        {
          "amount": "140.35",
          "method": "0",
          "transaction": "12349876",
          "notes": "ok",
          "status": "Completed",
          "department_id": 1,
          "bill_id": 3,
          "created_at": null,
          "updated_at": null
        }
      ]
    },
    {
      "id": 2,
      "number": "19",
      "floor": 5,
      "description": "Facere quisquam vitae eligendi odio sit.",
      "building_id": 1,
      "user": "Tina Morar",
      "pay": [
        {
          "amount": "140.35",
          "method": "0",
          "transaction": "12349876",
          "notes": "ok",
          "status": "Completed",
          "department_id": 2,
          "bill_id": 1,
          "created_at": null,
          "updated_at": null
        },
        {
          "amount": "140.35",
          "method": "2",
          "transaction": "12349876",
          "notes": "ok",
          "status": "Completed",
          "department_id": 2,
          "bill_id": 2,
          "created_at": null,
          "updated_at": null
        },
        {
          "amount": "140.35",
          "method": "0",
          "transaction": "12349876",
          "notes": "ok",
          "status": "Completed",
          "department_id": 2,
          "bill_id": 3,
          "created_at": null,
          "updated_at": null
        }
      ]
    },
    {
      "id": 3,
      "number": "66",
      "floor": 2,
      "description": "Occaecati aut eligendi aliquam tenetur ut quia possimus omnis.",
      "building_id": 1,
      "user": "Prof. Susie Waters",
      "pay": [
        {
          "amount": "140.35",
          "method": "0",
          "transaction": "12349876",
          "notes": "ok",
          "status": "Completed",
          "department_id": 3,
          "bill_id": 1,
          "created_at": null,
          "updated_at": null
        },
        {
          "amount": "140.35",
          "method": "2",
          "transaction": "12349876",
          "notes": "ok",
          "status": "Completed",
          "department_id": 3,
          "bill_id": 2,
          "created_at": null,
          "updated_at": null
        },
        {
          "amount": "140.35",
          "method": "0",
          "transaction": "12349876",
          "notes": "ok",
          "status": "Completed",
          "department_id": 3,
          "bill_id": 3,
          "created_at": null,
          "updated_at": null
        }
      ]
    },
  ];


  var bills = [
    {
      "id": 1,
      "name": "copoelect enero",
      "description": "Consectetur in qui autem voluptas. Doloribus praesentium aut quibusdam vitae voluptas non. Et temporibus dignissimos assumenda animi. Voluptas temporibus est laudantium a molestiae a.",
      "type": "occasional",
      "amount": 2807,
      "cuota": 140.35,
      "deadline": "01/12/2023 07:12"
    },
    {
      "id": 2,
      "name": "servicios febrero",
      "description": "Quae magnam iusto dolorem vitae magnam. Repellendus ea a blanditiis sit.",
      "type": "occasional",
      "amount": 2807,
      "cuota": 140.35,
      "deadline": "01/12/2023 07:12"
    },
    {
      "id": 3,
      "name": "servicios marzo",
      "description": "Quaerat consequatur quis magni reprehenderit ipsa magnam. Accusantium aliquam ullam sunt. Accusantium aliquid sint aut.",
      "type": "occasional",
      "amount": 2807,
      "cuota": 140.35,
      "deadline": "01/12/2023 07:12"
    }
  ];

  var data = [];

  const setingData = (element, index) => {
    data[index] = { 'id': element.id, 'nombre': element.user, 'nro': element.number }
    element.pay.map((p, idx) => {
      data[index][`pago${idx}`] = p.amount;
      data[index][`fecha${idx}`] = "01/12/2023";
      data[index]['bill_id']=p.bill_id;
    })
  };
  departments.forEach(setingData);

  var columns = [
    {
      title: "identificacion",
      columns: [
        { title: "# Apto/Local", field: "nro", width: 150, hozAlign: "center"},
        { title: "Nombre", field: "nombre", hozAlign: "left" },
      ],
    },
  ];
  const loca = bills.map((bill, index) => {
    return ({
      title: bill.name,
      columns: [
        { title: " Pago bs", field: `pago${index}`, hozAlign: "center" },
        { title: "fecha", field: `fecha${index}`, hozAlign: "center", },
      ],
    });
  
  },);

  columns[1] = loca[0];
  columns[2] = loca[1];
  columns[3] = loca[2];
  console.log(columns);


  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Authors Table
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