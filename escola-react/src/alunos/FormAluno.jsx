import { useNavigation, useRouter } from "simple-react-routing";
import { getByCodigo, postAluno } from "../services/alunoApi";
import { useEffect, useState } from "react";
//import { postAluno } from "../services/alunoApi";

export default function FormAluno() {
  const { pathParams } = useRouter();
  const codigo = pathParams["codigo"];

  const { navigateTo } = useNavigation();

  const [errorMessage, setErrorMessage] = useState("");

  const salvarAluno = async (evento) => {
    evento.preventDefault();
    let dados = new FormData(evento.target);
    let aluno = {
      codigo: codigo,
      nome: dados.get("nome"),
      email: dados.get("email"),
      dataNascimento: dados.get("dataNascimento"),
    };

    let result = await postAluno(aluno);
    if (result.status == 200) {
      navigateTo(null, "/alunos");
    } else {
      let erro = await result.json();
      setErrorMessage(
        "Erro ao criar aluno: \n" + JSON.stringify(erro, null, "\t")
      );
    }
  };

  const [aluno, setAluno] = useState()

  useEffect(() => {
    if(codigo){
      getByCodigo(codigo).then(e => e.json()).then(result => setAluno(result))
    }else{
      setAluno({})
    }
  }, [])

  return aluno && (
    <>
      <h1>{codigo ? "Editar" : "Cadastrar"}</h1>
      <form onSubmit={salvarAluno}>
        <div className="formulario">
          <div className="row">
            <div className="input">
              <label>Nome:</label>
              <input defaultValue={aluno.nome} placeholder="Nome do aluno" type="text" name="nome" />
              <span className="error"></span>
            </div>
          </div>
          <div className="row">
            <div className="input">
              <label>Data nascimento:</label>
              <input
              defaultValue={aluno.dataNascimento?.substring(0,10)}
                placeholder="Data de nascimento"
                type="date"
                name="dataNascimento"
              />
              <span className="error"></span>
            </div>
          </div>
          <div className="row">
            <div className="input">
              <label>Email:</label>
              <input defaultValue={aluno.email} placeholder="Email do aluno" type="email" name="email" />
              <span className="error"></span>
            </div>
          </div>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <p>{errorMessage}</p>
    </>
  );
}
