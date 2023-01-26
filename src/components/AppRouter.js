import React, {useContext} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import ImageCard from "./ImageCard";
import Gallery from "./Gallery";
import Authorization from "./Authorization";
import GalleryContext from "../context/GalleryContext";

const AppRouter = () => {

  const {baseUrl} = useContext(GalleryContext)

  const loggedIn = localStorage.getItem('userName');

  return (
    <>
      <Routes>
        {loggedIn && <Route path={'/gallery'} element={<Gallery/>}></Route>}
        {loggedIn && <Route path={baseUrl} element={<Navigate to={'/gallery'} />}></Route>}
        {!loggedIn && <Route path={baseUrl} element={<Navigate to={'/login'} />}></Route>}
        <Route path={'/login'} element={<Authorization />}></Route>
        {loggedIn && <Route path={'gallery/:id'} element={<ImageCard/>}></Route>}
      </Routes>
    </>
  );
};

export default AppRouter;
