import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recommend from "./pages/Recommend";
import Home from "./pages/Home";
import MakeBook from "./pages/MakeBook";
import ModificationLog from "./pages/ModificationLog";
import EditInfo from "./pages/EditInfo";
import WritePage from "./pages/WritePage";
import SignUp from "./pages/SignUp";
import Noresult from "./pages/Noresult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Noresult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
