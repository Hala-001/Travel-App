// GeoNames_API
try {
const baseURL = 'http://api.geonames.org/searchJSON?q='
const apiKey = '&maxRows=10&username=halaahmad';
// GET Request.
document.getElementById('button').addEventListener('click', performAction);
function performAction(e) {
    const location = document.getElementById('city').value;
    
    getWeather(baseURL, location, apiKey)
  
      .then(function (data) {
        
        postData('/sendData', { lng: data.geonames[0].lng, lat: data.geonames[0].lat, countryName: data.geonames[0].countryName})
        
       
        const expDate = new Date(document.getElementById('start').value);
        const expDateDay=expDate.getDate();
        const expDateMonth=expDate.getMonth();
        const expDateYear=expDate.getFullYear();
        console.log(expDate)
        console.log(expDateDay)
        console.log(expDateMonth)
        console.log(expDateYear)

        
        const newDateDate=new Date().getDate();
        const newDateMonth=new Date().getMonth();
        const newDateYear=new Date().getFullYear();
        
        console.log(newDateDate)
        console.log(newDateMonth)
        console.log(newDateYear)
        const img = document.createElement('img');
        img.setAttribute('id', img);
        // Weatherbit_API
        
        if ((expDateYear == newDateYear) && (expDateMonth == newDateMonth)){

          
          const location = document.getElementById('city').value; 
          //Pixabay API
          const PixabayURL='https://pixabay.com/api/?key=19374862-2ac0a29a5c9de2a63e36d3af1&q='
          const pixabayapi='&image_type=photo&pretty=true'

          
          //console.log("same year and month");
          const sameWeek = newDateDate+6
          console.log("newDateDate "+sameWeek)
        // If the trip is within a week,  get the current weather forecast
          if ((expDateDay <= sameWeek) && (expDateDay >= newDateDate)){
            console.log("Same day and month and year")
           
            const lng= data.geonames[0].lng;
            const lat=data.geonames[0].lat;
            const country=data.geonames[0].countryName;
            const apiweather='https://api.weatherbit.io/v2.0/current?lat='
            const and='&lon='
            const apiKeyweather='&key=91570401933243b7876af1b59ef978b4'
            fetch(apiweather+lat+and+lng+apiKeyweather)
           .then(response => response.json())
           
           .then(function(response){             
            document.querySelector(".temperature").innerHTML = response.data[0].temp;
            document.querySelector(".description").innerHTML = response.data[0].weather.description;


           })
          } else if (expDateDay > sameWeek) {
            //If the trip in the future , get a predicted forecast
            console.log("Same month and year but after 7 days");
            
            const lng= data.geonames[0].lng;
            const lat=data.geonames[0].lat;
            const country=data.geonames[0].countryName;
            const apiweather='https://api.weatherbit.io/v2.0/forecast/daily?lat='
            const and='&lon='
            const apiKeyweather='&key=91570401933243b7876af1b59ef978b4'
            fetch(apiweather+lat+and+lng+apiKeyweather)
            .then(response => response.json())
           
            .then(function(response){
              document.querySelector(".temperature").innerHTML = "low temp: "+ response.data[1].low_temp +" max temp: "+response.data[1].max_temp;
              document.querySelector(".description").innerHTML = response.data[0].weather.description;
            })
          } else {
            console.log("Same month and year but before today")

            document.querySelector(".temperature").innerHTML = "";
            document.querySelector(".description").innerHTML = "Same month and year but before today";
          }
          //Pixabay API
          fetch(PixabayURL+location+pixabayapi)
          .then(response => response.json())
          .then(function(response){

            
            img.src = response.hits[0].largeImageURL; 
            document.querySelector('.photo').appendChild(img);
          })
        }else{
          console.log("defrent year and month");
          document.querySelector(".temperature").innerHTML = "";
          document.querySelector(".description").innerHTML = "defrent year and month";
        }
      
     

      });
  };
  const getWeather = async (url) => {
    const location = document.getElementById('city').value;
    const res = await fetch(baseURL + location + apiKey)
    
    try {
      const data = await res.json();
      
      return data;
    } catch (error) {
      console.log("error", error);
     
    }
  }

  const postData = async (url = '', data = {}) => {
    //console.log(data);
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      // Body data type must match "Content-Type" header        
      body: JSON.stringify(data),
    });
  
    try {
      const newData = await response.json();
      //console.log(newData);
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  }
  

} catch (error) {
  console.log("error", error);
}
 
  // export { performAction }

