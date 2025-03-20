import '../../../style/aboutStyle/aboutHomeStyle.css';
import '../../../style/aboutStyle/aboutIcon.css';

const AboutIcon = () => {
    return(
        <>
            <div className="section reverse hero about-section-icon">
                <div className="heroBannerEx">
                    <div className="grid">
                        <div style={{color: 'transparent'}}>
                            <i class="fa-solid fa-laptop"></i>
                        </div>
                        <div style={{padding: '20px 0px 40px 0px', marginLeft: '-125px'}}>
                            <i class="fa-solid fa-laptop"></i>
                        </div>
                        <div style={{display: 'none'}}>
                            <i class="fa-solid fa-laptop"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutIcon;