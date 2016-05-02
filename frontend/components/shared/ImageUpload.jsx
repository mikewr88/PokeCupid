var React = require("react");

module.exports = React.createClass({

  getInitialState: function () {
    return {thumbnail: null};
  },

  upload: function (event) {
    event.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function (error, results) {
      if(!error){
        this.setState({thumbnail: results[0].url});
        this.props.setImage(results[0].url);
      }

    }.bind(this));
  },

  render: function () {
    var thumbnail = (<img id="thumbnail" src="http://i.imgur.com/TfpZkwN.jpg"></img>);
    if (this.state.thumbnail) {
      thumbnail = (<img id='thumbnail' src={this.state.thumbnail}></img>);
    }
    return (
      <div className="upload-button">
        {thumbnail}
        <button onClick={this.upload}>Upload a Photo!</button>
      </div>
    );
  }
});
