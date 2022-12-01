const Footer = () => {
     return (
          <>
               <div class="last_section">
                    <footer class="footer">
                         <div class="container">
                              <div class="row">
                                   <div class="col-lg-3 col-md-6 col-xs-12 ">
                                        <h2 class="mt-2">Quick Links</h2>
                                        <p class="pt-3">
                                             <a>About</a><br></br>
                                             <a>Tours</a><br></br>
                                             <a>Destination</a><br></br>
                                             <a>Blog   </a><br></br>
                                        </p>
                                   </div>
                                   <div class="col-lg-3 col-md-6 col-xs-12 ">
                                        <h2 class="mt-2">Information</h2>
                                        <p class="pt-3">
                                             <a>Online Enquiry</a><br></br>
                                             <a>General Enquiry</a><br></br>
                                             <a>Booking Condition</a><br></br>
                                             <a>Privacy and Policy</a><br></br>
                                             <a>Refund Policy</a><br></br>
                                             <a>Call us</a><br></br>
                                             <a>Industial</a><br></br>
                                             <a>Constuction</a><br></br>
                                        </p>
                                   </div>
                                   <div class="col-lg-3 col-md-6 col-xs-12 ">
                                        <h2 class="mt-2">Gallery</h2>
                                        <div class="footer_img pt-3">
                                             <img src={require('./image/img1.webp')} class="me-2 mt-2"></img>
                                             <img src={require('./image/img2.webp')} class="me-2 mt-2"></img>
                                             <img src={require('./image/img3.webp')} class="me-2 mt-2"></img>
                                             <img src={require('./image/img4.webp')} class="mt-2 me-2"></img>
                                             <img src={require('./image/img5.webp')} class="mt-2 me-2"></img>
                                        </div>
                                   </div>
                                   <div class="col-lg-3 col-md-6 col-xs-12 ">
                                        <h2 class="mt-2">Have a Question?</h2>
                                        <div class="pt-3">
                                             <div class="mb-3">
                                                  <div class="d-flex">
                                                       <i class="fa-solid fa-location-dot mt-1"></i>
                                                       <span class="mx-3">203 Fake St. Mountain<br></br> View, San Francisco,<br></br> California, USA</span>
                                                  </div>
                                             </div>
                                             <div class="mb-3">
                                                  <div class="d-flex">
                                                       <i class="fa-solid fa-phone mt-1"></i>
                                                       <span class="mx-3">+91 8200100783</span>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div class="d-flex">
                                                       <i class="fa-solid fa-envelope mt-1"></i>
                                                       <span class="mx-3">traveltalkz@gmail.com</span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <h1 class="m-0 p-0 pt-4">Copyright ©2022 All rights reserved | This template is made with  by Colorlib</h1>
                              </div>
                         </div>
                    </footer>
               </div>
          </>
     )
}

export default Footer;