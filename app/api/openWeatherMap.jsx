var axios = require('axios');

// the open weather map api needs to be entered here along with you api key
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=5044a064047b2e4eda625e7fac363785';

// 5044a064047b2e4eda625e7fac363785

module.exports={
  getWeather:function(location){
    var encodedLocation = encodeURIComponent (location);/*this is going to properlly encode it to the browser*/
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`/*every is executed as a regular jav script expression*/

    return axios.get(requestUrl).then(function (res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }  else {
        return {
              temp: res.data.main.temp,
              humidity: res.data.main.humidity,
              description: res.data.weather[0].description,
              clouds: res.data.clouds.all,
              icon: res.data.weather[0].icon
            };
      }
    },function (res){
      throw new Error(res.data.message);
    });
  },
  //
  // getHumidity:function(location){
  //   var encodedLocation = encodeURIComponent (location);/*this is going to properlly encode it to the browser*/
  //   var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`/*every is executed as a regular jav script expression*/
  //
  //   return axios.get(requestUrl).then(function (ress){
  //     if(ress.data.cod && ress.data.message){
  //       throw new Error(ress.data.message);
  //     }  else {
  //       return  ress.data.main.humidity
  //     }
  //   },function (ress){
  //     throw new Error(ress.data.message);
  //   });
  // },
  // getDescription:function(location){
  //   var encodedLocation = encodeURIComponent (location);/*this is going to properlly encode it to the browser*/
  //   var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`/*every is executed as a regular jav script expression*/
  //
  //   return axios.get(requestUrl).then(function (des){
  //     if(des.data.cod && des.data.message){
  //       throw new Error(des.data.message);
  //     }  else {
  //       return  des.data.weather[0].description
  //     }
  //   },function (des){
  //     throw new Error(des.data.message);
  //   });
  // },
  // getClouds:function(location){
  //   var encodedLocation = encodeURIComponent (location);/*this is going to properlly encode it to the browser*/
  //   var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`/*every is executed as a regular jav script expression*/
  //
  //   return axios.get(requestUrl).then(function (clo){
  //     if(clo.data.cod && clo.data.message){
  //       throw new Error(clo.data.message);
  //     }  else {
  //       return  clo.data.clouds.all
  //     }
  //   },function (clo){
  //     throw new Error(clo.data.message);
  //   });
  // },
  // getIcon:function(location){
  //   var encodedLocation = encodeURIComponent (location);/*this is going to properlly encode it to the browser*/
  //   var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`/*every is executed as a regular jav script expression*/
  //
  //   return axios.get(requestUrl).then(function (ico){
  //     if(ico.data.cod && ico.data.message){
  //       throw new Error(ico.data.message);
  //     }  else {
  //       return  ico.data.weather[0].icon
  //     }
  //   },function (ico){
  //     throw new Error(ico.data.message);
  //   });
  // }
}
