import incanHero from '../assets/incan_hero_2.png';
import incanLogo from '../assets/incan_logo.svg';

function Header() {  
    
    return ( 
        <header style={{ backgroundColor: "#e07e0ee6", padding: "0px 0px 2px 0px", textAlign: "center", color: "white" }}>  
            
            <img src={incanHero} alt="Logo" style={{width: '100%', height: 'auto'}}/>
            <img src={incanLogo} alt="Logo" style={{width: 'auto', height: '10rem'}}/>
            
        </header>  
    );  
}  

export default Header;