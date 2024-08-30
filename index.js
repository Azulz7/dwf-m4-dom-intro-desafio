const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {

  const lista = document.querySelector(".lista");
  
  
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  
  
  cosasQueAprendimos.forEach((item) => {
  
    const nuevoLi = document.createElement("li");
    
  
    nuevoLi.textContent = item.tema;
    
  
    nuevoLi.classList.add(item.clase);
    
  
    lista.appendChild(nuevoLi);
  });
  }
  
  main();
  
