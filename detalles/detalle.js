console.log(location);
console.log("search:", location.search);

const urlParams = new URLSearchParams(location.search);
const id = urlParams.get(`id`);

const pelicula = peliculas.find(() => peliculas.id == id);
const $main = document.getElementById("main");

document.addEventListener("DOMContentLoaded", function() {
    const $title = document.getElementById("title");
    const $basicInfo = document.getElementById("basicInfo");
    const $detailsInfo = document.getElementById("detailsInfo");

    $title.textContent = `${pelicula.title}`;
    $image.src =`${ pelicula.image}`;
    $overview.textContent = `${pelicula.overview}`;

    $basicInfo.innerHTML = `
<h2>Información Básica</h2>
<table id="basicInfo">
    <thead>
        <tr>
        <th>${pelicula.originalLanguage}</th>
        <th>${pelicula.releaseDate}</th>
        <th>${pelicula.runtime}</th>
        <th>${pelicula.status}</th>
        <th><a class="underline" href="http://127.0.0.1:5501/detalles/detalle.html#?id=${pelicula.id}"><a>
        </tr>
    </thead>
    <tbody id="tbody"></tbody>`

    
    $detailsInfo.innerHTML = `
    <table id="detailsInfo">
    <thead>
        <tr>
        <th>${pelicula.voteAverage}</th>
        <th>${pelicula.budget}</th>
        <th>${pelicula.revenue}</th>
        </tr>
        </thead>
            <tbody id="details-tbody"></tbody>
        </table>
        `;
    
    });
