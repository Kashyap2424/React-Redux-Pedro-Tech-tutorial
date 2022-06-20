import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import ChangeColor from "./Components/Change-Color";

const App = () => {
  return (
    <div className="App">
      <Login />
      <Profile />
      <ChangeColor />
    </div>
  );
};

export default App;
