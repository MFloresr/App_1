var milista = new List();
var divContainer = document.getElementById('container');

var TextoDeArea = document.createElement('textarea');
    TextoDeArea.type ='textarea';
   // TextoDeArea.idName = 'texto';
    TextoDeArea.setAttribute('id','texto')
    divContainer.appendChild(TextoDeArea);

var botonAdd = document.createElement('input');
    botonAdd.type = 'button';
    botonAdd.value = 'Agregar';
    divContainer.appendChild(botonAdd);

var botonClear = document.createElement('input');
    botonClear.type = 'button';
    botonClear.value = 'Limpiar';
    divContainer.appendChild(botonClear);

List.prototype.addTable = function () {
    var divResultado = document.getElementById('resultado');
    divResultado.innerHTML = "";
    var tabla = document.createElement('table');
    
    divResultado.appendChild(tabla);
    for (var i= 0; i < this.listSize; i++) {
       
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        tabla.appendChild(tr);
        tr.appendChild(td);
        td.innerHTML = this.getElement(i); 
    }

    tabla.setAttribute('border', '2');
}

List.prototype.removeId = function (id) {
    this.dataStore.splice(id, 1);
    --this.pos;
}


function capturarDatos() {
    var miTexto = document.getElementById('texto').value;
    milista.append(miTexto);
    milista.addTable();
}

function borrartabla() {
    milista.clear;
    var borrarTabla = document.getElementById(tableID);
    while(borrarTabla.hasChildNodes())
    {
        Parent.removeChild(Parent.firstChild);
    }
}//revisar codigo 

botonAdd.addEventListener('click', capturarDatos);
botonClear.addEventListener('click', borrartabla);