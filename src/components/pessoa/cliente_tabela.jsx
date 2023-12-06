import { useState, useEffect } from "react";
import { FazerCheckIn } from "./check_in";
import { RegistrarCliente } from "./registrar_cliente";
import { DesativarPessoa } from "./desativar";
import axios from "axios"; 
import { toast } from "react-toastify";

import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
  } from "@heroicons/react/24/outline";
  import { XMarkIcon, ArrowSmallLeftIcon, ArrowSmallRightIcon } from "@heroicons/react/24/solid";
  import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
  } from "@material-tailwind/react";
   

  const TABLE_HEAD = ["Cliente", "Check-In" ,"Desativar"];
   
  
  export function Clientes() {
    
    const [editedRows, setEditedRows] = useState({});
    const [cliente, setcliente ] = useState([])
    
    useEffect(() => {
      try {
        getCliente()
      } catch (error) {
        const messageError = error.message
        toast.error(messageError)
      }

    }, [])

  async function getCliente() {
		try {
      console.log("Caiu api get getCliente")

      const apiUrl = 'https://localhost:7196/api/Cliente/buscartodos';
			const resposta = await axios.get(apiUrl);

      console.log("Data de getCliente: {0}", resposta.data)
			setcliente(resposta.data)

      console.log("Data de getCliente completa: {0}", cliente)
		} catch (err) {
			const messageError = err.message;
			toast.error({messageError});
		}
	}
    
    const handleInputChange = (index, field, value) => {
      setEditedRows((prev) => ({
        ...prev,
        [index]: {
          ...prev[index],
          [field]: value,
        },
      }));
    };

    const handleAdicionarCliente = (novoCliente) => {
      // Adicionar o novo produto à tabela
      setTableRows((prevRows) => [...prevRows, { ...setcliente, date: getCurrentDate() }]);
    };
  
    // const getCurrentDate = () => {
    //   const currentDate = new Date();
    //   const day = currentDate.getDate();
    //   const month = currentDate.getMonth() + 1; // Os meses começam do zero
    //   const year = currentDate.getFullYear();
    //   return `${day}/${month}/${year}`;
    // };
  


    return (
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Lista de Clientes
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <RegistrarCliente variant="outlined" size="sm" />
              

            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <div className="w-full md:w-72">
              <Input
                label="Pesquisar"
                type="search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cliente.map((item, index) => (
                    <tr key={item.cliente_ID}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item.nome}
                            </Typography>

                          </div>
                        </div>
                      </td>
                      {/* <td>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {editedRows[index]?.date || date}
                        </Typography>
                      </td> */}

                      <td>
                        <FazerCheckIn className="flex items-center gap-3" size="sm"/>
                      </td>

                      <td>
                            <DesativarPessoa />
                      </td>
                    </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Página 1 de 1
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm" icon = {ArrowSmallLeftIcon} >
              Anterior
            </Button>
            <Button variant="outlined" size="sm" icon = {ArrowSmallRightIcon}>
              Próximo
            </Button>
          </div>
        </CardFooter> */}
      </Card>
    );
  }