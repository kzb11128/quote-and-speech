


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

<<<<<<< HEAD
=======

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
 
    // COPY BUTTON
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(quoteList.textContent);
 
        console.log('copied quote')
      });
 
    // DELETE BUTTON
    delBtn.addEventListener('click', (event) => {
        console.log('delete quote');
        event.target.parentNode.parentNode.remove()
       
        // Resets array and adds each quote left on page to the array
        let savedQuotes = [];
 
        savedQuotesList.childNodes.forEach(e => { 
            if (e.innerText !== undefined){
                savedQuotes.push(e.innerText)
            }});
           
        // SAVES TO LOCAL STORAGE
        localStorage.setItem('mySavedQuotes', JSON.stringify(savedQuotes));
 
    });
 
 }




>>>>>>> 22de1f9bf3ef6211d1d4eda32ed78a28eb31471d
// RUNS GET QUOTE FUNCTION
getQuote();


// Save quote functionality
var saveQuoteBtn = document.querySelector("#saveQuote");

// var savedQuotesSection = document.querySelector("#savedQuotes-container");
var textareaEL = document.querySelector("textarea");
var savedQuotesList = document.querySelector("#savedQuotes-container")


// // Retrieve the saved quotes from localStorage
let savedQuotes = [];
if (localStorage.getItem('mySavedQuotes')){
   // GETS FROM LOCAL STORAGE
   savedQuotes = JSON.parse(localStorage.getItem('mySavedQuotes'));
}

<<<<<<< HEAD
// Save quotes to the quotes section
saveQuoteBtn.addEventListener('click', function(){
var quote = textareaEL.getAttribute('placeholder');
var quoteList = document.createElement('div');
// Colors for background of quote containers
let quotesBgColors = ["bg-slate-50", "bg-slate-100", "bg-gray-50", "bg-gray-100", "bg-zinc-50", "bg-zinc-100", "bg-neutral-50", "bg-neutral-100", "bg-stone-50", "bg-stone-100",
                            "bg-red-50", "bg-red-100", "bg-orange-50", "bg-orange-100", "bg-amber-50", "bg-amber-100", "bg-yellow-50", "bg-yellow-100", "bg-lime-50", "bg-lime-100",
                            "bg-green-50", "bg-green-100", "bg-emerald-50", "bg-emerald-100", "bg-teal-50", "bg-teal-100", "bg-cyan-50", "bg-cyan-100", "bg-sky-50", "bg-sky-100",
                            "bg-blue-50", "bg-blue-100", "bg-indigo-50", "bg-indigo-100", "bg-violet-50", "bg-violet-100", "bg-purple-50", "bg-purple-100", "bg-fuchsia-50",
                            "bg-fuchsia-100", "bg-pink-50", "bg-pink-100", "bg-rose-50", "bg-rose-100"];

// Assign attributes to the quote containers
var newBgColor = quotesBgColors[Math.floor(Math.random()*44)];
let textBgColor = newBgColor + " max-h-64 w-fit text-sm 2xl:text-base text-gray-900 rounded-md shadow-md shadow-[#542745]/40 border border-gray-300 m-2.5 p-2.5 overflow-y-auto";
quoteList.setAttribute("class", textBgColor);

// Button attributes
var copyBtn = document.createElement('button');
var copyImg = document.createElement('i');
copyImg.setAttribute('class', 'fas fa-copy')
copyBtn.setAttribute('class', 'btns');
copyBtn.appendChild(copyImg);

// set the quote as the text content of the new div element
quoteList.textContent = quote; 

// append the new div element to the saved quotes section
savedQuotesList.appendChild(quoteList); 

// Save the updated saved quotes to localStorage
localStorage.setItem('mySavedQuotes', savedQuotesList.innerHTML);
quoteList.appendChild(copyBtn);
copyBtn.addEventListener("click", () => {
navigator.clipboard.writeText(quoteList.textContent);
});
});

// Button to clear local storage and saved quotes section on the webpage
var clearQuoteBtn = document.querySelector("#clearQuotes");
clearQuoteBtn.addEventListener('click', function(){
var quotesText = document.getElementById("savedQuotes-container");
while (quotesText.hasChildNodes()) {
quotesText.removeChild(quotesText.firstChild);
}
localStorage.clear();
=======
// Adds each quote in storage to page using appendQuoteList()
if (savedQuotes !== undefined) {
   for (let i = 0; i < savedQuotes.length; i++){
       console.log('add quote ')
       console.log(savedQuotes[i])
       appendQuoteList(savedQuotes[i]);
   }
}



// ADDS QUOTE TO LIST
saveQuoteBtn.addEventListener('click', function(){
   var quote = textareaEL.getAttribute('placeholder');
   appendQuoteList(quote);
   //append to local storage
   console.log(savedQuotes)
   savedQuotes.push(quote);


   // SETS LOCAL STORAGE
   localStorage.setItem('mySavedQuotes', JSON.stringify(savedQuotes));
>>>>>>> 22de1f9bf3ef6211d1d4eda32ed78a28eb31471d
});










