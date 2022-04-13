import React from 'react';

import Header from '../new-project/Header';
import Home from '../new-project/Home';
import Footer from '../new-project/Footer';
 import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Explore from '../new-project/Explore';
import Collection from '../new-project/Collection';
import Transaction from '../new-project/Transaction';
import Create from '../new-project/Create';
const New = () =>{                     
   return(
      <>
         <Router > 
            <Header />
            <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/explore" element={<Explore/>} />
               <Route path="/collection" element={<Collection/>} />
               <Route path="/transactions" element={<Transaction/>} />
               <Route path="/create" element={<Create />} />
            </Routes>
         </Router>  
          <Footer />
      </>  
   )
}
export default New;