import '../css/Services.css'
import {useEffect, useState} from "react";
import Particle from "./Particle.jsx";
const ServicesA = new URL('./../assets/imgs/Services/ServicesA.PNG', import.meta.url);
const ServicesB = new URL('./../assets/imgs/Services/ServicesB.PNG', import.meta.url);
const ServicesC = new URL('./../assets/imgs/Services/ServicesC.PNG', import.meta.url);
const ServicesD = new URL('./../assets/imgs/Services/ServicesD.PNG', import.meta.url);
const ServicesE = new URL('./../assets/imgs/Services/ServicesE.PNG', import.meta.url);
const ServicesF = new URL('./../assets/imgs/Services/ServicesF.PNG', import.meta.url);
const ServicesG = new URL('./../assets/imgs/Services/ServicesG.PNG', import.meta.url);
const ServicesH = new URL('./../assets/imgs/Services/ServicesH.PNG', import.meta.url);
const ServicesI = new URL('./../assets/imgs/Services/ServicesI.PNG', import.meta.url);
const ServicesJ = new URL('./../assets/imgs/Services/ServicesJ.PNG', import.meta.url);
const ServicesK = new URL('./../assets/imgs/Services/ServicesK.PNG', import.meta.url);
const ServicesL = new URL('./../assets/imgs/Services/ServicesL.PNG', import.meta.url);
const ServicesM = new URL('./../assets/imgs/Services/ServicesM.PNG', import.meta.url);
const ServicesN = new URL('./../assets/imgs/Services/ServicesN.PNG', import.meta.url);
const ServicesO = new URL('./../assets/imgs/Services/ServicesO.PNG', import.meta.url);
const ServicesP = new URL('./../assets/imgs/Services/ServicesP.PNG', import.meta.url);
const AirplaneTicket = new URL('./../assets/imgs/Services/AirplaneTicket.PNG', import.meta.url);
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {NavLink} from "react-router-dom";

const Services = () => {

    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timerID = setInterval(
            () => tick(),
            1000
        );
        return () => {
            clearInterval(timerID);
        }
    }, []);

    function tick() {
        setDate(new Date());
    }

    return (
        <div className="col-sm-10 col-lg-8 m-auto bg-white services mt-5">

            <header id="servicesHeader" className="d-flex justify-content-around text-white px-5">
                <section className="d-flex flex-column">
                    <div className="d-flex align-items-center">
                        <i className="bi bi-battery-full fs-1"></i>
                        <i className="bi bi-wifi-2 fs-1 ms-2"></i>
                        <i className="bi bi-reception-4 fs-2 ms-2"></i>
                    </div>
                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="bi bi-list fs-1 text-white"></i>
                    </button>
                </section>

                <section id="servicesText" className="d-flex align-items-end fs-4 me-4"><p>سرویس ها</p></section>

                <section className="d-flex flex-column justify-content-around  text-center">
                    <span className="fs-3 fw-bold">
                    {date.getHours()}:{date.getMinutes()}
                    </span>

                        <div style={{textAlign: "center"}}>
                            <svg width="65" height="30" viewBox="0 0 65 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <a href="#">
                                <path d="M56.8333 23.5017H52.1666L46.975 26.955C46.205 27.4683 45.1666 26.9201 45.1666 25.9867V23.5017C41.6666 23.5017 39.3333 21.1684 39.3333 17.6684V10.6683C39.3333 7.16832 41.6666 4.83499 45.1666 4.83499H56.8333C60.3333 4.83499 62.6666 7.16832 62.6666 10.6683V17.6684C62.6666 21.1684 60.3333 23.5017 56.8333 23.5017Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M51 15.2533V15.0084C51 14.215 51.49 13.795 51.98 13.4567C52.4584 13.13 52.9366 12.71 52.9366 11.94C52.9366 10.8667 52.0733 10.0033 51 10.0033C49.9267 10.0033 49.0634 10.8667 49.0634 11.94" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M50.9948 18.0417H51.0053" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </a>
                                <a href="#">
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.4489 18.5449H21.5575C19.2653 18.5449 17.3996 16.7447 17.3984 14.5327C17.3984 12.3184 19.2641 10.517 21.5575 10.5159H26.4489C26.9491 10.5159 27.3551 10.9079 27.3551 11.3909C27.3551 11.8739 26.9491 12.2659 26.4489 12.2659H21.5575C20.2634 12.267 19.2109 13.2832 19.2109 14.5315C19.2109 15.7787 20.2646 16.7949 21.5575 16.7949H26.4489C26.9491 16.7949 27.3551 17.1869 27.3551 17.6699C27.3551 18.1529 26.9491 18.5449 26.4489 18.5449Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.1105 15.3342H21.7335C21.2332 15.3342 20.8272 14.9422 20.8272 14.4592C20.8272 13.9762 21.2332 13.5842 21.7335 13.5842H22.1105C22.6107 13.5842 23.0167 13.9762 23.0167 14.4592C23.0167 14.9422 22.6107 15.3342 22.1105 15.3342Z" fill="white"/>
                                <mask id="mask0_574_6245" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="2" y="3" width="26" height="23">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.41669 3.5H27.355V25.8684H2.41669V3.5Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_574_6245)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.66378 5.25C6.66712 5.25 4.2287 7.60433 4.2287 10.4977V18.8708C4.2287 21.7642 6.66712 24.1185 9.66378 24.1185H20.1086C23.1053 24.1185 25.5425 21.7642 25.5425 18.8708V10.4977C25.5425 7.60433 23.1053 5.25 20.1086 5.25H9.66378ZM20.1086 25.8685H9.66378C5.66782 25.8685 2.4162 22.729 2.4162 18.8708V10.4977C2.4162 6.63833 5.66782 3.5 9.66378 3.5H20.1086C24.1046 3.5 27.355 6.63833 27.355 10.4977V18.8708C27.355 22.729 24.1046 25.8685 20.1086 25.8685Z" fill="white"/>
                                </g>
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.3273 10.5445H8.80347C8.30322 10.5445 7.89722 10.1525 7.89722 9.66946C7.89722 9.18646 8.30322 8.79446 8.80347 8.79446H15.3273C15.8275 8.79446 16.2335 9.18646 16.2335 9.66946C16.2335 10.1525 15.8275 10.5445 15.3273 10.5445Z" fill="white"/>
                                </a>
                            </svg>
                        </div>
                </section>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasRight"
                     aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header mt-4 mx-3">
                        <h5 className="offcanvas-title text-dark" id="offcanvasRightLabel">صفحات دیگر</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <hr style={{color: "#179E66"}}/>
                        <ul id="otherPages">
                            <li><a className="text-dark text-decoration-none fs-5" href="#">درباره ی ما</a></li>
                            <li className="mt-4"><a className="text-dark text-decoration-none fs-5" href="#">تماس با ما</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <main id="servicesMain" className="mt-4 mx-5">
                <header id="paymentServices" className="ms-2 fs-5 fw-bold">سرویس های پرداخت</header>
                <section className="row mt-4 text-center firstSection">
                    <div className="col-6 col-md-3 mb-4">
                        <NavLink className="text-decoration-none text-dark fw-bold">
                            <img src={ServicesA} className="img-fluid" alt="not found" />
                            <p>کارت به کارت</p>
                        </NavLink>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                        <NavLink className="text-decoration-none text-dark fw-bold">
                            <img src={ServicesB} className="img-fluid" alt="not found" />
                            <p>خرید شارز</p>
                        </NavLink>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                        <NavLink className="text-decoration-none text-dark fw-bold">
                            <img src={ServicesC} className="img-fluid" alt="not found" />
                            <p>پرداخت قبوض</p>
                        </NavLink>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                        <NavLink className="text-decoration-none text-dark fw-bold">
                            <img src={ServicesD} className="img-fluid" alt="not found" />
                            <p>افتتاح حساب</p>
                        </NavLink>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                        <NavLink className="text-decoration-none text-dark fw-bold">
                            <img src={ServicesE} className="img-fluid" alt="not found" />
                            <p>اعلام موجودی</p>
                        </NavLink>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                        <NavLink className="text-decoration-none text-dark fw-bold">
                            <img src={ServicesF} className="img-fluid" alt="not found" />
                            <p>سوابق تراکنش</p>
                        </NavLink>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                        <NavLink className="text-decoration-none text-dark fw-bold">
                            <img src={ServicesG} className="img-fluid" alt="not found" />
                            <p>بسته ی اینترنت</p>
                        </NavLink>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                        <NavLink className="text-decoration-none text-dark fw-bold">
                            <img src={ServicesH} className="img-fluid" alt="not found" />
                            <p>نیکوکاری</p>
                        </NavLink>
                    </div>
                </section>

                <section className="text-center mt-1 mb-3 secoundSection position-relative">
                    <img src={AirplaneTicket} style={{width: "80%"}} className="img-fluid" alt="not found"/>
                    <NavLink id="airplaneTicketlogIn">ورود</NavLink>
                </section>
            </main>

            <footer id="servicesFooter" className="text-white mt-4 pt-4">
                <header className="fs-5">دیگر سرویس ها</header>
                <div className="row text-center mt-4">
                <div className="col-6 col-md-3 mb-4">
                    <NavLink className="text-decoration-none fw-bold">
                        <img src={ServicesI} className="img-fluid" alt="not found" />
                        <p className="text-white mt-1">بانکداری باز</p>
                    </NavLink>
                </div>
                <div className="col-6 col-md-3 mb-4">
                    <NavLink className="text-decoration-none fw-bold">
                        <img src={ServicesJ} className="img-fluid" alt="not found" />
                        <p className="text-white mt-1">دولت الکترونیک</p>
                    </NavLink>
                </div>
                <div className="col-6 col-md-3 mb-4">
                    <NavLink className="text-decoration-none fw-bold" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom">
                        <img src={ServicesK} className="img-fluid" alt="not found" />
                        <p className="text-white mt-1">رزرواسیون</p>
                    </NavLink>
                </div>
                <div className="col-6 col-md-3 mb-4">
                    <NavLink className="text-decoration-none fw-bold">
                        <img src={ServicesL} className="img-fluid " alt="not found" />
                        <p className="text-white mt-1">احراز هویت</p>
                    </NavLink>
                </div>
                </div>

                <nav className="bg-white py-4 px-2 d-flex justify-content-center align-items-center flex-wrap">
                    <NavLink className="homeLink text-decoration-none text-center mt-2" style={{color: "gray"}}>
                        <HomeOutlinedIcon/>
                        <p style={{marginTop: "-7px"}}>صفحه اصلی</p>
                    </NavLink>
                    <NavLink className="servicesLink mt-2 text-decoration-none text-center" style={{color: "#4208bf", marginRight: "1.5rem"}}>
                        <GridViewRoundedIcon/>
                        <p style={{marginTop: "-11px"}}>سرویس ها</p>
                    </NavLink>
                    <span id="scan" className="ms-4 mt-2 d-inline-flex flex-column align-items-center">
                        <i style={{fontSize: "1.7em"}} className="bi bi-qr-code"></i>
                        <small className="mb-1">اسکن</small>
                    </span>
                    <NavLink  className="ms-4 linkChild text-decoration-none text-center" style={{color: "gray", marginTop: "-10px"}}>
                        <i className="bi bi-chat-dots"></i>
                        <p style={{marginTop: "-16px"}} className="fs-6">گفتگو</p>
                    </NavLink>
                    <NavLink to="/Services/Profile" className="ms-4 linkChild text-decoration-none text-center" style={{color: "gray", marginTop: "-10px"}}>
                        <i className="bi bi-person"></i>
                        <p style={{marginTop: "-18px"}} className="fs-6">پروفایل</p>
                    </NavLink>
                </nav>
            </footer>

            <div className="offcanvas offcanvas-bottom text-white" tabIndex="-1" id="offcanvasBottom"
                 aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">رزرواسیون</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body mt-4">
                    <div className="row text-center mt-3">
                        <div className="col-6 col-md-3 mb-4">
                            <NavLink className="text-decoration-none fw-bold">
                                <img src={ServicesM} className="img-fluid" alt="not found" />
                                <p className="text-white mt-1">رزرو هتل</p>
                            </NavLink>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <NavLink className="text-decoration-none fw-bold">
                                <img src={ServicesN} className="img-fluid" alt="not found" />
                                <p className="text-white mt-1">بلیط هواپیما</p>
                            </NavLink>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <NavLink className="text-decoration-none fw-bold" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom">
                                <img src={ServicesO} className="img-fluid" alt="not found" />
                                <p className="text-white mt-1">بلیط قطار</p>
                            </NavLink>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <NavLink className="text-decoration-none fw-bold">
                                <img src={ServicesP} className="img-fluid" alt="not found" />
                                <p className="text-white mt-1">بلیط سینما</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <Particle />
        </div>
    );
}

export default Services;