import React from 'react';
import img from '../new-project/image/jokeimg.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CollectionsIcon from '@mui/icons-material/Collections';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ConstructionIcon from '@mui/icons-material/Construction';
 import {NavLink} from 'react-router-dom';

const Header = () =>{
   return(
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="d-flex">    
            <NavLink to="/" ><img src={img} style ={{height: "40px" ,cursor: "pointer"  }} /></NavLink>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  style={{width:"22rem"}}/>
            <p><NavLink to="/explore" style={{color:"white", fontSize:"1.3rem", marginLeft:"1rem"}}> <AddShoppingCartIcon/><b>Explore</b></NavLink></p>
            <p><NavLink to="/collection" style={{color:"white", fontSize:"1.3rem", marginLeft:"1rem"}}> <CollectionsIcon/><b>Collection</b></NavLink></p>
            <p><NavLink to="/transactions" style={{color:"white", fontSize:"1.3rem", marginLeft:"1rem"}}> <EventNoteIcon/><b>Transactions</b></NavLink></p>
            <p><NavLink to="/create" style={{color:"white", fontSize:"1.3rem", marginLeft:"1rem"}}> <ConstructionIcon/><b>Create</b></NavLink></p>
            <p class="navbar-brand" href="#"style={{marginLeft:"1rem"}}><b>0 NATIVE</b></p>
            <button type="button" class="btn btn-success"style={{height:"2.4rem" }}>Autentication</button>
        </div>
      </div>
    </nav>
     
   )
}
export default Header;