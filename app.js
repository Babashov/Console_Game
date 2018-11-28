var goodGuy = 'Good Man',
    badGuy = 'Bad Man',
    goodGuyHealth = 100,
    badGuyHeadlth = 100,
    randomNumber,
    defaultIntervalTime = 1000,
    simpleGame = {};


// Attacking Each Other
simpleGame.attack = ()=>{
  if(randomNumber == 1)
  {
    badGuyHeadlth -= 10;
    console.log(`Good Guy Attacked to Bad Guy and the health of bad guy is: ${badGuyHeadlth}`); 
  }
  if(randomNumber == 0)
  {
    goodGuyHealth -= 10;
    console.log(`Bad Guy Attacked to Good Guy and the health of good guy is: ${goodGuyHealth}`);
  }


}

// Select Winner
simpleGame.getWinner = ()=>{

  if(goodGuyHealth == 0)
  {
    console.log('Bad Guy is Winner and health is ' + badGuyHeadlth);
    
    clearInterval(gameInterval,1000);

  }
  if(badGuyHeadlth == 0)
  {
    
    console.log('Good Guy is Winner and health is ' + goodGuyHealth);
    
    clearInterval(gameInterval,1000);
  }

}


// Initializing Game
simpleGame.init = ()=>{ 
  randomNumber = Math.round(Math.random());
  simpleGame.attack();
  simpleGame.getWinner();
}



// Game Interval
var gameInterval = setInterval(()=>{
  simpleGame.init();
},defaultIntervalTime);
