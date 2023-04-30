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
      div.innerHTML = `
       <div id="card" class="max-w-sm rounded overflow-hidden shadow-2xl ">       
        <img src="${countries.flags.png}" alt="" class="w-full  ">        
         <div class="px-5 py-4">
            <h1 class="font-bold text-lg mb-2">Country:${countries.name.common}</h1>

            <p>Capital:${countries.capital}</p>
            <p>Population:${countries.population}</p>
            <p>region:${countries.region}</p>
          </div>

      `

      const card = document.getElementById('card-container');
      card.appendChild(div);


   });

   
   
}















// router

switch(global.path) {
   case '/index.html':
      displayall();
      
}