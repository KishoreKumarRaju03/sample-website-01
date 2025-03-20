import { Link } from 'react-router-dom';
import '../style/footerSection.css';


const FooterSection = () => {
    const handleClick = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    };
    return(
        <>
            <div>
                <div className='footer-section footer-reverse footer footerCustomWidth'>
                    <div>
                        <div>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col'>
                                        <h4>Services</h4>
                                        <ul>
                                            
                                            <li><Link to={'/about'} onClick={handleClick}>website designing</Link></li>
                                            <li><Link to={'/about'} onClick={handleClick}>Logo desigining</Link></li>
                                            <li><Link to={'/about'} onClick={handleClick}>coding Support</Link></li>
                                            <li><Link to={'/about'} onClick={handleClick}>Tech assist</Link></li>
                                            <li><Link to={'/about'} onClick={handleClick}>Mobile Application</Link></li>
                                            <li><Link to={'/about'} onClick={handleClick}>Portfolio Designs</Link></li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h4>other</h4>
                                        {/* <ul className='non-clcikable-list'>
                                            <li><a href='#'>Assembled Desktop</a></li>
                                            <li><a href='#'>Hardware Replace</a></li>
                                            <li><a href='#'>prefessional setup</a></li>
                                        </ul> */}
                                        <ul>
                                            <li className="non-clickable-item"><a>Assembled Desktop</a></li>
                                            <li className="non-clickable-item"><a>Hardware Replace</a></li>
                                            <li className="non-clickable-item"><a>prefessional setup</a></li>
                                        </ul>
                                    </div>
                                    <div className='col'>
                                        <h4>Heisenberg</h4>
                                        <ul>
                                            <li><Link to={'/about'} onClick={handleClick}>Mr.Highness</Link></li>
                                            <li><Link to={'/about'} onClick={handleClick}>About</Link></li>
                                            <li><Link to={'/redux'} onClick={handleClick}>Redux</Link></li>
                                            <li><Link to={'/API'} onClick={handleClick}>API</Link></li>
                                            <li><Link to={'/contact'} onClick={handleClick}>Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr className='hr1'></hr>
                            <div className="grid final" style={{gridTemplateColumns: '34% auto'}}>
                                <div className="flexCol">
                                <div className="headerLogo">
                                    <a href="#">
                                        <span>
                                        █▄▀ █ █▀ █░█ █▀█ █▀█ █▀▀
                                        
                                        </span>
                                        <span>
                                        █░█ █ ▄█ █▀█ █▄█ █▀▄ ██▄
                                        </span>
                                    </a>
                                </div>
                                </div>
                                <div className="flexCol">
                                    <p>Most leaders struggle talking about their business in a way that interests others. I help them get (even more) clear about their business.</p>
                                </div>
                            </div>
                            <hr className='hr2'></hr>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterSection;