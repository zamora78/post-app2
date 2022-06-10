import "./App.css";
import DataContextProvider from "./context/PostContext";
// import { Route, Routes } from "react-router-dom";
import { Posts, PostDetails } from "./pages/index";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Posts />
      </DataContextProvider>

      {/* <Routes>
        <Route path="/posts/:id" element={<PostDetails />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/" element={<Posts />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
