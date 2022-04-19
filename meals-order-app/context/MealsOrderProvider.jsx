import { useState, useEffect, createContext } from "react";

const MealsOrderContext = createContext();

const MealsOrderProvider = ({ children }) => {
  return (
    <MealsOrderContext.Provider value={{}}>
      {children}
    </MealsOrderContext.Provider>
  );
};

export { MealsOrderProvider };

export default MealsOrderContext;
