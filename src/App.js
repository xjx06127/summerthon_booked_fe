import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recommend from "./pages/Recommend";
import Home from "./pages/Home";
import MakeBook from "./pages/MakeBook";
import ModificationLog from "./pages/ModificationLog";
import BookRecommend from "./pages/BookRecommend";
import WritePage from "./pages/WritePage";
import Read from "./pages/Read";
import MyPage from "./pages/MyPage";
import BookInform from "./pages/BookInform";
import CmReco from "./pages/CmReco";
import CmWrite from "./pages/CmWrite";
import CmMain from "./pages/CmMain";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>화이또</h1>} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/MakeBookService" element={<MakeBook />} />
        <Route path="/ModificationLog" element={<ModificationLog />} />
        <Route path="/CmReco" element={<CmReco />} />
        <Route path="/CmWrite" element={<CmWrite />} />
        <Route path="/CmMain" element={<CmMain />} />
        <Route path="/BookInform/:NickName" element={<BookInform />} />
        <Route path="/Recommend" element={<Recommend />} />
        <Route path="/BookRecommend/:Result" element={<BookRecommend />} />
        <Route path="/read/:NickName" element={<Read />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/writePage/:book_title/:author/:created_at/:NickName"
          element={<WritePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;