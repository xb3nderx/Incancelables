import incanHero from '../assets/incan_hero_2.png';
import incanLogo from '../assets/incan_logo.svg';

function Header() {  
    return ( 
        <header style={{ 
            backgroundColor: "#51567D", 
            // padding: "0 0 2px 0", 
            
            textAlign: "center", 
            color: "white",
            position: 'relative', // importante para posicionar el logo absoluto dentro
            width: '100%',
            maxWidth: '100%',
        }}>  
            <img 
                src={incanHero} 
                alt="Logo" 
                style={{width: '100%', height: 'auto', display: 'block', opacity: 0.59,
                        mixBlendMode: 'luminosity'}} 
            />
             
    
            <img 
                src={incanLogo} 
                alt="Logo" 
                style={{
                    position: 'absolute',
                    top: '90%',   // ajusta para mover verticalmente
                    left: '50%',  // ajusta para centrar horizontalmente
                    transform: 'translate(-50%, -50%)',
                    height: '10rem',
                    width: 'auto',
                    pointerEvents: 'none', // opcional, para que clics pasen a la imagen de abajo
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))', 
                }} 
            />
        </header>  
    );  
}  


export default Header;