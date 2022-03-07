function pegarClasses(){
 const capturaElementocomAClasse = document.querySelector(".principal");
 console.log(capturaElementocomAClasse);

}
pegarClasses();

function criarElemento(){

    
    let divNova = document.createElement("div");

    let texto = divNova.innerHTML= 'ola grupo';
    divNova.appendChild(texto);;
}
// criarElemento();


const pagina = document.querySelector("body");
// console.log(pagina);