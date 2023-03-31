import {
  RouterProvider,
} from "react-router-dom";
import { createContext } from "react";

import router from "./router/router";
import { useStarWarsState } from "./starWarDataService/startWarState";

import './App.css';

export const DataContext = createContext();


function App() {
  return (
    <div className="App">
      <DataContext.Provider
        value={{...useStarWarsState()}}
      >
         <RouterProvider router={router} />
      </DataContext.Provider>

    </div>
  );
}

export default App;
