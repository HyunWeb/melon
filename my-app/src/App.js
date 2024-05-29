import React, {useState} from "react";
import MenuContext from "./component/context/MenuContext";
import MenuBar from './component/ui/MenuBar';
import BottomMusicPlayer from "./component/ui/BottomMusicPlayer";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// Pages
import MainPage from './component/page/MainPage';
import MelonChart from './component/page/MelonChart';
import NewAlbumPage from "./component/page/NewAlbumPage";
import MyPage from "./component/page/MyPage";

function App() {
  const[currentMenu, setcurrentMenu] = useState(1);

  return (
    <BrowserRouter>
      <MenuContext.Provider value={{currentMenu, setcurrentMenu}}>
          <MenuBar/>
          <BottomMusicPlayer/>
      </MenuContext.Provider>
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path="MelonChart" element={<MelonChart />}/>
        <Route path="NewAlbum" element={<NewAlbumPage />}/>
        <Route path="MyPage" element={<MyPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
