import '../../../style/contact/contactPen.css';
import PenImg from '../../../asset/pen-footer.png';


const ContactPen = () => {
    return(
        <>
            {/* <div className="footer-line-section footer-line">
                
            </div> */}
            <div className="footerPen">   
                <div>
                    <img src={PenImg} />
                </div>
                <div style={{fontFamily: 'fantasy', letterSpacing: '15px'}}>
                    <p style={{lineHeight: '62px'}}>Your<br></br> Website<br></br> Developer.</p>
                    <p>Available 24/7.</p>
                </div>
            </div>
        </>
    );
};

export default ContactPen;