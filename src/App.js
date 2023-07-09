import Write from "./pages/Write";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import BookInform from "./pages/BookInform";
import WritePage from "./pages/WritePage";
import Read from "./pages/Read";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<h1>화이또</h1>}/>
      <Route path="/:WritePage" element = {<WritePage />} />
      <Route path="/:BookInform" element = {<BookInform />} />
      <Route path="/:Read" element = {<Read/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
