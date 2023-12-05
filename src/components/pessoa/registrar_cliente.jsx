import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";

export function RegistrarCliente({ onAdicionarCliente }) {
  const [open, setOpen] = useState(false);
  const [novoCliente, setNovoCliente] = useState({
    nome: "",
    sobrenome: "",
    CPF: "",
    dataDeNascimento: "",
  });

  const handleOpen = () => setOpen((cur) => !cur);

  const handleInputChange = (field, value) => {
    setNovoDoador((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const handleRegistrarCliente = async () => {
    try {
      const resposta = await axios.post('sua-api-endpoint/aqui', {
        nome: cliente.NOME ,
        foto: cliente.FOTO,
        // CPF: cliente.CPF,
        // idade: cliente.IDADE,
      });

      console.log('Dados enviados com sucesso', resposta.data);
    } catch (erro) {
      console.error('Erro ao enviar dados:', erro.message);
    }
    setOpen(false);
  }




  return (
    <>
      <Button onClick={handleOpen}>Adicionar Cliente</Button>
      <form>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-4xl max-h-full text-justify p-6 text-blue-800">
          <CardHeader>Informações do Cliente</CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <Input
                  label="Nome"
                  size="lg"
                  required = "true"
                  maxLength={20}
                  value={novoCliente.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <Input
                  label="Foto"
                  // type="file"
                  size="lg"
                  required = "true"
                  value={novoCliente.FOTO}
                  onChange={(e) => handleInputChange("foto", e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              {/* <div className="w-1/2">
                <div className="flex gap-2">
                  
                  <Input
                    label={"CPF"}
                    size="lg"
                    maxLength={11}
                    value={novoCliente.CPF}
                  />
                </div>
              </div> */}
              
                {/* <div className="w-1/2">
                  <Input
                    label="Data de Nascimento"
                    size="sm"
                    type="date"
                    required = "true"
                    value={novoCliente.idade}
                    onChange={(e) => handleInputChange("idade", e.target.value)}
                  />
                </div> */}
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              variant="gradient"
              onClick={handleRegistrarCliente}
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
