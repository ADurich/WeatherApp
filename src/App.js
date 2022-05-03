import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Nav/>}/>
        </Routes>     
      </div>
    </BrowserRouter>
  );
}
