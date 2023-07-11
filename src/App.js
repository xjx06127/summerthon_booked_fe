import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recommend from "./pages/Recommend";
import Home from "./pages/Home";
import MakeBook from "./pages/MakeBook";
import ModificationLog from "./pages/ModificationLog";
import CmReco from "./pages/CmReco";
import CmWrite from "./pages/CmWrite";
import CmMain from "./pages/CmMain";
import MyPage from "./pages/MyPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element = {<h1>화이또</h1>}/> */}
      {/* <Route path="/:WritePage" element = {<WritePage />} />
      <Route path="/:BookInform" element = {<BookInform />} />
      <Route path="/:Read" element = {<Read/>} /> */}
      {/* <Route path="/MyPage" element = {<MyPage/>} /> */}
      <Route path="/home" element={<Home/>}/>
      <Route path="/MakeBookService" element={<MakeBook/>}/>
      <Route path="/ModificationLog" element={<ModificationLog/>}/>
      <Route path="/CmReco" element={<CmReco/>}/>
      <Route path="/CmWrite" element={<CmWrite/>}/>
      <Route path="/CmMain" element={<CmMain/>}/>
      <Route path="/MyPage" element={<MyPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
