import React from "react";
import Nav from "./Components/Nav";

import Main from "./Components/Main";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className=" min-w-full">
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
