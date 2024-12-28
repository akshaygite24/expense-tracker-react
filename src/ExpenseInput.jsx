import { useRef } from "react";

export default function ExpenseInput({}) {
    
  return (
    <div className="add-expense">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <br />
      <label htmlFor="amount">amount</label>
      <input type="text" name="amount" id="amount" />
      <button >Add Expense</button>
    </div>
  );
}
