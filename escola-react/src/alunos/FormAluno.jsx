import { useRouter } from "simple-react-routing";
//import { postAluno } from "../services/alunoApi";

export default function FormAluno() {
  const { pathParams } = useRouter();
  const codigo = pathParams["codigo"];

  return (
    <>
      <h1>{codigo ? "Editar" : "Cadastrar"}</h1>
      <form>
        <div className="formulario">
          <div className="row">
            <div className="input">
              <label>Nome:</label>
              <input placeholder="Nome do curso" type="text" name="nome" />
              <span className="error"></span>
            </div>
          </div>
          <div className="row">
            <div className="input">
              <label>Data nascimento:</label>
              <input
                placeholder="Nome do curso"
                type="date"
                name="dataNascimento"
              />
              <span className="error"></span>
            </div>
          </div>
          <div className="row">
            <div className="input">
              <label>Email:</label>
              <input placeholder="Nome do curso" type="email" name="email" />
              <span className="error"></span>
            </div>
          </div>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
