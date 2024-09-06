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

import homeIns1 from '../assets/homeIns1.jpg'
import homeIns2 from '../assets/homeIns2.jpg'
import { useTranslation } from 'react-i18next';


const ServiceOy = () => {
    // const insuranceData = [
    //     {
    //         title: "Jaýyň abatlaýyş işleri",
    //         description: "Pol, diwarlar, potolok, penjireler ýa-da sanitariýa enjamlarynyň abatlaýyş çykdajylaryny öwezini dolarys.",
    //         imgSrc: iconLadder,
    //         altText: "Jaýyň abatlaýyş işleri",
    //     },
    //     {
    //         title: "Diwarlar we girelgeler",
    //         description: "Göteriji diwarlar, balkon, lodjiýa ýa-da terassa zeper ýeten halatynda çykdajylary öwezini dolarys",
    //         imgSrc: "https://cdn.ingos.ru/icons/property__flat-icon-wall.svg",
    //         altText: "Diwarlar we girelgeler",
    //     },
    //     {
    //         title: "Tebigy betbagtçylyklardan zeper",
    //         description: "Jaý tebigy betbagtçylyklardan zyýan çeken ýagdaýynda, çykdajylary öwezini dolarys",
    //         imgSrc: "https://cdn.ingos.ru/icons/property__flat-icon-window-water.svg",
    //         altText: "Tebigy betbagtçylyklardan zeper",
    //     },
    //     {
    //         title: "Goňşularyň emlägine zeper ýetirmek",
    //         description: "Eger goňşularyň emlägine siziň ýalňyşlygyňyz sebäpli zyýan ýetse, abatlaýyş çykdajylaryny öwezini dolarys.",
    //         imgSrc: "https://cdn.ingos.ru/icons/insurance-conditions__people-icon.svg",
    //         altText: "Goňşularyň emlägine zeper ýetirmek",
    //     },
    //     {
    //         title: "Mebel we enjamlar",
    //         description: "Öý enjamlary, mebel, elektronika we beýleki zatlar zeper ýeten halatynda, satyn alyş ýa-da abatlaýyş üçin pul töleýäris.",
    //         imgSrc: "https://cdn.ingos.ru/icons/property__flat-icon-coach.svg",
    //         altText: "Mebel we enjamlar",
    //     },
    //     {
    //         title: "Şahsy zatlar",
    //         description: "Kompýuter, üstki eşikler, çemodanlar, sport enjamlary ogurlanan ýa-da bilkastlaýyn zeper ýeten ýagdaýynda, hatda jaýyň daşynda bolsa-da, çykdajylary öwezini dolarys.",
    //         imgSrc: "https://cdn.ingos.ru/icons/property__flat-icon-laptop-dress.svg",
    //         altText: "Şahsy zatlar",
    //     },

    // ];
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };



    return (
        <>
            {/* <MDBConjustify-content-center align-items-centertainer className="my-5">
                <h2 className="text-center mb-4">Näme zatlary ätiýaçlandyryp bolýar</h2>
                <MDBRow className='justify-content-evenly p-3'>
                    {insuranceData.map((item, index) => (
                        <MDBCol lg="3" key={index} className="mb-4 mx-5 ps-3 pt-3 pb-3  insCard bg-white">
                            <img src={item.imgSrc} alt={item.altText} className="img-fluid mb-3" />
                            <div >
                                <h5 className="h5 text-01-color">{item.title}</h5>
                                <p className="text-02-color">{item.description}</p>
                            </div>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer> */}

            <MDBContainer>
                <div className="text-center mt-5 mb-4">
                    <h2 className='text-black fw-bolder'>{t("dropLink")}</h2>
                </div>

                <MDBRow className='justify-content-center align-items-center'>
                    <MDBCol md="6" className=" ">
                        <img src={homeIns1} alt="" className='img-fluid insCard' />
                    </MDBCol>

                    <MDBCol md="6">
                        <div className="pic-with-items__content--item number-view mb-4  bg-white p-3 insCard">
                            {/* <div className="pic-with-items__content--item__number">1</div> */}
                            <h2 className="mt-2 text-black fw-bolder">{t("homeHeader1")}</h2>
                            <p>
                                {t("homeParagraph1")}
                            </p>
                            <p>
                                {t("homeParagraph2")}
                            </p>
                        </div>

                    </MDBCol>

                    <MDBCol lg={12}>
                        <h2 className="mt-2 text-black fw-bolder text-center"><span className='descr'>{t("homeSpan1")}</span></h2>

                        <p>
                            {t("dropLink5")}
                        </p>

                        <h2 className="mt-2 text-black fw-bolder text-center"><span className='descr'>{t("homeSpan2")}</span></h2>
                        <p>{t("homeParagraph4")}</p>

                        <h2 className="mt-2 text-black fw-bolder text-center"><span className='descr'>{t("homeSpan3")}</span></h2>
                        <p>{t("homeParagraph5")}</p>

                    </MDBCol>

                </MDBRow>
            </MDBContainer>


        </>
    )

}


export default ServiceOy