import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Gallery() {
    return (
        <div style={{backgroundColor: "#7CFC00"}}>
            <Carousel >
                <Carousel.Item>
                    <img
                        src="im0.jpg" width="50%" hight="50%"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Birendra Nagar Ashram </h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="im7.jpg"  width="100%" hight="50%"
                        alt="second slide"
                    />
                    <Carousel.Caption>
                        <h3>Shiva Mandir</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="im5.jpg"
                        alt="third slide"
                    />
                    <Carousel.Caption>
                        <h3>Barjhar Hospital</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                
                 <Carousel.Item>
                    <img
                        src="School.jpg"
                        alt="fifth slide"
                    />
                    <Carousel.Caption>
                        <h3>L.N.B.H School Pagol Baba Mandir</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img
                        src="pokhuri1.jpg"
                        alt="sixth slide"
                    />
                    <Carousel.Caption>
                        <h3>pond</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item> 
                 <Carousel.Item>
                    <img
                        src="shivbarigate.jpg"
                        alt="seventh slide"
                    />
                    <Carousel.Caption>
                        <h3>Shiv Bari Gate</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
              
                <Carousel.Item>
                    <img
                        src="line murti.jpg" width="50%" hight="50%"
                        alt="fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>Murti</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img
                        src="line2.jpg" width="50%" hight="50%"
                        alt="fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>Murti2</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item> 
                
            </Carousel>
        </div>
    )
}
export default Gallery;