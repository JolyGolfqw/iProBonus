import { useSelector } from "react-redux";
import header_logo from "../assets/header_logo.svg";
import Bonus from "./Bonus/Bonus";
import Error from "./Error/Error";

function App() {
  const error = useSelector((state) => state.error);

  return (
    <div className="App">
            {error && <Error message={error}/>}

      <header className="App-header">
        <div>ЛОГОТИП</div>
        <img src={header_logo} alt="logo" />
      </header>
      <div className="main-content">
        <Bonus />
      </div>
    </div>
  );
}

export default App;
