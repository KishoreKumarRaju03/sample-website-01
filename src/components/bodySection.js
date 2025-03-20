// import brickwall from '../asset/primary-section/background-brickwall.webp';
// import mightyHand from '../asset/mighty-hand.png';
// import '../style/bodySection.css';
// import { useEffect, useState } from 'react';


// const BodySection = () => {

//     const [showPopup, setShowPopup] = useState(true);

//     const traverseToPick = () => {
//     }

//     const closePopup = () => {
//         setShowPopup(false);
//     }

//     useEffect(() => {
//         const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//         const isSmallScreen = window.innerWidth <= 900;
//         if (isMobile && isSmallScreen) {
//             setShowPopup(true);
//         } else {
//             setShowPopup(false);
//         }
//     }, []);




//     return(
//         <>
//             <div className="sectionParent">
//                 <div className="section opening withBackgroundImg" style={{backgroundColor: '#edd392', backgroundImage: `url(${brickwall})`}}>
//                     <div className='bodySection-container'>
//                         <div className='content-1'>
//                             <h1 style={{fontSize: '5.01rem'}}>
//                                 <span style={{color: '#cd8170'}}>I Build Things For The Web...</span>
//                                 <br></br>
//                                 <span style={{color: '#4697bd'}}>Strat Persuading</span>
//                             </h1>
//                             <h2 style={{lineHeight: '1.5', fontFamily: 'monospace'}}>
//                             Grow online with a website that works <br></br>"as hard as you do!"
//                             </h2>
//                             <a href='/' className='serviceButton' onClick={traverseToPick}>PICK A SERVICE</a>
//                             <img src={mightyHand} className='mightyHand' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {showPopup && (
//                 <div className="popup-overlay">
//                     <div className="popup-content">
//                         <span className="close-popup" onClick={closePopup}>&times;</span>
//                         <p>This website is optimized for desktop and laptop use only. Please switch to a larger screen (min 900px) for the best experience.<br></br>
//                         Or <br></br>
//                         change your chrome setting to view on desktop site</p>
//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }

// export default BodySection;


import brickwall from '../asset/primary-section/background-brickwall.webp';
import mightyHand from '../asset/mighty-hand.png';
import '../style/bodySection.css';
import { useEffect, useState } from 'react';

const BodySection = () => {
    const [showPopup, setShowPopup] = useState(true);

    const traverseToPick = () => {
    }

    const closePopup = () => {
        setShowPopup(false);
    }

    useEffect(() => {
        const checkScreenSize = () => {
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const isSmallScreen = window.innerWidth <= 900;

            if (isMobile && isSmallScreen) {
                setShowPopup(true);
            } else {
                setShowPopup(false);
            }
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <>
            <div className="sectionParent">
                <div className="section opening withBackgroundImg" style={{ backgroundColor: '#edd392', backgroundImage: `url(${brickwall})` }}>
                    <div className='bodySection-container'>
                        <div className='content-1'>
                            <h1 style={{ fontSize: '5.01rem' }}>
                                <span style={{ color: '#cd8170' }}>I Build Things For The Web...</span>
                                <br></br>
                                <span style={{ color: '#4697bd' }}>Start Persuading</span>
                            </h1>
                            <h2 style={{ lineHeight: '1.5', fontFamily: 'monospace' }}>
                                Grow online with a website that works <br></br>"as hard as you do!"
                            </h2>
                            <a href='/' className='serviceButton' onClick={traverseToPick}>PICK A SERVICE</a>
                            <img src={mightyHand} className='mightyHand' alt="Mighty Hand" />
                        </div>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <span className="close-popup" onClick={closePopup}>&times;</span>
                        <p>This website is optimized for desktop and laptop use only. Please switch to a larger screen (min 900px) for the best experience.<br></br>
                        Or <br></br>
                        change your Chrome settings to view the desktop site.</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default BodySection;