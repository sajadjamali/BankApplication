import { useRouteError } from "react-router-dom";
import Particle from "./Particle.jsx";

function ErrorPage() {
    const error = useRouteError();
    // console.error(error);
    return (
        <div style={{display: "flex", flexDirection: "column",
            justifyContent: "center", width: "100%", height: "100vh",
            textAlign: "center", color: "white"}} >
            <div dir="ltr" id="error-page">
                <h1>Oops!</h1>
                <p style={{fontSize: "1.5em"}}>Sorry, an unexpected error has occurred.😭😭😭</p>
            </div>
            <Particle />
        </div>

    );
}

export default ErrorPage;