import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MakeBook from "./pages/MakeBook";
import ModificationLog from "./pages/ModificationLog";
import TextAnimation from "./pages/TextAnimation";
import BookRecommend from "./pages/BookRecommend";
import WritePage from "./pages/WritePage";
import Read from "./pages/Read";
import MyPage from "./pages/MyPage";
import BookInform from "./pages/BookInform";
import CmMain from "./pages/CmMain";
import CmWrite from "./pages/CmWrite";
import CmReco from "./pages/CmReco";
import Intro from "./pages/Intro"
import HashSerch from "./pages/HashSerch";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<h1>화이또</h1>}/>
      <Route path="/:WritePage" element = {<WritePage />}/>
      <Route path="/:BookInform" element = {<BookInform />} />
      <Route path="/:Read" element = {<Read/>} />
      <Route path="/MyPage" element = {<MyPage/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/MakeBookService" element={<MakeBook/>}/>
      <Route path="/ModificationLog" element={<ModificationLog/>}/>
      <Route path="/CmReco" element={<CmReco/>}/>
      <Route path="/CmWrite" element={<CmWrite/>}/>
      <Route path="/CmMain" element={<CmMain/>}/>
      <Route path="/BookInform" element={<BookInform/>}/>
      <Route path="/Intro" element={<Intro/>}/>
      
      <Route path="/HashSerch" element={<HashSerch/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
