import { borderRadius, fontSize } from '@mui/system';
import React from 'react';
import img from '../new-project/image/mike.png';
import { useNavigate }  from 'react-router-dom';

const Home = () => {

  const navigate =  useNavigate();
    return(
        <div className="container-fluid"style={{color :"white", background:"#2b2b2b"}}>
          <div className='row'>
            <div className='col-6'>
              <h1 style={{marginLeft:"5rem" , marginTop:"4rem", fontSize:"3.2rem"}}><b>Discover,  collect,  and sell extraordinary NFTs</b></h1>
              <h6  style={{marginLeft:"5rem" , marginTop:"2rem", fontSize:"2rem", color:"grey"}}>Joke is world first completely decentrelised NFT Marketplace</h6>
            </div>
            <div className='col-6'>
            <img src ={img} style={{ width:"15rem", height:"20rem" ,marginTop:"4rem", marginLeft:"4rem"}}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-1'></div>
              <div className='col-5' style={{marginTop:"2rem", fontSize:"2rem", marginBottom:"3rem"}}>
                <button type="button" onClick={() => {navigate('/explore') }} class="btn btn-warning" style={{boxShadow: "#fcbc45" , fontSize:"1.4rem", borderRadius:"0.5rem"}}>Explore</button>
                <button type="button" onClick={() => {navigate('/create')}} class="btn btn-warning" style={{color:"white", marginLeft:"1rem", fontSize:"1.3rem", background:"none", borderRadius:"0.5", boxShadow:"2px solid fcbc45" }}>Create</button>
              </div>
              <div className='col-6'> 
                
              </div>
            </div>
        </div>
       

    )
}
export default Home;