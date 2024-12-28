import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  return (
    <div className="expense-list">
      <h3>Expenses</h3>
      <ul>
        <ExpenseItem />
      </ul>
      <button className="delete-all">Delete All</button>
    </div>
  );
}
