import { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";



export function RegistrarDoador({}) {
  const [open, setOpen] = useState(false);
  const [novoDoador, setNovoDoador] = useState({
    nome: "",
    sobrenome: "",
    documento: "",
    isCPF: true,
    dataDeNascimento: "",
  });

  const [novoEndereco, setNovoEndereco] = useState({
    logradouro: "",
    numero: "",
    complemento: "",
    cidade: "",
    cep: "",
  });

  
  const handleOpen = () => setOpen((cur) => !cur);
  
  const handleInputChange = (field, value) => {
    setNovoDoador((prev) => ({
      ...prev,
      [field]: value,
    }));
    setNovoEndereco((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  
  const handleSwitchChange = () => {
    setNovoDoador((prev) => ({
      ...prev,
      isCPF: !prev.isCPF,
      dataDeNascimento: "", // Limpar idade ao trocar entre CPF e CNPJ
    }));
  };

  const handleRegistrarDoador = async () => {
    try {
      const resposta = await axios.post('sua-api-endpoint/aqui', {
        nome: novoDoador.nome ,
        sobrenome: novoDoador.sobrenome,
        documento: novoDoador.documento,
        dataDeNascimento: novoDoador.dataDeNascimento,
        logradouro: novoDoador.logradouro,
        numero: novoDoador.numero,
        complemento: novoDoador.complemento,
        cidade: novoDoador.cidade,
        cep: novoDoador.cep,
      });

      console.log('Dados enviados com sucesso', resposta.data);
    } catch (erro) {
      console.error('Erro ao enviar dados:', erro.message);
    }
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>Adicionar Doador</Button>
      <form>
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
                <div className="w-1/2 flex">
                  <Input
                    label="Nome"
                    size="lg"
                    required={true}
                    maxLength={20}
                    value={novoDoador.nome}
                    onChange={(e) => handleInputChange("nome", e.target.value)}
                  />
                </div>
                <div className="w-1/2 flex">
                  <Input
                    label="Sobrenome"
                    size="lg"
                    required={true}
                    maxLength={120}
                    value={novoDoador.sobrenome}
                    onChange={(e) => handleInputChange("sobrenome", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2 flex">
                  <div className="gap-2 inline-flex">
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
                      required={true}
                      value={novoDoador.documento}
                      onChange={(e) => handleInputChange("documento", e.target.value)}
                    />
                  </div>
                </div>
                {novoDoador.isCPF && (
                  <div className="w-1/2 flex">
                    <Input
                      label="Data de Nascimento"
                      size="lg"
                      type="date"
                      required={true}
                      value={novoDoador.dataDeNascimento}
                      onChange={(e) => handleInputChange("dataDeNascimento", e.target.value)}
                    />
                  </div>
                )}
              </div>
              <div className="flex gap-4">
                <div className="w-1/2 flex">
                  <Input
                    label="Logradouro"
                    size="lg"
                    type="text"
                    required={true}
                    maxLength={60}
                    value={novoEndereco.logradouro}
                    onChange={(e) => handleInputChange("logradouro", e.target.value)}
                  />
                </div>
                <div className="w-1/2 flex">
                  <Input
                    label="Número"
                    maxLength={7}
                    size="lg"
                    required={true}
                    value={novoEndereco.numero}
                    onChange={(e) => handleInputChange("numero", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2 flex">
                  <Input
                    label="Complemento"
                    size="lg"
                    maxLength={50}
                    value={novoEndereco.complemento}
                    onChange={(e) => handleInputChange("complemento", e.target.value)}
                  />
                </div>
                <div className="w-1/2 flex">
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
                <div className="w-1/2 flex">
                  <Input
                    label="CEP"
                    size="lg"
                    required={true}
                    maxLength={8}
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
                onClick={handleRegistrarDoador}
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
