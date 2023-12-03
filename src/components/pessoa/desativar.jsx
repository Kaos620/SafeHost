import React, { useState } from "react";
import { XMarkIcon} from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";

export function DesativarPessoa({ onAdicionarEndereco }) {
  const [open, setOpen] = useState(false);
  const [setDesativarPessoa] = useState({
    /*terminacao_flag: true,
    data_terminacao: data_terminacao.getCurrentDate,*/
  });

  const handleCloseCard = () => {
    setOpen(false);
  };

  const handleOpen = () => setOpen((cur) => !cur);

  const handleInputChange = (field, value) => {
    setDesativarPessoa((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDesativar = () => {
    // Limpar o formulário e fechar o diálogo
    setDesativado({ ativo: false});
    setOpen(false);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Os meses começam do zero
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Button onClick={handleOpen} className="bg-transparents"> 
        <XMarkIcon className="h-4 w-4 b" color="black"/> 
      </Button>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-4xl max-h-full text-justify p-6 text-blue-800">
          <CardHeader>Tem certeza que deseja desativar este usuário?</CardHeader>
          <CardFooter className="inline-flex py-3 space-x-3">
            <Button
              type="submit"
              variant="filled"
              onClick={handleDesativar}
              fullWidth
            >
              Sim
            </Button>
            <Button
              type="button"
              variant="filled"
              onClick={handleCloseCard}
              fullWidth
            >
              Não
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
