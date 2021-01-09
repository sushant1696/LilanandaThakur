import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Gallery() {
    return (
        <div style={{backgroundColor: "#7CFC00"}}>
            <h1> Welcome to Gallery</h1>
            <Carousel >
                <Carousel.Item>
                    <img
                        src="im0.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Birendra Nagar Ashram </h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="im1.jpg"
                        alt="second slide"
                    />
                    <Carousel.Caption>
                        <h3>Birendra Nagar Asram Gate</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="im2.jpg"
                        alt="third slide"
                    />
                    <Carousel.Caption>
                        <h3>L.N.B.H School Pagol Baba Mandir</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="im3.jpg"
                        alt="third slide"
                    />
                    <Carousel.Caption>
                        <h3>MAA Kali</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="im4.jpg"
                        alt="third slide"
                    />
                    <Carousel.Caption>
                        <h3>MAA Kali Mandir</h3>
                       
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
                        src="im6.jpg"
                        alt="third slide"
                    />
                    <Carousel.Caption>
                        <h3>Mokti Sthan</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="im7.jpg"
                        alt="third slide"
                    />
                    <Carousel.Caption>
                        <h3>Shiva Mandir</h3>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Gallery;