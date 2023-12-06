import { useState, useEffect } from "react";
import Select from "react-select"
import axios from "axios";
import { toast } from "react-toastify";

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
  const [familia, setFamilia] = useState([])
  const [idFamilia, setIdFamilia] = useState([])



  useEffect(() => {
    try {
      getFamilia()
    } catch (error) {
      const messageError = error.message
      toast.error(messageError)
    }

  }, [])

  async function getFamilia() {
    try {
      console.log("Caiu api get doador")

      const apiUrl = 'https://localhost:7196/api/ProdutoFamilia/buscartodos';
      const resposta = await axios.get(apiUrl);

      console.log("Data de Familia: {0}", resposta.data)
      setFamilia(resposta.data)

      console.log("Data de Familia completa: {0}", familia)
    } catch (err) {
      const messageError = err.message;
      toast.error({ messageError });
    }
  }


  const [novoProduto, setNovoProduto] = useState({
    PRODUTO_DESC: "",
    FAMILIA: 0,
    PRODUTO_VALOR: 0,
    PERECIVEL_FLAG: 0, // 0 - ATIVO, 1 - DESATIVO
    PESO_ITEM: 0,
  });

  const handleOpen = () => setOpen((cur) => !cur);

  const handleInputChange = (field, value) => {
    setNovoProduto((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSelectChange = (selected) => {
    setIdFamilia(selected.value)
  }

  const handleRegistrarProduto = async () => {
    console.log("Familia id {0}", idFamilia)
    const familiaId = idFamilia;

    try {
      const resposta = await axios.post('https://localhost:7196/api/Produto/adicionar', {
        produtO_DESC: novoProduto.PRODUTO_DESC,
        produtO_FAMILIA_ID: familiaId,
        produtO_VALOR: novoProduto.PRODUTO_VALOR,
        pereciveL_FLAG: novoProduto.PERECIVEL_FLAG,
        pesO_ITEM: novoProduto.PESO_ITEM
      });

      console.log('Dados enviados com sucesso', resposta.data);
    } catch (erro) {
      console.error('Erro ao enviar dados:', erro.message);
    }
    setOpen(false);
  };

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
                Descrição do Produto
              </Typography>
              <Input
                label="Descrição do Produto"
                size="lg"
                value={novoProduto.PRODUTO_DESC}
                onChange={(e) => handleInputChange("PRODUTO_DESC", e.target.value)}
              />

              <Typography className="-mb-2" variant="h6">
                Família do Produto
              </Typography>
              <Select
                label="Família do Produto"
                size="lg"
                options={familia.map(familia => (
                  {
                    value: familia.produtO_FAMILIA_ID,
                    label: familia.familia
                  }
                ))}
                onChange={handleSelectChange}
              />

              <Typography className="-mb-2" variant="h6">
                Valor do Produto
              </Typography>
              <Input
                label="Valor do Produto"
                size="lg"
                value={novoProduto.PRODUTO_VALOR}
                onChange={(e) => handleInputChange("PRODUTO_VALOR", e.target.value)}
              />
              <Typography className="-mb-2" variant="h6">
                Perecível
              </Typography>
              <Input
                label="Perecível (0 - Ativo, 1 - Desativo)"
                size="lg"
                value={novoProduto.PERECIVEL_FLAG}
                onChange={(e) => handleInputChange("PERECIVEL_FLAG", e.target.value)}
              />
              <Typography className="-mb-2" variant="h6">
                Peso do Item
              </Typography>
              <Input
                label="Peso do Item"
                size="lg"
                value={novoProduto.PESO_ITEM}
                onChange={(e) => handleInputChange("PESO_ITEM", e.target.value)}
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
