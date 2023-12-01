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
  Select,
  Switch,
  Option,
} from "@material-tailwind/react";

export function RegistrarDoador({ onAdicionarDoador }) {
  const [open, setOpen] = useState(false);
  const [novoDoador, setNovoDoador] = useState({
    nome: "",
    sobrenome: "",
    documento: "",
    isCPF: true,
    idade: "",
  });

  const handleOpen = () => setOpen((cur) => !cur);

  const handleInputChange = (field, value) => {
    setNovoDoador((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSwitchChange = () => {
    setNovoDoador((prev) => ({
      ...prev,
      isCPF: !prev.isCPF,
      idade: "", // Limpar idade ao trocar entre CPF e CNPJ
    }));
  };

  const handleRegistrarDoador = () => {
    // Adicionar lógica para validar e processar o novo doador
    // Por exemplo, enviar para um servidor, atualizar o estado local, etc.
    // Neste exemplo, apenas chamaremos a função de callback fornecida
    onAdicionarDoador(novoDoador);
    // Limpar o formulário e fechar o diálogo
    setNovoDoador({ nome: "", sobrenome: "", documento: "", isCPF: true, idade: "" });
    setOpen(false);
  };




  return (
    <>
      <Button onClick={handleOpen}>Adicionar Daodor</Button>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-4xl max-h-full text-justify p-6 text-blue-800">
          <CardHeader>Informações do Doador</CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <Input
                  label="Nome"
                  size="lg"
                  required = "true"
                  maxLength={20}
                  value={novoDoador.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <Input
                  label="Sobrenome"
                  size="lg"
                  required = "true"
                  maxLength={120}
                  value={novoDoador.sobrenome}
                  onChange={(e) => handleInputChange("sobrenome", e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="flex gap-2">
                  <Select
                    value={novoDoador.isCPF ? "CPF" : "CNPJ"}
                    onChange={() => handleSwitchChange()}
                  >
                    <Option value="CPF">CPF</Option>
                    <Option value="CNPJ">CNPJ</Option>
                  </Select>
                  <Input
                    label={novoDoador.isCPF ? "CPF" : "CNPJ"}
                    size="lg"
                    maxLength={novoDoador.isCPF ? 11 : 14}
                    required = "true"
                    value={novoDoador.documento}
                    onChange={(e) => handleInputChange("documento", e.target.value)}
                  />
                </div>
              </div>
              {novoDoador.isCPF && (
                <div className="w-1/2">

                  <Input
                    label="Idade"
                    size="lg"
                    type="number"
                    min = "0"
                    max = "100"
                    required = "true"
                    value={novoDoador.idade}
                    onChange={(e) => handleInputChange("idade", e.target.value)}
                  />
                </div>
              )}
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              variant="gradient"
              onClick={handleRegistrarDoador}
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
