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
    return (<>
        <h1>Lista de alunos</h1>
        <div className="row" style={{
            padding: "8px 16px"
        }}>
            <input type="search" value={busca} onChange={(event) => setBusca(event.target.value)} style={{minWidth: 250}}/>
            <Link to="/alunos/criar">
            <button>Novo Aluno</button>
            </Link>
        </div>
        <div className="grid" id="grid-alunos">
            {lista.map(aluno =>{
                return <AlunoItem key={aluno.codigo} aluno={aluno} ></AlunoItem>
            })}        
        </div>
    </>)
}

function AlunoItem(p) {
    const aluno = p.aluno
    var data = new Date(aluno.dataNascimento)
    var dia = data.getDate().toString().padStart(2,"0")
    var mes = (data.getMonth()+1).toString().padStart(2,'0')
    var ano = data.getFullYear()


    return (
    <div className="card">
        <ul>
            <li>Código: {aluno.codigo}</li>
            <li>Nome: {aluno.nome}</li>
            <li>Data de Nascimento: {dia}/{mes}/{ano}</li>
            <li>E-mail: {aluno.email}</li>
        </ul>
        <div className="acoes">
            <Link to={"/alunos/editar/"+aluno.codigo}>
            <button type="button">Editar</button>
            </Link>
            <Link to="/alunos/excluir">
            <button type="button">Excluir</button>
            </Link>
        </div>
    </div>
    )
}