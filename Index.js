// Definimos la fecha de inicio (año, mes [de 0 a 11], día, hora, minuto, segundo)
const fechaInicio = new Date(2022, 10, 14, 20, 0, 0);

// Función para actualizar el contador cada segundo
function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = ahora - fechaInicio.getTime();

  // Calculamos los días, horas, minutos y segundos transcurridos
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Mostramos el contador en el elemento con id "contador"
  document.getElementById("contador").innerHTML = `Han pasado ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos desde que me diste el privilegio de ser tu nobio.`;
}

// Llamamos a la función para que se ejecute cada segundo
setInterval(actualizarContador, 1000);
