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

import rayatHukuk1 from '../assets/rayatHukuk.jpg'
import { useTranslation } from 'react-i18next';


const betBagtchylyk = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>


            <MDBContainer>
                <div className="text-center mt-5 mb-4">
                    <h2 className='text-black fw-bolder'>{t("dropLink6")}</h2>
                </div>

                <MDBRow className='justify-content-center align-items-center'>
                    <MDBCol md="6" className=" ">
                        <img src={rayatHukuk1} alt="" className='img-fluid insCard' />
                    </MDBCol>

                    <MDBCol md="6">
                        <div className="pic-with-items__content--item number-view mb-4  bg-white p-3 insCard">
                            <h2 className="mt-2 text-black fw-bolder">{t("thirdSideInsHead")}</h2>
                            <p>{t("thirdSideInsParagraph")}</p>
                        </div>
                    </MDBCol>
                    {/* <MDBCol className='bg-white p-3 insCard' lg={12}>
                        <p className='text-center'><span className='descr text-black'>Raýat-Hukuk Jogapkärçiliginiň Töwekgelçiligi</span></p>
                        <p>Ätiýaçlandyryş şertnamasy boýunça şu aşakdakylar bilen bagly raýat-hukuk jogapkärçiligi babatynda töwekgelçilik ätiýaçlandyrylyp bilner:</p>
                        <ul>
                            <li>-üçünji şahslaryň ömrüne, saglygyna ýetirilen zyýan üçin;</li>
                            <li>-üçünji şahslaryň emlägine ýetirilen zelel üçin;</li>
                            <li>-üçünji şahslaryň ömrüne, saglygyna we emlägine ýetirilen zyýan (zelel) üçin.                            </li>
                        </ul>
                        <p>
                        Ätiýaçlandyryş şertnamasyna görä ätiýaçlandyryş pul möçberi Ätiýaçlandyrýan bilen Ätiýaçlandyryjynyň arasyndaky ylalaşyk boýunça töwekgelçiligiň her bir görnüşi (üçünji şahslaryň ömrüne, saglygyna we(ýa-da) emlägine ýetirilen zyýan) boýunça jogapkärçiligiň bellenen çäklerinde kesgitlenýär.
                        </p>
                    </MDBCol> */}

                 


                </MDBRow>
            </MDBContainer>


        </>
    )

}


export default betBagtchylyk