import { Link } from 'react-router-dom'

import '../Header/header.scss';
import Account from '../../components/Account/Account';
import Logo from '../../assets/argentBankLogo.png';

function Header() {
    return (
        <header>
            <nav className='cont-nav'>
                <Link to="/">
                    <img className='logo-header' alt='logo argent Bank' src={Logo} />
                </Link>

                <Account />
            </nav>
        </header>
    )
}

export default Header