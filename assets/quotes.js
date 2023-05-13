

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

// // Retrieve the saved quotes from localStorage


let counter = 0;


// var savedQuotes = localStorage.getItem('mySavedQuotes');
let savedQuotes = [];
if (localStorage.getItem('mySavedQuotes')){

    // GETS FROM LOCAL STORAGE
    savedQuotes = savedQuotes.concat(JSON.parse(localStorage.getItem('mySavedQuotes')));
}


if (savedQuotes !== undefined ) {
    for (let i = 0; i < savedQuotes.length; i++){
        console.log('add quote ')
        console.log(savedQuotes[i])

        appendQuoteList(savedQuotes[i]);
        
    }
    // savedQuotesList.innerHTML = savedQuotes;
}





// creates and adds quote element to quote list
function appendQuoteList(quote){

    let quoteList = document.createElement('li');
    let copyBtn = document.createElement('button');
    let copyImg = document.createElement('i');
    let delBtn = document.createElement('button');
    let delImg = document.createElement('i');

    // Copy button for quotes
    copyImg.setAttribute('class', 'fas fa-copy');
    copyBtn.setAttribute('class', 'btns');
    copyBtn.appendChild(copyImg);

    // Delete button for quotes
    delImg.setAttribute('class', 'fas fa-trash');
    delBtn.setAttribute('class', 'btns m-2');
    delBtn.appendChild(delImg);

    // set the quote as the text content of the new li element and adds buttons
    quoteList.textContent = quote; 
    quoteList.appendChild(copyBtn);
    quoteList.appendChild(delBtn);

    // append the new li element to the saved quotes list    
    savedQuotesList.appendChild(quoteList); 


    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(quoteList.textContent);

        console.log('copied quote')
      });

    delBtn.addEventListener('click', (event) => {
        console.log('delete quote');
        console.log(event.target.parentNode.parentNode.remove())
        // remove from savedQuotes 
        // get values from li
        savedQuotes = [];
        savedQuotesList.childNodes.forEach(e => savedQuotes.concat([e.textContent]));
        // SETS TO LOCAL STORAGE
        localStorage.setItem('mySavedQuotes', JSON.stringify(savedQuotes));

    });


}




// ADDS QUOTE TO LIST

saveQuoteBtn.addEventListener('click', function(){
    var quote = textareaEL.getAttribute('placeholder');
    appendQuoteList(quote);
    //append to local storage
    savedQuotes = savedQuotes.concat([quote]);

    // SETS TO LOCAL STORAGE
    localStorage.setItem('mySavedQuotes', JSON.stringify(savedQuotes));
});




