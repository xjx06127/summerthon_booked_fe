import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Recommend from "./pages/Recommend";
import HashSerch from "./pages/HashSerch";
import Intro from "./pages/Intro";
import IsMobile from "./pages/IsMobile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IsMobile />} />
        <Route path="/MakeBookService" element={<MakeBook />} />
        <Route path="/ModificationLog" element={<ModificationLog />} />
        <Route path="/CmReco/:postId" element={<CmReco />} />
        <Route path="/CmWrite" element={<CmWrite />} />
        <Route path="/CmMain" element={<CmMain />} />
        <Route path="/BookInform" element={<BookInform />} />
        <Route path="/Recommend" element={<Recommend />} />
        <Route path="/BookRecommend/:op" element={<BookRecommend />} />
        <Route path="/read" element={<Read />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/hashserch" element={<HashSerch />} />
        <Route path="/writePage/:book_title/:author" element={<WritePage />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
