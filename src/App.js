import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Expenses from "./components/expenses/expenses";

function App() {
  return (
    <div className=" bg-black text-white">
      <h1>Hello</h1>
      <Dashboard />
      <Expenses />
    </div>
  );
}

export default App;
