import Navbar from './components/Navbar';
import BodySection from './components/bodySection';
import JustIcons from './components/iconContainer';
import DescriptionSection from './components/descriptionSection';
import BetweenSection from './components/betweenSection';
import WriterSection from './components/writerSection';
import HeisenSection from './components/heisenSection';
import MatchSection from './components/matchSection';
import TestimonySection from './components/testimonySection';
import PickSection from './components/pickSection';
import PodcastSection from './components/podcastSection';
import PenSection from './components/penSection';
import FooterSection from './components/footerSection';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AboutHome from './components/about/aboutHome';
import ProductPage from './components/reduxPart/productComponent/productPage';
import ApiHome from './components/sampleApi/ApiHome';
import ContactHome from './components/contact/contactHome';
import { useEffect } from 'react';


const Home = () => {
    // const location = useLocation();

    // useEffect(() => {
    //     window.scrollTo(0, 0); 
    // }, [location.pathname]); 
    return(
        <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={'/about'} element={<AboutHome />} />
                <Route path={'/redux'} element={<ProductPage />} />
                <Route path={'/API'} element={<ApiHome />} />
                <Route path={'/contact'} element={<ContactHome />} />
                <Route path={'/'} element={
                    <>
                        <BodySection />
                        <JustIcons />
                        <DescriptionSection />
                        <BetweenSection />
                        <WriterSection />
                        <HeisenSection />
                        <MatchSection />
                        <TestimonySection />
                        <PickSection />
                        <PodcastSection />
                        <PenSection />
                    </>
                } />
            </Routes>
            <FooterSection />

        </BrowserRouter>
            
        </>
    );
};

export default Home;