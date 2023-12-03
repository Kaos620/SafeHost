import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
 
export function RegistrarCategoria() {
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => setOpen((cur) => !cur);

  const handleRegistrarCategoria  = async () => {
    try {
      const resposta = await axios.post('sua-api-endpoint/aqui', {
        categoria: dadosCategoria,
      });

      console.log('Dados enviados com sucesso', resposta.data);
    } catch (erro) {
      console.error('Erro ao enviar dados:', erro.message);
    }
    setOpen(false);
  }
  
  return (
    <>
      <Button onClick={handleOpen}>Registrar Categoria</Button>
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
              Categoria
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Digite as informações para registrar uma categoria 
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Nome da Categoria
            </Typography>
            <Input label="Categoria" size="lg" />

          </CardBody>
            
        <CardFooter className = "pt-0">
          <Button type = "submit"
                  href = "#"
                  variant = "filled" 
                  onClick = {handleRegistrarCategoria} 
                  fullWidth
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