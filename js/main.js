var mybutton = document.getElementById("myButton");
function changeButtonBackground() {
   mybutton.style.backgroundColor = "blue";
}
function generatQuote() {
   var userName = [
      "--Oscar Wilde",
      "--Frank Sinatra",
      "--Frank Zappa",
      "--Marcus Tullius Cicero",
      "--Mae West",
      "--Mahatma Gandhi",
      "--Wayne Gretzy",
      "--Epictetus",
      "--Nelson Mandela",
      "--Elbert Hubbard"
   ];
   var text = [
      '"Be yourself; everyone else is already taken."',
      '"The best revenge is massive success."',
      '"So many books, so little time."',
      '"A room without books is like a body without a soul."',
      '"You only live once, but if you do it right, once is enough."',
      '"Be the change that you wish to see in the world."',
      '"You miss 100% of the shots you don\'t take."',
      '"It\'s not what happens to you, but how you react to it that matters."',
      '"Resentment is like drinking poison and waiting for your enemies to die."',
      '"Do not take life too seriously. You will not get out alive."'
   ];
   // Generate random number between 0 and the length of the array - 1
   var num = Math.floor(Math.random() * userName.length);
   // console.log(text[num]);
   // console.log(userName[num]);
   document.getElementById("quote").innerHTML = text[num];
   document.getElementById("author").innerHTML = userName[num];
}
