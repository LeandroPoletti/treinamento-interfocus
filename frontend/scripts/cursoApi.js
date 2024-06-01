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
  let form = event.target
  let objCurso = {
    nome: dados.get('nome'),
    nivel: Number(dados.get('nivel')),
    duracao: Number(dados.get('duracao')),
    descricao: dados.get('descricao')
  }

  postCurso(objCurso).then(res => {
    if(res.status == 200){
      let tabela = document.getElementById('table-cursos').querySelector('tbody')
      tabela.innerHTML = ""
      preencherTabela()
    }else if (res.status == 422){
      resultado.json().then(erros =>
         {
            erros.forEach(erro =>{
              const {memberNames, errorMessage} = erro
              const [campo] = memberNames
              const input = form.querySelector(`[name=${campo.toLowerCase()}]`)
              const erroMessage = input.parentNode.querySelector(".error")
              erroMessage.innerHTML = errorMessage
            })

         }
      )

      
    }
  })
}
