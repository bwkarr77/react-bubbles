import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { getColors } from "../actions/actions";

const BubblePage = ({ colorsList, getColors, reFetch }) => {
  useEffect(() => {
    getColors();
  }, [reFetch]);

  console.log("Bubblepage > colorsList:", colorsList);
  console.log("state.reFetch:", reFetch);

  return !colorsList ? (
    <div>LOADING THE RAINBOW...</div>
  ) : (
    <>
      <ColorList />
      <Bubbles colors={colorsList} />
    </>
  );
};

const mapStateToProps = state => ({
  colorsList: state.colorsList,
  reFetch: state.reFetch
});

export default connect(mapStateToProps, { getColors })(BubblePage);
