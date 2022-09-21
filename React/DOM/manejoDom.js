// Selectores de nodos del DOM

const titulo2 = document.querySelector(".parrafo1");
console.log(titulo2);

const titulo3 = document.querySelector("#parrafo1");
console.log(titulo3);

const titulo4 = document.getElementsByClassName("parrafo1");
console.log(titulo4);

const titulo5 = document.getElementById("parrafo1");
console.log(titulo5);

const titulo6 = document.querySelectorAll(".parrafo1");
console.log(titulo6);

const titulo7 = document.getElementsByTagName("h2");
console.log(titulo7);

const titulo8 = document.getElementsByClassName("vineta");
console.log(titulo8);

// Insertar texto en HTML
const title = document.querySelectorAll('.titulo');
console.log(title);

title.textContent = "Hola mundo dime que tal estas?";
title.innerHTML = "Es una forma de agregar texto y html <br><br><br>";

// Completado dinamico con array
const lista = document.querySelector("ul");
const valores = ["valor1", "valor2", "valor3", "valor4", "valor5", "valor6"];

    // Solucion 1
    valores.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;    
    })

    // ALternativa 2
    for(let i=0; i<valores.length; i++){

        const li = document.createElement("li");
        li.textContent = valores[i];
        lista.appendChild(li);
    }

// completado dinamico con forech
valores.forEach(dato => {
    const li = document.createElement("li");
    li.textContent = dato;
    lista.appendChild(li);
});

// Selector de nodos hijos y padres, eventos.
const parrafo = document.querySelector("div").children[1];
console.log(parrafo);

const boton = document.querySelector("button");
const boton2 = document.querySelector("div").children[3];

let contador = 0;

boton.addEventListener("click", function(){
    contador++;
    parrafo.textContent = contador;
});

boton2.addEventListener("click", function(){
    contador--;
    parrafo.textContent = contador;
});

const input = document.querySelector(".formularioInput").children[1];
const boton3 = document.querySelector(".formularioInput").children[2];
const p = document.querySelector(".formularioInput").children[3];

input.addEventListener("change", (e) =>{
    p.textContent = e.target.value;
});