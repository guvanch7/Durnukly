import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
    MDBBtn,
    MDBCarouselCaption
} from 'mdb-react-ui-kit';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



import sliderImg3 from '../assets/carousel-img/slider-image3.jpg'
import sliderImg2 from '../assets/carousel-img/slider-image2.jpg'
import sliderImg1 from '../assets/carousel-img/slider-image1.jpg'

const HeaderSlider = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };


    return (
        <MDBContainer className="custom-carousel-container mt-5 d-none d-md-block">
            <MDBCarousel showControls className="custom-carousel rounded">
                <MDBCarouselItem itemId={1}>
                    <img src={sliderImg1} className='d-block w-100 rounded-8' alt='Slide 1' />
                    <div className='mask rounded-8' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                    <MDBCarouselCaption>
                        <h2 className='txtHeader1 display-5 fw-bolder'>{t("companyName")} </h2>
                        <p className='fs-5'>{t("headerTxt1")}</p>
                        <Link className='btn text-white' to={'/about'} style={{ backgroundColor: '#002c5c' }}>{t("btn1")}</Link>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <img src={sliderImg2} className='d-block w-100 rounded-8' alt='Slide 2' />
                    <div className='mask rounded-8' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                    <MDBCarouselCaption>
                        <h2 className='txtHeader1 display-5  fw-bolder'>{t("dropLink2")}</h2>
                        <p className='fs-5'>{t("headerTxt2")}</p>
                        <Link to={'/awtoulag'} className='btn text-white' style={{ backgroundColor: '#002c5c' }}>{t("btn1")}</Link>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <img src={sliderImg3} className='d-block w-100 rounded-8' alt='Slide 3' />
                    <div className='mask rounded-8' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                    <MDBCarouselCaption>
                        <h2 className='txtHeader1 display-5 fw-bolder'>{t("dropLink")}</h2>
                        <p className='fs-5'>{t("headerTxt3")}</p>
                        <Link to={'/serviceOy'} className='btn text-white' style={{ backgroundColor: '#002c5c' }}>{t("btn1")}</Link>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarousel>
        </MDBContainer>

    );
}

export default HeaderSlider;
