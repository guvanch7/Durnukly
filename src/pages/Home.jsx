import React from 'react';
import {
    MDBRow, MDBCol,
    MDBContainer,
    MDBInput,
    MDBBtn,
    MDBTextArea,
} from 'mdb-react-ui-kit';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import ins1 from '../assets/main/ins.jpg'
import HeaderSlider from '../components/Header';

import logoBg from '../assets/logo-bg.png'
import logo from '../assets/logo.png'
import icon from '../assets/icons/icon.png'


import carIns from '../assets/icons/car-ins.svg'
import ins2 from '../assets/icons/ins2.png'
import ins3 from '../assets/icons/ins3.svg'
import ins4 from '../assets/icons/ins4.png'
import ins5 from '../assets/icons/ins5.png'
import ins6 from '../assets/icons/ins6.png'
import ins7 from '../assets/icons/ins7.svg'
import ins8 from '../assets/icons/ins8.png'
import ins9 from '../assets/icons/ins9.png'

import servIcon1 from '../assets/icons/servIcon1.png'
import servIcon2 from '../assets/icons/servIcon2.png'
import servIcon3 from '../assets/icons/servIcon3.png'
import servIcon4 from '../assets/icons/servIcon4.png'

import emailIcon from '../assets/icons/emailIcon.png'
import { useTranslation } from 'react-i18next';





const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,

    };

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <HeaderSlider />
            <MDBContainer className='mt-5  card-bg' >

                <MDBRow className='align-items-center justify-content-lg-end '>
                    <MDBCol className='relative' lg={8}>
                        <h1 className='mt-5 fw-bolder display-5 text-black'>{t("header1")}</h1>
                        <span class="linee"></span>
                        <img className='img-cover d-md-block d-none' src={icon} alt="" />
                        <p className='text-black mt-5 mt-sm-5 '>
                            {t("aboutTxt1")} <br /> <br />
                            {t("aboutTxt2")}     <br /> <br />
                            {t("aboutTxt3")}
                        </p>

                        <Link className='btn text-white mt-lg-4 mb-5' to={'/about'} style={{ backgroundColor: '#002c5c' }}>{t("btn2")}</Link>
                    </MDBCol>

                    <MDBCol lg={4} sm={12}>
                        <img src={ins1} className='mt-5  mt-lg-0 img-fluid rounded-8' alt="" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer className='mt-5'>
                <MDBRow className='card-bg pb-5 justify-content-evenly'>
                    <div className='mt-5'>
                        <h1 className='text-black fw-bolder  display-5 '>{t("header2")}</h1>
                        <span className='linee2 linee'></span>
                    </div>

                    <MDBCol className='' lg={4}>
                        <Link to={'/awtoulag'} className=''>
                            <div className='insCard2 py-5 px-2 pt-4 mb-1' >
                                <img src={carIns} alt="" />
                                <h6 className='text-black mt-4'>{t("dropLink2")}</h6>
                            </div>
                        </Link>
                    </MDBCol>
                    <Slider className='col-lg-7 col-sm-12' {...settings}>
                        <MDBCol className='mb-1' lg={7}>
                            <Link to={'/rayatHukuk'} className=''>
                                <div className='py-3 insCard2 px-2 pt-4 mb-1' >

                                    <img src={ins2} className='img-fluid' width={'75rem'} alt="" />
                                    <h6 className='text-black mt-4 mb-2'> {t("dropLink6")}</h6>
                                </div>

                            </Link>
                        </MDBCol>

                        <MDBCol className='' lg={7}>
                            <Link to={'/isBeriji'} className=''>
                                <div className='insCard2 py-3 px-2 pt-4 mb-1' >
                                    <img src={ins6} className='img-fluid' width={'75rem'} alt="" />
                                    <h6 className='text-black mt-4 mb-4'> {t("dropLink7")}</h6>
                                </div>
                            </Link>
                        </MDBCol>

                        <MDBCol className='' lg={7}>
                            <Link to={'/betbagtchylyk'} className=''>
                                <div className='insCard2 py-3 px-2 pt-4 mb-1' >
                                    <img src={ins7} className='img-fluid' width={'75rem'} alt="" />
                                    <h6 className='text-black mt-4 mb-4'> {t("dropLink8")}</h6>
                                </div>
                            </Link>
                        </MDBCol>

                        <MDBCol className='' lg={7}>
                            <Link to={'/hususyEyechilik'} className=''>
                                <div className='insCard2 py-2  px-2 pt-4 mb-1' >
                                    <img src={ins8} className='img-fluid' width={'75rem'} alt="" />
                                    <h6 className='text-black mt-4 mb-4'> {t("dropLink9")}</h6>
                                </div>
                            </Link>
                        </MDBCol>

                        <MDBCol className='' lg={7}>
                            <Link to={'/suwulag'} className=''>
                                <div className='insCard2 py-3 px-2 pt-4 mb-1' >
                                    <img src={ins9} className='img-fluid' width={'125rem'} alt="" />
                                    <h6 className='text-black mt-4 mb-4'> {t("dropLink5")}</h6>
                                </div>
                            </Link>
                        </MDBCol>


                    </Slider>

                    <MDBCol className='mt-5 ' lg={4}>
                        <Link to={'/serviceOy'} className=''>
                            <div className='insCard2 py-4 px-2 pt-4 mb-1' >

                                <img src={ins3} className='img-fluid' width={'75rem'} alt="" />
                                <h6 className='text-black mt-4 mb-4'> {t("dropLink")}</h6>
                            </div>

                        </Link>
                    </MDBCol>

                    <MDBCol className='mt-5 ' lg={4}>
                        <Link to={'/karhana'} className=''>
                            <div className='insCard2 py-3 px-2 pt-3 mb-1' >
                                <img src={ins4} className='img-fluid' width={'100rem'} alt="" />
                                <h6 className='text-black mt-4 mb-4'> {t("dropLink3")}</h6>
                            </div>
                        </Link>
                    </MDBCol>

                    <MDBCol className='mt-5 ' lg={3}>
                        <Link to={'/ipoteka'} className=''>
                            <div className='insCard2 py-3 px-2 pt-4 mb-1' >
                                <img src={ins5} className='img-fluid' width={'95rem'} alt="" />
                                <h6 className='text-black mt-4 mb-4'> {t("dropLink4")}</h6>
                            </div>
                        </Link>
                    </MDBCol>

                </MDBRow>

            </MDBContainer>


            <MDBContainer className='mt-5'>
                {/* <h1 className='text-black display-5 fw-bolder'>:</h1> */}
                <MDBRow className='justify-content-between'>
                    <MDBCol className='text-black' lg={5}>
                        <span className='descr text-black'>{t("headerSpan1")}</span>
                        <h1> {t("advHeader")}</h1>
                        <p>
                            {t("advParagraph")}
                        </p>

                        <ul className='mt-5'>
                            <li>
                                <h5> <span className='listNum'>1</span> {t("advListMain1")}</h5>
                                <p>{t("advList1")}</p>
                            </li>
                            <hr />

                            <li>
                                <h5> <span className='listNum'>2</span>  {t("advListMain2")}</h5>
                                <p>{t("advList2")}</p>
                            </li>
                            <hr />
                            <li>
                                <h5> <span className='listNum'>3</span> {t("advListMain3")}</h5>
                                <p>{t("advList3")}</p>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol className='text-black' lg={6}>
                        <span className='descr text-brown'>{t("headerSpan2")}</span>
                        <h1>{t("advHeader2")}</h1>
                        <p>
                        {t("advParagraph2")}
                        </p>
                        <MDBRow className='justify-content-evenly'>

                            <MDBCol lg={5} className='bg-white insCard p-3 m-2'>
                                <img src={servIcon1} width={'75rem'} className='img-fluid' alt="" />
                                <h5 className='mt-2 fw-bold'> {t("advCardHead1")}</h5>
                                <p>{t("advCardPar1")}</p>
                            </MDBCol>

                            <MDBCol lg={5} className='bg-white insCard p-3 m-2'>
                                <img src={servIcon2} width={'95rem'} className='img-fluid' alt="" />
                                <h5 className='mt-2 fw-bold'>{t("advCardHead2")}</h5>
                                <p>{t("advCardPar2")}</p>
                            </MDBCol>

                            <MDBCol lg={5} className='bg-white insCard p-3 m-2'>
                                <img src={servIcon3} width={'75rem'} className='img-fluid' alt="" />
                                <h5 className='mt-2 fw-bold'>{t("advCardHead3")}</h5>
                                <p>{t("advCardPar3")}</p>
                            </MDBCol>

                            <MDBCol lg={5} className='bg-white insCard p-3 m-2'>
                                <img src={servIcon4} width={'70rem'} className='img-fluid' alt="" />
                                <h5 className='mt-2 fw-bold'>{t("advCardHead4")}</h5>
                                <p>{t("advCardPar4")}</p>
                            </MDBCol>
                        </MDBRow>

                    </MDBCol>


                </MDBRow>
            </MDBContainer>


            <MDBContainer>
                <MDBRow className='align-items-center justify-content-evenly'>
                    <MDBCol className='text-black' lg={6}>
                        <span className='descr text-black'> {t("headerSpan3")}</span>
                        <h4 className='mt-3 fw-bold'>{t("formHeader")}</h4>
                        <p>{t("formParagraph")}</p>

                        <form className=' card-bg py-5'>
                            <MDBRow className='mb-4'>
                                <MDBCol className=''>
                                    <MDBInput id='form3Example1' label={t("formInput1")} />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput id='form3Example2'  label={t("formInput2")} />
                                </MDBCol>
                            </MDBRow>
                            <MDBInput className='mt-3' type='email' id='form3Example3'  label={t("formInput3")} />

                            <MDBTextArea className='mt-3'  label={t("formInput4")} id="textAreaExample" rows={4} />



                            <MDBBtn type='submit' className='my-4' block>
                            {t("formBtn")}
                            </MDBBtn>
                        </form>
                    </MDBCol>

                    <MDBCol className='text-center d-none d-md-block' lg={6}>
                        <img src={emailIcon} className="floating" alt="" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            <MDBContainer fluid className='mt-5'>
                <MDBRow className='card-bg justify-content-start  align-items-center' style={{ padding: 'unset' }}>

                    <MDBCol className='' style={{ padding: 'unset' }} lg={12}>
                        <div className='map-container' style={{ position: 'relative', overflow: 'hidden', borderRadius: '50px' }}>
                            <a
                                href="https://yandex.ru/maps/10324/ashgabat/?utm_medium=mapframe&utm_source=maps"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                            >
                                Ашхабад
                            </a>
                            <a
                                href="https://yandex.ru/maps/10324/ashgabat/?ll=58.364737%2C37.918791&utm_medium=mapframe&utm_source=maps&z=18"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                            >
                                Ашхабад — Яндекс Карты
                            </a>
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=58.364737%2C37.918791&z=18"
                                width="560"
                                height="400"
                                frameBorder="1"
                                allowFullScreen
                                style={{ position: 'relative' }}
                                title="Yandex Map"
                            ></iframe>
                        </div>
                    </MDBCol>

                    <MDBCol lg={5} xl={3} className='card-bg mapCard ms-lg-5' style={{}}>
                        <h1 className='text-black text-center fw-bolder mt-3'>{t("mapHeader")}</h1>
                        <hr />
                        <p> {t("mapParagraph")}</p>
                        <div class="address   pt-3"><p class="text-black"><i class="fa fa-phone"></i> +993 (71) 52 75 74 </p> </div>
                        <p class=" text-black"><i class="fa fa-envelope fa-lg  "></i> info@durnukly.com.tm</p>
                        <p class="text-black"><i class="fa fa-home fa-lg"></i> {t("mapAddr")}</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </>
    )


}

export default Home;
