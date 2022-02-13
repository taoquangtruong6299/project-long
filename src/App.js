import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import {getdata} from './actions/index'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

const App = () => {

  useEffect(() => {


  });




  const routing = useRoutes(Themeroutes);

  return <div className="dark">
    <button>ADD</button>
    {routing}
    </div>;
};

export default App;
