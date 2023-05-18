var textareaEl = document.querySelector("textarea");


// GETS QUOTE FROM API AND PLACES IT IN THE TEXT AREA

async function getQuote(){
  let apiKey = 'uKUGstC3MMp19buzHc8PrltP0BIiwoF4hVw0beNh';
  let category = 'inspirational'

  const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=' + category,{
            method: 'GET',
            headers: {
              'X-Api-Key': apiKey,
              'Content-Type': 'application/json'
            }
          })
          
  if (!response.ok) {
    const message = 'An error has occured: ' + response.status;
    console.log('Error: ' + message);
  }

  const data = await response.json();
  return data;

}

async function runProgram() {
  try {
    const responseData = await getQuote();
    console.log('Program continues with fetched data: ', responseData);
    useData(responseData)
    main();
    
  } catch (error){
    console.error(error);
  }
}



function useData(data){
  let text = data[0].quote + '\n \n - ' + data[0].author;
  textareaEl.placeholder = text;
}

// RUNS GET QUOTE FUNCTION



function main(){
  // Save quote functionality
  var saveQuoteBtn = document.querySelector("#saveQuote");

  // var savedQuotesSection = document.querySelector("#savedQuotes-container");

  var savedQuotesList = document.querySelector("#savedQuotes-container")

  // Retrieve the saved quotes from localStorage
  var savedQuotes = localStorage.getItem('mySavedQuotes');
  if (savedQuotes) {
      savedQuotesList.innerHTML = savedQuotes;
  }

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

  // set the quote as the text content of the new div element
    quoteList.textContent = quote; 

  // append the new div element to the saved quotes section
    savedQuotesList.appendChild(quoteList); 

  // Save the updated saved quotes to localStorage
    localStorage.setItem('mySavedQuotes', savedQuotesList.innerHTML);

  });

  // Button to clear local storage and saved quotes section on the webpage
  var clearQuoteBtn = document.querySelector("#clearQuotes");

  clearQuoteBtn.addEventListener('click', function(){
    var quotesText = document.getElementById("savedQuotes-container");
    while (quotesText.hasChildNodes()) {
    quotesText.removeChild(quotesText.firstChild);
    }
    localStorage.clear();
  });

  var copyQuote = document.querySelector("#copyQuote");

  copyQuote.addEventListener('click', function() {
    textareaEl.value = textareaEl.placeholder;
    navigator.clipboard.writeText(textareaEl.value);
  });
}


runProgram();
