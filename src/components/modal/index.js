export const Modal = ({ onCancel, onConfirm }) => {
  const cancelHandler = () => {
    onCancel();
  };
  const confirmHandler = () => {
    onConfirm();
  };
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button onClick={cancelHandler} className="btn btn--alt">
        Cancel
      </button>
      <button onClick={confirmHandler} className="btn">
        Confirm
      </button>
    </div>
  );
};
