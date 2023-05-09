//how to get the text read
responsiveVoice.speak(document.getElementById('insert-id-here').textContent);


//cancel the speech *add to a btn
responsiveVoice.cancel();

//change voices
var voicelist = responsiveVoice.getVoices();

//pause and resume
responsiveVoice.pause();
responsiveVoice.resume();