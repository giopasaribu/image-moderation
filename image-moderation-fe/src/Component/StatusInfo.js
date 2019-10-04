import React from "react";

const statusStyle = {
  textTransform: "capitalize"
};

const style = {

};

const StatusInfo = props => {
  return (
    <div style={style}>
      Status :
      <span style={statusStyle}>
        <b>{props.status}</b>
      </span>
      <br />
      Reject Reason : <span>{props.rejectReason}</span>
    </div>
  );
};

export default StatusInfo;
