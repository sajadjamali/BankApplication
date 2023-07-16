import Particle from "./Particle.jsx";

const LoginA = new URL('./../assets/imgs/Login/LoginA.PNG', import.meta.url);
const LoginB = new URL('./../assets/imgs/Login/LoginB.PNG', import.meta.url);
import '../assets/bootstrap-icons/font/bootstrap-icons.css'
import '../css/Login.css'
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import particle from "./Particle.jsx";

function Login() {

    const [date, setDate] = useState(new Date());
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

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
        <div className="login col-9 col-sm-7 col-md-5 col-xl-4 col-xxl-3 mt-5">

           <header className="position-relative">
                <span className="text-white position-absolute clock">
                    {date.getHours()}:{date.getMinutes()}
                </span>

               {/*carousel without Autoplaying ↓ */}

                {/*<div id="carouselExampleCaptions" className="carousel slide">*/}
                {/*    <div className="carousel-indicators">*/}
                {/*        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>*/}
                {/*        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"*/}
                {/*                aria-current="true" aria-label="Slide 1"></button>*/}
                {/*    </div>*/}
                {/*    <div className="carousel-inner">*/}
                {/*        <div className="carousel-item active">*/}
                {/*            <img src={LoginA} height="170px" className="d-block w-100" alt="not found"/>*/}
                {/*        </div>*/}
                {/*        <div className="carousel-item">*/}
                {/*            <img src={LoginB} height="170px" className="d-block w-100" alt="not found"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


               {/*carousel wit Autoplaying*/}
               <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                   <div className="carousel-inner">
                       <div className="carousel-item active">
                           <img src={LoginA} height="170px" className="d-block w-100" alt="not found"/>
                       </div>
                       <div className="carousel-item">
                           <img src={LoginB} height="170px" className="d-block w-100" alt="not found"/>
                       </div>
                   </div>
                       <div className="carousel-indicators">
                           <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                           <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                       </div>
               </div>
            </header>

            <main>
            <nav className="links mt-3">
                <NavLink className="d-flex justify-content-center align-items-center link LoginLink" to="/">
                    <i className="bi bi-person"></i>
                    <span style={{marginBottom: "5px", fontSize: "0.9em"}} className="ms-1">ورود</span>
                </NavLink>

                <NavLink className="d-flex justify-content-center align-items-center link SignUpLink" to="/SignUp">
                    <span id="SignUpText" style={{color: "#7c7979", fontSize: "0.9em"}}>ثبت نام</span>
                </NavLink>
            </nav>

            <div className="mt-3 box" style={{marginRight: "3em", marginLeft: "2em"}}>
                <div className="d-flex align-items-center PersonIcon">
                    <i style={{color: "#7851e3", fontSize: "23px"}} className="bi bi-person"></i>
                    <span style={{color: "#7851e3", fontSize: "17px", marginRight: "0.3em", marginBottom: "0.3em"}}>ورود</span>
                </div>
                <p id="loginText" className="mt-2" style={{fontSize: "0.75em", color: "#8a8888"}}>برای ورود به حساب کاربری کد ملی و رمز عبور خود را وارد نمایید</p>
            </div>

                <form className="mt-4" id="LoginForm" action="#">
                    <div>
                        <label htmlFor="MobileNumber" className="form-label mb-3">شماره موبایل</label>
                        <input type="text" className="form-control shadow-none" id="MobileNumber" />
                    </div>

                <div className="mt-2">
                    <div className="passwordInput">
                        <label htmlFor="password" className="form-label mb-3">رمز عبور</label>
                        <input dir="rtl" className="form-control shadow-none" id="password" type={showPassword ? 'text' : 'password'} />
                        <button onClick={handleClickShowPassword} style={{backgroundColor: "white",
                            border: "none", cursor: "pointer"}}>
                            {showPassword ? <i className="bi bi-eye fs-4 icon"></i> : <i className="bi bi-eye-slash fs-4 icon"></i>}
                        </button>
                    </div>
                </div>

                    <NavLink to="/Services" id="submitBtn" className="mt-4 mb-2">ورود</NavLink>
                    <a href="#" style={{textDecoration: "none", fontSize: "0.9em"}}>رمز عبور خور را فرامرش کردید؟</a>
                </form>
            </main>

            <footer>
                <div style={{height: "60px", overflow: "hidden"}}>
                  {/*svg genetator css by  https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections*/}
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-0.84,0.48 C173.53,220.55 347.91,-33.05 504.22,151.47 L273.42,181.08 L0.00,150.00 Z" style={{stroke: "none", fill: "rgba(67,10,225,0.1)"}}></path>
                    </svg>
                </div>
            </footer>

            <Particle/>
        </div>
    );
}

export default Login;