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

      div.innerHTML=`
       
            <img src="${countries.flags.png}" alt="" >
        
         <div class="flex flex-col mb-2">
            <h1 class="font-bold text-lg mb-2">Country:</h1>
            <p>Capital:</p>
            <p>Region</p>
            <p>Population</p>


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