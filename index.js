// alert ("Hello world");

const randomNumber1 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);

if(randomNumber1 == 1){
  let image1 = document.getElementById("image1");
  image1.setAttribute('src', 'dice1.png');
}

else if(randomNumber1 == 2){
  let image1 = document.getElementById("image1");
  image1.setAttribute('src', 'dice2.png');
}

else if(randomNumber1 == 3){
  let image1 = document.getElementById("image1");
  image1.setAttribute('src', 'dice3.png');
}

else if(randomNumber1 == 4){
  let image1 = document.getElementById("image1");
  image1.setAttribute('src', 'dice4.png');
}

else if(randomNumber1 == 5){
  let image1 = document.getElementById("image1");
  image1.setAttribute('src', 'dice5.png');
}

else{
  let image1 = document.getElementById("image1");
  image1.setAttribute('src', 'dice6.png');
}


const randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber2);

if(randomNumber2 == 1){
  let image1 = document.getElementById("image2");
  image1.setAttribute('src', 'dice1.png');
}

else if(randomNumber2 == 2){
  let image1 = document.getElementById("image2");
  image1.setAttribute('src', 'dice2.png');
}

else if(randomNumber2 == 3){
  let image1 = document.getElementById("image2");
  image1.setAttribute('src', 'dice3.png');
}

else if(randomNumber2 == 4){
  let image1 = document.getElementById("image2");
  image1.setAttribute('src', 'dice4.png');
}

else if(randomNumber2 == 5){
  let image1 = document.getElementById("image2");
  image1.setAttribute('src', 'dice5.png');
}

else{
  let image1 = document.getElementById("image2");
  image1.setAttribute('src', 'dice6.png');
}

// heading

if (randomNumber1 > randomNumber2){
 let head = document.getElementById("head").innerHTML = "Player 1 Wins 🎉";
}

else if(randomNumber1 < randomNumber2){
 let head = document.getElementById("head").innerHTML = "Player 2 Wins 🎉";
}

else{
  let head = document.getElementById("head").innerHTML = "It a Draw.. 🎈";
}
