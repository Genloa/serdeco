//import React from "react";

import Navbar from "../components/Navbar";
import { OpcionProvider } from "../components/OpcionContext";
import ScrollToHash from "../components/ScrollToHash";

function Noticias() {
  return (
    <OpcionProvider>
      <ScrollToHash />
      <Navbar />
    </OpcionProvider>
  );
}

export default Noticias;
