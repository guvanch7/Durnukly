import React from 'react';
import {
    MDBRow, MDBCol,
    MDBContainer,
    MDBInput,
    MDBBtn,
    MDBCardImage,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBTextArea,
} from 'mdb-react-ui-kit';
import '../App.css'

import icon from '../assets/icons/icon.png'
import ins1 from '../assets/main/ins.jpg'
import servIcon1 from '../assets/icons/servIcon1.png'
import servIcon2 from '../assets/icons/servIcon2.png'
import servIcon3 from '../assets/icons/servIcon3.png'
import servIcon4 from '../assets/icons/servIcon4.png'
import { useTranslation } from 'react-i18next';




const About = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>


            <MDBContainer className='mt-5  card-bg' >

                <MDBRow className='align-items-center justify-content-lg-end '>
                    <MDBCol className='relative' lg={8}>
                        <h1 className='mt-5 fw-bolder display-5 text-black'>{t("header1")}</h1>
                        <span class="linee"></span>
                        <img className='img-cover' src={icon} alt="" />
                        <p className='text-black mt-5 mt-sm-5 '>
                        {t("aboutTxt1")} <br /> <br />
                            {t("aboutTxt2")}     <br /> <br />
                            {t("aboutTxt3")}
                        </p>

                    </MDBCol>

                    <MDBCol lg={4} sm={12}>
                        <img src={ins1} className='mt-5  mt-lg-0 img-fluid rounded-8' alt="" />
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

        </>
    )

}


export default About