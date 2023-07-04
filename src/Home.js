import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Barjhar from "./Barjhar";
function Home() {
    return (
        <div style={{backgroundColor: "#7CFC00"}}>
            <div>
                {/* <img src="im0.jpg" width="30%" hight="50%" alt=""></img> */}
                <Carousel >
                
                {/* <Carousel.Item>
                    <img
                        src="joom.jpg" 
                        alt="First slide"
                    />
                    <Carousel.Caption >
                    <mark style ={{backgroundColor: "green"}}>Birendra Nagar Ashram</mark> 
                    </Carousel.Caption>
                </Carousel.Item> */}
              
                <Carousel.Item>
                    <img
                        src="joom.jpg"  width="100%" hight="50%"
                        alt="second slide"
                    />
                    <Carousel.Caption>
                    <mark style ={{backgroundColor: "green"}}>Shiva Mandir</mark> 
                     
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="mountain.jpg"  width="100%" hight="50%"
                        alt="second slide"
                    />
                    <Carousel.Caption>
                    <mark style ={{backgroundColor: "green"}}>Shiva Mandir</mark> 
                     
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="danesh.jpg"  width="100%" hight="40%"
                        alt="second slide"
                    />
                    <Carousel.Caption>
                    <mark style ={{backgroundColor: "green"}}>Shiva Mandir</mark> 
                     
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div style={{backgroundColor: "white"}}><Barjhar/></div>
            
                </div> 
                
        </div>
        
    )
}
export default Home;