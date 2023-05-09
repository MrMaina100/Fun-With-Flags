const searchInput = document.querySelector('#search-bar');

const global = {

   path:window.location.pathname,
}


//funtion to fetch the data

async function fetchApiData(endpoint){

   const API_URL = 'https://restcountries.com/v3.1/';
   const res = await fetch(`${API_URL}${endpoint}`);
   const data = await res.json(); 
   console.log(data);

   
   return data;
   
}

// function to display all the flags when the page loads.

async function displayall(){
   const results = await fetchApiData('all');
   console.log(results);

   results.forEach((countries)=>{
      const div = document.createElement('div');
      div.classList.add('mydiv')

      div.innerHTML=`
       
            <img src="${countries.flags.png}" alt="" >
        
         <div class="flex flex-col mb-2">
            <h1 class="font-bold text-lg mb-2" id="countryName">Country:${countries.name.common}</h1>
            <p>Capital:${countries.capital}</p>
            <p>Region:${countries.region}</p>
            <p>Population:  ${ numberWithCommas(countries.population)} </p>


         </div>

       
      `
      

      const card = document.getElementById('card-container');
      card.appendChild(div);


   });

   
   
}







// function for the search

function searchFlags(e){

   const text = e.target.value.toLocaleLowerCase();
   // console.log(text);
   const ctndiv = document.querySelectorAll('.mydiv')
   // console.log(ctndiv);
   ctndiv.forEach((items)=>{
      // console.log(items)
      const nameitem = items.querySelector('h1')
      const newItem = nameitem.textContent.toLocaleLowerCase().replace('country:', '');
      // console.log(newItem);

      if(newItem.indexOf(text) != -1){
         items.style.display = 'block'
      }else{

         items.style.display = 'none'


      }
      

   })
   

}
searchInput.addEventListener('input', searchFlags);





// function to add commas to a number.
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}





// router

switch(global.path) {
   case '/index.html':
      displayall();
      
}