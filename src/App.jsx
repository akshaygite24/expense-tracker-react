import { useEffect, useState } from "react";
import ExpenseInput from "./ExpenseInput";
import ExpenseList from "./ExpenseList";
function App() {
  const [expense, setExpense] = useState(() => {
    try {
      const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : [];
    } catch (error) {
      console.error(`Error Loading Data from local Storage ${error}`);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expense));
  }, [expense]);

  const addExpense = (name, amount) => {
    setExpense((prevExpenses) => {
      console.log("setting Expense");
      console.log(prevExpenses);
      if (prevExpenses) {
        return [
          ...prevExpenses,
          { id: crypto.randomUUID(), name: name, amount: parseFloat(amount) },
        ];
      } else {
        return [
          { id: crypto.randomUUID(), name: name, amount: parseFloat(amount) },
        ];
      }
    });
    console.log("Expense Added!");
  };

  const handleDelete = (id) => {
    if (expense && expense.length !== 0) {
      console.log(id);
      if (id != -1) {
        setExpense(() => {
          console.log("Delete Single Item");
          return expense.filter((exp) => id !== exp.id);
        });
      } else {
        console.log("Delete All Item");
        setExpense([]);
      }
    }
    console.log("filtered");
  };

  return (
    <>
      <div className="container">
        <ExpenseInput addExpense={addExpense} />

        <ExpenseList expense={expense} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
