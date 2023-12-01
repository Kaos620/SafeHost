import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function LogIn() {
    return (
       <Card color="transparent" shadow={false} className="flex flex-col bg-center content-center p-8 max-w-md ">
        <Typography variant="h4" color="blue-gray">
          Entrar
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Olá! Escreva as informações para entrar.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              CPF
            </Typography>
            <Input
              size="lg"
              placeholder="Apenas números"
              maxLength={11}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Senha
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="******"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          
          <Button className="mt-6" fullWidth>
            Entrar
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Esqueceu sua senha?{" "}
            <a href="#" className="font-medium text-blue-900">
              Resgatar
            </a>
          </Typography>
        </form>
      </Card>
    );
  }