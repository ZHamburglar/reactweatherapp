var React = require('react');
var {Link} = require('react-router');

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
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Austin'>Austin, TX</Link>
          </li>
          <li>
            <Link to='/?location=London'>London, UK</Link>
          </li>
        </ol>
      </div>
    )
}
module.exports = Examples;
