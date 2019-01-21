var campoFiltro = document.querySelector("#filtrar-tabela"); 

campoFiltro.addEventListener("input", function(){
  var colaboradores = document.querySelectorAll(".colaborador"); 
 if(this.value.length > 0){
  for (var i = 0; i < colaboradores.length; i++) {
        var colaborador = colaboradores[i];
        var tdNome = colaborador.querySelector(".info-nome");
        var nome = tdNome.textContent;   
        var tdSkill= colaborador.querySelector(".info-skill");
        var skill = tdSkill.textContent;
        var expressao = new RegExp(this.value, "i"); 
        
       if (((expressao.test(skill))) || (expressao.test(nome))) {
            colaborador.classList.remove("invisivel");
        } else {
            colaborador.classList.add("invisivel");
        } 
    } 
  } else{
  		for (var i = 0; i < colaboradores.length; i++) {
  			var colaborador = colaboradores[i]; 
  			colaborador.classList.remove("invisivel"); 

  		}
  }  
}); 
