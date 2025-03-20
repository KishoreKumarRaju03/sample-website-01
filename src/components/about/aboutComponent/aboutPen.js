import '../../../style/aboutStyle/aboutHomeStyle.css';
import '../../../style/aboutStyle/aboutPen.css';
import PenImg from '../../../asset/pen-footer.png';


const AboutPen = () => {
    return(
        <>
            <div className="aboutPen">   
                <div>
                    <img src={PenImg} />
                </div>
                <div>
                    <p>LET'S WRITE IT<br></br> RIGHT</p>
                    <p>Count On It.</p>
                </div>
            </div>
        </>
    );
};

export default AboutPen;