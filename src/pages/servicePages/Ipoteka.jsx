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

import mortgage1 from '../assets/mortgage1.jpg'
import { useTranslation } from 'react-i18next';


const Ipoteka = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };



    return (
        <>
        

            <MDBContainer>
                <div className="text-center mt-5 mb-4">
                    <h2 className='text-black fw-bolder'>{t("dropLink4")}</h2>
                </div>

                <MDBRow className='justify-content-center align-items-center'>
                    <MDBCol md="6" className=" ">
                       <img src={mortgage1} alt="" className='img-fluid insCard'/>
                    </MDBCol>

                    <MDBCol md="6">
                        <div className="pic-with-items__content--item number-view mb-4  bg-white p-3 insCard">
                            
                            <h2 className="mt-2 text-black fw-bolder">{t("ipotekaHeader")}</h2>
                            <p>
                            {t("ipotekaParagraph1")}
                            </p>
                        </div>

                    </MDBCol>
                    <MDBCol lg={12} className='mt-5'>
                        <div className="pic-with-items__content--item number-view  text-black insCard bg-white p-3">
                          
                            <h2 className="mt-2 text-black fw-bolder text-center"><span className='descr'>{t("ipotekaSpan")}</span></h2>
                            <p className='mt-3'>
                           
                                <ul className='mt-3'>
                                {t("ipotekaUl")}
                                    <li>{t("ipotekaList1")}</li>
                                    <li>{t("ipotekaList2")}</li>
                                    <li>{t("ipotekaList3")}</li>
                                    <li>{t("ipotekaList4")}</li>
                                    <li>{t("ipotekaList5")}</li>
                                </ul>
                            </p>

                            <p>{t("ipotekaParagraph2")}</p>
                            <p>{t("ipotekaParagraph3")}</p>
                        </div>
                    </MDBCol>

                     
                </MDBRow>
            </MDBContainer>

         
        </>
    )

}


export default Ipoteka