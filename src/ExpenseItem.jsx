export default function ExpenseItem({ expense, handleDelete }) {
  const deleteExp = (id) => {
    handleDelete(id);
  };
  return (
    <>
      {expense != null &&
        expense.length > 0 && ( //expense check if it is null or undefined
          <>
            {expense.map((exp) => {
              return (
                <li key={exp.id}>
                  <span>{exp.name}</span>
                  <span>{exp.amount}</span>
                  <button onClick={() => deleteExp(exp.id)}>Delete</button>
                </li>
              );
            })}
          </>
        )}
    </>
  );
}
