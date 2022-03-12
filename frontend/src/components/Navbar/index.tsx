import { ReactComponent as GithubIcon } from 'assets/img/github.svg'; // importando icone do github
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>VMovie</h1>
                    <a href="https://github.com/Vog10">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/Vog10</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );

}

export default Navbar;