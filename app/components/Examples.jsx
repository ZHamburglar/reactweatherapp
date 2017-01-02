var React = require('react');

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// });
//Refactored using ES6 and whatnot
var Examples = (prop) => {
    return (
      <div>
        <h3>Examples</h3>
        <p>Welcome to examples page!</p>
      </div>
    )
}
module.exports = Examples;
