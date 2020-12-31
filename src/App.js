import React from 'react';
import './App.css'
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Page2 from './Page2';

class App extends React.Component {
    render() {
        return (
            <div>
                <html>

                    <head>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"/>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
                        <script src="/Users/ayaanadil/Desktop/untitled folder/index_2.js"></script>

                    </head>

                    <body class="hero-anime"> 

                        <div class="navigation-wrap bg-light start-header start-style">
                        <div class="container">
                            <div class="row">
                            <div class="col-12">
                                <nav class="navbar navbar-expand-md navbar-light">
                                
                                <a id="log" class="navbar-brand px-2" href="https://front.codes/" target="_blank"><img src="https://f6s-public.s3.amazonaws.com/profiles/2588873_original.jpg" alt=""/></a>  
                                
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto py-4 py-md-0">
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active px-2">
                                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                                        <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        </div>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 px-2">
                                        <a class="nav-link" href="For_Individuals.html">For Individuals</a>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 px-2">
                                        <a class="nav-link" href="#">For Tech Employers</a>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 px-2">
                                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">For Property Managers</a>
                                        <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        </div>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 px-2">
                                        <a class="nav-link" href="#">For Gig Economies</a>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 px-2">
                                        <a class="nav-link" href="#">Social Media Check</a>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 px-2">
                                        <a class="nav-link" href="#">How It Works</a>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 px-2">
                                        <a class="nav-link" href="#">About</a>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 px-3">
                                        <a class="nav-link" href="#">Contact</a>
                                    </li> 
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 px-3">
                                        <a class="nav-link" href="#">Free Demo</a>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 px-3">
                                        <a class="nav-link" href="#">Login</a>
                                    </li>                
                                    </ul>
                                </div>
                                
                                </nav>    
                            </div>
                            </div>
                        </div>
                        </div>



                        {/** Text for Section-1 */}
                        <h1 id="starter_text"> Reputationaire</h1>
                        <h5 id="starter_text_2">Your most valuable asset is the number of people who know, like & trust you.</h5>


                        {/** Button in Section 1 */}
                        <Button id="start_button" variant="primary">Start Free Trial</Button> 


                        {/*Section Division */}
                        <div id= "white_strip">
                        </div>  


                        {/*Section - 2 images and text */}
                        <div id="Blue_Section2">

                            <h1 id = "midtext">See people do the job,<br/>before they get the job.</h1>
                            <h5 id = "midtext_2">Focus on performance, not background. Hire people who are<br/>great at doing the job, not just great at interviewing for it.</h5>
                            
                            <img id = "img1" src="https://blogs.forbes.com/rodgerdeanduncan/files/2018/08/Work.jpg"/>

                            <h5 id="heading_1">Customizable assessments</h5>
                            <h6 id="content1">Test a candidate's job-ready skills, including technical or software-<br/>specific, plus soft skills like communication or attention to detail.</h6>

                            <h5 id="heading_2">10+ immersive question types</h5>
                            <h6 id="content2">From coding challenges to video responses let you see candidates<br/>actually do the job before you make a decision.</h6>

                        <div/>



                        {/* Section-3 images and text*/}

                        <div id="White_Section3">
                            {/* Ready to use image and corresponding text */}

                            <img id="Readytouse" src="https://image.flaticon.com/icons/png/512/2158/2158535.png"/>
                            <h4 id="Readytouse_heading">Ready to Use</h4>
                            <h6 id="Readytouse_text">Create custom assessments for any job, assisted by our<br/>intelligent builder. Combine technical and interpersonal<br/>skills in one assessment for a complete candidate<br/>evaluation.</h6>

                            {/*T op Candidate Experience image and corresponding text */}

                            <img id="topcand" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1oFFRFISnhDtTv5BN_nVQiyBQ8vyFVwMqxg&usqp=CAU"/>
                            <h4 id="topcand_heading">Top candidate experience</h4>
                            <h6 id="topcand_text">Customizable branding, messages and assessment<br/>introductions bring your business to life for candidates.</h6>

                            {/* Integration image and corresponding text */}

                            <img id="integration" src="https://about.zination.com/wp-content/uploads/2018/09/integration-icon.jpg"/>
                            <h4 id="integration_heading">Seamless integration</h4>
                            <h6 id="integration_text">Pipe assessments directly into your ATS or existing hiring<br/>workflow with integrations for all your favorite tools.</h6>
                        </div>
                        </div>


                        {/* Colouring between 2 section */}
                        <div id="demobox_5">
                        </div>



                        {/* Carousel.. lets see if it works in java*/}
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">

                            {/*Add images for Carousel here*/}
                            <div class="carousel-item active">
                                <img id="carousel" class="d-block w-100" src="https://s.pngkit.com/png/small/5-59543_snapchat-logo-furthermore-facebook-logo-silver-likewise-linkedin.png" alt="First slide"/>
                            </div>

                            <div class="carousel-item">
                                <img id="carousel" class="d-block w-100" src="https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2018-04/7d5ac2254f021e67620d0ed38f6a4e79.jpeg?itok=qr4saRZd" alt="Second slide"/>
                            </div>

                            <div class="carousel-item">
                                <img id="carousel" class="d-block w-100" src="https://cdn.choosechicago.com/uploads/2019/05/loop-1800x900.jpg" alt="Third slide"/>
                            </div>

                            {/*Carousel Buttons here*/}
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                            </a>

                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                            </a>

                        </div>

                        {/*End of the screen section, with all the links... Requires editing*/}

                        <div id="demobox_6">
                            <img id="logo2" src="https://f6s-public.s3.amazonaws.com/profiles/2588873_original.jpg"/>
                            <h6 id="line1"><a href="#">Reputationaire</a><br/><br/><a href="#">Pricing</a><br/><br/><a href="#">Request Demo</a><br/><br/><a href="#">Assessment Validity</a><br/><br/><a href="#">Reputationaire API</a></h6>

                            <h6 id="line2"><a href="#">Company</a><br/><br/><a href="#">About</a><br/><br/><a href="#">Blog</a><br/><br/><a href="#">Diversity</a><br/><br/></h6>

                            <h6 id="line3"><a href="#">Support</a><br/><br/><a href="#">Employer Support</a><br/><br/><a href="#">Candidate Support</a><br/><br/></h6>

                            <h6 id="line4"><a href="#">Legal</a><br/><br/><a href="#">Terms Of Use</a><br/><br/><a href="#">Privacy Policy</a><br/><br/></h6>
                        </div>

                    </body>

                </html>

            </div>
        );
    }
}
export default App;