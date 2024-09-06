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

import karhana1 from '../assets/karhana1.jpg'
import { useTranslation } from 'react-i18next';


const Karhana = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>


            <MDBContainer>
                <div className="text-center mt-5 mb-4">
                    <h2 className='text-black fw-bolder'>{t("dropLink3")}</h2>
                </div>

                <MDBRow className='justify-content-center align-items-center'>
                    <MDBCol md="6" className=" ">
                        <img src={karhana1} alt="" className='img-fluid insCard' />
                    </MDBCol>

                    <MDBCol md="6">
                        <div className="pic-with-items__content--item number-view mb-4  bg-white p-3 insCard">
                            <h2 className='text-center text-black'>  {t("companyInsSpan")}</h2>
                        <ul>
                            <li> {t("companyInsList1")}</li>
                            <li>{t("companyInsList2")}</li>
                            <li>{t("companyInsList3")}</li>
                            <li>{t("companyInsList4")}</li>
                            <li>{t("companyInsList5")}</li>
                            <li>{t("companyInsList6")}</li>
                            <li>{t("companyInsList7")}</li>
                            <li>{t("companyInsList8")}</li>
                            <li>{t("companyInsList9")}</li>
                        </ul> 
                        </div>
                    </MDBCol>

                    <MDBCol lg={12} className='bg-white p-3 insCard'>
                       
                        


                        <p>{t("companyInsPargraph2")}</p>
                        <ul>
                            <li>{t("companyInsList21")}</li>
                            <li>{t("companyInsList22")}</li>
                            <li>{t("companyInsList23")}</li>
                            <li>{t("companyInsList24")}</li>
                            <li>{t("companyInsList25")}</li>
                            <li>{t("companyInsList26")}</li>
                            <li>{t("companyInsList27")}</li>
                            <li>{t("companyInsList28")}</li>
                            <li>{t("companyInsList29")}</li>
                            <li>{t("companyInsList30")}</li>
                            <li>{t("companyInsList31")}</li>
                            <li>{t("companyInsList32")}</li>
                            <li>{t("companyInsList33")}</li>
                            <li>{t("companyInsList34")}</li>
                        </ul>
                    </MDBCol>




                </MDBRow>
            </MDBContainer>


        </>
    )

}


export default Karhana