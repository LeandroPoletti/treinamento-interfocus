const URL_API = "http://localhost:5046";

export function listarcursos(pesquisa) {
    // PROMISE
    var response = pesquisa ?
        fetch(URL_API + "/api/curso?busca=" + pesquisa) :
        fetch(URL_API + "/api/curso");

    return response;
}

export function getByCodigo(codigo) {
    // PROMISE
    var response = fetch(URL_API + "/api/curso/" + codigo)

    return response;
}

export function deletarcurso(id) {
    // PROMISE
    var request = {
        method: "DELETE"
    }
    var response = fetch(URL_API + "/api/curso/" + id, request)
    return response;
}

export function postcurso(curso) {
    // PROMISE
    var request = {
        method: curso.codigo ? "PUT" : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(curso)
    }
    var response =
        fetch(URL_API + "/api/curso",
            request)
    return response;
}