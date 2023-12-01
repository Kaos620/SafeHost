import React, { useState } from "react";
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

  const handleRegistrarProduto = () => {
    // Adicionar lógica para validar e processar o novo produto
    // Por exemplo, enviar para um servidor, atualizar o estado local, etc.
    // Neste exemplo, apenas chamaremos a função de callback fornecida
    onAdicionarProduto(novoProduto);
    // Limpar o formulário e fechar o diálogo
    setNovoProduto({ nome: "", familia: "", categoria: "" });
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Adicionar Produto</Button>
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
            <Typography className="-mb-2" variant="h6">
              Categoria do Produto
            </Typography>
            <Input
              label="Categoria do Produto"
              size="lg"
              value={novoProduto.categoria}
              onChange={(e) => handleInputChange("categoria", e.target.value)}
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
    </>
  );
}
