import whatsLogo from '../assets/WhatsApp.svg'
import whatsQR from '../assets/WhatsQR.svg'

function Contacto() {
  return (
    <div>
        <p style={{
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    padding: "3rem", 
                    fontSize: "1.5rem"
                    }}>
            Podés seguirnos en nuestro{" "}
        <a 
            href="https://whatsapp.com/channel/0029VbAzdq8CBtxAI4YGe426" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
            color: "#25D366",          // verde típico de WhatsApp
            fontWeight: "bold",        // fuente más gruesa
            textDecoration: "none",     // sin subrayado
            paddingRight: ".5rem", 
            paddingLeft: ".5rem", 
            }}
        >
            canal de WhatsApp
        </a> 
        <img 
            src={whatsLogo} 
            alt="whatsApp logo" 
            style={{
                width: "2rem", 
                heght: "2rem"
                
            }}
        
        />
        </p>
        <img 
            src={whatsQR} 
            alt="whatsApp QR" 
            style={{
                width: "10rem", 
                heght: "10rem",     
                mixBlendMode: "multiply"
            }}
        />  
    </div>

  );
}

export default Contacto;