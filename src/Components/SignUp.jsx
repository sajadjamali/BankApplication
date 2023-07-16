import Particle from "./Particle.jsx";
import '../css/SignUp.css'
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import '../assets/bootstrap-icons/font/bootstrap-icons.css'
function SignUp() {

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
        <div className="signUp col-9 col-sm-7 col-md-5 col-xl-4 col-xxl-3 mt-4">

            <header style={{position: "relative"}}>
                <div style={{height: "100px", overflow: "hidden"}}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                            <path d="M-0.27,-0.48 C135.15,187.00 270.03,-22.20 505.92,147.52 L500.00,0.00 L-0.27,-1.47 Z" style={{stroke: "none", fill: "rgba(67,10,225,0.1)"}}></path>
                        </svg>
                </div>
                <i style={{color: "gray", position: "absolute", top: "5px", right: "35px"}} className="bi bi-battery-full fs-2"></i>
                <i style={{color: "gray", position: "absolute", top: "2px", right: "70px"}} className="bi bi-wifi-2 fs-2"></i>
                <i  style={{color: "gray", position: "absolute", top: "6px", right: "105px"}} className="bi bi-reception-4 fs-3"></i>
                <span style={{color: "gray", top: "20px", left: "15px"}} className="position-absolute fs-4 fw-bold">
                    {date.getHours()}:{date.getMinutes()}
                </span>
            </header>


            <nav className="links" style={{marginTop: "-20px"}}>
                <NavLink className="d-flex justify-content-center align-items-center link LoginLink1" to="/">
                    <span style={{marginBottom: "7px",color: "#7c7979", fontSize: "1em"}} className="ms-1">ورود</span>
                </NavLink>

                <NavLink className="d-flex justify-content-center align-items-center link SignUpLink1" to="SignUp">
                    <i className="bi bi-lock me-2"></i>
                    <span id="SignUpText" style={{fontSize: "0.8em"}}>ثبت نام</span>
                </NavLink>
            </nav>

            <main>
                <form action="#" id="SignUpForm" className="mt-3">
                    <header>
                         <i style={{color: "#6D47D3"}} className="bi bi-lock"></i>
                         <span style={{color: "#6D47D3"}}>ثبت نام</span>
                        <p className="mt-2" style={{color: "#808285"}}>برای ثبت نام فیلدهای مورد نیاز را پر کنید</p>
                    </header>
                        <div>
                            <label htmlFor="MobileNumber" className="form-label mb-2">کد ملی</label>
                            <input type="text" className="form-control shadow-none" id="MobileNumber" />
                        </div>
                        <div  className="mt-2">
                            <label htmlFor="MobileNumber" className="form-label mb-2">شماره موبایل</label>
                            <input type="text" className="form-control shadow-none" id="MobileNumber" />
                        </div>
                        <div  className="mt-2">
                            <label htmlFor="MobileNumber" className="form-label mb-2">نام</label>
                            <input type="text" className="form-control shadow-none" id="MobileNumber" />
                        </div>
                        <div  className="mt-2">
                            <label htmlFor="MobileNumber" className="form-label mb-2">نام خانوادگی</label>
                            <input type="text" className="form-control shadow-none" id="MobileNumber" />
                        </div>
                        <div className="mt-2">
                            <label htmlFor="MobileNumber" className="form-label mb-2">نام کاربری</label>
                            <input type="text" className="form-control shadow-none" id="MobileNumber" />
                        </div>

                        <div className="mt-2">
                            <div className="passwordInput1">
                                <label htmlFor="password" className="form-label mb-2">رمز عبور</label>
                                <input dir="rtl" className="form-control shadow-none" id="password" type={showPassword ? 'text' : 'password'} />
                                <button onClick={handleClickShowPassword} style={{backgroundColor: "white",
                                    border: "none", cursor: "pointer"}}>
                                    {showPassword ? <i className="bi bi-eye fs-4 icon"></i> : <i className="bi bi-eye-slash fs-4 icon"></i>}
                                </button>
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="passwordInput1">
                                <label htmlFor="password" className="form-label mb-2">تکرار رمز عبور</label>
                                <input dir="rtl" className="form-control shadow-none" id="password" type={showPassword ? 'text' : 'password'} />
                                <button onClick={handleClickShowPassword} style={{backgroundColor: "white",
                                    border: "none", cursor: "pointer"}}>
                                    {showPassword ? <i className="bi bi-eye fs-4 icon"></i> : <i className="bi bi-eye-slash fs-4 icon"></i>}
                                </button>
                            </div>
                        </div>
                        <NavLink to="/SignUp/SendCode" className="mt-5 mb-4" id="sendCode">ارسال کد یه بار مصرف</NavLink>
                </form>
            </main>

            <footer>
                <div style={{height: "120px", overflow: "hidden"}}>
                    {/*svg genetator css by  https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections*/}
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-0.84,0.48 C173.53,220.55 347.91,-33.05 504.22,151.47 L273.42,181.08 L0.00,150.00 Z" style={{stroke: "none", fill: "rgba(67,10,225,0.1)"}}></path>
                    </svg>
                </div>
            </footer>

            <Particle />
        </div>
    )
}

export default SignUp;