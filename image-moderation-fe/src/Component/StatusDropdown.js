import React from "react";

const style = {
  right: "2.1em",
  textAlign: "left"
};

const StatusDropdown = props => {
  return (
    <div style={style}>
      <select onChange={props.changed.bind(this)}>
        <option value="">Filter by status ...</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
};

export default StatusDropdown;
