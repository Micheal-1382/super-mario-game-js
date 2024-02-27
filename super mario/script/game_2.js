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
play_pause.onclick=function(){
    if(mem==0){
        play_pause.style.background="url(../img/4181163.jpg) no-repeat 50% 50%";
        play_pause.style.backgroundSize="100% 100%";
        play_audio();
        mem=1;
    }
    else if(mem==1){
        play_pause.style.background="url(../img/4208490.jpg) no-repeat 50% 50%";
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
    }
    else if(memory_1==14){
        player.style.left= 600 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=15;
        jump_2=15;
    }
    else if(memory_1==15){
        player.style.left= 640 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=16;
        jump_2=16;
    }
    else if(memory_1==16){
        player.style.left= 680 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=17;
        jump_2=17;
    }
    else if(memory_1==17){
        player.style.left= 720 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=18;
        jump_2=18;
    }
    else if(memory_1==18){
        player.style.left= 760 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=19;
        jump_2=19;
    }
    else if(memory_1==19){
        player.style.left= 800 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=20;
        jump_2=20;
    }
    else if(memory_1==20){
        player.style.left= 840 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=21;
        jump_2=21;
    }
    else if(memory_1==21){
        player.style.left= 880 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=22;
        jump_2=22;
    }
    else if(memory_1==22){
        player.style.left= 920 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=23;
        jump_2=23;
    }
    else if(memory_1==23){
        player.style.left= 960 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=24;
        jump_2=24;
    }
    else if(memory_1==25){
        player.style.left= 480 + "px" ;
        player.style.bottom= 40 + "px" ;
        player.style.animation="playeranim_2 0.5s reverse";
        player.style.transform="rotateY(0deg)";
        seventh_audio.play();
        memory_1=12;
        jump_2=12;
    }
    else if(memory_1==26){
        player.style.left= 400 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=25;
        jump_2=25;
    }
    else if(memory_1==27){
        player.style.left= 360 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=26;
        jump_2=26;
    }
    else if(memory_1==28){
        player.style.left= 320 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=27;
        jump_2=27;
    }
    else if(memory_1==29){
        player.style.left= 280 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=28;
        jump_2=28;
    }
    else if(memory_1==30){
        player.style.left= 240 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=29;
        jump_2=29;
    }
    else if(memory_1==31){
        player.style.left= 200 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=30;
        jump_2=30;
    }
    else if(memory_1==32){
        player.style.left= 160 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=31;
        jump_2=31;
    }
    else if(memory_1==33){
        player.style.left= 120 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=32;
        jump_2=32;
    }
    else if(memory_1==34){
        player.style.left= 80 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=33;
        jump_2=33;
    }
    else if(memory_1==35){
        player.style.left= 40 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=34;
        jump_2=34;
    }
    else if(memory_1==36){
        player.style.left= 320 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=37;
        jump_2=37;
    }
    else if(memory_1==37){
        player.style.left= 360 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=38;
        jump_2=38;
    }
    else if(memory_1==38){
        player.style.left= 400 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=39;
        jump_2=39;
    }
    else if(memory_1==39){
        player.style.left= 440 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=40;
        jump_2=40;
    }
    else if(memory_1==40){
        player.style.left= 480 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=41;
        jump_2=41;
    }
    else if(memory_1==41){
        player.style.left= 520 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=42;
        jump_2=42;
    }
    else if(memory_1==42){
        player.style.left= 560 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=43;
        jump_2=43;
    }
    else if(memory_1==43){
        player.style.left= 600 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=44;
        jump_2=44;
    }
    else if(memory_1==44){
        player.style.left= 640 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=45;
        jump_2=45;
    }
    else if(memory_1==45){
        player.style.left= 680 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=46;
        jump_2=46;
    }
    else if(memory_1==46){
        player.style.left= 720 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=47;
        jump_2=47;
    }
    else if(memory_1==47){
        player.style.left= 760 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=48;
        jump_2=48;
    }
    else if(memory_1==48){
        player.style.left= 800 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=49;
        jump_2=49;
    }
    else if(memory_1==49){
        player.style.left= 840 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=50;
        jump_2=50;
    }
    else if(memory_1==50){
        player.style.left= 880 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=51;
        jump_2=51;
    }
    else if(memory_1==51){
        player.style.left= 920 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=52;
        jump_2=52;
    }
    else if(memory_1==52){
        player.style.left= 960 + "px" ;
        player.style.transform="rotateY(0deg)";
        memory_1=53;
        jump_2=53;
        nextlevel.style.display="block";
        eighth_audio.play();
        pused_audio();
    }
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
        else if(memory_1==14){
            player.style.left= 520 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=13;
            jump_2=13;
        }
        else if(memory_1==15){
            player.style.left= 560 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=14;
            jump_2=14;
        }
        else if(memory_1==16){
            player.style.left= 600 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=15;
            jump_2=15;
        }
        else if(memory_1==17){
            player.style.left= 640 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=16;
            jump_2=16;
        }
        else if(memory_1==18){
            player.style.left= 680 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=17;
            jump_2=17;
        }
        else if(memory_1==19){
            player.style.left= 720 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=18;
            jump_2=18;
        }
        else if(memory_1==20){
            player.style.left= 760 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=19;
            jump_2=19;
        }
        else if(memory_1==21){
            player.style.left= 800 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=20;
            jump_2=20;
        }
        else if(memory_1==22){
            player.style.left= 840 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=21;
            jump_2=21;
        }
        else if(memory_1==23){
            player.style.left= 880 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=22;
            jump_2=22;
        }
        else if(memory_1==24){
            player.style.left= 920 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=23;
            jump_2=23;
        }
        else if(memory_1==25){
            player.style.left= 360 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=26;
            jump_2=26;
        }
        else if(memory_1==26){
            player.style.left= 320 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=27;
            jump_2=27;
        }
        else if(memory_1==27){
            player.style.left= 280 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=28;
            jump_2=28;
        }
        else if(memory_1==28){
            player.style.left= 240 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=29;
            jump_2=29;
        }
        else if(memory_1==29){
            player.style.left= 200 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=30;
            jump_2=30;
        }
        else if(memory_1==30){
            player.style.left= 160 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=31;
            jump_2=31;
        }
        else if(memory_1==31){
            player.style.left= 120 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=32;
            jump_2=32;
        }
        else if(memory_1==32){
            player.style.left= 80 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=33;
            jump_2=33;
        }
        else if(memory_1==33){
            player.style.left= 40 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=34;
            jump_2=34;
        }
        else if(memory_1==34){
            player.style.left= 0 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=35;
            jump_2=35;
        }
        else if(memory_1==36){
            player.style.animation="playeranim_12 0.5s";
            seventh_audio.play();
            player.style.left= 200 + "px" ;
            player.style.bottom= 250 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=30;
            jump_2=30;
        }
        else if(memory_1==37){
            player.style.left= 280 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=36;
            jump_2=36;
        }
        else if(memory_1==38){
            player.style.left= 320 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=37;
            jump_2=37;
        }
        else if(memory_1==39){
            player.style.left= 360 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=38;
            jump_2=38;
        }
        else if(memory_1==40){
            player.style.left= 400 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=39;
            jump_2=39;
        }
        else if(memory_1==41){
            player.style.left= 440 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=40;
            jump_2=40;
        }
        else if(memory_1==42){
            player.style.left= 480 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=41;
            jump_2=41;
        }
        else if(memory_1==43){
            player.style.left= 520 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=42;
            jump_2=42;
        }
        else if(memory_1==44){
            player.style.left= 560 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=43;
            jump_2=43;
        }
        else if(memory_1==45){
            player.style.left= 600 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=44;
            jump_2=44;
        }
        else if(memory_1==46){
            player.style.left= 640 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=45;
            jump_2=45;
        }
        else if(memory_1==47){
            player.style.left= 680 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=46;
            jump_2=46;
        }
        else if(memory_1==48){
            player.style.left= 720 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=47;
            jump_2=47;
        }
        else if(memory_1==49){
            player.style.left= 760 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=48;
            jump_2=48;
        }
        else if(memory_1==50){
            player.style.left= 800 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=49;
            jump_2=49;
        }
        else if(memory_1==51){
            player.style.left= 840 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=50;
            jump_2=50;
        }
        else if(memory_1==52){
            player.style.left= 880 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=51;
            jump_2=51;
        }
        else if(memory_1==53){
            player.style.left= 920 + "px" ;
            player.style.transform="rotateY(180deg)";
            memory_1=52;
            jump_2=52;
        }
    }
}


jump_2=0;
coin_11=true;
coin_12=true;
coin_13=true;
coin_14=true;
coin_15=true;
coin_16=true;
coin_17=true;
coin_18=true;
s=0;
window.ondblclick=function(){
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
    else if(jump_2==6){
        player.style.animation="playeranim_1 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_7.innerHTML=' : ('",250);
        setTimeout("brown_7.style.color='#fff'",250);
        setTimeout("brown_7.style.background='brown'",250);
    }
    else if(jump_2==7){
        player.style.animation="playeranim_1 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_8.innerHTML=' : ('",250);
        setTimeout("brown_8.style.color='#fff'",250);
        setTimeout("brown_8.style.background='brown'",250);
    }
    else if(jump_2==8){
        player.style.animation="playeranim_1 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_9.innerHTML=' : ('",250);
        setTimeout("brown_9.style.color='#fff'",250);
        setTimeout("brown_9.style.background='brown'",250);
    }
    else if(jump_2==9){
        player.style.animation="playeranim_1 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_10.innerHTML=' : ('",250);
        setTimeout("brown_10.style.color='#fff'",250);
        setTimeout("brown_10.style.background='brown'",250);
    }
    else if(jump_2==10){
        player.style.animation="playeranim_1 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_11.innerHTML=' : ('",250);
        setTimeout("brown_11.style.color='#fff'",250);
        setTimeout("brown_11.style.background='brown'",250);
    }
    else if(jump_2==12){
        player.style.left= 400 + "px" ;
        player.style.bottom= 250 + "px" ;
        player.style.animation="playeranim_2 0.5s";
        player.style.transform="rotateY(180deg)";
        sixs_audio.play();
        memory_1=25;
        jump_2=25;
    }
    else if(jump_2==14){
        player.style.left= 640 + "px" ;
        player.style.bottom= 300 + "px" ;
        player.style.animation="playeranim_8 0.5s";
        player.style.transform="rotateY(0deg)";
        setTimeout("s+=50;",250);
        setTimeout("score.innerHTML=s",250);
        setTimeout("coin_9.style.display='none'",250);
        sixs_audio.play();
        setTimeout("forth_audio.play()",250);
        setTimeout("gameover.style.display='block';",500);
        setTimeout("fifth_audio.play();",500);
        pused_audio();
        memory_1=25;
        jump_2=25;
    }
    else if(jump_2==16){
        if(coin_11==true){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            forth_audio.play();
            setTimeout("coin_1.style.display='none'",250);
            s+=50;
            score.innerHTML=s;
            setTimeout("brown_12.innerHTML=' : ('",250);
            setTimeout("brown_12.style.color='#fff'",250);
            setTimeout("brown_12.style.background='brown'",250);
            coin_11=false;
        }
        else if(coin_11==false){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            third_audio.play();
        }
    }
    else if(jump_2==17){
        player.style.animation="playeranim_1 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_13.innerHTML=' : ('",250);
        setTimeout("brown_13.style.color='#fff'",250);
        setTimeout("brown_13.style.background='brown'",250);
    }
    else if(jump_2==18){
        player.style.animation="playeranim_1 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_14.innerHTML=' : ('",250);
        setTimeout("brown_14.style.color='#fff'",250);
        setTimeout("brown_14.style.background='brown'",250);
    }
    else if(jump_2==19){
        if(coin_12==true){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            forth_audio.play();
            setTimeout("coin_2.style.display='none'",250);
            s+=50;
            score.innerHTML=s;
            setTimeout("brown_15.innerHTML=' : ('",250);
            setTimeout("brown_15.style.color='#fff'",250);
            setTimeout("brown_15.style.background='brown'",250);
            coin_12=false;
        }
        else if(coin_12==false){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            third_audio.play();
        }
    }
    else if(jump_2==20){
        player.style.animation="playeranim_1 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_16.innerHTML=' : ('",250);
        setTimeout("brown_16.style.color='#fff'",250);
        setTimeout("brown_16.style.background='brown'",250);
    }
    else if(jump_2==21){
        if(coin_13==true){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            forth_audio.play();
            setTimeout("coin_3.style.display='none'",250);
            s+=50;
            score.innerHTML=s;
            setTimeout("brown_17.innerHTML=' : ('",250);
            setTimeout("brown_17.style.color='#fff'",250);
            setTimeout("brown_17.style.background='brown'",250);
            coin_13=false;
        }
        else if(coin_13==false){
            player.style.animation="playeranim_1 0.25s 2 alternate";
            third_audio.play();
        }
    }
    else if(jump_2==22){
        player.style.animation="playeranim_1 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_18.innerHTML=' : ('",250);
        setTimeout("brown_18.style.color='#fff'",250);
        setTimeout("brown_18.style.background='brown'",250);
    }
    else if(jump_2==23){
        player.style.animation="playeranim_1 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_19.innerHTML=' : ('",250);
        setTimeout("brown_19.style.color='#fff'",250);
        setTimeout("brown_19.style.background='brown'",250);
    }
    else if(jump_2==24){
        player.style.animation="playeranim_1 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_20.innerHTML=' : ('",250);
        setTimeout("brown_20.style.color='#fff'",250);
        setTimeout("brown_20.style.background='brown'",250);
    }
    else if(jump_2==25){
        player.style.animation="playeranim_9 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_24.innerHTML=' : ('",250);
        setTimeout("brown_24.style.color='#fff'",250);
        setTimeout("brown_24.style.background='brown'",250);
    }
    else if(jump_2==26){
        player.style.animation="playeranim_9 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_23.innerHTML=' : ('",250);
        setTimeout("brown_23.style.color='#fff'",250);
        setTimeout("brown_23.style.background='brown'",250);
    }
    else if(jump_2==27){
        if(coin_14==true){
            player.style.animation="playeranim_9 0.25s 2 alternate";
            forth_audio.play();
            setTimeout("coin_4.style.display='none'",250);
            s+=50;
            score.innerHTML=s;
            setTimeout("brown_22.innerHTML=' : ('",250);
            setTimeout("brown_22.style.color='#fff'",250);
            setTimeout("brown_22.style.background='brown'",250);
            coin_14=false;
        }
        else if(coin_14==false){
            player.style.animation="playeranim_9 0.25s 2 alternate";
            third_audio.play();
        }
    }
    else if(jump_2==28){
        player.style.animation="playeranim_9 0.25s 2 alternate";
        third_audio.play();
        setTimeout("brown_21.innerHTML=' : ('",250);
        setTimeout("brown_21.style.color='#fff'",250);
        setTimeout("brown_21.style.background='brown'",250);
    }
    else if(jump_2==29){
        player.style.animation="playeranim_9 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==30){
        if(coin_15==true){
            player.style.animation="playeranim_9 0.25s 2 alternate";
            forth_audio.play();
            setTimeout("coin_5.style.display='none'",250);
            s+=50;
            score.innerHTML=s;
            coin_15=false;
        }
        else if(coin_15==false){
            player.style.animation="playeranim_11 0.5s";
            third_audio.play();
            player.style.transform="rotateY(0deg)";
            player.style.left= 280 + "px" ;
            player.style.bottom= 420 + "px" ;
            memory_1=36;
            jump_2=36;
        }
    }
    else if(jump_2==31){
        player.style.animation="playeranim_9 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==32){
        player.style.animation="playeranim_10 0.5s";
        sixs_audio.play();
        player.style.left= 70 + "px" ;
        player.style.bottom= 390 + "px" ;
        setTimeout("forth_audio.play()",250);
        setTimeout("gameover.style.display='block';",500);
        setTimeout("fifth_audio.play();",500);
        pused_audio();
    }
    else if(jump_2==33){
        player.style.animation="playeranim_9 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==34){
        player.style.animation="playeranim_9 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==35){
        if(coin_16==true){
            player.style.animation="playeranim_9 0.25s 2 alternate";
            forth_audio.play();
            setTimeout("coin_6.style.display='none'",250);
            s+=50;
            score.innerHTML=s;
            coin_16=false;
        }
        else if(coin_16==false){
            player.style.animation="playeranim_9 0.25s 2 alternate";
            third_audio.play();
        }
    }
    else if(jump_2==36){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==37){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==38){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==39){
        if(coin_17==true){
            player.style.animation="playeranim_13 0.25s 2 alternate";
            forth_audio.play();
            setTimeout("coin_7.style.display='none'",250);
            s+=50;
            score.innerHTML=s;
            coin_17=false;
        }
        else if(coin_17==false){
            player.style.animation="playeranim_13 0.25s 2 alternate";
            third_audio.play();
        }
    }
    else if(jump_2==40){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==41){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==42){
        if(coin_18==true){
            player.style.animation="playeranim_13 0.25s 2 alternate";
            forth_audio.play();
            setTimeout("coin_8.style.display='none'",250);
            s+=50;
            score.innerHTML=s;
            coin_18=false;
        }
        else if(coin_18==false){
            player.style.animation="playeranim_13 0.25s 2 alternate";
            third_audio.play();
        }
    }
    else if(jump_2==43){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==44){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==45){
        player.style.animation="playeranim_14 0.5s";
        sixs_audio.play();
        player.style.left= 740 + "px" ;
        player.style.bottom= 590 + "px" ;
        setTimeout("forth_audio.play()",250);
        setTimeout("gameover.style.display='block';",500);
        setTimeout("fifth_audio.play();",500);
        pused_audio();
    }
    else if(jump_2==46){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==47){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==48){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==49){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==50){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==51){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==52){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    else if(jump_2==53){
        player.style.animation="playeranim_13 0.25s 2 alternate";
        third_audio.play();
    }
    
    else{
        player.style.animation="playeranim_1 0.25s 2 alternate";
        third_audio.play();
    }
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