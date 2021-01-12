import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Barjhar from "./Barjhar";
function Home() {
    return (
        <div style={{backgroundColor: "#7CFC00"}}>
            <div>
                {/* <img src="im0.jpg" width="30%" hight="50%" alt=""></img> */}
                <Carousel >
                
                <Carousel.Item>
                    <img
                        src="gm1.jpg" 
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style ={{backgroundColor: "green"}}>Birendra Nagar Ashram </h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="im0.jpg" width="50%" hight="50%"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style ={{backgroundColor: "green"}}>Birendra Nagar Ashram </h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="im7.jpg"  width="100%" hight="50%"
                        alt="second slide"
                    />
                    <Carousel.Caption>
                        <h3 style ={{backgroundColor: "green"}}>Shiva Mandir</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="im5.jpg"
                        alt="third slide"
                    />
                    <Carousel.Caption>
                        <h3 style ={{backgroundColor: "green"}}>Barjhar Hospital</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                
                 <Carousel.Item>
                    <img
                        src="School.jpg"
                        alt="fifth slide"
                    />
                    <Carousel.Caption>
                        <h3 style ={{backgroundColor: "green"}}>L.N.B.H School </h3>
                       
                    </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img
                        src="pokhuri1.jpg"
                        alt="sixth slide"
                    />
                    <Carousel.Caption>
                        <h3 style ={{backgroundColor: "green"}}></h3>
                       
                    </Carousel.Caption>
                </Carousel.Item> 
                 <Carousel.Item>
                    <img
                        src="shivbarigate.jpg"
                        alt="seventh slide"
                    />
                    <Carousel.Caption>
                        <h3 style ={{backgroundColor: "green"}}>Shiv Bari Gate</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
              
                <Carousel.Item>
                    <img
                        src="line murti.jpg" width="50%" hight="50%"
                        alt="fourth slide"
                    />
                    <Carousel.Caption>
                        <h3 style ={{backgroundColor: "green"}}>Statue in front of Birendra Nagar Ashram</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img
                        src="line2.jpg" width="50%" hight="50%"
                        alt="fourth slide"
                    />
                    <Carousel.Caption>
                        <h3 >Statue in front of Birendra Nagar Ashram</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item> 
                
            </Carousel>
            <div style={{backgroundColor: "white"}}><Barjhar/></div>
            
                </div> 
                
        </div>
        
    )
}
export default Home;