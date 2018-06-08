
var i = 0, pos = 0, wins = 0, losses = 0, wordCount = 0, keyIn = "";
var tWord = "", displayWord = "", guess = "", gBurg = "", temp = "";
var remaining = 0, already = []; 

newFunction();
setInputFocus();

$(document).ready(function() {
//    var i = 0, pos = 0, wins = 0, losses = 0, wordCount = 0, keyIn = "";
//    var tWord = "", displayWord = "", guess = "", gBurg = "", temp = "";
//    var remaining = 0, already = []; 
    gBurg = "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth."
    gBurg = gBurg.split(" ");
    wordCount = gBurg.length;
    console.log("Total number of words in Gettysburg Address: " + wordCount);
    
    while (tWord.length < 4) {
      pos = Math.floor(Math.random() * wordCount + 1);   
      tWord = gBurg[pos];
    }
    if (tWord.endsWith(",") || tWord.endsWith(".")) {
      tWord = tWord.substr(0, tWord.length -1);
    }
    tWord = tWord.toLowerCase();
    remaining = tWord.length
    console.log("Word selected at random: " + tWord);
    console.log("First occurance of '" + tWord + "' in the Gettysburg Address: " + pos);
    for (i = 0; i < tWord.length; i++) {
      displayWord = displayWord + "_ ";
    }
    console.log("displayWord = " + displayWord + "with a length of " + (displayWord.length / 2));
  
    setInputFocus();
    
    function captureKey(x) {
        var x = document.getElementById("show-guesses");
        already.push(x);
        for (var i = 0; already.length; i++) {
            console.log("Already guessed:" + already[i]);
        };
    }
});


function setInputFocus() {
   document.getElementById("show-guesses").focus();
        // $("#show-guesses").focus();
}

function newFunction() {
    $(this).on("keydown", function () {
        var h1 = document.getElementById('start');
        h1.style.visibility = 'hidden';
        console.log("You are here.");
    });
}

