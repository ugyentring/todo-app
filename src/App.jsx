import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <ShowTask />
    </div>
  );
};

export default App;
