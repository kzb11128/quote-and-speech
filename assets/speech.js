//how to get the text read
//responsiveVoice.speak(document.getElementById('insert-id-here').textContent);
//cancel the speech *add to a btn
//responsiveVoice.cancel();
//change voices
//var voicelist = responsiveVoice.getVoices();
//console.log(voicelist)
//pause and resume
//responsiveVoice.pause();
//responsiveVoice.resume();

var textInput = document.querySelector('#textInput');
var buttons = document.querySelector('#buttons');
var dropDown = document.querySelector('#dropDown');
var playBtn = document.querySelector('#play');
var userinput = document.querySelector('#userInput');
var stopBtn = document.querySelector('#stopSpeech');

//playBtn.addEventListener('click', speeching());

stopBtn.addEventListener('click', function() {
    responsiveVoice.cancel();
})



userinput.addEventListener('click', function(event) {
    event.preventDefault();

    var voice = dropDown.value;
    console.log(voice);
    
})


playBtn.addEventListener('click', function() {
    var voice = dropDown.value;
    console.log(voice);
    if (textInput.value === ''){
        responsiveVoice.speak(textInput.placeholder, voice);
    } else {
        responsiveVoice.speak(textInput.value, voice);
    }
});




