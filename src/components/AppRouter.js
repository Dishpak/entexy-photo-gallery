import React from 'react';
import {Route, Routes} from "react-router-dom";
import ImageCard from "./ImageCard";
import Gallery from "./Gallery";

const AppRouter = () => {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Gallery/>}></Route>
        <Route path={'/:id'} element={<ImageCard />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
