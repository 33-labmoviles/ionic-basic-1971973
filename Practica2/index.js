console.log("hola mundo!");
//Paso 1: Calcular totalvar total = 0;

var descripcion;
var total = 0;
var monto = 0;

var montoTxt = document.getElementById("monto");

var totalMsg = document.getElementById("totalMsg");

var descTxt = document.getElementById("descripcion");

var ticket = document.getElementById("ticket")

function mostrarProducto() {
    descripcion = descTxt.value;
    ticket.innerHTML = "Producto: " + descripcion
}

function calcularTotal() {
    //obtener el monto del campo de texto    monto = montoTxt.value;
    monto = montoTxt.value;
    monto = parseInt(monto); //resolviendo conflicto de ionic -- revisar error    total = total + monto;

    total = total + monto;
    console.log(total);

    //Imprimir en pagina
    totalMsg.innerHTML = "Total : " + total;
}