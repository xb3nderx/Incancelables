import Footer from "../components/Footer";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import "../styles/Inicio.css";

function Home() {
  return (
    <div className="inicio">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default Home;
