// var nombre = prompt("Ingrese su nombre: ");

// function saludo(nombre){
//      document.write(`¿Hola ${nombre} cómo estás?`);
// }

// saludo(nombre);

// function suma(num1, num2) {
//   var num1 = document.getElementById("numero1").value;
//   var num2 = document.getElementById("numero2").value;

//   num1 = parseInt(num1);
//   num2 = parseInt(num2);

//   var resultadoSuma = num1 + num2;
//   return resultadoSuma;
// }

function validar() {
  var nombre, apellidos, correo, usuario, clave, telefono, expresion;
  nombre = document.getElementById("nombre").value;
  apellidos = document.getElementById("apellidos").value;
  correo = document.getElementById("correo").value;
  usuario = document.getElementById("usuario").value;
  clave = document.getElementById("pass").value;
  telefono = document.getElementById("telefono").value;

  console.log(nombre);
  console.log(apellidos);
  console.log(correo);
  console.log(usuario);
  console.log(clave);
  console.log(typeof telefono);

  //validaciones todos los campos

  if (
    nombre === "" ||
    apellidos === "" ||
    correo === "" ||
    usuario === "" ||
    clave === "" ||
    telefono === ""
  ) {
    alert("Todos los campos son obligatorios");
    return false;
  } else if (nombre.length > 30) {
    // validación largo nombre
    alert("El nombre es muy largo");
    return false;
  } else if (typeof nombre != "string") {
    // validación string nombre
    alert("El nombre solo debe contener letras");
    return false;
  } else if (apellidos.length > 80) {
    // validación largo apellido
    alert("El apellido es muy largo");
    return false;
  } else if (correo.length > 120) {
    // validación largo correo
    alert("El correo es muy largo");
    return false;
  } else if (correo.length < 15) {
    // validación largo correo
    alert("El correo es muy corto");
    return false;
  } else if (usuario.length > 20) {
    // validación largo usuario
    alert("El usuario es muy largo");
    return false;
  } else if (telefono.length > 15) {
    // validación largo telefono
    alert("El telefono es muy largo");
    return false;
  } else if (isNaN(parseInt(telefono))) {
    // validación largo telefono
    alert("En campo Teléfono debe ingresar solo números");
    return false;
  } else {
    // alert("Los datos fueron ingresados correctamente");
    alert(
      `Bienvenido ${nombre} ${apellidos}, acabas de registrarte con nombre de usuario: ${usuario} y clave: ${clave}`
    );
  }
}
