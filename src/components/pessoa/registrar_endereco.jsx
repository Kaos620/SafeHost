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

export function RegistrarEndereco({ onAdicionarEndereco }) {
  const [open, setOpen] = useState(false);
  const [novoEndereco, setNovoEndereco] = useState({
    logradouro: "",
    numero: "",
    complemento: "",
    cidade: "",
    cep: "",
  });

  const handleOpen = () => setOpen((cur) => !cur);

  const handleInputChange = (field, value) => {
    setNovoEndereco((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegistrarEndereco = () => {
    // Adicionar lógica para validar e processar o novo endereço

    onAdicionarEndereco(novoEndereco);
    // Limpar o formulário e fechar o diálogo
    setNovoEndereco({ logradouro: "", numero: "", complemento: "", cidade: "", cep: "" });
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Adicionar Endereço</Button>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-4xl max-h-full text-justify p-6 text-blue-800">
          <CardHeader>Informações do Endereço</CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <Input
                  label="Logradouro"
                  size="lg"
                  required={true}
                  maxLength= {60}
                  value={novoEndereco.logradouro}
                  onChange={(e) => handleInputChange("logradouro", e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <Input
                  label= "Número"
                  maxLength= {7}
                  size= "lg"
                  required={true}
                  value={novoEndereco.numero}
                  onChange={(e) => handleInputChange("numero", e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <Input
                  label="Complemento"
                  size="lg"
                  maxLength={50}
                  value={novoEndereco.complemento}
                  onChange={(e) => handleInputChange("complemento", e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <Input
                  label="Cidade"
                  size="lg"
                  maxLength={20}
                  required={true}
                  value={novoEndereco.cidade}
                  onChange={(e) => handleInputChange("cidade", e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <Input
                  label="CEP"
                  size="lg"
                  required={true}
                  maxLength = {8}
                  value={novoEndereco.cep}
                  onChange={(e) => handleInputChange("cep", e.target.value)}
                />
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              variant="gradient"
              onClick={handleRegistrarEndereco}
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
