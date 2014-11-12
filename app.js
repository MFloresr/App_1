var milista = new List();
var divContainer = document.getElementById('container');

var TextoDeArea = document.createElement('textarea');
    TextoDeArea.type ='textarea';
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
	var that = this;
    var divResultado = document.getElementById('resultado');
    divResultado.innerHTML = "";
    var tabla = document.createElement('table');
    divResultado.appendChild(tabla);
    this.front();
    for (var i= 0; i < this.listSize; i++) {
       
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        tabla.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        td1.innerHTML = i+1;
        td2.innerHTML = this.getElement(i);
     	var botonIndividual = document.createElement('button');
     	botonIndividual.innerHTML = "X";
     	td3.appendChild(botonIndividual);
     	botonIndividual.addEventListener('click',function() {
     		that.removeId(i);
     		that.addTable();
     	});
        this.next();
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
    var divResultado = document.getElementById('resultado');
    divResultado.innerHTML = " ";
    milista.clear();
}

botonAdd.addEventListener('click', capturarDatos);
botonClear.addEventListener('click', borrartabla);
