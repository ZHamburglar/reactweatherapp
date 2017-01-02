var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;
    this.setState({isLoading: true})
    openWeatherMap.getTemp(location).then(function (temp, temp_min) {
      that.setState({
        location: location,
        temp: temp,
        temp_min: temp_min,
        isLoading: false
      });
    }, function (errorMessage) {
        alert(errorMessage);
        that.setState({isLoading: false})
    });
  },
  render: function () {
    var {isLoading, temp, location, temp_min} = this.state;
    function renderMessage (){
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} tempmin={temp_min}/>
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
