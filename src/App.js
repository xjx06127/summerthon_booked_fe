import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recommend from "./pages/Recommend";
import Home from "./pages/Home";
import MakeBook from "./pages/MakeBook";
import ModificationLog from "./pages/ModificationLog";
import TextAnimation from "./pages/TextAnimation";
import BookRecommend from "./pages/BookRecommend";
import CmReco from "./pages/CmReco";
import SignUp from "./pages/SignUp";
import Read from "./pages/Read";
import Noresult from "./pages/Noresult";
import Intro from "./pages/Intro";
import EditInfo from "./pages/EditInfo";
import IsMobile from "./pages/IsMobile";
import MobilePage from "./pages/MobilePage";
import CmWrite from "./pages/CmWrite";
import BookInform from "./pages/BookInform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IsMobile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/MakeBookService" element={<MakeBook />} />
        <Route path="/ModificationLog" element={<ModificationLog />} />
        <Route path="/text" element={<TextAnimation />} />
        <Route path="/BookRecommend" element={<BookRecommend />} />
        <Route path="/CmReco" element={<CmReco />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/read" element={<Read />} />
        <Route path="/Noresult" element={<Noresult />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/editInfo" element={<EditInfo />} />
        <Route path="/mobilePage" element={<MobilePage />} />
        <Route path="/cmWrite" element={<CmWrite />} />
        <Route path="/bookInform" element={<BookInform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
