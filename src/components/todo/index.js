export const Todo = ({ title }) => {
  const deleteHandler = () => {};
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button onClick={deleteHandler} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};
