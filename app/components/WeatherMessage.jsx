var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//
//     return (
//       <h3>It's it {temp} in {location}.</h3>
//     )
//   }
// });

var WeatherMessage = ({temp, location, tempmin}) => {
  return (
    <h3 className="text-center">It's it {temp} in {location}. {tempmin} </h3>
  )
}

module.exports = WeatherMessage;
