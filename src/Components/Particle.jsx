import {particleBackround} from "../Constants/particles.js";
import {useCallback} from "react";
import {loadFull} from "tsparticles";
import Particles from "react-particles";

const Particle = () => {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);

    return (
        <Particles
           id="tsparticels"
           init={particlesInit}
           loaded={particlesLoaded}
           options={particleBackround} />
    );
}

export default Particle;