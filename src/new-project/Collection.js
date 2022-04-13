import React from 'react';
import img from '../new-project/image/milky.png';
import image from '../new-project/image/skyblue.png';
import pic from '../new-project/image/sun.png';
import venus from '../new-project/image/venus1.png';
import jupiter from '../new-project/image/jupiter.png';
import mars from '../new-project/image/mars.png';
import nft from '../new-project/image/nft.png';
 import bit from '../new-project/image/bit.png';


const Collection = () => {
    return(
    <div className="container" style={{background:"black"}}>
         <div className='row'>
            <div className='col-3'>
                <div class="card"  style={{ height:"300px", marginBottom:"6rem"}}>
                    <img class="card-img-top" src={img} alt="Card image"/>
                    <div class="card-body">
                        <h4 class="card-title">Milky Way</h4>
                        <p class="card-text">NFT jokes</p>
                       
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div class="card"  style={{height:"300px", marginBottom:"6rem"}}>
                    <img class="card-img-top" src={image} alt="Card image"/>
                    <div class="card-body">
                        <h4 class="card-title">Uranus</h4>
                        <p class="card-text">NFT jokes.</p>
                       
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div class="card"  style={{height:"300px", marginBottom:"6rem"}}>
                    <img class="card-img-top" src={pic} alt="Card image"/>
                    <div class="card-body">
                        <h4 class="card-title">Sun Nft</h4>
                        <p class="card-text">NFT jokes</p>
                       
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div class="card"  style={{height:"300px", marginBottom:"6rem"}}>
                    <img class="card-img-top" src={venus} alt="Card image" style={{height:"8rem"}}/>
                    <div class="card-body">
                        <h4 class="card-title">Venus Nft</h4>
                        <p class="card-text">NFT jokes</p>
                       
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-3'>
                 <div class="card"  style={{height:"300px", marginBottom:"6rem"}}>
                    <img class="card-img-top" src={jupiter} alt="Card image"/>
                    <div class="card-body">
                        <h4 class="card-title">Jupiter Nft</h4>
                        <p class="card-text">NFT jokes</p>
                       
                    </div>
                 </div>
            </div>
            <div className='col-3'>
                 <div class="card"  style={{height:"300px", marginBottom:"6rem"}}>
                    <img class="card-img-top" src={mars} alt="Card image" style={{height:"8rem"}}/>
                    <div class="card-body">
                        <h4 class="card-title">Mars Nft</h4>
                        <p class="card-text">NFT jokes</p>
                       
                    </div>
                 </div>
            </div>
            <div className='col-3'>
                 <div class="card"  style={{height:"300px", marginBottom:"6rem"}}>
                    <img class="card-img-top" src={nft} alt="Card image"/>
                    <div class="card-body">
                        <h4 class="card-title">Hello joke Nft</h4>
                        <p class="card-text">NFT jokes</p>
                       
                    </div>
                 </div>
            </div>
            <div className='col-3'>
                 <div class="card"  style={{height:"300px", marginBottom:"6rem"}}>
                    <img class="card-img-top" src={bit} alt="Card image" style={{height:"8rem"}}/>
                    <div class="card-body">
                        <h4 class="card-title">Bit Money</h4>
                        <p class="card-text">NFT jokes</p>
                       
                    </div>
                 </div>
            </div>
        </div>
        <div className='row'>
        <div class="card"  style={{width:"280px", height:"300px", marginBottom:"6rem"}}>
                    <img class="card-img-top" src={bit} alt="Card image" style={{height:"8rem"}}/>
                    <div class="card-body">
                        <h4 class="card-title">Bit Money</h4>
                        <p class="card-text">NFT jokes.</p>
                       
                    </div>
                 </div>
        </div>
    </div>


     
    )
}
export default Collection