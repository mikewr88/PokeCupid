var React = require("react");

module.exports = React.createClass({
  upload: function (event) {
    event.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function (error, results) {
      if(!error){
        
        this.props.setImage(results[0].url);
      }

    }.bind(this));
  },

  render: function () {
    return (
      <div className="upload-button">
        <button onClick={this.upload}>Upload a Photo!</button>
      </div>
    );
  }
});
