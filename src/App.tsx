import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <div id="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
