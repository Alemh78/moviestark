

const peliculas =_listaDePeliculas;

const apiUrl = 'https://moviestack.onrender.com/api/movies';
const requestOptions = {
  method: "GET",
  headers: {
    "x-api-key": '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
  }
};

fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(_listaDePeliculas => {
    console.log(_listaDePeliculas); 
    const _listaDePeliculas = _listaDePeliculas;
  })
  .catch(error => console.error('Error al obtener datos:', error));