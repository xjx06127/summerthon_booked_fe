import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookInform from "./pages/BookInform";
import WritePage from "./pages/WritePage";
import Read from "./pages/Read";
import MyPage from "./pages/MyPage";
import Recommend from "./pages/Recommend";
import Intro from "./pages/Intro";
import EditInfo from "./pages/EditInfo";
import Home from "./pages/Home";
import CmWrite from "./pages/CmWrite";
import Signup from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/WritePage" element={<WritePage />} />
        <Route path="/BookInform" element={<BookInform />} />
        <Route path="/read" element={<Read />} />
        <Route path="/editInfo" element={<EditInfo />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/" element={<Read />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Recommend" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
