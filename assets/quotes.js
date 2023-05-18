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



// creates and adds quote element to quote list
function appendQuoteList(quote){


  let savedQuotesList = document.querySelector("#savedQuotes-container");
  let quoteList = document.createElement('div');
  let copyBtn = document.createElement('button');
  let copyImg = document.createElement('i');
  let delBtn = document.createElement('button');
  let delImg = document.createElement('i');

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
  savedQuotesList.appendChild(quoteList);





  copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(quoteList.textContent);


      console.log('copied quote')
    });




  // WHEN I HIT DELETE THE ARRAY IN LOCAL STORAGE BECOMES A NUMBER
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







function main(){
  // Save quote functionality
  let quote = textareaEl.getAttribute('placeholder');
  let saveQuoteBtn = document.querySelector("#saveQuote");

  // Retrieve the saved quotes from localStorage

  let savedQuotes = [];
  if (localStorage.getItem('mySavedQuotes')){
     // GETS FROM LOCAL STORAGE
     savedQuotes = JSON.parse(localStorage.getItem('mySavedQuotes'));
  }
  
  
  // Adds each quote in storage to page using appendQuoteList()
  if (savedQuotes !== undefined) {
     for (let i = 0; i < savedQuotes.length; i++){
         appendQuoteList(savedQuotes[i]);
     }
  }
  
// ADDS QUOTE TO LIST
  saveQuoteBtn.addEventListener('click', function(){
    appendQuoteList(quote);
    //append to local storage
    console.log(savedQuotes)
    savedQuotes.push(quote);

    // SETS LOCAL STORAGE
    localStorage.setItem('mySavedQuotes', JSON.stringify(savedQuotes));

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
