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

//copy function
btnPlaceholder.addEventListener("click", () => {
	navigator.clipboard.writeText(placeHolder.value)
  });