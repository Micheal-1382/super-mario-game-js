function play_audio(){
    first_audio.play();
}
function pused_audio(){
    first_audio.pause();
}
but_1.onclick=function(){
    start_1.style.animation="anim_13 2s both";
    start_2.style.animation="anim_14 3s both";
    setTimeout("play_audio()",2000)
} 
back_1.onclick=function(){
    start_1.style.animation="";
    start_2.style.animation="";
    set.checked = false;
    pused_audio();
} 
play.onclick=function(){
    play_audio();
}
pause.onclick=function(){
    pused_audio();
}
