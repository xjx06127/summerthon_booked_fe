import { BrowserRouter, Routes, Route} from "react-router-dom";
import Recommend from "./pages/Recommend";
import Home from "./pages/Home";
import MakeBook from "./pages/MakeBook";
import ModificationLog from "./pages/ModificationLog";

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
    </Routes>
    </BrowserRouter>
  );
}

export default App;
