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

import suwUlag1 from '../assets/yacht.jpg'
import { useTranslation } from 'react-i18next';



const suwUlag = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>


            <MDBContainer>
                <div className="text-center mt-5 mb-4">
                    <h2 className='text-black fw-bolder'>{t("dropLink5")}</h2>
                </div>

                <MDBRow className='justify-content-center align-items-center'>
                    <MDBCol md="6" className=" ">
                        <img src={suwUlag1} alt="" className='img-fluid insCard' />
                    </MDBCol>

                    <MDBCol md="6">
                        <div className="pic-with-items__content--item number-view mb-4  bg-white p-3 insCard">
                            <h2 className="mt-2 text-black fw-bolder">{t("suwHeader1")}</h2>
                            <p>{t("suwParagraph1")}</p>
                        </div>
                    </MDBCol>

                    <MDBCol lg={12} className='mt-5'>
                        <div className="pic-with-items__content--item number-view  text-black insCard bg-white p-3">

                            <h2 className="mt-2 text-black fw-bolder text-center"><span className='descr'>{t("suwSpan1")}</span></h2>
                            <p className='mt-3'>{t("suwParagraph2")}</p>
                            <h2 className="mt-2 text-black fw-bolder text-center"><span className='descr'>{t("suwSpan2")}</span></h2>
                            <h6>{t("suwHeader2")}</h6>
                            <ul>
                                <li>{t("suwList1")}</li>
                                <li>{t("suwList2")}</li>
                                <li>{t("suwList3")}</li>
                                <li>{t("suwList4")}</li>
                                <li>{t("suwList5")}</li>
                                <li>{t("suwList6")}</li>
                                <li>{t("suwList7")}</li>
                                <li>{t("suwList8")}</li>
                            </ul>


                        </div>
                    </MDBCol>


                </MDBRow>
            </MDBContainer>


        </>
    )

}


export default suwUlag