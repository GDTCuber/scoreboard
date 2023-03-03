let scoreHome=document.getElementById('score-home')
let scoreAway = document.getElementById('score-away')
let scoreH = 0;
let scoreA = 0;

function homeTeam3(){
    let home = scoreH +=3;
    
    scoreHome.textContent = home;
    
    
}    
function awayTeamFg(){
    let away = scoreA +=3;
    scoreAway.textContent=away;
    
}    

function homeTeamTd(){
    let home = scoreH +=6;
    
    scoreHome.textContent = home;
    
    
}    
function awayTeamTD(){
    let away = scoreA +=6;
    scoreAway.textContent= away;
    
}
function homeTeamExtraPoint(){
    let home = scoreH +=1;
    
    scoreHome.textContent = home;
} 
    
    
function awayTeamFgExtraPoint(){
    let away = scoreA +=1;
    scoreAway.textContent= away;
    
}



var sec         = 3600,
    countDiv    = document.getElementById("timer"),
    secpass,
    countDown   = setInterval(function () {
        'use strict';
        
        secpass();
    }, 1000);

function secpass() {
    'use strict';
    
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    
    if (remSec < 10) {
        
        remSec = '0' + remSec;
    
    }
    if (min < 10) {
        
        min = '0' + min;
    
    }
    countDiv.innerHTML = min + ":" + remSec;
    
    if (sec > 0) {
        
        sec = sec - 1;
        
    } else {
        
        clearInterval(countDown);
        
        countDiv.innerHTML = 'countdown done';
        
    }
}
