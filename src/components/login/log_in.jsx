import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import SafeHostLogo from "../../assets/SafeHost-Logo.svg";

export function LogIn() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-700">
      <Card shadow={false} className="flex flex-col p-8 max-w-md bg-blue-gray-900">
       <Typography variant="h3" color="white" className="inline-flex">
       <img src = {SafeHostLogo} alt = 'Logo do SafeHost' className="w-10 h-8 "/>
          Safe Host
        </Typography>
        <Typography color="white" className="mt-1 font-normal">
          Olá! Digite as informações para entrar.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              CPF
            </Typography>
            <Input
              size="lg"
              placeholder="Apenas números"
              maxLength={11}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="white" className="-mb-3">
              Senha
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="******"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6 bg-blue-500 hover:bg-blue-200 hover:text-blue-900" fullWidth>
            Entrar
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal text-white">
            Esqueceu sua senha?{" "}
            <a href="#" className="font-medium text-blue-900 hover:text-blue-300">
              Resgatar
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
