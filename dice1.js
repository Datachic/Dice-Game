var x, y, randomNum, randomNum2;

var Cube1 = document.querySelectorAll(".cubeFace");
var Cube2 = document.querySelectorAll(".cubeFace2");
var Scene = document.querySelectorAll(".scene");

var roll = document.getElementById("Roll");
TweenMax.set(Scene, {perspective:-1});

var startRoll = function(){
var r1 = new TimelineMax({onComplete:rollDice1});
r1.to(Cube1, .1, {rotationY:0, rotationX:0});
r1.to(Cube1, 3, {rotationY:1800, rotationX:1800});
r1.to(Scene, 3, {scale:.2},"-.1");
r1.timeScale(4);
r1.restart();

var r2 = new TimelineMax({onComplete:rollDice2});
r2.to(Cube2, .1, {rotationY:0, rotationX:0});
r2.to(Cube2, 3, {rotationY:1800, rotationX:1800});
r2.to(Scene, 3, {scale:.2},"-.1");
r2.timeScale(4);
r2.restart();

}

var rollDice1= function(){
randomNum = (Math.floor(Math.random() * 6))+1;
//between 0 and 5
 if(randomNum === 1){
   TweenMax.to(Cube1,.2, {rotationY:0, rotationX:0},"-1");
   TweenMax.to(Scene, .2, {scale:1}, "-1");
 }
if(randomNum === 2){
   TweenMax.to(Cube1,.2,{rotationX:-90, scale:1},"-1");
   TweenMax.to(Scene, .2, {scale:1}, "-1");
 }
if(randomNum === 3){
   TweenMax.to(Cube1,.2,{rotationY:90, scale:1},"-1");
   TweenMax.to(Scene, .2, {scale:1}, "-1");
 }
if(randomNum === 4){
   TweenMax.to(Cube1,.2,{rotationY:-90, scale:1},"-1");
   TweenMax.to(Scene, .2, {scale:1}, "-1");
 }
if(randomNum === 5){
   TweenMax.to(Cube1,.2,{rotationX:90, scale:1},"-1");
   TweenMax.to(Scene, .2, {scale:1}, "-1");
 }
if(randomNum === 6){
   TweenMax.to(Cube1,.2,{rotationY:180, scale:1},"-1");
   TweenMax.to(Scene, .2, {scale:1}, "-1");
 }

 console.log(randomNum)

}

var rollDice2 = function(){
randomNum2 = (Math.floor(Math.random() * 6))+1;
//between 0 and 5
 if(randomNum2 === 1){
   TweenMax.to(Cube2,.2, {rotationY:0, rotationX:0},"-1");
   TweenMax.to(Scene, .2, {scale:1}, "-1");
 }
 if(randomNum2 === 2){
   TweenMax.to(Cube2,.2,{rotationX:-90, scale:1},"-1");
   TweenMax.to(Scene, .2, {scale:1}, "-1");
 }
 if(randomNum2 === 3){
   TweenMax.to(Cube2,.2,{rotationY:90, scale:1},"-1");
   TweenMax.to(Scene, .2, {scale:1}, "-1");
 }
 if(randomNum2 === 4){
   TweenMax.to(Cube2,.2,{rotationY:-90, scale:1},"-1");
   TweenMax.to(Scene, .2, {scale:1}, "-1");
 }
 if(randomNum2 === 5){
   TweenMax.to(Cube2,.2,{rotationX:90, scale:1},"-1");
   TweenMax.to(Scene, .2, {scale:1}, "-1");
 }
 if(randomNum2 === 6){
   TweenMax.to(Cube2,.2,{rotationY:180, scale:1},"-1");
   TweenMax.to(Scene, .2, {scale:1}, "-1");
 }
console.log(randomNum2)


if ( randomNum>  randomNum2){
   document.querySelector("h1").innerHTML = "🚩‍Player 1 Wins";
 }
 if (randomNum === randomNum2){
  document.querySelector("h1").innerHTML = "Draw!!!💫";
 }
 if ( randomNum < randomNum2){
   document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
 }

}


Roll.onclick = startRoll;
