const URL_API = "https://localhost:7236/";

function listarCursos() {
  // promise
  var response = fetch(URL_API + "api/curso");
  return response;
};

function postCurso(curso){
  let request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(curso)
  }

  let response = fetch(URL_API + "api/curso", request)

  return response
}

function preencherTabela() {
  var tabela = document.getElementById("table-cursos");
  listarCursos().then((resultado) => {
    if (resultado.status == 200) {
      resultado.json().then(
        cursos => { 
          var tbody = tabela.querySelector("tbody");
          cursos.forEach(curso => {
            tbody.innerHTML += `<tr>
              <td>${dados.get("nome")}</td>
					    <td>${dados.get("duracao")}</td>
					    <td>${dados.get("nivel")}</td>
            </tr>
            `;
          })
        }
      )
    }
  })
}

function criarCurso(event){
  let dados = new FormData(event.target)
  let objCurso = {
    nome: dados.get('nome'),
    nivel: Number(dados.get('nivel')),
    duracao: Number(dados.get('duracao')),
    descricao: dados.get('descricao')
  }

  postCurso(objCurso).then(res => {
    if(res == 200){
      
    }
  })
}
