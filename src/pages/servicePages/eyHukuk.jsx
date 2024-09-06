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
import '../../App.css'

import yasJay from '../assets/yasayysJay.jpg'
import { useTranslation } from 'react-i18next';


const eyHukuk = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>


            <MDBContainer>
                <div className="text-center mt-5 mb-4">
                    <h2 className='text-black fw-bolder'>   {t("dropLink9")}</h2>
                </div>

                <MDBRow className='justify-content-center align-items-center'>
                    <MDBCol md="6" className=" ">
                        <img src={yasJay} alt="" className='img-fluid insCard' />
                    </MDBCol>

                    <MDBCol md="6">
                        <div className="pic-with-items__content--item number-view mb-4  bg-white p-3 insCard">
                            <h2 className="mt-2 text-black fw-bolder">{t("houseInsHeader")} </h2>
                            <p>{t("houseInsParagraph")}</p>
                        </div>
                    </MDBCol>
                     




                </MDBRow>
            </MDBContainer>


        </>
    )

}


export default eyHukuk