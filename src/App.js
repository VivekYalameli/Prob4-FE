import "./App.css";
import SignIn from "./Components/Login";
import DashboardEnhancedTable from "./Components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/User";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/user" element={<SignUp/>}></Route>
          <Route path="/dashboard" element={<DashboardEnhancedTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
