


const pegarEstado = async () => {
    try {
        const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
        const estados = await res.json();

        const listaMunicipio = document.querySelector("#dados")

        estados.forEach(es => {
            const option = document.createElement("option")
            option.innerText = es.nome
            option.value = es.sigla
            listaMunicipio.appendChild(option)
        });

    } catch (error) {
        console.log(error);
    }
}

window.addEventListener("load", pegarEstado)



const getMunicipio = async () => {
    try {
        const lista = document.querySelector("#dados")
        const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${lista.value}/municipios`)
        const municipios = await res.json();

        const selectCidades = document.querySelector("#cidade")
        municipios.forEach(cidade => {
            const option = document.createElement("option")
            option.innerText = cidade.nome
            option.value = cidade.id
            selectCidades.appendChild(option)
        });

        const btCidades = document.querySelector("#clique")
        btCidades.addEventListener("click", getCidades)

        function getCidades() {
            municipios.forEach(cidade => {

                if(cidade.id == selectCidades.value){

                    const prf = document.querySelector(".paragrafo")

                   
                  
                    const micro = document.createElement("p")
                    const meso = document.createElement("p")
                    const re = document.createElement("p")
                    
                    micro.innerText = `Nome microrregião: ${cidade.microrregiao.nome}`
                    meso.innerText = `Nome mesorregião: ${cidade.microrregiao.mesorregiao.nome}`
                    re.innerText = `Nome regiao: ${cidade.microrregiao.mesorregiao.UF.regiao.nome}`

                    prf.appendChild(micro)
                    prf.appendChild(meso)
                    prf.appendChild(re)
            }
            });
        }

    } catch (e) {
        console.log(e)
    }
}