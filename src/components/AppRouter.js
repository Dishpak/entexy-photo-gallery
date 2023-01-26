import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import ImageCard from "./ImageCard";
import Gallery from "./Gallery";
import Authorization from "./Authorization";

const AppRouter = () => {

  const loggedIn = localStorage.getItem('userName');

  return (
    <>
      <Routes>
        {loggedIn && <Route path={'/gallery'} element={<Gallery/>}></Route>}
        {loggedIn && <Route path={'/entexy-photo-gallery'} element={<Navigate to={'/gallery'} />}></Route>}
        {!loggedIn && <Route path={'/entexy-photo-gallery'} element={<Authorization/>}></Route>}
        <Route path={'/login'} element={<Authorization />}></Route>
        {loggedIn && <Route path={'gallery/:id'} element={<ImageCard/>}></Route>}
      </Routes>
    </>
  );
};

export default AppRouter;
