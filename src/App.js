import { Todo } from "./components";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Learn React" onDelete={() => console.log("Deleting...")} />
      <Todo title="Master React" onDelete={() => console.log("Deleting...")} />
      <Todo
        title="Explore the full React Course"
        onDelete={() => console.log("Deleting...")}
      />
    </div>
  );
}

export default App;
