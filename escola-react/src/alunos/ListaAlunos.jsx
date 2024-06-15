<<<<<<< HEAD
import { useEffect, useState } from "react"
import {listarAlunos} from "../services/alunoApi"
import { Link } from "simple-react-routing"

export default function ListaAlunos(properties) {
    const [lista, setLista] = useState([])
    const [busca, setBusca] = useState("")

    useEffect(() => {
        listarAlunos(busca).then((resposta => {
            if( resposta.status == 200){
                resposta.json()
                .then(alunos => {
                    setLista(alunos)
                })
            }
        }))
    }, [busca])
=======
import { useEffect, useState } from "react";
import { listarAlunos } from "../services/alunoApi";
import { Link } from "simple-react-routing";

export default function ListaAlunos(properties) {
    const [lista, setLista] = useState([]);
    const [busca, setBusca] = useState("");

    useEffect(() => {
        listarAlunos(busca)
            .then(resposta => {
                if (resposta.status == 200) {
                    resposta.json()
                        .then(alunos => {
                            setLista(alunos);
                        })
                }
            });
    }, [busca]);

>>>>>>> 8389ec7a4a03832c69fd2d7bb56641f98fa2e4b2
    return (<>
        <h1>Lista de alunos</h1>
        <div className="row" style={{
            padding: "8px 16px"
        }}>
<<<<<<< HEAD
            <input type="search" value={busca} onChange={(event) => setBusca(event.target.value)} style={{minWidth: 250}}/>
            <Link to="/alunos/criar">
            <button>Novo Aluno</button>
            </Link>
        </div>
        <div className="grid" id="grid-alunos">
            {lista.map(aluno =>{
                return <AlunoItem key={aluno.codigo} aluno={aluno} ></AlunoItem>
            })}        
=======
            <input
                type="search"
                style={{ minWidth: 250 }}
                value={busca}
                onChange={(event) => {
                    setBusca(event.target.value);
                }}
            />
            <Link to="/alunos/criar">Novo Aluno</Link>
        </div>

        <div className="grid" id="grid-alunos">
            {lista.map(
                aluno => {
                    return <AlunoItem key={aluno.codigo}
                        aluno={aluno}></AlunoItem>
                }
            )}
>>>>>>> 8389ec7a4a03832c69fd2d7bb56641f98fa2e4b2
        </div>
    </>)
}

function AlunoItem(p) {
<<<<<<< HEAD
    const aluno = p.aluno
    var data = new Date(aluno.dataNascimento)
    var dia = data.getDate().toString().padStart(2,"0")
    var mes = (data.getMonth()+1).toString().padStart(2,'0')
    var ano = data.getFullYear()


    return (
    <div className="card">
=======
    const aluno = p.aluno;
    var data = new Date(aluno.dataNascimento);
    var dia = data.getDate().toString().padStart(2, '0');
    var mes = (data.getMonth() + 1).toString().padStart(2, '0');
    var ano = data.getFullYear();

    return (<div className="card">
>>>>>>> 8389ec7a4a03832c69fd2d7bb56641f98fa2e4b2
        <ul>
            <li>Código: {aluno.codigo}</li>
            <li>Nome: {aluno.nome}</li>
            <li>Data de Nascimento: {dia}/{mes}/{ano}</li>
            <li>E-mail: {aluno.email}</li>
        </ul>
        <div className="acoes">
<<<<<<< HEAD
            <Link to={"/alunos/editar/"+aluno.codigo}>
            <button type="button">Editar</button>
            </Link>
            <Link to="/alunos/excluir">
=======
            <Link to={"/alunos/editar/" + aluno.codigo}>Editar</Link>
>>>>>>> 8389ec7a4a03832c69fd2d7bb56641f98fa2e4b2
            <button type="button">Excluir</button>
            </Link>
        </div>
    </div>
    )
}