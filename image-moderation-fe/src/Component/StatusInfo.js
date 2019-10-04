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
        <b> {props.status}</b>
      </span>
      <br />
      {props.status !== 'approved' ? (<span>Reject Reason : {props.rejectReason}</span>) : (<br />)}
    </div>
  );
};

export default StatusInfo;
