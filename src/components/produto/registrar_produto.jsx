import React, { useState } from "react";
import Select from "react-select";
// import { api } from "../../services/api";
//import { toast } from "react-toastify";

import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

export function AdicionarProduto({ onAdicionarProduto }) {
  const [open, setOpen] = useState(false);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    familia: "",
    categoria: "",
  });

  const handleOpen = () => setOpen((cur) => !cur);

  const handleInputChange = (field, value) => {
    setNovoProduto((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  //   useEffect = (() => {
  //     getCategoria();
  //     }, [])

  // async function getCategoria() {
	// 	try {

	// 		const { data } = await api.get('/api/Categoria/buscartodos');
	// 		setDoador(data);
	// 	} catch (err) {
	// 		const messageError = err.message;
	// 		toast.error({messageError});
	// 	}
	// }


  const handleRegistrarProduto = async () => {
    try {
      const resposta = await axios.post('sua-api-endpoint/aqui', {
        nome: produto.NOME,
        familia: produto.FAMILIA,
      });

      console.log('Dados enviados com sucesso', resposta.data);
    } catch (erro) {
      console.error('Erro ao enviar dados:', erro.message);
    }
    setOpen(false);
  }

  const options = [
    { /*value: getCategoria(categoria.DESCRICAO), label: getCategoria(categoria.DESCRICAO) */},
  ]

  return (
    <>
      <Button onClick={handleOpen}>Adicionar Produto</Button>
      <form>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader>
            
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Typography className="-mb-2" variant="h6">
              Nome do Produto
            </Typography>
            <Input
              label="Nome do Produto"
              size="lg"
              value={novoProduto.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
            />
            <Typography className="-mb-2" variant="h6">
              Família do Produto
            </Typography>
            <Input
              label="Família do Produto"
              size="lg"
              value={novoProduto.familia}
              onChange={(e) => handleInputChange("familia", e.target.value)}
            />

          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              variant="gradient"
              onClick={handleRegistrarProduto}
              fullWidth
            >
              Adicionar
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
      </form>
    </>
  );
}
