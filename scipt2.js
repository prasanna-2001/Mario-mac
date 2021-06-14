score = 0;
cross=true;

//audio files
audiojump = new Audio('jump.mp3');
audiodie = new Audio('die.mp3');
audiobg = new Audio('fullmusic.mp3');
setTimeout(() => {
    audiobg.play();
}, 1000);

document.onkeydown = function(e){
    // console.log("keycode is : ", a.keyCode);
    if(e.keyCode == 38){
        hero = document.querySelector('.hero');
        hero.classList.add('animateHero');
        setTimeout(()=>{
            hero.classList.remove('animateHero');
        },700);
        audiojump.play();
        
        
    }
    if(e.keyCode == 39){
        hero = document.querySelector('.hero');
        herox = parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
        hero.style.left = herox + 90 + 'px';
    }
    if(e.keyCode == 37){
        hero = document.querySelector('.hero');
        herox = parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
        hero.style.left = herox - 40 + 'px';
    }
}

setInterval(() => {
    hero = document.querySelector('.hero');
    gameover = document.querySelector('.gameover');
    villan = document.querySelector('.villan');
    redirect = document.querySelector('.redirect');

    /*to convert into integer use parseint*/
    hx = parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(hero,null).getPropertyValue('top'));
    vx = parseInt(window.getComputedStyle(villan,null).getPropertyValue('left'));
    vy = parseInt(window.getComputedStyle(villan,null).getPropertyValue('top'));

    offsetx = Math.abs(hx-vx);
    offsety = Math.abs(hy-vy);
    // console.log(offsetx,offsety);
    if(offsetx< 20 && offsety< 23){
        gameover.style.visibility = 'visible';
        villan.classList.remove('animateVillan');
         
        //to add deadth animation
        hero = document.querySelector('.hero');
        hero.classList.add('deathHero');
        redirect.style.visibility = 'visible';

        audiodie.play();
        setTimeout(() => {
            audiobg.pause();
        }, 1000);



    }
    else if(offsetx<60 && cross){
        score=score+1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            animationDuration = parseFloat(window.getComputedStyle(villan,null).getPropertyValue('animation-duration'));
            newDuration = animationDuration - 0.05;
            villan.style.animationDuration = newDuration + 's';
            console.log("nwe dur" , newDuration);
        }, 500);

    }

}, 10);

function updateScore(score){
    scorecont.innerHTML = "Your Score " + score;
}
