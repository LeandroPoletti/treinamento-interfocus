import { useState, useEffect } from "react"
import { listarcursos } from "../services/cursoApi";

export default  function CursosList(){

    let [cursos, setCursos] = useState([])
    let [busca, setBusca] = useState("")

    useEffect(() => {
        listarcursos(busca)
            .then(resposta => {
                if (resposta.status == 200) {
                    resposta.json()
                        .then(data => {
                            setCursos(data);
                        })
                }
            });
    }, [busca]);


    return (
    <>
        <input type="search"  onChange={a => setBusca(a.target.value)}/>
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {cursos.map(curso => {
                return <tr key={curso.id}>
                    <td>{curso.id}</td>
                    <td>{curso.nome}</td>
                    <td>{curso.descricao}</td>
                </tr>
            })}
        </tbody>
    </table>
    </>
)
}