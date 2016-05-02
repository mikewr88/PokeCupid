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
    var thumbnail = '';
    if (this.state.thumbnail) {
      thumbnail = "thumbnail";
    }
    return (
      <div className="upload-button">
        <img id={thumbnail} src={this.state.thumbnail}></img>
        <button onClick={this.upload}>Upload a Photo!</button>
      </div>
    );
  }
});
