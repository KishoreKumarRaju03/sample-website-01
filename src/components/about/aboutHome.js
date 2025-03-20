import AboutIcon from "./aboutComponent/aboutIcon";
import AboutPen from "./aboutComponent/aboutPen";
import AboutRedo from "./aboutComponent/aboutRedo";
import AboutSectionOne from "./aboutComponent/aboutSectionOne";
import AboutTestimony from "./aboutComponent/aboutTestimont";
import '../../style/aboutStyle/aboutHomeStyle.css';



const AboutHome = () => {
    return(
        <>
            <AboutSectionOne />
            <AboutIcon />
            <AboutRedo />
            <AboutTestimony />
            <AboutPen />
        </>
    );
};

export default AboutHome;