window.onload=()=>{
    var data=[
        {
            id:1,
            name:"Computadora",
            price:16000.00,
            img:"computadora.jpg"        
        },
        {
            id:2,
            name:"Telefono",
            price:1000.00,
            img:"telefono.jpg"    
        },
        {
            id:3,
            name:"Tablet",
            price:10000.00,
            img:"tablet.jpg"        
        },
        {
            id:4,
            name:"Xbox",
            price:15000.00,
            img:"xbox.jpg"        
        },
        {
            id:5,
            name:"PlayStation",
            price:25000.00,
            img:"PS.jpg"        
        },
    ]

    var dataPedido=[]
    
    var lista=document.querySelector("#listaProductos")
    var pedido=document.querySelector("#pedido")
    var todo="";

    data.forEach( (item)=>{
        todo+=`<div class="product">
                    <div class="img">
                        <img src="./img/${item.img}" alt="">
                    </div>
                    <div class="data">
                        <h2>${item.name}</h2>
                        <h6 class="price">$${item.price}</h6>
                        <button class="btnComprar" data-index="${item.id - 1}">
                            Comprar
                        </button>
                    </div>
                </div>`
    } )
    lista.innerHTML=todo;

    var botones=document.querySelectorAll(".btnComprar")
    botones.forEach((btn)=>btn.addEventListener('click',(evt)=>{
        let i=evt.target.dataset.index
        dataPedido.push(data[i])
        printPedido()
    }))

    let printPedido= ()=>{
        todo=""
        let total=0;
        dataPedido.forEach( (item)=>{
            todo+=`<div class="product">
                        <div class="img">
                            <img src="./img/${item.img}" alt="">
                        </div>
                        <div class="data">
                            <h2>${item.name}</h2>
                            <h6 class="price">$${item.price}</h6>
                            <button class="btnComprar" data-index="${item.id - 1}">
                                Comprar
                            </button>
                        </div>
                    </div>`
            total+=item.price
        } )
        pedido.innerHTML=todo
        document.querySelector("#total").innerHTML="Total: $"+total.toFixed(2)
    }
}

