var botaoAdicionar = document.querySelector("#botao-mais");
botaoAdicionar.addEventListener("click", function() {
	debugger;
	event.preventDefault()

	var form = document.querySelector(".add-integrante");
	
	var clone = form.cloneNode(true);

	var parent = document.querySelector("#integrantes");
    parent.appendChild(clone);
}) 

function redireciona() {
	location.href="home.html"
}