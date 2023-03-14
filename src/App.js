import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Code to import Budget.js
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";

// Add code to import the other components here under

import { AppProvider } from "./context/AppContext";
import ExpenseList from "./components/ExpenseList";
import ExpenseItem from "./components/ExpenseItem";
import AllocationForm from "./components/AllocationForm";
import Currency from "./components/Currency";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <div className="col-sm">
            <Currency />
          </div>
          {/* Add ExpenseItem component here under */}   {" "}
          {/* Add AllocationForm component here under */}
        </div>
        <div className="row">
          <div className="col">
            <h2>Allocation</h2>
            <ExpenseList />
          </div>
        </div>
        {/* <ExpenseItem /> */}
        <div className="row">
          <div className="col">
            <h2>Change allocation</h2>
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
