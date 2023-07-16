import Particle from "./Particle.jsx";
import '../css/SendCode.css'
import {useEffect, useState} from "react";

const SendCode = () => {

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
        <div className="login col-10 col-sm-8 col-md-6 col-xl-4 mt-5">

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

            <main>

                <div style={{marginRight: "2em", marginLeft: "2em"}}>
                    <i style={{color: "#6D47D3"}} className="bi bi-lock fs-4"></i>
                    <span style={{color: "#6D47D3", marginRight: "10px"}}>ارسال کد یکبار مصرف</span>
                    <p style={{fontWeight: "bold", color: "gray"}} className="mt-5 textCode">
                        کد ارسال شده به شماره موبایل 091212345698
                        را وارد نمایید
                    </p>
                </div>

                <form className="mt-4" id="sendCodeForm" style={{textAlign: "center"}} action="#">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>

                        <div className="mt-4 mb-5 codeValidity mx-5" style={{color: "#6D47D3", display: "flex", justifyContent: "space-between"}}>
                            <p>اعتبار باقیمانده کد ارسال شده</p>
                            <span>01:59</span>
                        </div>
                        <a style={{textDecoration: "none"}} className="resend mx-5 d-flex mb-5" href="#">ارسال مجدد کد</a>
                    <button style={{width: "84%", margin: "auto"}} type="submit" id="submitBtn">ثبت نام</button>
                </form>
            </main>

            <footer>
                <div style={{height: "155px", overflow: "hidden"}}>
                    {/*svg genetator css by  https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections*/}
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-0.84,0.48 C173.53,220.55 347.91,-33.05 504.22,151.47 L273.42,181.08 L0.00,150.00 Z" style={{stroke: "none", fill: "rgba(67,10,225,0.1)"}}></path>
                    </svg>
                </div>
            </footer>


           <Particle />
        </div>

    );
}

export default SendCode;