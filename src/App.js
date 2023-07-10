import { BrowserRouter, Routes, Route} from "react-router-dom";
import BookInform from "./pages/BookInform";
import WritePage from "./pages/WritePage";
import Read from "./pages/Read";
import MyPage from "./pages/MyPage";
import Recommend from "./pages/Recommend";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element = {<h1>화이또</h1>}/> */}
      {/* <Route path="/:WritePage" element = {<WritePage />} />
      <Route path="/:BookInform" element = {<BookInform />} />
      <Route path="/:Read" element = {<Read/>} /> */}
      {/* <Route path="/MyPage" element = {<MyPage/>} /> */}
      <Route path="/" element = {<Recommend/>} />
      


    </Routes>
    </BrowserRouter>
  );
}

export default App;
