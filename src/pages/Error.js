import React from "react";
import "../App.css";

/**
 * If there is an error, the Error function will return a div with a class name of error-boundary and a
 * h1 tag with the text "Error: Failed to fetch repositories".
 * p tag with the text "Please try again later".
 */
function Error() {
  return (
    <div className="error-boundary">
      <h1>Error: Failed to fetch repositories</h1>
      <p>Please try again later.</p>
    </div>
  );
}

export default Error;
