

// GETS QUOTE FROM API AND PLACES IT IN THE TEXT AREA

function getQuote(){
    // Selects text area element
  const textAreaEl = document.getElementById('textInput');

  // api key
  let apiKey = 'uKUGstC3MMp19buzHc8PrltP0BIiwoF4hVw0beNh';
  // uses data from api call
  function useData(data){
    let text = data[0].quote + '\n \n - ' + data[0].author;
    textAreaEl.placeholder = text;
  }
 // gets data from api
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category',
    headers: { 'X-Api-Key': apiKey},
    contentType: 'application/json',
    success: function(result) {
    useData(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
 });
}
// RUNS GET QUOTE FUNCTION
getQuote();


// Save quote functionality
var saveQuoteBtn = document.querySelector("#saveQuote");
var savedQuotesSection = document.querySelector("#savedQuotes-container");
var textareaEL = document.querySelector("textarea");
var savedQuotesList = document.querySelector("#savedQuotes")

// Retrieve the saved quotes from localStorage
var savedQuotes = localStorage.getItem('mySavedQuotes');
if (savedQuotes) {
    savedQuotesList.innerHTML = savedQuotes;
}

saveQuoteBtn.addEventListener('click', function(){

    var quote = textareaEL.getAttribute('placeholder');
    var quoteList = document.createElement('li');
    var copyBtn = document.createElement('button');
    var copyImg = document.createElement('i');

    copyImg.setAttribute('class', 'fas fa-copy')

    copyBtn.setAttribute('class', 'btns');

    copyBtn.appendChild(copyImg);

// set the quote as the text content of the new li element
    quoteList.textContent = quote; 
// append the new li element to the saved quotes list    
    savedQuotesList.appendChild(quoteList); 

    // Save the updated saved quotes list to localStorage
    localStorage.setItem('mySavedQuotes', savedQuotesList.innerHTML);

    quoteList.appendChild(copyBtn);

    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(quoteList.textContent);
      });
});
