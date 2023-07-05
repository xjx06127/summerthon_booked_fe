import Write from "./pages/Write";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<h1>화이또</h1>}/>
      <Route path="/:WriteBook" element = {<Write />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
