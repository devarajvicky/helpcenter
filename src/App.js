import Navbar from "./Components/Header/header";
import HelpCenter from "./Components/Helpcenter/helpcenter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubmitForm from "./Components/SubmitForm/submitform";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HelpCenter />}></Route>
        <Route exact path="/reqest" element={<SubmitForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
