
const $tbody = document.getElementById("tbody");
const $detailsTbody = document.getElementById("detailsTbody");

function infBasica(pelicula) {
    return `
        <tr>
            <td>${pelicula.originalLanguage}</td>
            <td>${pelicula.releaseDate}</td>
            <td>${pelicula.runtime}</td>
            <td>${pelicula.status}</td>
        </tr>
    `;
}

function detPelicula(peliculas) {
    return `
        <tr>
            <td>${peliculas.vote_average}</td>
            <td>${peliculas.budget}</td>
            <td>${peliculas.revenue}</td>
        </tr>
    `;
}
