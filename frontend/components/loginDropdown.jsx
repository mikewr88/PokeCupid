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
    var selected;
    for (var key in category){
      if (category[key] === this.props.sel){
        selected = true;
      }else {
        selected = false;
      }
      dropdownArr.push(
        <option id={this.props.value} className='dropdown-option' key={num} value={category[key]} selected={selected}>
          {category[key]}
        </option>
      );
      num++;
    }
    return (
      <select className='sign-up-dropdown' onChange={this.handleSelection}>
        {dropdownArr}
      </select>

    );

  }
});

module.exports = Dropdown;
