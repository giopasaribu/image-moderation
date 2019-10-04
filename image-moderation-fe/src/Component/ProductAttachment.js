import React from "react";

const imgStyle = {
  maxHeight: 150,
  maxWidth: 150
};

const ProductAttachment = props => {
  return (
    <div>
      <img style={imgStyle} src={props.url} alt="new" />
    </div>
  );
};

export default ProductAttachment;
