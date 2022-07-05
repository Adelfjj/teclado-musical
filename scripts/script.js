let teclas = document.querySelectorAll('.teclado > .grupo > div');
let audios = document.querySelectorAll('audio');

teclas.forEach(function(tecla){
    tecla.addEventListener("mousedown",(e)=>{
       let tecla = e.target;
        playSound(tecla.getAttribute("tecla"));
    });
});

const playSound = (tecla) =>{
    let sound = getAudio(tecla);
    sound.currentTime = 0;
    sound.play();
}

const getAudio = (tecla) =>{
    for(audio of audios){
        if(audio.getAttribute("tecla") == tecla){
           return audio;
        }
    };
}