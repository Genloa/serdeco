// context/OpcionContext.js
import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const OpcionContext = createContext();

export const OpcionProvider = ({ children }) => {
  const [opcion, setOpcion] = useState({ estado: false, tipo: null });

  return (
    <OpcionContext.Provider value={{ opcion, setOpcion }}>
      {children}
    </OpcionContext.Provider>
  );
};

OpcionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
