import { useRef } from "react";

export default function ExpenseInput({ addExpense }) {
  const nameRef = useRef(null);
  const amountRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const amount = amountRef.current.value;

    if (name != "" && amount != "") {
      addExpense(name, amount);
      nameRef.current.value = "";
      amountRef.current.value = "";
      console.log(`name : ${name}`);
      console.log(`amount : ${amount}`);
    }
  };

  return (
    <div className="add-expense">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" ref={nameRef} />
      <br />
      <label htmlFor="amount">amount</label>
      <input type="text" name="amount" id="amount" ref={amountRef} />
      <button onClick={(e) => handleSubmit(e)}>Add Expense</button>
    </div>
  );
}
