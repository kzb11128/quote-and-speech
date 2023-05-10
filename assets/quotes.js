// Selects text area element
const textAreaEl = document.getElementById('textInput');

// api key
let apiKey = 'uKUGstC3MMp19buzHc8PrltP0BIiwoF4hVw0beNh';

// uses data from api call
function useData(data){
 console.log(data);
 let text = data[0].quote;
 textAreaEl.placeholder = text;
}
// gets data from api
$.ajax({
   method: 'GET',
   url: 'https://api.api-ninjas.com/v1/quotes?category',
   headers: { 'X-Api-Key': apiKey},
   contentType: 'application/json',
   success: function(result) {
   useData(result)
   },
   error: function ajaxError(jqXHR) {
       console.error('Error: ', jqXHR.responseText);
   }
});

//copy function
btnPlaceholder.addEventListener("click", () => {
	navigator.clipboard.writeText(placeHolder.value)
  });





// Save quote functionality
var saveQuoteBtn = document.querySelector("#saveQuote");
var savedQuotesSection = document.querySelector("#savedQuotes-container");
var textarea = document.querySelector("textarea");
var savedQuotesList = document.querySelector("#savedQuotes")

saveQuoteBtn.addEventListener('click', function(){
	
	var quote = textarea.getAttribute('placeholder');
	var quoteList = document.createElement('li');
	quoteList.textContent = quote;
	savedQuotesList.appendChild(quoteList);
	localStorage.setItem('mySavedQuote', quoteList.textContent);
});

var savedQuotes = localStorage.getItem('mySavedQuote');
if(savedQuotes) {
	savedQuotesSection.innerHTML = savedQuotes;
}