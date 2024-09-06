import { useState, useEffect } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBRow, MDBCol,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBFooter,

} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'
import logo from '../src/assets/logo.png'
import durnukly from '../src/assets/durnukly.png'
import HeaderSlider from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';
import ServiceOy from './pages/servicePages/ServiceOy.jsx';
import Ipoteka from './pages/servicePages/Ipoteka.jsx';
import isBeriji from './pages/servicePages/isBeriji.jsx';
import Awtoulag from './pages/servicePages/Awtoulag.jsx';
import suwUlag from './pages/servicePages/suwUlag.jsx';
import betBagtchylyk from './pages/servicePages/betBagtchylyk.jsx';
import Karhana from './pages/servicePages/Karhana.jsx';
import rayatHukuk from './pages/servicePages/rayatHukuk.jsx';
import eyHukuk from './pages/servicePages/eyHukuk.jsx';
import Preloader from './components/Preloader.jsx';


import { useTranslation } from 'react-i18next';


import tmIcon from './assets/TM.png'
import ruIcon from './assets/RU.png'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)
  const [openBasic, setOpenBasic] = useState(false);
  const [loading, setLoading] = useState(true);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    
    // Не изменяйте стили overflow
    document.body.style.overflow = 'auto';
  
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div>
        {loading ? <Preloader /> : (<Router>

          <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer >
              <MDBNavbarBrand href='#'>

                <img src={durnukly} height={100} />

              </MDBNavbarBrand>

              <MDBNavbarToggler
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setOpenBasic(!openBasic)}
              >
                <MDBIcon icon='bars' fas />
              </MDBNavbarToggler>

              <MDBCollapse navbar className='justify-content-center' open={openBasic}>
                <MDBNavbarNav className=' mb-2 mb-lg-0 justify-content-center'>
                  <MDBNavbarItem className="me-3 ">
                    <MDBNavbarLink active aria-current='page'>
                      <Link to={'/'} className='text-black'>
                        {t("navLink")}
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem className="me-3 dropdown">
                    <a
                      className="nav-link text-black dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      {t("navLink2")}
                    </a>
                    <ul className="dropdown-menu dropdown-grid" aria-labelledby="navbarDropdown">
                      <MDBContainer className=''>
                        <MDBRow className='justify-content-center align-items-center'>
                          <li className='col-12 col-md-6 col-lg-4'>
                            <Link className="dropdown-item" to={'/serviceOy'}>{t("dropLink")}</Link>
                          </li>
                          <li className='col-12 col-md-6 col-lg-4'>
                            <Link className="dropdown-item" to={'/awtoulag'}>{t("dropLink2")}</Link>
                          </li>
                          <li className='col-12 col-md-6 col-lg-4'>
                            <Link className="dropdown-item" to={'/karhana'}>{t("dropLink3")}</Link>
                          </li>
                          <li className='col-12 col-md-6 col-lg-4'>
                            <Link className="dropdown-item" to={'/ipoteka'}>{t("dropLink4")}</Link>
                          </li>
                          <li className='col-12 col-md-6 col-lg-4'>
                            <Link className="dropdown-item" to={'/suwulag'}>{t("dropLink5")}</Link>
                          </li>
                          <li className='col-12 col-md-6 col-lg-4'>
                            <Link className="dropdown-item" to={'/rayatHukuk'}>{t("dropLink6")}</Link>
                          </li>
                          <li className='col-12 col-md-6 col-lg-4'>
                            <Link className="dropdown-item" to={'/isBeriji'}>{t("dropLink7")}</Link>
                          </li>
                          <li className='col-12 col-md-6 col-lg-4'>
                            <Link className="dropdown-item" to={'/betbagtchylyk'}>{t("dropLink8")}</Link>
                          </li>
                          <li className='col-12 col-md-6 col-lg-4'>
                            <Link className="dropdown-item" to={'/hususyEyechilik'}>{t("dropLink9")}</Link>
                          </li>
                        </MDBRow>
                      </MDBContainer>
                    </ul>
                  </MDBNavbarItem>


                  <MDBNavbarItem className="me-3 active">
                    <MDBNavbarLink className='active'>
                      <Link to={'/about'} className='text-black'>
                        {t("navLink3")}
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  {/* <MDBNavbarItem className="me-3">
          <MDBNavbarLink className='active' >

            Kalkulýator

          </MDBNavbarLink>
        </MDBNavbarItem> */}

                  <MDBNavbarItem className="me-3">
                    <MDBNavbarLink className='active' >
                      <Link to={'/contacts'} className='text-black'>
                        {t("navLink4")}
                      </Link>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <Link className='ml-4' onClick={() => changeLanguage('en')} ><img src={tmIcon} alt="" /></Link>
                  <Link className='mx-4' onClick={() => changeLanguage('ru')} ><img src={ruIcon} alt="" /></Link>

                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>


          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/serviceOy' Component={ServiceOy}></Route>
            <Route path='/ipoteka' Component={Ipoteka}></Route>
            <Route path='/isBeriji' Component={isBeriji}></Route>
            <Route path='/awtoulag' Component={Awtoulag}></Route>
            <Route path='/suwulag' Component={suwUlag}></Route>
            <Route path='/betbagtchylyk' Component={betBagtchylyk}></Route>
            <Route path='/karhana' Component={Karhana}></Route>
            <Route path='/rayatHukuk' Component={rayatHukuk}></Route>
            <Route path='/hususyEyechilik' Component={eyHukuk}></Route>
            <Route path='/about' Component={About}></Route>
            <Route path='/contacts' Component={Contacts}></Route>
          </Routes>



          <MDBFooter bgColor='light' className='mt-5 text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center    justify-conten  p-4 border-bottom'>
              <div className='me-5 d-none d-lg-block'>
                <span className='text-black'>{t("socialLinks")}</span>
              </div>

              <div>


                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='black' fab icon='instagram' />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='black' fab icon='linkedin' />
                </a>

              </div>
            </section>

            <section className='text-black'>
              <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                      <img src={durnukly} className='img-fluid w-75' alt="" />

                    </h6>
                    <p>

                    </p>
                  </MDBCol>

                  <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>{t("footerHeader1")}</h6>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navLink")}
                      </Link>
                    </p>
                    <p>
                      <Link to={'/about'} className='text-reset'>
                        {t("navLink3")}
                      </Link>
                    </p>
                    <p>
                      <Link to={'/contacts'} className='text-reset'>
                        {t("navLink4")}
                      </Link>
                    </p>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navLink5")}
                      </Link>
                    </p>
                  </MDBCol>

                  <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>{t("footerHeader2")}</h6>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navLink6")}

                      </Link>
                    </p>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navLink7")}
                      </Link>
                    </p>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navLink2")}
                      </Link>
                    </p>
                    <p>
                      <Link to={'/'} className='text-reset'>
                        {t("navLink8")}
                      </Link>
                    </p>
                  </MDBCol>

                  <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>{t("footerHeader3")}</h6>
                    <p>
                      <MDBIcon color='secondary' icon='home' className='me-2' />
                      Aşgabat ş., 1971 köçe, 19
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='envelope' className='me-3' />
                      info@durnukly.com.tm
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='envelope' className='me-3' />
                      m.atayev@durnukly.com.tm
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='phone' className='me-3' /> +993 71 52 75 74
                    </p>
                    <p>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
              <p>{t("footerTxt")}</p>
            </div>
          </MDBFooter>
        </Router>)}



      </div>
    </>
  )
}

export default App
