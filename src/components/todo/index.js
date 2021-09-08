export const Todo = ({ title, onDelete }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button onClick={onDelete} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};
