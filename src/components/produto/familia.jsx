import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";

import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

export function RegistrarFamilia() {
  const [open, setOpen] = useState(false);
  const [novaFamilia, setNovaFamilia] = useState([])
  const [categoria, setCategoria] = useState([])
  const [idCategoria, setIdCategoria] = useState([])

  useEffect(() => {
    try {
      console.log("Caiu useeffect")
      getCategoria()
    } catch (error) {
      const messageError = error.message
      toast.error(messageError)
    }

  }, [])

  async function getCategoria() {
    try {
      console.log("Caiu api get doador")

      const apiUrl = 'https://localhost:7196/api/ProdutoCategoria/buscartodos';
      const resposta = await axios.get(apiUrl);

      console.log("Data de Doador: {0}", resposta.data)
      setCategoria(resposta.data)

      console.log("Data de Doador completa: {0}", categoria)
    } catch (err) {
      const messageError = err.message;
      toast.error({ messageError });
    }
  }

  const handleSelectChange = (selected) => {
    setIdCategoria(selected.value)
  }


  const handleOpen = () => setOpen((cur) => !cur);

  const handleRegistrarFamilia = async () => {

    const categoriaId = idCategoria;

    try {
      console.log("Entrou api post Familia")

      const resposta = await axios.post(
        'https://localhost:7196/api/ProdutoCategoria/adicionar', {
        FAMILIA: novaFamilia,
        PRODUTO_CATEGORIA_ID: categoriaId
      });

      console.log('Dados enviados com sucesso', resposta.data);
    } catch (erro) {
      console.error('Erro ao enviar dados:', erro.message);
    }
    setOpen(false);
  }

  // const options = categoria.map(categoria => ({
  //   value: categoria.produtO_CATEGORIA_ID,
  //   label: categoria.descricao
  // }));

  return (
    <>
      <Button onClick={handleOpen}>Registrar Familia</Button>
      <form>
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Familia
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Digite as informações para registrar uma Familia
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Nome da Familia
              </Typography>
              <Input
                label="Familia"
                size="lg"
                maxLength={30}
                value={novaFamilia}
                onChange={(e) => setNovaFamilia(e.target.value)}
              />

              <Typography className="-mb-2" variant="h6">
                Categoria do Produto
              </Typography>
              <Select
                label="Categoria do Produto"
                size="lg"
                options={categoria.map(categoria => (
                  {
                    value: categoria.produtO_CATEGORIA_ID,
                    label: categoria.descricao
                  }
                ))}
                onChange={handleSelectChange}
              />

            </CardBody>

            <CardFooter className="pt-0">
              <Button
                type="button"
                variant="filled"
                fullWidth
                onClick={handleRegistrarFamilia}
              >
                Registrar
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </form>
    </>
  );
}