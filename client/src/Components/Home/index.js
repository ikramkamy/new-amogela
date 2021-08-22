import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Logo from '../../images/logo.png'
//import OwlCarousel from 'react-owl-carousel'
//import 'owl.carousel/dist/assets/owl.carousel.css'
//import 'owl.carousel/dist/assets/owl.theme.default.css'
import './home.css'
import Jus from '../../images/1 (2).png'
import Tarte from '../../images/2 (1).png'
import Esquimot from '../../images/3 (1).png'
import Gauffres from '../../images/4 (1).png'
import TarteGlacé from '../../images/5 (1).png'
import Icecream from '../../images/6 (1).png'
import Picture from '../../images/A.jpg'
import Slideimg from '../../images/B.jpg'
import Slideimg1 from '../../images/C.jpg'
import Slideimg2 from '../../images/D.jpg'

import Command from '../Command'
import Footer from '../Footer'

export default function Home() {
 var counter = 0;
const trans = 300;
var num = trans * counter;
 return (
        <div className="Home">

            <Carousel className="slide">
                <Carousel.Item className="carousselItem">
                    <img src={Slideimg1} />
                </Carousel.Item >

                <Carousel.Item className="carousselItem">
                    <img src={Slideimg2} />
                </Carousel.Item>


                <Carousel.Item className="carousselItem">
                    <img src={Slideimg} />
                </Carousel.Item>
            </Carousel>

            <div className="container">

                <div className="description">
                    <p>
                        Une fabrication artisanale basée sur des ingrédients de qualité, du lait, de la crème et des oeufs, comme au beau vieux temps. Mais aussi des gousses de vanille, du chocolat praliné et des fruits d'excellence.
                    </p>
                </div>


                <div className="glaceContainer">
                    <div className="img">
                        <img src={Picture} className="img-ac-size"/>
                    </div>

                    <div className="text">
                        <div> <h1> Amogela </h1></div>
                        <div> <h2> Une passion glacée</h2> </div>
                        <div> <p>   Une fabrication artisanale basée sur des ingrédients de qualité, du lait, de la crème et des oeufs, comme au beau vieux temps. Mais aussi</p></div>
                    </div>
                </div>


            </div>

<Command />
<Footer />

        </div>
    )
}