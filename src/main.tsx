// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// import Deck from "./Deck";
// import Header from "./Header";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/decks/:deckId",
//     element: <Deck />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <div className="page">
//       <Header />
//       <RouterProvider router={router} />
//     </div>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Deck from "./Deck";
import Header from "./Header";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/decks/:deckId" element={<Deck />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
