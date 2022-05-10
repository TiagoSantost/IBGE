document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        pegar_estado();
        document.querySelector('#dados').onchange = mostrar_cidades;  
        document.getElementById("clique").addEventListener("click", mostrar_micro);
      
    }
}


function pegar_estado(){
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                response = JSON.parse(httpRequest.responseText);

               
                var lista = document.querySelector('#dados');
                lista.innerHTML = "";
               
                response.forEach(function (el){
                option = document.createElement("option");      
                option.innerHTML =  el.nome;
                option.value = el.sigla;
                option.setAttribute('nome', JSON.stringify (el.nome))
                lista.appendChild(option);
             })           
        }
    }
}

    httpRequest.open('GET', 'https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    httpRequest.send();
}   



function mostrar_cidades(){
    sigla_estados = (document.querySelector('#dados').value)
    
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                response = JSON.parse(httpRequest.responseText);               
                var lista = document.querySelector('#cidade');
                lista.innerHTML = "";
                response.forEach(function (el){
                option = document.createElement("option");      
                option.innerHTML =  el.nome
                option.setAttribute('nome', JSON.stringify (el.nome))
                lista.appendChild(option);
             
               
            })
        }
    }
}

    httpRequest.open('GET', 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+sigla_estados+'/municipios');
    httpRequest.send();
    

}




function mostrar_micro(){
    sigla_estados = (document.querySelector('#dados').value)
    
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                response = JSON.parse(httpRequest.responseText);               
                response.forEach(function (el){
               
          
        })
        }
    }
}
    httpRequest.open('GET', 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+sigla_estados+'/municipios');
    httpRequest.send();   
}





