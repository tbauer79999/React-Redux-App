import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const Card = (props) => {
  const handleGetData = (event) => {
    props.getData();
  };
  return (
    <div>
      {props.isFetchingData ? (
        <div>One Sec...</div>
      ) : (
        <button onClick={handleGetData} color="primary">Get Pokemon</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { getData })(Card);
