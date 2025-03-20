import '../style/penSection.css';
import PenImg from '../asset/pen-footer.png';


const PenSection = () => {
    return(
        <>
            {/* <div className="footer-line-section footer-line">
                
            </div> */}
            <div className="footerPen">   
                <div>
                    <img src={PenImg} />
                </div>
                <div>
                    <p>LIFE'S TOO SHORT<br></br> TO STATE THINGS<br></br> POORLY.</p>
                    <p>So let's not.</p>
                </div>
            </div>
        </>
    );
};

export default PenSection;