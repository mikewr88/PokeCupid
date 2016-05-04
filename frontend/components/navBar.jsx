var React = require('react');
var TrainerStore = require('../stores/trainer_store');
var SessionStore = require('../stores/session_store');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div id="logo-title">
          <img src="http://i.imgur.com/g2sYshv.png" className='logo'></img>
          <h1 id='poke'>Poke</h1><h1 id='cupid'>Cupid</h1>
        </div>

        {this.props.children}

      </div>
    );
  }
});
