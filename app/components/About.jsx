var React = require('react');
//
// var About = React.createClass({
//   render: function () {
//     return(
//       <h3>About component</h3>
//     );
//   }
// });

// or

var About = (props) => {
  return(
    <div >
      <h1 className="text-center page-title">ABOUT US</h1>
      <p>This is a web app where you can check the weather for any location.</p>

    </div>
  )
};

module.exports = About;
