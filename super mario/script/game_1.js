function play_audio(){
    first_audio.play();
}
function pused_audio(){
    first_audio.pause();
}
back_1.onclick=function(){
    set.checked = false;
    pused_audio();
} 
mem=0;
play_pause.onmousedown=function(){
    if(mem==0){
        play_pause.style.background="url(img/4181163.jpg) no-repeat 50% 50%";
        play_pause.style.backgroundSize="100% 100%";
        play_audio();
        mem=1;
    }
    else if(mem==1){
        play_pause.style.background="url(img/4208490.jpg) no-repeat 50% 50%";
        play_pause.style.backgroundSize="150% 150%";
        pused_audio();
        mem=0;
    }
}
agin.onclick=function(){
    location.reload();
    set.checked = false;
}

playagin.onclick=function(){
    location.reload();
    set.checked = false;
    play_pause.style.background="url(../img/4181163.png) 50% 50%";
    play_pause.style.backgroundSize="100% 100%";
    mem=0;
}

memory_1=0;
window.oncontextmenu=function(e){
    // if (e.keyCode === 39){ 
        e.preventDefault();
        if(memory_1==0){
            player.style.left= 40 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=1;
            jump_2=1;
        }
        else if(memory_1==1){
            player.style.left= 80 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=2;
            jump_2=2;
        }
        else if(memory_1==2){
            player.style.left= 120 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=3;
            jump_2=3;
        }
        else if(memory_1==3){
            player.style.left= 160 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=4;
            jump_2=4;
        }
        else if(memory_1==4){
            player.style.left= 200 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=5;
            jump_2=5;
        }
        else if(memory_1==5){
            player.style.left= 240 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=6;
            jump_2=6;
        }
        else if(memory_1==6){
            player.style.left= 280 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=7;
            jump_2=7;
        }
        else if(memory_1==7){
            player.style.left= 320 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=8;
            jump_2=8;
        }
        else if(memory_1==8){
            player.style.left= 360 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=9;
            jump_2=9;
        }
        else if(memory_1==9){
            player.style.left= 400 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=10;
            jump_2=10;
        }
        else if(memory_1==10){
            player.style.left= 440 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=11;
            jump_2=11;
        }
        else if(memory_1==11){
            player.style.left= 480 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=12;
            jump_2=12;
        }
        else if(memory_1==12){
            player.style.left= 520 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=13;
            jump_2=13;
        }
        else if(memory_1==13){
            player.style.left= 560 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=14;
            jump_2=14;
            gameover.style.display="block";
            fifth_audio.play();
            pused_audio();
        }
        else if(memory_1==15){
            seventh_audio.play();
            player.style.animation="playeranim_2 0.75s reverse";
            player.style.left= 280 + "px" ;
            player.style.bottom= 40 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=7;
            jump_2=7;
        }
        else if(memory_1==16){
            player.style.left= 200 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=15;
            jump_2=15;
        }
        else if(memory_1==17){
            player.style.left= 160 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=16;
            jump_2=16;
        }
        else if(memory_1==18){
            player.style.left= 120 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=17;
            jump_2=17;
        }
        else if(memory_1==19){
            player.style.left= 80 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=18;
            jump_2=18;
        }
        else if(memory_1==20){
            player.style.left= 40 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=19;
            jump_2=19;
        }
        else if(memory_1==21){
            player.style.left= 520 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=22;
            jump_2=22;
        }
        else if(memory_1==22){
            player.style.left= 560 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=23;
            jump_2=23;
        }
        else if(memory_1==23){
            player.style.left= 600 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=24;
            jump_2=24;
        }
        else if(memory_1==24){
            player.style.left= 640 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=25;
            jump_2=25;
        }
        else if(memory_1==25){
            player.style.left= 680 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=26;
            jump_2=26;
        }
        else if(memory_1==26){
            player.style.left= 720 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=27;
            jump_2=27;
        }
        else if(memory_1==27){
            player.style.left= 760 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=28;
            jump_2=28;
        }
        else if(memory_1==28){
            player.style.left= 800 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=29;
            jump_2=29;
        }
        else if(memory_1==29){
            player.style.left= 840 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=30;
            jump_2=30;
        }
        else if(memory_1==30){
            player.style.left= 880 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=31;
            jump_2=31;
        }
        else if(memory_1==31){
            player.style.left= 920 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=32;
            jump_2=32;
        }
        else if(memory_1==32){
            player.style.left= 960 + "px" ;
            player.style.transform="rotateY(0deg)";
            memory_1=33;
            jump_2=33;
            nextlevel.style.display="block";
            eighth_audio.play();
            pused_audio();
        }
    // }
}


window.onkeydown=function(e){
    if (e.keyCode === 37) {
        if(memory_1==1){
            player.style.left= 0 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=0;
            jump_2=0;
        }
        else if(memory_1==2){
            player.style.left= 40 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=1;
            jump_2=1;
        }
        else if(memory_1==3){
            player.style.left= 80 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=2;
            jump_2=2;
        }
        else if(memory_1==4){
            player.style.left= 120 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=3;
            jump_2=3;
        }
        else if(memory_1==5){
            player.style.left= 160 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=4;
            jump_2=4;
        }
        else if(memory_1==6){
            player.style.left= 200 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=5;
            jump_2=5;
        }
        else if(memory_1==7){
            player.style.left= 240 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=6;
            jump_2=6;
        }
        else if(memory_1==8){
            player.style.left= 280 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=7;
            jump_2=7;
        }
        else if(memory_1==9){
            player.style.left= 320 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=8;
            jump_2=8;
        }
        else if(memory_1==10){
            player.style.left= 360 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=9;
            jump_2=9;
        }
        else if(memory_1==11){
            player.style.left= 400 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=10;
            jump_2=10;
        }
        else if(memory_1==12){
            player.style.left= 440 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=11;
            jump_2=11;
        }
        else if(memory_1==13){
            player.style.left= 480 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=12;
            jump_2=12;
        }
        else if(memory_1==15){
            player.style.left= 160 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=16;
            jump_2=16;
        }
        else if(memory_1==16){
            player.style.left= 120 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=17;
            jump_2=17;
        }
        else if(memory_1==17){
            player.style.left= 80 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=18;
            jump_2=18;
        }
        else if(memory_1==18){
            player.style.left= 40 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=19;
            jump_2=19;
        }
        else if(memory_1==19){
            player.style.left= 0 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=20;
            jump_2=20;
        }
        else if(memory_1==21){
            player.style.animation="playeranim_5 0.5s";
            seventh_audio.play();
            player.style.left= 200 + "px" ;
            player.style.bottom= 250 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=15;
            jump_2=15;
        }
        else if(memory_1==22){
            player.style.left= 480 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=21;
            jump_2=21;
        }
        else if(memory_1==23){
            player.style.left= 520 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=22;
            jump_2=22;
        }
        else if(memory_1==24){
            player.style.left= 560 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=23;
            jump_2=23;
        }
        else if(memory_1==25){
            player.style.left= 600 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=24;
            jump_2=24;
        }
        else if(memory_1==26){
            player.style.left= 640 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=25;
            jump_2=25;
        }
        else if(memory_1==27){
            player.style.left= 680 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=26;
            jump_2=26;
        }
        else if(memory_1==28){
            player.style.left= 720 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=27;
            jump_2=27;
        }
        else if(memory_1==29){
            player.style.left= 760 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=28;
            jump_2=28;
        }
        else if(memory_1==30){
            player.style.left= 800 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=29;
            jump_2=29;
        }
        else if(memory_1==31){
            player.style.left= 840 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=30;
            jump_2=30;
        }
        else if(memory_1==32){
            player.style.left= 880 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=31;
            jump_2=31;
        }
        else if(memory_1==33){
            player.style.left= 920 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=32;
            jump_2=32;
        }
    }
}


jump_2=0;
coin=true;
coin3=true;
s=0;
window.ondblclick=function(e){
    // if (e.keyCode === 38) {
        if(jump_2==0){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            third_audio.play();
            setTimeout("brown_1.innerHTML=' : ('",250);
            setTimeout("brown_1.style.color='#fff'",250);
            setTimeout("brown_1.style.background='brown'",250);
        }
        else if(jump_2==1){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            third_audio.play();
            setTimeout("brown_2.innerHTML=' : ('",250);
            setTimeout("brown_2.style.color='#fff'",250);
            setTimeout("brown_2.style.background='brown'",250);
        }
        else if(jump_2==2){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            third_audio.play();
            setTimeout("brown_3.innerHTML=' : ('",250);
            setTimeout("brown_3.style.color='#fff'",250);
            setTimeout("brown_3.style.background='brown'",250);
        }
        else if(jump_2==3){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            third_audio.play();
            setTimeout("brown_4.innerHTML=' : ('",250);
            setTimeout("brown_4.style.color='#fff'",250);
            setTimeout("brown_4.style.background='brown'",250);
        }
        else if(jump_2==4){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            third_audio.play();
            setTimeout("brown_5.innerHTML=' : ('",250);
            setTimeout("brown_5.style.color='#fff'",250);
            setTimeout("brown_5.style.background='brown'",250);
        }
        else if(jump_2==5){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            third_audio.play();
            setTimeout("brown_6.innerHTML=' : ('",250);
            setTimeout("brown_6.style.color='#fff'",250);
            setTimeout("brown_6.style.background='brown'",250);
        }
        else if(jump_2==7){
            player.style.left= 200 + "px" ;
            player.style.bottom= 250 + "px" ;
            player.style.animation="playeranim_2 0.5s";
            player.style.transform="rotateY(180deg)";
            sixs_audio.play();
            memory_1=15;
            jump_2=15;
        }
        else if(jump_2==10){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            forth_audio.play();
            setTimeout("coin_1.style.display='none'",250);
            s+=50;
            score.innerHTML=s;
        }
        else if(jump_2==13){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            forth_audio.play();
            setTimeout("coin_2.style.display='none'",250);
            s+=50;
            score.innerHTML=s;
        }
        else if(jump_2==15){
            if(coin3==true){
                player.style.animation="playeranim_3 0.5s 2 alternate";
                setTimeout("forth_audio.play();",0);
                setTimeout("forth_audio.play();",250);
                setTimeout("forth_audio.play();",500);
                setTimeout("coin_4.style.display='none'",100);
                setTimeout("coin_5.style.display='none'",150);
                setTimeout("coin_6.style.display='none'",200);
                setTimeout("s+=50;",100);
                setTimeout("score.innerHTML=s",100);
                setTimeout("s+=50;",150);
                setTimeout("score.innerHTML=s",150);
                setTimeout("s+=50;",200);
                setTimeout("score.innerHTML=s",200);
                coin3=false;
            }
            else if(coin3==false){
                player.style.animation="playeranim_4 0.5s";
                player.style.transform="rotateY(0deg)";
                player.style.left= 480 + "px" ;
                player.style.bottom= 420 + "px" ;
                sixs_audio.play();
                memory_1=21;
                jump_2=21;
            }
        }
        else if(jump_2==16){
            player.style.animation="playeranim_3 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==17){
            player.style.animation="playeranim_3 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==18){
            player.style.animation="playeranim_3 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==19){
            player.style.animation="playeranim_3 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==20){
            player.style.animation="playeranim_3 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==21){
            player.style.animation="playeranim_6 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==22){
            player.style.animation="playeranim_6 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==23){
            player.style.animation="playeranim_6 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==24){
            player.style.animation="playeranim_6 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==25){
            player.style.animation="playeranim_7 1s both";
            third_audio.play();
            gameover.style.display="block";
            fifth_audio.play();
            pused_audio();
        }
        else if(jump_2==26){
            player.style.animation="playeranim_6 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==27){
            player.style.animation="playeranim_6 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==28){
            player.style.animation="playeranim_6 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==29){
            player.style.animation="playeranim_6 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==30){
            player.style.animation="playeranim_6 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==31){
            player.style.animation="playeranim_6 0.5s 2 alternate";
            third_audio.play();
        }
        else if(jump_2==32){
            player.style.animation="playeranim_6 0.5s 2 alternate";
            third_audio.play();
        }
        else{
            player.style.animation="playeranim_1 0.25s 2 alternate";
            third_audio.play();
        }
    // }
}



window.onmousedown=function(){
    if(jump_2==0){
        player.style.animation="";
    }
    else if(jump_2==1){
        player.style.animation="";
    }
    else if(jump_2==2){
        player.style.animation="";
    }
    else if(jump_2==3){
        player.style.animation="";
    }
    else if(jump_2==4){
        player.style.animation="";
    }
    else if(jump_2==5){
        player.style.animation="";
    }
    else{
        player.style.animation="";
    }
}