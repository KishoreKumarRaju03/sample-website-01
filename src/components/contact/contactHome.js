import '../../style/contact/contactHome.css';
import ContactSectionOne from './contactComponent/conatctSectionOne';
import ContactBetweenSection from './contactComponent/contactBetweem';
import ContactIcon from './contactComponent/contactIcon';
import ContactPen from './contactComponent/contactPen';


const ContactHome = () => {
    return(
        <>
            <ContactSectionOne />
            <ContactBetweenSection />
            <ContactIcon />
            <ContactPen />
        </>
    );
};

export default ContactHome;