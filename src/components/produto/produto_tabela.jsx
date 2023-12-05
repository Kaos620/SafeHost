import { useState } from "react";
import { RegistrarCategoria } from "./categoria";
import { AdicionarProduto } from "./registrar_produto";
// import { api } from "../../services/api";
//import { toast } from "react-toastify";
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
    IconButton,
    Tooltip,
  } from "@material-tailwind/react";
   

  const TABLE_HEAD = ["Produto", "Categoria", "Ultima Entrada", "Excluir"];
   
  
   
  export function Produtos() {

      //   useEffect = (() => {
      //     getProduto();
      //     }, [])

      // async function getProduto() {
      // 	try {

      // 		const { data } = await api.get('/api/Produto/buscartodos');
      // 		setProduto(data);
      // 	} catch (err) {
      // 		const messageError = err.message;
      // 		toast.error({messageError});
      // 	}
      // }

    const [editedRows, setEditedRows] = useState({});
    const [produto, setProduto ] = useState({})


    const handleInputChange = (index, field, value) => {
      setEditedRows((prev) => ({
        ...prev,
        [index]: {
          ...prev[index],
          [field]: value,
        },
      }));
    };

    const TABLE_ROWS = [
      {
        nome: produto.NOME,
        familia: produto.FAMLILIA,
        categoria: produto.CATEGORIA,
        date: <getCurrentDate/>,
      },
    ];


    const handleAdicionarProduto = (novoProduto) => {
      // Adicionar o novo produto à tabela
      setTableRows((prevRows) => [...prevRows, { ...novoProduto, date: getCurrentDate() }]);
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
                Lista de Produtos
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Todos os produtos cadastrados devem ter verificado a data de validade
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <AdicionarProduto variant="outlined" size="sm">
                <handleAdicionarProduto/>;
              </AdicionarProduto>
              
              <RegistrarCategoria className="flex items-center gap-3" size="sm"/>

            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <div className="w-full md:w-72">
              <Input
                label = "Pesquisar"
                type = "search"
                icon = {<MagnifyingGlassIcon className="h-5 w-5" />
            }
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
                ({ nome, familia, categoria, date }, index) => {
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
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                               {editedRows[index]?.familia || familia}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                             {editedRows[index]?.categoria || categoria}
                          </Typography>
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
                        <Tooltip content="Deletar">
                          <IconButton variant="text">
                            <XMarkIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                },
              )}
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