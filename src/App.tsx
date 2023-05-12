import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Commons/NavBar';
import { Main } from './Components/Main';
import path from 'path';
import { routes } from './Components/routes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <ResponsiveAppBar/>
      </header>

      <Routes>
        <Route path='/' element={<Main></Main>}>
          {
            routes.map (({path,component:Component}) => (
              <Route
              key={path}
              path={path}
              element={<Component/>}
              />
            ))
          }
        </Route>
      </Routes>
    </>
  );
}

export default App;
