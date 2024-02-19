import React from "react";
import MenuBar from './component/ui/MenuBar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// Pages
import MainPage from './component/page/MainPage';
import MelonChart from './component/page/MelonChart';

function App() {
  return (
    <BrowserRouter>
      <MenuBar/>
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path="MelonChart" element={<MelonChart />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
