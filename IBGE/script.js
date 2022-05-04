document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        pegar_estado();
        pegar_cidade();
        document.querySelector('#dados').onchange = mostrar_estados;
        
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

function pegar_cidade(){
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                response = JSON.parse(httpRequest.responseText);               
                var lista = document.querySelector('#cidade');
                lista.innerHTML = "";
                 
        }
    }
}

    httpRequest.open('GET', 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
    httpRequest.send();
}



function mostrar_estados(ev){
    selected = ev.target;
    console.log
    sigla_estados = (document.querySelector('#dados').value)
    console.log(sigla_estados);
    
  
}