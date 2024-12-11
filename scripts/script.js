document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("aguanteboquita").onclick = mostrarMensaje;
});

function mostrarMensaje() {
    alert("Aguante BocaBocaBoca y JRR");   
}
document.addEventListener("DOMContentLoaded", function () {
    const fechaPartido = new Date("2024-12-15T18:00:00"); // Fecha y hora del próximo partido (personaliza)
  
    function actualizarCuentaRegresiva() {
      const ahora = new Date();
      const tiempoRestante = fechaPartido - ahora;
  
      if (tiempoRestante > 0) {
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
  
        document.getElementById("dias").innerText = dias;
        document.getElementById("horas").innerText = horas;
        document.getElementById("minutos").innerText = minutos;
        document.getElementById("segundos").innerText = segundos;
      } else {
        document.getElementById("cuenta-regresiva").innerText = "¡El partido ha comenzado!";
      }
    }
  
    // Actualiza el reloj cada segundo
    setInterval(actualizarCuentaRegresiva, 1000);
    actualizarCuentaRegresiva(); // Llama una vez para mostrar inmediatamente
  });
  const fechaPartido = new Date("2024-12-08T21:00:00-03:00");


