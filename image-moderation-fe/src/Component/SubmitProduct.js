import React from "react";

const style = {

};

const buttonStyle = {
  width: "100%",
  height: "2.5em"
};

const SubmitProduct = props => {
  let rejectReason = null;
  const setRejectReason = event => {
    rejectReason = event.target.value;
  };
  return (
    <div style={style}>
      <div>
        <button
          style={buttonStyle}
          onClick={() => {
            props.submitHandler("approved", null);
          }}
        >
          Approve
        </button>
      </div>
      <div>
        <select onChange={setRejectReason.bind(this)}>
          <option value="">Reject Reason ...</option>
          <option value="Pictures are blurry">Pictures are blurry</option>
          <option value="Missing picture">Missing picture</option>
          <option value="Not appropriate">Not appropriate</option>
        </select>
        <button
          onClick={() => {
            props.submitHandler("rejected", rejectReason);
          }}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default SubmitProduct;
