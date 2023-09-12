const DATA_URL = 'https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265/';



function traerDatos() {
    fetch(DATA_URL)
        .then(response => response.json())
        .then(data => {
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
            <td><button onclick="borrar('${element._id}')" id="${element._id}" class="btn btn-danger boton"><img src="image/file-x.svg"></td>
        </tr>
        `
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    setInterval(traerDatos, 1500)
})

