var React = require("react");

module.exports = React.createClass({

  getInitialState: function () {
    return {thumbnail: null};
  },

  upload: function (event) {
    event.preventDefault();
    window.cloudinary.openUploadWidget(window.cloudinary_options, function (error, results) {
      if(!error){
        this.setState({thumbnail: results[0].url});
        this.props.setImage(results[0].url);
      }

    }.bind(this));
  },

  render: function () {
    var thumbnail;
    if (this.state.thumbnail) {
      thumbnail = (<img id='thumbnail' src={this.state.thumbnail}></img>);
    }
    return (
      <div id='upload-button-container-container'>
      <div className="upload-button-container">
        {thumbnail}
        <button id="upload-button" onClick={this.upload}>Upload a Photo!</button>
      </div>
    </div>
    );
  }
});
