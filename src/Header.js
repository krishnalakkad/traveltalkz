import logo from './image/logo.png'
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";

{/* <img src={logo}></img> */ }
{/* <img src={require('./image/logo.png')}></img> */ }

const Header = () => {
     return (
          <>
               <div class="main_img ">
                    <div>
                         <img src={require('./image/main_img.jpg')}></img>
                         <div class="layer">
                              <header class="top_header">
                                   <div class="container">
                                        <div class=" justify-content-between py-2 m-0 p-0 d-flex    ">
                                             <div class=" left_side">
                                                  <div class="nav">
                                                       <div class="pe-2">
                                                            <a>Contact us</a>
                                                       </div>
                                                       <div class="px-2">
                                                            <a><i class="fa-brands fa-whatsapp me-1"></i>Start chat</a>
                                                       </div>
                                                       <div class="d-none d-md-block px-2">
                                                            <a><i class="fa-regular fa-envelope me-1"></i>traveltalkz@gmail.com</a>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class=" right_side">
                                                  <div class="nav">
                                                       <div>
                                                            <a>Login</a>
                                                       </div>
                                                       <div class="px-1 h_line">|</div>
                                                       <div>
                                                            <a>Register</a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </header>
                              <hr class="m-0 p-0 h_line"></hr>
                              <header class="bottom_header container">
                                   <div class="justify-content-between py-3 bot m-0 p-0 d-flex">
                                        <div class="logo">
                                             <div class="d-flex align-items-center">
                                                  <img src={logo}></img>
                                                  <span class="logo_name">TravelTalkz</span>
                                             </div>
                                        </div>
                                        <div class="main_menu d-none d-md-block">
                                             <ul class="d-flex list-unstyled">
                                                  <li class="ps-5">
                                                       <a>
                                                            <Link to='/'>Home</Link>
                                                       </a>
                                                  </li>
                                                  <li class="ps-5">
                                                       <a>
                                                            <Link to='/Blog_2'>Blog</Link>
                                                       </a>
                                                  </li>
                                                  {/* <li class="ps-5 d-none d-lg-block"><a>About</a></li> */}
                                                  <li class="ps-5">
                                                       <a>
                                                            <Link to='/Service_2'>Services</Link>
                                                       </a>
                                                  </li>
                                                  <li class="ps-5 d-none d-lg-block">
                                                       <a>
                                                            <Link to='/Destination'>Destination</Link>
                                                       </a>
                                                  </li>
                                                  <li class="ps-5">
                                                       <a>
                                                            <Link to='/Contact'>Contact</Link>
                                                       </a>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div><i class="fa-solid fa-bars d-block d-sm-block d-xs-block d-md-none icon"></i></div>
                                        <div class="">
                                             <button class="book_button">Book Now</button>
                                        </div>
                                   </div>

                              </header>

                         </div>
                    </div>
               </div>
          </>
     )
}

export default Header