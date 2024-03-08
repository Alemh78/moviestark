const $peliculaFav=document.getElementById($peliculaFav)

document.addEventListener('$peliculaFav', function () {
    const botonesFavoritos = document.querySelectorAll('.boton-favorito');

    botonesFavoritos.forEach(boton => {
        boton.addEventListener('click', function () {
    
            boton.classList.toggle('favorito');

        });
    });
});