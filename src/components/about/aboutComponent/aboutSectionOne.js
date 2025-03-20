import '../../../style/aboutStyle/aboutHomeStyle.css';
import '../../../style/aboutStyle/aboutSectionOne.css';
import heisen from '../../../asset/heisen.png';


const AboutSectionOne = () => {
    return(
        <>
            <div className="section opening about-one">
                <div>
                    <p><b>ABOUT HEISENBERG</b></p>
                    <h1>I started as AR Caller after college</h1>
                    <h2>Then into computers. </h2>
                    <p>Then became a software developer. Then a software architect. Then a process improvement consultant. Then...</p>
                    <img src={heisen} style={{width: '50%', marginTop: '-50px', marginBottom: '-40px', marginRight: '0'}}/>
                </div>
            </div>
        </>
    );
};

export default AboutSectionOne;