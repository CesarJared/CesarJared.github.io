window.onload=()=>{
    var btn = document.getElementById("btnRegister")
    var txtN= document.querySelector("#txtNombre")
    var numT= document.querySelector("#numTelefono")
    var numEd=document.querySelector("#numEdad")
    var txtEm=document.querySelector("#txtEmail")
    var txtPass1=document.querySelector("#txtPass1")
    var txtPass2=document.querySelector("#txtPass2")
    var divA = document.querySelector('#alert')
    var divAS=document.querySelector('#alertSuccess')



    btn.addEventListener('click',(evt)=>{
        evt.preventDefault()
        if(txtN.value=="" || numT.value=="" || numEd.value=="" || txtEm.value=="" || txtPass1.value=="" || txtPass2==""){
            divA.innerHTML="Error: <br><small>Favor de rellenar los campos</small>"
            divA.style.display="block"
        }else{
            if(txtPass1.value.length<5 && txtPass2.value.length<5){
                divA.innerHTML="Error: <br><small>El password debe ser mayor de 5 letras</small>"
                divA.style.display="block"
            }else{
                if(txtPass1.value!=txtPass2.value){
                    divA.innerHTML="Error: <br><small>la contraseña no coincide</small>"
                    divA.style.display="block"
                }else{
                    divAS.style.display="block"
                }
            }
        }
    
    })

    txtN.addEventListener('focus',(evt)=>{
        divA.style.display="none";
        divAS.style.display="none"
    })
    numT.addEventListener('focus',(evt)=>{
        divA.style.display="none";
        divAS.style.display="none"
    })
    numEd.addEventListener('focus',(evt)=>{
        divA.style.display="none";
        divAS.style.display="none"
    })
    txtEm.addEventListener('focus',(evt)=>{
        divA.style.display="none";
        divAS.style.display="none"
    })
    txtPass1.addEventListener('focus',(evt)=>{
        divA.style.display="none";
        divAS.style.display="none"
    })
    txtPass2.addEventListener('focus',(evt)=>{
        divA.style.display="none";
        divAS.style.display="none"
    })
}