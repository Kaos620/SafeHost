import { useState, useEffect } from "react";
import { RegistrarDoador } from "./registrar_doador";
import { DesativarPessoa } from "./desativar";
// import { api } from "../../services/api";
import axios from 'axios';
import { toast } from "react-toastify";

import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from "@heroicons/react/24/solid";

import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
  } from "@material-tailwind/react";
   

const TABLE_HEAD = ["Doador", "CPF/CNPJ", "Data de Nascimento", "Desativar"];
   
export function Doadores() {
    const [editedRows, setEditedRows] = useState({})
    const [doador, setDoador ] = useState([])

    useEffect(() => {
      try {
        getDoador()
      } catch (error) {
        const messageError = error.message
        toast.error(messageError)
      }

    }, [])

  async function getDoador() {
		try {
      console.log("Caiu api get doador")

      const apiUrl = 'https://localhost:7196/api/Doador/buscartodos';
			const resposta = await axios.get(apiUrl);

      console.log("Data de Doador: {0}", resposta.data)
			setDoador(resposta.data)

      console.log("Data de Doador completa: {0}", doador)
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

    return (
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Lista de Doadores
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <RegistrarDoador variant="outlined" size="sm" />
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
              {doador.map((item, index) => (
                <tr key={item.DoadorId}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {`${item.Nome} ${item.Sobrenome}`}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.CPF == null || "" ? item.CNPJ : item.CPF}
                      </Typography>
                    </div>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.DataNascimento}
                    </Typography>
                  </td>
                  <td className="p-4">
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
            <Button variant="outlined" size="sm" icon={ArrowSmallLeftIcon}>
              Anterior
            </Button>
            <Button variant="outlined" size="sm" icon={ArrowSmallRightIcon}>
              Próximo
            </Button>
          </div>
        </CardFooter> */}
      </Card>
    );
}