var React = require('react');

module.exports = React.createClass({
  render: function () {
    var key = 0;
    var errorsList = this.props.errors.map(function(error) {
      key += 1;
      return <li key={key}>{error}</li>;
    });

    return (
      <ul className='auth-errors'>
        {errorsList}
      </ul>
    );
  }
});
