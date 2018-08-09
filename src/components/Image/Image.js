import React, { Component } from "react";
import cloudinary from "cloudinary-core";
import PropTypes from "prop-types";

export default class Image extends Component {
  render() {
    let cl = cloudinary.Cloudinary.new({ cloud_name: this.props.cloudName });
    var { publicId, width, height } = this.props;
    var url = cl.url(publicId, { width, height, crop: "scale" });
    return <img src={url} alt="" />;
  }
}

Image.propTypes = {
  cloudName: PropTypes.string.isRequired,
  publicId: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};
Image.defaultProps = {
  width: 200
};
