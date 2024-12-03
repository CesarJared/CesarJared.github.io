let pausarVid=()=>{
    document.getElementById('video1').pause()
    document.getElementById('video1').innerHTML=''
    document.getElementById('video1').currentTime = 0;
}

let reprVid=(data)=>{
    document.getElementById('video1').src='./assets/vid/'+data[0]
    document.getElementById('exampleModalLabel').innerHTML=data[1]
    document.getElementById('video1').play()
}
