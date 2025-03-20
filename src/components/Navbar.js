
import { Link } from 'react-router-dom';
import '../style/navbarStyle.css';

const Navbar = () => {
    return(
        <>
            <div className="bannerHeader">
                <navbar className="headerSection">
                    <div className="headerLogo">
                        <Link to={'/'}>
                            <span>
                            █▄▀ █ █▀ █░█ █▀█ █▀█ █▀▀
                            
                            </span>
                            <span>
                            █░█ █ ▄█ █▀█ █▄█ █▀▄ ██▄
                            </span>
                        </Link>
                    </div>
                    <div className="headerNav">
                        <div className='headernav-Nav'>
                            <Link to={'/'}>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to={'/redux'}>Redux</Link>
                            <Link to={'/API'}>API</Link>
                            <Link to={'/contact'}>Contact</Link>
                        </div>
                    </div>
                </navbar>
            </div>

        
        </>
    )
}

export default Navbar;