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

var voice = dropDown.value;

userinput.addEventListener('click', function(event) {
    event.preventDefault();

    if(dropDown.selectedIndex == 1) {
        voice = 'US English Male'
    } else if(dropDown.selectedIndex == 2) {
        voice = 'UK English Female'
    } else if(dropDown.selectedIndex == 3) {
        voice = 'UK English Male'
    } else if(dropDown.selectedIndex == 4) {
        voice = 'French Female'
    } else if(dropDown.selectedIndex == 5) {
        voice = 'Russian Male'
    } else if(dropDown.selectedIndex == 6) {
        voice = 'Spanish Female'
    } else if(dropDown.selectedIndex == 0) {
        voice = 'US English Female'
    }

    alert(dropDown.selectedOptions[dropDown.selectedIndex].value);
})


playBtn.addEventListener('click', function() {
    if (textInput.value === ''){
        responsiveVoice.speak(textInput.placeholder, voice);
    } else {
        responsiveVoice.speak(textInput.value, voice);
    }
});



// Initialize tooltip
tippy('#play', {
    content: 'Click to play the sound',
  });

tippy('#stopSpeech', {
    content: 'Stop',
  });

tippy('#dropDown', {
    content: 'Pick a voice',
  }); 
  
tippy('#userInput', {
    content: 'Confirm the voice option',
  });
tippy('#saveQuote', {
    content: 'Save the quote if you like it',
  }); 