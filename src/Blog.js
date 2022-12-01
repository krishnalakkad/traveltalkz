import Service from './Service';

const Blog = () =>{
     return(
          <>
               <section class="third_section">
                    <div class="container">
                         <div class="row pb-5 m-0 p-0">
                              <div class="col-lg-7 col-md-12  m-0 p-0">
                                   <div class="bg">
                                        <h4>GET IN TOUCH WITH US</h4>
                                        <h2 class="pt-2 pb-3">Get Best Travel Deals</h2>
                                        <p class="d-none d-sm-block">
                                             A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                        <p class="d-xs-none d-none d-md-none d-lg-block">
                                             Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                                        </p>
                                        <p>
                                             A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                        </p>
                                        <div class="pt-3">
                                             <button class="btn1 mx-1 my-1">Book Now</button>
                                             <button class="btn2 mx-1 my-1">Contact us</button>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-lg-5 col-md-12 m-0 p-0">
                                   <img src={require('./image/bg_img1.jpg')}></img>
                              </div>
                         </div>
                    </div>
               </section>

               
          </>
     )
}

export default Blog;