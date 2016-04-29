var React = require('react');
var LoginForm = require('./loginForm');

var Dropdown = React.createClass({

  handleSelection: function (event) {
    this.props.onChange(event);
  },

  render: function () {
    var category = this.props.category;
    var dropdownArr = [];
    var num = 1;
    for (var key in category){
      dropdownArr.push(
        <option
          class='dropdown-option' key={num} value={category[key]}>{category[key]}
        </option>
      );
      num++;
    }
    return (
      <select class='sign-up-dropdown' onChange={this.handleSelection}>
        {dropdownArr}
      </select>

    );

  }
});

module.exports = Dropdown;
