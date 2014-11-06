var milista = new List();
var divContainer = document.getElementById('container');

var TextoDeArea = document.createElement('textarea');
    TextoDeArea.type ='textarea';
   // TextoDeArea.idName = 'texto';
    TextoDeArea.setAttribute('id','texto')
    divContainer.appendChild(TextoDeArea);

var BotonAdd = document.createElement('input');
    BotonAdd.type = 'button';
    BotonAdd.value = 'Agregar';
    divContainer.appendChild(BotonAdd);

var BotonClear = document.createElement('input');
    BotonClear.type = 'button';
    BotonClear.value = 'Limpiar';
    divContainer.appendChild(BotonClear);

List.prototype.addTable = function () {
    var tabla = document.createElement('table');
    var divResultado = document.getElementById('resultado');

    divResultado.appendChild(tabla);
    for (var i= 0; i < milista.listsize; i++) {
        
    
        var tr = document.createElement('tr');
        var tr = document.createElement('td');
        td.innerHTML = 'HOLA'; //CANVIAR HOLA
        tabla.appendChild(tr);
        tr.appendChild(td);
    }
}

List.prototype.removeId = function (id) {
    this.dataStore.splice(id, 1);
    --this.pos;
}

BotonAdd.addEventListener('click', capturarDatos);

function capturarDatos() {
    var miTexto = document.getElementById('texto').value;
    milista.append(miTexto);
}

