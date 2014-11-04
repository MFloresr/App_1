
var divContainer = document.getElementById('container');
var divResultado = document.getElementById('resultado');

var TextoDeArea = document.createElement('textarea');
    TextoDeArea.type ='textarea';
    divContainer.appendChild(TextoDeArea);

var BotonAdd = document.createElement('input');
    BotonAdd.type = 'button';
    BotonAdd.value = 'Agregar';
    divContainer.appendChild(BotonAdd);

var BotonClear = document.createElement('input');
    BotonClear.type = 'button';
    BotonClear.value = 'Limpiar';
    divContainer.appendChild(BotonClear);

var milista = new list();

list.prototype.AddTable = function () {

}

list.prototype.RemoveId = function (id) {
    this.dataStore.splice(id, 1);
    --this.pos;
}
