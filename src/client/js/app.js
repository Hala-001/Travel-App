// GeoNames_API
const baseURL = 'http://api.geonames.org/searchJSON?q='
const apiKey = '&maxRows=10&username=halaahmad';
// GET Request.
document.getElementById('button').addEventListener('click', performAction);
function performAction(e) {
    const location = document.getElementById('city').value;
    
    getWeather(baseURL, location, apiKey)
  
      .then(function (data) {
        // console.log(data)
        // console.log(data.geonames)
        // console.log(data.geonames[0])
        // console.log(data.geonames[0].lng)
        // console.log("lat= "+data.geonames[0].lat)
        // console.log("countryName= "+data.geonames[0].countryName)
        postData('/sendData', { lng: data.geonames[0].lng, lat: data.geonames[0].lat, countryName: data.geonames[0].countryName})
        
        //return The date it was entered by the user
        const expDate = new Date(document.getElementById('start').value);
        const expDateDay=expDate.getDate();
        const expDateMonth=expDate.getMonth();
        const expDateYear=expDate.getFullYear();
        console.log(expDate)
        console.log(expDateDay)
        console.log(expDateMonth)
        console.log(expDateYear)

        //return The date 
        // const tempDate = new Date();
        // const newDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
        // console.log(tempDate)
        const newDateDate=new Date().getDate();
        const newDateMonth=new Date().getMonth();
        const newDateYear=new Date().getFullYear();
        
        console.log(newDateDate)
        console.log(newDateMonth)
        console.log(newDateYear)
        const img = document.createElement('img');
        img.setAttribute('id', img);

        if ((expDateYear == newDateYear) && (expDateMonth == newDateMonth)){

          /////////
          const location = document.getElementById('city').value; 
          const PixabayURL='https://pixabay.com/api/?key=19374862-2ac0a29a5c9de2a63e36d3af1&q='
          const pixabayapi='&image_type=photo&pretty=true'

          ////////
          //console.log("same year and month");
          const sameWeek = newDateDate+6
          console.log("newDateDate "+sameWeek)
          if ((expDateDay <= sameWeek) && (expDateDay >= newDateDate)){
            console.log("Same day and month and year")
            //const temp = document.querySelector(".temperature")
            //img.parentNode.removeChild(img);
            const lng= data.geonames[0].lng;
            const lat=data.geonames[0].lat;
            const country=data.geonames[0].countryName;
            const apiweather='https://api.weatherbit.io/v2.0/current?lat='
            const and='&lon='
            const apiKeyweather='&key=91570401933243b7876af1b59ef978b4'
            fetch(apiweather+lat+and+lng+apiKeyweather)
           .then(response => response.json())
           //.then(data => console.log( 'temperature:  '+data.data[0].temp,'description :'+data.data[0].weather.description))
           .then(function(response){             
            document.querySelector(".temperature").innerHTML = response.data[0].temp;
            document.querySelector(".description").innerHTML = response.data[0].weather.description;


           })
          } else if (expDateDay > sameWeek) {
            console.log("Same month and year but after 7 days");
            //img.parentNode.removeChild(img);
            const lng= data.geonames[0].lng;
            const lat=data.geonames[0].lat;
            const country=data.geonames[0].countryName;
            const apiweather='https://api.weatherbit.io/v2.0/forecast/daily?lat='
            const and='&lon='
            const apiKeyweather='&key=91570401933243b7876af1b59ef978b4'
            fetch(apiweather+lat+and+lng+apiKeyweather)
            .then(response => response.json())
            //.then(data => console.log('washington:  '+data.data[0].weather.description))
            .then(function(response){
              document.querySelector(".temperature").innerHTML = "";
              document.querySelector(".description").innerHTML = response.data[0].weather.description;
            })
          } else {
            console.log("Same month and year but before today")
            //img.parentNode.removeChild(img);
            document.querySelector(".temperature").innerHTML = "";
            document.querySelector(".description").innerHTML = "Same month and year but before today";
          }
          fetch(PixabayURL+location+pixabayapi)
          .then(response => response.json())
          //.then(data => console.log(data.hits[0].largeImageURL));
          .then(function(response){

            
            img.src = response.hits[0].largeImageURL; 
            document.querySelector('.photo').appendChild(img);
          })
        }else{
          console.log("defrent year and month");
          document.querySelector(".temperature").innerHTML = "";
          document.querySelector(".description").innerHTML = "defrent year and month";
        }
      
        





        //Weatherbit 
        //Current Weather API


      //   const lng= data.geonames[0].lng;
      //   const lat=data.geonames[0].lat;
      //   const country=data.geonames[0].countryName;
      //   const apiweather='https://api.weatherbit.io/v2.0/current?lat='
      //   const and='&lon='
      //   const apiKeyweather='&key=91570401933243b7876af1b59ef978b4'
      //   fetch(apiweather+lat+and+lng+apiKeyweather)
      //  .then(response => response.json())
      //  .then(data => console.log( 'temperature:  '+data.data[0].temp,'description :'+data.data[0].weather.description));


        //Weatherbit 
        //Weather Forecast API
      //   const lng= data.geonames[0].lng;
      //   const lat=data.geonames[0].lat;
      //   const country=data.geonames[0].countryName;
      //   const apiweather='https://api.weatherbit.io/v2.0/forecast/daily?lat='
      //   const and='&lon='
      //   const apiKeyweather='&key=91570401933243b7876af1b59ef978b4'
      //   fetch(apiweather+lat+and+lng+apiKeyweather)
      //  .then(response => response.json())
      //  .then(data => console.log('washington:  '+data.data[0].weather.description));

      });
  };
  const getWeather = async (url) => {
    const location = document.getElementById('city').value;
    const res = await fetch(baseURL + location + apiKey)
    //const res = await fetch(url)
    try {
      const data = await res.json();
      //console.log(data)
      //console.log(data.main['temp'])
      return data;
    } catch (error) {
      console.log("error", error);
      // appropriately handle the error
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
  
 
  export { performAction }








  
  //Pixabay API
  // document.getElementById('button').addEventListener('click',Pixabay);
  // function Pixabay(e) {
  // const location = document.getElementById('city').value; 
  // const PixabayURL='https://pixabay.com/api/?key=19374862-2ac0a29a5c9de2a63e36d3af1&q='
  // const pixabayapi='&image_type=photo&pretty=true'

  //  fetch(PixabayURL+location+pixabayapi)
  // .then(response => response.json())
  // .then(data => console.log(data.hits[0].largeImageURL));}