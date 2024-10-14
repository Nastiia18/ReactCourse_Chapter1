import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoadingCircle = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

const Loading = ({ isLoading, children }) => {
  return (
    <React.Fragment>
      {isLoading && <LoadingCircle />}

      {children}
    </React.Fragment>
  );
};

export default Loading;
