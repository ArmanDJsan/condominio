import React, { useState } from "react";
import getCSRFTokenFromCookie from "@/functions/getCSRFTokenFromCookie";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Input,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";


const CreateBills = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    amount: "",
    cuota: "",
    type: "",
    deadline: "",
  });

  const registerBills = async () => {
    try {
      const token = getCSRFTokenFromCookie();
      const response = await fetch('http://localhost:8000/api/bills/create', {
        method: 'POST',
        headers: {
          "X-XSRF-TOKEN": token,
          'Acept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData }),
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Error al cargar los datos');
      }
      const datos = await response.json();
      console.log(datos);
    } catch (error) {
      console.error('Error al cargar los datos:', error.message);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, 'type': e });
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    registerBills();
    console.log("aqui");
    console.log(formData);
  };

  return (
    <div className="mt-12  mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Registrar Cuenta
          </Typography>
        </CardHeader>
        
        <div className="mx-5 relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <form onSubmit={handleSubmit} className="mt-0 mx-auto mb-2 w-96 max-w-screen-lg sm:w-96 border-red-100 border-2 p-2">
            <div className="mb-1 flex flex-col gap-1.5">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder=" "
                  name="name"
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  required
                  autoComplete="off"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" >
                  Titulo:
                </label>
              </div>
              <div className="w-full">
                <div className="relative w-full min-w-[200px]">
                  <textarea
                    name="description"
                    id="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  ></textarea>
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Description
                  </label>
                </div>
              </div>

              <div>
                <label className="  font-normal leading-tight text-blue-gray-400">
                  Fecha vencimiento:
                </label>
                <input
                  name="deadline"
                  id="deadline"
                  type="datetime-local"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  required
                  className="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />

              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder=" "
                  name="amount"
                  id="amount"
                  type="text"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  required
                  autoComplete="off"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" >
                  Total:
                </label>
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder=" "
                  name="cuota"
                  id="cuota"
                  type="text"
                  value={formData.cuota}
                  onChange={handleInputChange}
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  required
                  autoComplete="off"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" >
                  Cuota:
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px] ">
                <Select label="Seleccionar tipo de cuenta" size="lg"
                  id="type"
                  name="type"
                  onChange={handleChange}
                  required
                  color="pink">
                  <Option value="scheduled" >scheduled</Option>
                  <Option value="occasional">occasional</Option>
                </Select>
              </div>
            </div>
            <Button type="submit" data-ripple-light="true" className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Guardar</Button>
          </form>
        </div>
      </Card>
      
    </div>
  );
};

export default CreateBills;
