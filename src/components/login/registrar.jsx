import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";

import axios from "axios";
import SafeHostLogo from "../../assets/SafeHost-Logo.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

  
export function Cadastrar() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
  
      try {
        console.log("Entrou api post categoria")
  
        const resposta = await axios.post(
          'https://localhost:7196/api/Autenticacao/adicionar', {
            Login: cpf,
            Senha: senha
          });

          if(resposta.status == 200){
            toast.success('Usuário cadastrado com sucesso!')
            navigate("/login")
          }
      } catch (erro) {
        toast.error('Erro ao enviar dados: {0}', erro.message);
      }
  }



  return (
    <div className="flex items-center justify-center h-screen bg-blue-700">
      <Card shadow={false} className="flex flex-col p-8 max-w-md bg-blue-gray-900">
        <Typography variant="h3" color="white" className="inline-flex">
          <img src={SafeHostLogo} alt='Logo do SafeHost' className="w-10 h-8 " />
          Safe Host
        </Typography>
        <Typography color="white" className="mt-1 font-normal">
          Olá! Digite as informações para Cadastrar.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-3">
              CPF
            </Typography>
            <Input
              size="lg"
              placeholder="Apenas números"
              maxLength={11}
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
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
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6 bg-blue-500 hover:bg-blue-200 hover:text-blue-900" fullWidth type='submit'>
            Cadastrar
          </Button>
        </form>
      </Card>
    </div>
  );
}
  