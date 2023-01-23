import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import ImageCard from "./ImageCard";
import Gallery from "./Gallery";
import Authorization from "./Authorization";
import GalleryContext from "../context/GalleryContext";

const AppRouter = () => {
  const {authorized} = useContext(GalleryContext);

  return (
    <>
      <Routes>
        {!authorized && localStorage != null && <Route path={'/'} element={<Authorization/>}></Route>}
        <Route path={'/'} element={<Gallery/>}></Route>
        <Route path={'/:id'} element={<ImageCard />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
