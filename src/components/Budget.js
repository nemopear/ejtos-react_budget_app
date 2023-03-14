import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, remaining, expenses, dispatch, currency } =
    useContext(AppContext);
  const [currentBudget, setCurrentBudget] = useState("");
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  console.log("totalExpenses", totalExpenses);

  const handleBudgetValue = (event) => {
    // let { value, min, max } = event.target;
    // value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    // setCurrentBudget(value);

    if (event.target.value > 20000) {
      alert("Budget cannot exceed 20000");
    } else if (event.target.value < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
    } else {
      setCurrentBudget(event.target.value);
      console.log(currentBudget);
      dispatch({
        type: "SET_BUDGET",
        payload: event.target.value,
      });
      console.log(currentBudget);
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          required="required"
          type="number"
          id="budget"
          value={budget}
          style={{ marginLeft: "1rem", width: "60%" }}
          step="10"
          onChange={handleBudgetValue}
          max={20000}
        ></input>
      </span>
    </div>
  );
};
export default Budget;
