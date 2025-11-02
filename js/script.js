// Aquí tu código
const handleClick = () => {
  const element = prompt("Escribe lo que desees agregar a la lista:");
  if (element) {
    //creamos el elemento li y lo agregamos a la lista
    const newItem = document.createElement("li");
    newItem.textContent = element; //cambiamnos el texto del li
    list.appendChild(newItem); //agregamos el li a la lista
  } else {
    // Si no se ingresó ningún elemento, mostramos un mensaje de alerta
    alert("No se agregó ningún elemento.");
  }
};
// Selección de elementos y asignación de eventos
const list = document.getElementById("lista");
const btn = document.getElementById("agregar");
// Asignamos el evento click al botón
btn.addEventListener("click", handleClick); //le pasamos la función que se ejecutará al hacer click
