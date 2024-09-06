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
    MDBIcon
} from 'mdb-react-ui-kit';
import '../App.css'

import icon from '../assets/icons/icon.png'
import ins1 from '../assets/main/ins.jpg'
import servIcon1 from '../assets/icons/servIcon1.png'
import servIcon2 from '../assets/icons/servIcon2.png'
import servIcon3 from '../assets/icons/servIcon3.png'
import servIcon4 from '../assets/icons/servIcon4.png'
import { useTranslation } from 'react-i18next';



const Contacts = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>

            <MDBContainer className='mt-5'>
                <MDBRow className='align-items-center '>
                    <MDBCol lg={6}>
                        <span className='descr text-black'>{t("mapHeader")}</span>
                        <p className='text-black'>{t("mapParagraph")}</p>
                        <p className='text-black fw-bolder'><MDBIcon fas icon="phone" /> Tel: +99371527574</p>
                        <p className='text-black fw-bolder'><MDBIcon fas icon="envelope" /> info@yashyigit.com.tm;</p>
                        <p className='text-black fw-bolder'><MDBIcon fas icon="envelope" /> m.atayev@durnukly.com.tm</p>
                        <p className='text-black fw-bolder'> <MDBIcon fas icon="home" />{t("mapAddr")}</p>
                    </MDBCol>
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


                </MDBRow>
            </MDBContainer>

        </>
    )

}


export default Contacts