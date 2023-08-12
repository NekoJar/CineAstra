import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating maxRating={5} color="green" onSetRating={setMovieRating} />
      <p>pantek {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
      maxRating={10}
    />
    <Test />
  </React.StrictMode>
);
