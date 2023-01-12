import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import HomePage from './Pages/HomePage';
import PageError from './Pages/PageError';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />
          <Route path="*" element={<PageError/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
