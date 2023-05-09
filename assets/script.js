//how to get the text read
responsiveVoice.speak(document.getElementById('insert-id-here').textContent);

//cancel the speech *add to a btn
responsiveVoice.cancel();

//change voices
var voicelist = responsiveVoice.getVoices();

//pause and resume
responsiveVoice.pause();
responsiveVoice.resume();

//quote of the day
const url = 'https://quotel-quotes.p.rapidapi.com/quotes/random';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '48f5798bd1mshc87c9f81137df26p13b2e8jsn92f7d104c439',
		'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
	},
	body: {}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}