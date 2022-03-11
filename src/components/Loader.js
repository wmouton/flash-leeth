import React from "react";
import loader from "../icons/loader.svg";
import "../css/loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loader} className="loader" alt="loader" />
    </div>
  );
};

export default Loader;
