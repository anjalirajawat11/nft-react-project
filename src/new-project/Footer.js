import React from 'react';
import img from '../new-project/image/jokeimg.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GroupsIcon from '@mui/icons-material/Groups';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import DockIcon from '@mui/icons-material/Dock';    
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { hover } from '@testing-library/user-event/dist/hover';
import CheckIcon from '@mui/icons-material/Check';
import GoogleIcon from '@mui/icons-material/Google';



const Footer = () =>{
    return(
    <footer className="text-center text-lg-start bg-dark ">
    <div className="container p-4 pb-0">
         <section className="">
            <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-white">
                    <h6 className="text-uppercase  mb-4 font-weight-bold">
                    <img src={img} style ={{height: "40px" ,cursor: "pointer"  }} />
                    </h6>
                    <a style ={{cursor: "pointer"}}>
                       <p><a style={{color:"yellow"}}> <LocalPhoneIcon/></a>+(1) 888 404 3380</p>
                        <p><a style={{color:"yellow"}}><EmailIcon/></a>token@joke.community</p>
                        <p>Telegram Channel - https://t.me/joke_community</p>
                        <p><a style={{color:"yellow"}}><TelegramIcon/></a>Telegram Chat - https://t.me/jokecommunity</p>
                        
                    </a>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-white">
                    <h4 className="text-uppercase mb-4 font-weight-bold ">Quick Links</h4><hr />
                    <p>
                       <p> <a style={{color:"yellow"}}><DockIcon/></a>Tokenomics</p>
                    </p>
                    <p>
                        <a style={{color:"yellow"}}><DockIcon/></a>Roadmap <br/>white paper
                    </p>
                    <p>
                        <a style={{color:"yellow"}}><ShoppingCartIcon/></a>Buy joke
                    </p>
                    <p>
                        <a style={{color:"yellow"}}><CheckIcon/></a>Poocoin link
                    </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-white">
                    <h4 className="text-uppercase mb-4 font-weight-bold ">
                    Useful Links
                    </h4><hr />
                    <p>
                        <a style={{color:"yellow"}}><DockIcon/></a>Twitter joke
                    </p>
                    <p>
                        <a style={{color:"yellow"}}><DockIcon/></a>Reddit
                    </p>
                    <p>
                        <a style={{color:"yellow"}}><YouTubeIcon/></a>YouTube channel
                    </p>
                    <p>
                        <a style={{color:"yellow"}}><GroupsIcon/></a>The Team
                    </p>
                    <p>
                        <a style={{color:"yellow"}}><TelegramIcon/></a>Telegram
                    </p>
                    <p>
                        <a style={{color:"yellow"}}><FacebookIcon /></a>Facebook
                    </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-white">
                    <h4 className="text-uppercase mb-4 font-weight-bold ">Who's behind JOKE</h4><hr />
                    <p> <a style={{color:"yellow"}}><GoogleIcon /> </a>One of the world's leading YouTube Agencies, TV producers, comedians and believers</p>
                    <p>Headquarters: British Virgin Islands</p>
                    
                </div>
            </div> 
        </section>
        <hr className="my-3" />
        <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                <hr className="w-100 clearfix d-md-none" />
                <div className="text-white">
                    <p>JOKE COMMUNITY TOKEN – Launch Phase September 2021</p><br />
                    <p>Nothing on this website constitutes financial advice. Investing in Defi tokens is<br/> undertaken purely at your own risk. Prices can go up as well as down. Do your<br /> own research and invest in projects you believe will be successful, do not invest <br/>money you cannot afford to lose.</p>
                </div>
                </div>
                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                    <a className="btn btn-outline-light btn-floating m-1" role="button">
                        <FacebookIcon />
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" role="button"><TwitterIcon/></a>

                    <a className="btn btn-outline-light btn-floating m-1" role="button"><YouTubeIcon /></a>

                    <a className="btn btn-outline-light btn-floating m-1" role="button"><GroupsIcon/></a>
                    
                    <a className="btn btn-outline-light btn-floating m-1" role="button"><TelegramIcon/></a>
                </div>
            </div>
        </section>
        <section>
        
        </section>
    </div>
</footer>

    )
 };
 export default Footer;