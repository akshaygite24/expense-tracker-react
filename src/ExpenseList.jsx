import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expense, handleDelete }) {
  return (
    <div className="expense-list">
      <h3>Expenses</h3>
      <ul>
        <ExpenseItem expense={expense} handleDelete={handleDelete} />
      </ul>
      <h3>
        Total :{" "}
        {expense && expense.length > 0
          ? expense.reduce((accumulator, exp) => accumulator + exp.amount, 0)
          : 0}
      </h3>{" "}
      {/* //expense check if it is null or undefined */}
      <button className="delete-all" onClick={() => handleDelete(-1)}>
        Delete All
      </button>
    </div>
  );
}
