import React from "react";
import MenuBar from './component/ui/MenuBar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// Pages
import MainPage from './component/page/MainPage';

function App() {
  return (
    <BrowserRouter>
      <MenuBar/>
      <Routes>
        <Route index element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
