import { useState } from "react";
import { FazerCheckIn } from "./check_in";
import { RegistrarCliente } from "./registrar_cliente";
import { DesativarPessoa } from "./desativar";

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
   

  const TABLE_HEAD = ["Cliente", "Ultima Entrada", "Check-In" ,"Desativar"];
   
  
  export function Clientes() {
    
    const [editedRows, setEditedRows] = useState({});
    const [cliente, setcliente ] = useState({})
    
    //   useEffect = (() => {
      //     getCliente();
      //     }, [])
      
      // async function getCliente() {
        // 	try {
          
          // 		const { data } = await api.get('/api/Cliente/buscartodos');
	// 		setCliente(data);
	// 	} catch (err) {
    // 		const messageError = err.message;
    // 		toast.error({messageError});
    // 	}
    // }


    const TABLE_ROWS = [
      {
        nome: cliente.NOME + cliente.SOBRENOME,
        date: cliente.DATA_NASCIMENTO,
      },
    ];
    
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
      setTableRows((prevRows) => [...prevRows, { ...novoDoador, date: getCurrentDate() }]);
    };
  
    const getCurrentDate = () => {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1; // Os meses começam do zero
      const year = currentDate.getFullYear();
      return `${day}/${month}/${year}`;
    };
  


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
              {TABLE_ROWS.map(
                ({ nome, date }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
   
                  return (
                    <tr key={nome}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {editedRows[index]?.nome || nome}
                            </Typography>

                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {editedRows[index]?.date || date}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <FazerCheckIn className="flex items-center gap-3" size="sm"/>
                      </td>

                      <td className={classes}>
                            <DesativarPessoa />
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
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
        </CardFooter>
      </Card>
    );
  }