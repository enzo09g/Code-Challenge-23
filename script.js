const DATA_URL = 'https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265/';



function traerDatos() {
    fetch(DATA_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            hacerTable(data);
        })
}

function borrar(id) {
    fetch(`${DATA_URL}${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(() => { traerDatos() });

}

function hacerTable(array) {
    let contenedor = document.getElementById('listaDatos');
    contenedor.innerHTML = ""
    array.forEach(element => {

        contenedor.innerHTML += `
        <tr>
            <td>${element.nombre}</td>
            <td>${element.apellido}</td>
            <td>${element.grupo}</td>
            <td>${element.sala}</td>
            <td><button id="${element._id}" class="btn btn-danger boton">Delete</td>
        </tr>
        `
    });
}

document.addEventListener('DOMContentLoaded', () => {
    traerDatos()
    let tabla = document.getElementById('tablaDatos');

    tabla.addEventListener('click', (e) => {
        let id = e.target.id;
        console.log(id);
        borrar(id)
    })
})