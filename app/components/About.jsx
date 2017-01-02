var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });
// This is lines 3-9 refactored.
var About = (props) => {
  return (
    <div>
      <h3>About Component</h3>
      <p>Welcome to the about page!</p>
    </div>
  )
}
module.exports = About;
