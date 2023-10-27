window.onload= ()=>{
    var arreglo = []
    var cont=0

    var url='https://pokeapi.co/api/v2/'
    fetch(url+'pokemon?limit=20')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        let lista= document.querySelector("#lista")
        data.results.forEach(element => {
            lista.innerHTML=""
            fetch(element.url)
            .then(res=>res.json())
            .then(dataPokemon=>{

                lista.innerHTML=lista.innerHTML + `
                <div class="col-3 p-4">
                <div class="card" style="width: 18rem;">
                    <img src="${dataPokemon.sprites.other.home.front_default}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">El bulbo en su espalda no es natural, fue puesto por cientificos pokemon mientras estaban bajo efectos narcoticos producidos por los gases toxicos provenientes de un gastly. Este bulbo le produce dolor y a medida que este crece se vuelve tan pesado que le dificulta moverse, ademas atrae depredadores</p>
                    <a data-id="${cont}" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#" class="btn btn-dark w-100 btnVer" >Elegir</a>
                    </div>
                </div>
                </div>
                `

                let a=document.querySelectorAll(".btnVer")
                a.forEach(e=>e.addEventListener('click',mostrar))
                arreglo.push(dataPokemon)
                cont++
            })

            
        });
        //console.log(data)
    })

    let mostrar = (evt)=>{
        let indice=evt.target.dataset.id

        let name=document.querySelector("#exampleModalLabel")
        let tipo = document.querySelector("#tipo")
        let habilidades = document.querySelector("#habilidades")

        name.innerHTML=arreglo[indice].name
        tipo.innerHTML=arreglo[indice].types[0].type.name

        var h="Habilidades: "
        arreglo[indice].abilities.forEach(el=>h+=el.ability.name+", ")

        habilidades.innerHTML=h
    }
}