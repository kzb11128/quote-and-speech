//how to get the text read
responsiveVoice.speak(document.getElementById('insert-id-here').textContent);


//cancel the speech *add to a btn
responsiveVoice.cancel();

//change voices
var voicelist = responsiveVoice.getVoices();
console.log(voicelist)

//pause and resume
responsiveVoice.pause();
responsiveVoice.resume();

var textInput = document.querySelector('#textInput');
var buttons = document.querySelector('#buttons');
var dropDown = document.querySelector('#dropDown');
//option list
var option1 = document.querySelector('#option1');
var option2 = document.querySelector('#option2');
var option3 = document.querySelector('#option3');
var option4 = document.querySelector('#option4');
var option5 = document.querySelector('#option5');
var option6 = document.querySelector('#option6');
var option7 = document.querySelector('#option7');

