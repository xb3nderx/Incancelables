import incanHero from '../assets/incan_hero_2.png';
import incanLogo from '../assets/incan_logo.svg';
import "../styles/Inicio.css";

function Header() {  
    return ( 
        <header className='header'>  
            <img className='incanHero'
                src={incanHero} 
                alt="Logo" 
            />
            <img className='incanLogo'
                src={incanLogo} 
                alt="Logo" 
            />
        </header>  
    );  
}  


export default Header;