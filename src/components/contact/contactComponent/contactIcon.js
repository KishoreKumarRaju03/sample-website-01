// import '../../../style/contact/contactHome.css';
// import '../../../style/contact/contactIcon.css';

// const ContactIcon = () => {
//     return(
//         <>
//             <div className='section reverse hero contact-icon-section'>
//                 <div className='heroBannerEx'>
//                     <div className='grid'>
//                         <div>
//                             <a href="https://wa.me/971504381363" style={{color: '#cd8170', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
//                                 <i className="fa-solid fa-mobile"></i>
//                                 <p>Phone</p>
//                             </a>
//                         </div>
//                         <div>
//                             {/* <i class="fa-solid fa-envelope"></i>
//                             <p>E-mail</p> */}
//                             <a href="mailto:catchmrkish@gmail.com">Send Email</a>
//                             <a href="mailto:catchmrkish@gmail.com" style={{color: '#cd8170', textDecoration: 'none'}}>
//                                 <i className="fa-solid fa-envelope"></i>
//                                 <p>E-mail</p>
//                             </a>
                            
//                         </div>
//                         <div>
//                             <i class="fa-brands fa-linkedin"></i>
//                             <p>linkedin</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ContactIcon;

import '../../../style/contact/contactHome.css';
import '../../../style/contact/contactIcon.css';

const ContactIcon = () => {
    return (
        <>
            <div className='section reverse hero contact-icon-section'>
                <div className='heroBannerEx'>
                    <div className='grid'>
                        <div>
                            <a href="https://wa.me/971504381363" style={{ color: 'rgb(224 177 255)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-mobile"></i>
                                <p>Phone</p>
                            </a>
                        </div>
                        <div className="tooltip">
                            <a href="mailto:catchmrkish@gmail.com" style={{ color: 'rgb(77 255 193)', textDecoration: 'none' }}>
                                <i className="fa-solid fa-envelope"></i>
                                <p>E-mail</p>
                            </a>
                            <span className="tooltiptext">catchmrkish@gmail.com</span>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/kishore-kumar-60372817a/" style={{ color: 'rgb(99 160 255)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                                <p>LinkedIn</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactIcon;