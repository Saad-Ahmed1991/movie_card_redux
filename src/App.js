import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./components/Add/Add";
import Filter from "./components/Filter/Filter";
import Moviedetails from "./components/Moviedetails/Moviedetails";
import Movielist from "./components/Movielist/Movielist";
import Navbar1 from "./components/Navbar/Navbar";
import { useSelector } from "react-redux";

function App() {
  const [input, setInput] = useState("");
  const [rate, setRate] = useState(0);
  const newList = useSelector((state) => state.movies);
  return (
    <div className="App">
      <Navbar1 />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter setInput={setInput} setRate={setRate} />
              <Movielist
                data={newList.filter(
                  (el) =>
                    el.title
                      .toLowerCase()
                      .includes(input.toLocaleLowerCase().trim()) &&
                    el.rating >= rate
                )}
              />
            </>
          }
        />

        <Route path="/add" element={<Add />} />
        <Route
          path="/moviedetails/:x"
          element={<Moviedetails data={newList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
